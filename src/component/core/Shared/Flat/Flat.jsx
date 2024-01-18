import React from 'react';

const Flat = ({ color, profileImage, logoImage }) => {
  console.log({profileImage});
  return (
    <div className='bg-white mx-4' >
      <div className=' w-[100%]  relative border-b-[20px]  ' style={{borderColor: color}}>
        { <img className=' object-cover rounded-t-2xl' src={profileImage && profileImage !== 'null' && profileImage !== "https://suva-trip-exist.s3.amazonaws.com/man.png" && profileImage !== "https://suva-trip-exist.s3.amazonaws.com/lady.png" && profileImage !== 'https://suva-trip-exist.s3.amazonaws.com/card-hero.jpg' ? profileImage : profileImage === "https://suva-trip-exist.s3.amazonaws.com/lady.png" ? '/lady.png': profileImage === "https://suva-trip-exist.s3.amazonaws.com/man.png" ? '/man.jpg': profileImage === 'https://suva-trip-exist.s3.amazonaws.com/card-hero.jpg' ? '/pro.jpg': "/man.jpg"} alt="" />}
      </div>
      <div className='w-[100%] flex justify-center mt-5'>
        {logoImage !== 'null' && logoImage !== null && logoImage &&  <img className='  object-fill rounded' src={logoImage } alt="" />}
      </div>

    </div>
  );
};

export default Flat;