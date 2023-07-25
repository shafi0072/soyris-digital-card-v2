import React from 'react';

const DeleteCard = () => {
    return (
        <div className='my-8'>
            <h2 className='text-lg font-semibold'>Delete Card</h2>
            <p className='mt-2 text-md'>If you delete your digital business card, all the information will not be recoverable.</p>
            <button className='rounded mt-5 text-[#FF0000] px-4 py-1 border-[1px] border-[#FF0100]'>DELETE CARD</button>
        </div>
    );
};

export default DeleteCard;