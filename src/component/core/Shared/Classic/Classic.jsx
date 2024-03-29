import React from 'react';

const Classic = ({ color, profileImage, logoImage }) => {
    console.log({profileImage});
    return (
        <div className="mx-4">
            
            <div className='bg-white w-[100%] relative rounded' >

                <div className='relative overflow-hidden'>
                    <div className='absolute top-[74%] z-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="350" height="91.28" viewBox="0 0 381 88.28">
                            <path id="wave" d="M0,25.9V55.406c70.325,43.351,128.033,45.974,213.535-5.027S340.019,6.009,381,17.739v-7.65C286.9-26.122,210.5,45.427,151.305,63.278S52.111,68.378,0,25.9Z" transform="translate(0 0)" fill={color} />
                        </svg>
                    </div>
                    <div className='absolute bottom-0 left'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="32.781" viewBox="0 0 96 32.781">
                            <path id="wave-left" d="M0,35.773V68.554H96l-.032-1.475C63.791,67.267,33.386,56.325,0,35.773Z" transform="translate(0 -35.773)" fill="#fff" />
                        </svg>
                    </div>
                    <div className='absolute -bottom-[1px] -right-3 z-[5]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="275" height="79.50" viewBox="0 0 285 81.75">
                            <path id="wave-right" d="M300.742,6.114c-30.018-.329-66.667,9.2-121,41.617C136.118,73.767,99.61,86.065,65.025,86.281H65v1.575H350V14.529C334.376,10.055,318.753,6.312,300.742,6.114Z" transform="translate(-65 -6.106)" fill="white" />
                        </svg>
                    </div>
                    {<img className='h-[327px] w-[100%] object-cover rounded-2xl' src={profileImage && profileImage !== 'null' && profileImage !== "https://suva-trip-exist.s3.amazonaws.com/man.png" && profileImage !== "https://suva-trip-exist.s3.amazonaws.com/lady.png" && profileImage !== 'https://suva-trip-exist.s3.amazonaws.com/card-hero.jpg' ? profileImage :  profileImage === "https://suva-trip-exist.s3.amazonaws.com/card-hero.jpg"? '/pro.jpg': profileImage === "https://suva-trip-exist.s3.amazonaws.com/lady.png"? '/lady.png':  "/man.jpg"} alt="" />}
                    {logoImage !== null && logoImage !== 'null' && logoImage &&  <img className='absolute bottom-0 right-0 z-50 w-[100px] h-[50px]' src={logoImage} alt="" />}
                </div>
            </div>
        </div>
    );
};

export default Classic;