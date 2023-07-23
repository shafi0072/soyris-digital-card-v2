import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const WhatsApp = () => {
    return (
        <div className='bg-white px-4 py-2 rounded-lg'>
            <div className='flex items-center'>
                <div className='flex items-center gap-2 mb-3'>
                    <div className='flex flex-col'>
                        <span>
                            <KeyboardArrowUpIcon />
                        </span>
                        <span className='-mt-4 '>
                            <KeyboardArrowDownIcon />
                        </span>
                    </div>
                    <h4>WhatsApp</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input type="text" placeholder='074384783411' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
                    
                    <label htmlFor="" className='absolute top-2 left-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.041" height="16.151" viewBox="0 0 16.041 16.151">
                            <g id="whatsapp-svgrepo-com" transform="translate(0 0)">
                                <path id="Path_14" data-name="Path 14" d="M11.97,9.875c-.2-.1-1.184-.581-1.367-.657s-.312-.1-.452.108-.517.646-.635.786-.226.151-.431,0a5.523,5.523,0,0,1-1.6-.991A5.653,5.653,0,0,1,6.4,7.733c-.118-.194,0-.3.086-.409s.194-.226.3-.345a1.5,1.5,0,0,0,.194-.334.409.409,0,0,0,0-.355c0-.1-.452-1.077-.624-1.475s-.323-.345-.441-.345H5.488a.775.775,0,0,0-.538.248,2.261,2.261,0,0,0-.7,1.669,3.865,3.865,0,0,0,.808,2.1A8.958,8.958,0,0,0,8.492,11.5c.474.2.84.323,1.131.42a2.724,2.724,0,0,0,1.26.075,2.078,2.078,0,0,0,1.357-.947,1.8,1.8,0,0,0,.118-.947A1.117,1.117,0,0,0,11.97,9.875Z" transform="translate(-0.309 -0.195)" fill="#989898" />
                                <path id="Path_15" data-name="Path 15" d="M14.264,2.847A7.924,7.924,0,0,0,8.568.5a8.011,8.011,0,0,0-6.9,12.005L.59,16.65l4.242-1.077a7.968,7.968,0,0,0,3.822.969H8.568a8.011,8.011,0,0,0,5.7-13.7Zm-5.7,12.317a6.589,6.589,0,0,1-3.392-.937l-.237-.14-2.519.657.668-2.455-.151-.248a6.649,6.649,0,1,1,5.631,3.122Z" transform="translate(-0.59 -0.5)" fill="#989898" />
                            </g>
                        </svg>
                    </label>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input type="text" placeholder='@michael21' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
                    <label htmlFor="" className='absolute top-3 left-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.221" height="13.431" viewBox="0 0 14.221 13.431">
                            <path id="text-tool-svgrepo-com" d="M3,4.79A.79.79,0,0,1,3.79,4H16.431a.79.79,0,0,1,.79.79V6.37a.79.79,0,1,1-1.58,0V5.58H10.9V15.851h1.58a.79.79,0,0,1,0,1.58H7.74a.79.79,0,0,1,0-1.58H9.32V5.58H4.58v.79A.79.79,0,0,1,3,6.37Z" transform="translate(-3 -4)" fill="#989898" fill-rule="evenodd" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default WhatsApp;