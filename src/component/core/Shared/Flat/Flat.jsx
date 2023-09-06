import React from 'react';

const Flat = ({ color, profileImage, logoImage }) => {
  return (
    <div className='bg-white mx-4' >
      <div className=' w-[100%] h-[300px]  relative ' style={{borderBottom:`10px solid ${color}`}}>
        {profileImage && <img className='h-[100%] w-full object-cover rounded-2xl' src={profileImage ? profileImage : ""} alt="" />}

      </div>
      <div className='w-[90%] mt-5'>
        {logoImage && <img className=' w-3/4 object-cover rounded' src={logoImage ? logoImage : ""} alt="" />}
      </div>

    </div>
  );
};

export default Flat;