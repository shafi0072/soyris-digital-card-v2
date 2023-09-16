import React from 'react';

const Flat = ({ color, profileImage, logoImage }) => {
  // console.log({logoImage});
  return (
    <div className='bg-white mx-4' >
      <div className=' w-[100%]  relative border-b-[12px] rounded-md ' style={{borderColor: color}}>
        {profileImage ? <img className=' object-cover rounded-t-2xl' src={profileImage ? profileImage : ""} alt="" />: <div className='w-[100%]  h-[300px]'  style={{background:color}}></div>}
        {/* <div className='absolute top-[95%] h-5 w-full rounded-b-md' style={{borderBottom: `10px solid ${color}` }}></div> */}
      </div>
      <div className='w-[100%] flex justify-center mt-5'>
        {logoImage !== 'null' && logoImage !== null && logoImage &&  <img className='  object-fill rounded' src={logoImage } alt="" />}
      </div>

    </div>
  );
};

export default Flat;