import React from 'react';

const Flat = ({ color, profileImage, logoImage }) => {
  return (
    <div className='bg-white mx-4' >
      <div className=' w-[100%] h-[300px]  relative ' >
        {profileImage ? <img className='h-[100%] w-full object-cover rounded-t-2xl' src={profileImage ? profileImage : ""} alt="" />: <div className='w-[100%]  h-[300px]'  style={{background:color}}></div>}
        <div className='absolute top-[95%] h-5 w-full rounded-b-md' style={{borderBottom: `10px solid ${color}` }}></div>
      </div>
      <div className='w-[90%] mt-5'>
        {logoImage && <img className=' w-3/4 object-cover rounded' src={logoImage ? logoImage : ""} alt="" />}
      </div>

    </div>
  );
};

export default Flat;