import React from 'react';

const AppleCard = ({appleCardBackgroundColor,appleCardTextColor}) => {
    return (
        <div className='bg-[#F7FAFC]  p-12 rounded shadow-md'>
           <div style={{backgroundColor:appleCardBackgroundColor,color:appleCardTextColor}} className=' w-[350px]  rounded'>
            <div className='px-2 py-4'>
                <h3 className='text-xl font-semibold'>Company name</h3>
                <div className='mt-6 flex justify-between'>
                    <div>
                    <p>Designation</p>
                    <h2 className='text-3xl font-semibold'>Nancy Nancy</h2>
                    </div>
                    <div className='w-24 '>
                        <img className='rounded' src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="" />
                    </div>
                </div>
                <div className='mt-16'>
                <p className='text-xl font-semibold'>Email</p>
                <p className='text-xl'>nancy@gmail.com</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default AppleCard;