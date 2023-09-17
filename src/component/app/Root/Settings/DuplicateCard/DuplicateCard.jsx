import React, { useContext } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { userContext } from '@/src/Storage/ContextApi';
import { baseUrl } from '@/src/config/Server';
import Swal from 'sweetalert2';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};
const DuplicateCard = () => {
    const { userCardData } = useContext(userContext);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [cardName, setCardName] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        fetch(`${baseUrl}/cards/duplicateCard`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userCardData?.email,
                cardUserId: userCardData?.cardUserId,
                profileInfo: userCardData?.profileInfo,
                display: userCardData?.display,
                fields: userCardData?.fields,
                QrCode: userCardData?.QrCode,
                setting: {
                    cardName: cardName,
                    url: userCardData?.setting?.url + Math.floor(Math.random() * 100),
                    cardStatus: userCardData?.setting?.cardStatus, 
                }
            })
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            setCardName('')
            handleClose()
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Card duplicated Successfully!!',
                showConfirmButton: false,
                timer: 500
              })
            
        })
        .catch(err=> console.log(err.message));

    }
    return (
        <div className='my-8'>
            <h2 className='text-lg font-semibold'>Duplicate Card</h2>
            <p className='mt-2 text-md'>If you duplicate your digital business card, all the information will transferred to a new card.</p>
            <button onClick={handleOpen} className='rounded mt-5 text-[#FF0000] px-4 py-1 border-[1px] border-[#FF0100]'>DUPLICATE CARD</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Please add your card data
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit}>
                            <input
                                value={cardName}
                                type="text"
                                className="px-2 py-1 shadow-lg rounded w-[80%] font-medium"
                                placeholder="card name"
                                onChange={e => setCardName(e.target.value)}
                                required

                            />
                            <div className='flex mt-5 gap-2'>
                                <button onClick={handleClose} className='border-2 px-3 py-1 border-black rounded'>Cancel</button>
                                <button type='submit' className=' bg-[black] text-white px-3 py-1 rounded text-sm cursor-pointer'>Save</button>

                            </div>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default DuplicateCard;