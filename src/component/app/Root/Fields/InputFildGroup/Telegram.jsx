import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Telegram = () => {
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
                    <h4>Telegram</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input type="text" placeholder='Telegram' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.503" height="17.257" viewBox="0 0 32.503 27.257">
                            <path id="telegram-svgrepo-com" d="M15.84,45.77s13.269-5.429,17.87-7.34c1.764-.765,7.746-3.211,7.746-3.211s2.761-1.07,2.531,1.529c-.077,1.07-.69,4.817-1.3,8.869-.92,5.735-1.917,12-1.917,12s-.153,1.759-1.457,2.065-3.451-1.07-3.835-1.376c-.307-.229-5.752-3.67-7.746-5.352a1.446,1.446,0,0,1,.077-2.447c2.761-2.523,6.059-5.658,8.053-7.646.92-.918,1.841-3.059-1.994-.459C28.418,46.152,23.05,49.67,23.05,49.67a4.518,4.518,0,0,1-3.528.076c-2.3-.688-4.985-1.606-4.985-1.606s-1.841-1.147,1.3-2.37Z" transform="translate(-12.748 -33.748)" fill="none" stroke="#000" stroke-width="2.5" />
                        </svg>

                    </label>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input type="text" placeholder='074384783411' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
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

export default Telegram;