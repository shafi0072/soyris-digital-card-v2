import React from 'react';

const GoogleCard = ({googleCardBackgroundColor}) => {
    return (
        <div className='bg-[#F7FAFC]  p-12 rounded shadow-md'>
            <div style={{backgroundColor:googleCardBackgroundColor}} className={` w-[350px] text-white rounded p-4`}>
                <div className='flex flex-col items-center justify-center'>
                    <img className='rounded-full w-32' src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp" alt="" />
                    <h2 className='text-2xl font-semibold mt-2'>Nancy Nancy</h2>
                </div>
                <div className='mt-12'>
                    <p className='text-xl font-semibold'>Email</p>
                    <p className='text-xl'>nancy@gmail.com</p>
                </div>
                <div className='mt-8'>
                    <p className='text-xl font-semibold'>Phone number</p>
                    <p className='text-xl'>+1545845424</p>
                </div>
            </div>
        </div>
    );
};

export default GoogleCard;