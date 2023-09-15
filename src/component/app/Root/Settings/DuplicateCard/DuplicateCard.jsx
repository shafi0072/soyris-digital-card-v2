import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

const DuplicateCard = () => {
    const [isModalOpen,setIsModalOpen] = useState(false);
    return (
        <div className='my-8'>
            <h2 className='text-lg font-semibold'>Duplicate Card</h2>
            <p className='mt-2 text-md'>If you duplicate your digital business card, all the information will transferred to a new card.</p>
            <button onClick={()=>setIsModalOpen(true)} className='rounded mt-5 text-[#FF0000] px-4 py-1 border-[1px] border-[#FF0100]'>DUPLICATE CARD</button>
            {
                isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>
            }
        </div>
    );
};

export default DuplicateCard;