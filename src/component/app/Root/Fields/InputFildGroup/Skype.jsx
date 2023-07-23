import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Skype = () => {
    return (
        <div>
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
                    <h4>Skype</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input type="text" placeholder='sype' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 30 30">
  <path id="skype-svgrepo-com" d="M3.727,8.5a4.773,4.773,0,0,1,8.134-3.389l.556.551.757-.2A10.92,10.92,0,0,1,26.54,18.827l-.2.757.551.556a4.773,4.773,0,0,1-6.75,6.75l-.556-.551-.757.2A10.919,10.919,0,0,1,5.46,13.173l.2-.757-.551-.556A4.753,4.753,0,0,1,3.727,8.5ZM8.5,1A7.5,7.5,0,0,0,2.652,13.2,13.647,13.647,0,0,0,18.8,29.348,7.5,7.5,0,0,0,29.348,18.8,13.647,13.647,0,0,0,13.2,2.652,7.473,7.473,0,0,0,8.5,1Zm5.648,11.359a1.991,1.991,0,0,1,1.76-.791,4.6,4.6,0,0,1,2.97.962,1.364,1.364,0,0,0,1.654-2.168,7.319,7.319,0,0,0-4.624-1.521,4.687,4.687,0,0,0-4.239,2.373,3.375,3.375,0,0,0,.105,3.363,4.6,4.6,0,0,0,2.792,1.987l2.119.571c.816.22,2.055.978,1.609,2a2.825,2.825,0,0,1-2.627,1.3A5.077,5.077,0,0,1,12.4,19.47a1.364,1.364,0,1,0-1.655,2.168,7.089,7.089,0,0,0,4.625,1.522c2.153,0,4.5-.815,5.428-2.933a3.754,3.754,0,0,0-.315-3.6c-1.047-1.615-2.851-2.082-4.6-2.534-.2-.052-.405-.1-.605-.159C14.559,13.737,13.72,13.176,14.148,12.359Z" transform="translate(-1 -1)" fill-rule="evenodd"/>
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

export default Skype;