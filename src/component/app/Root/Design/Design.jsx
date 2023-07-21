import React, { useState } from 'react';

const Design = () => {
    const [border,setBorder]= useState('clasic');
    return (
        <div>
            <div>
                <h2 className='text-xl font-bold text-black pb-2 '>Design</h2>
                <div className='flex gap-3'>
                    <button className={`${border=== 'clasic'&& 'border border-[#0F66A0]'} p-2  relative w-[90px] h-[120px] shadow-md`} onClick={()=>setBorder('clasic')}>
                        <span className='absolute top-2 left-2 bottom-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="73.066" height="60.937" viewBox="0 0 73.066 60.937">
                                <g id="Group_3" data-name="Group 3" transform="translate(-610 -437)">
                                    <rect id="Rectangle_24" data-name="Rectangle 24" width="73.031" height="43.449" rx="13" transform="translate(610 437)" fill="#0f66a0" />
                                    <g id="Group_2" data-name="Group 2" transform="translate(610 464.772)">
                                        <path id="wave-left" d="M0,35.773v6.272H18.369l-.006-.282C12.206,41.8,6.388,39.706,0,35.773Z" transform="translate(0 -25.133)" fill="#fff" />
                                        <path id="wave-right" d="M110.107,6.108c-5.744-.063-12.756,1.759-23.152,7.963C78.608,19.052,71.622,21.405,65,21.447h0v.3h54.532V7.718A34.637,34.637,0,0,0,110.107,6.108Z" transform="translate(-46.466 -4.714)" fill="#fff" />
                                        <path id="wave" d="M0,4.956V10.6C13.456,18.9,24.5,19.4,40.858,9.64S65.059,1.15,72.9,3.394V1.93C54.895-5,40.277,8.692,28.951,12.108S9.971,13.083,0,4.956Z" transform="translate(0 0)" fill="#0e66a0" />
                                    </g>
                                    <path id="Rectangle_25" data-name="Rectangle 25" d="M0,0H73.031a0,0,0,0,1,0,0V2.64a13,13,0,0,1-13,13H13a13,13,0,0,1-13-13V0A0,0,0,0,1,0,0Z" transform="translate(610 482.297)" fill="#fff" />
                                </g>
                            </svg>
                        </span>
                        <span className='absolute bottom-2 left-0 right-0 text-center text-[#2C2C2C]'>Classic</span>
                    </button>
                    <button className={`${border==='flat'&& 'border border-[#0F66A0]'} p-2  relative w-[90px] h-[120px] shadow-md`} onClick={()=>setBorder('flat')}>
                        <span className='absolute top-2 left-2 bottom-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="73.031" height="35.449" viewBox="0 0 73.031 35.449">
                                <path id="Rectangle_24" data-name="Rectangle 24" d="M13,0H60.031a13,13,0,0,1,13,13V35.449a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V13A13,13,0,0,1,13,0Z" fill="#0f66a0" />
                            </svg>
                        </span>

                        <span className='absolute bottom-2 left-0 right-0 text-center text-[#2C2C2C]'>Flat</span>

                    </button>
                </div>
            </div>
            <div className='mt-5'>
            <h2 className='text-xl font-bold text-black pb-2 '>Design</h2>
            </div>
        </div>
    );
};

export default Design;