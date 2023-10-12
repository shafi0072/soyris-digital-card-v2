import React from 'react';

const Flat = ({ color, profileImage, logoImage }) => {
  // console.log({logoImage});
  return (
    <div className='bg-white mx-4' >
      <div className=' w-[100%]  relative border-b-[20px]  ' style={{borderColor: color}}>
        { <img className=' object-cover rounded-t-2xl' src={profileImage && profileImage !== 'null' ? profileImage : "/profile-image.png"} alt="" />}
      </div>
      <div className='w-[100%] flex justify-center mt-5'>
        {logoImage !== 'null' && logoImage !== null && logoImage &&  <img className='  object-fill rounded' src={logoImage } alt="" />}
      </div>

    </div>
  );
};

export default Flat;