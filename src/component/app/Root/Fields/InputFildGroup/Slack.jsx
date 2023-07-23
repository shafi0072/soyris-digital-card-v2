import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Slack = () => {
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
                    <h4>Slack</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input type="text" placeholder='Slack' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 30 30">
                            <path id="slack-svgrepo-com" d="M29.567,16a4.774,4.774,0,0,0-5.386-7.723v-2.5A4.773,4.773,0,0,0,16,2.433,4.774,4.774,0,0,0,8.277,7.818h-2.5A4.773,4.773,0,0,0,2.433,16a4.774,4.774,0,0,0,5.386,7.723v2.5A4.773,4.773,0,0,0,16,29.567a4.774,4.774,0,0,0,7.723-5.386h2.5A4.773,4.773,0,0,0,29.567,16ZM12.591,3.727a2.045,2.045,0,0,1,2.045,2.045V7.818H12.591a2.045,2.045,0,1,1,0-4.091Zm4.773,2.045a2.045,2.045,0,0,1,4.091,0v8.864H17.364Zm-2.727,8.864V10.545H5.773a2.045,2.045,0,1,0,0,4.091Zm9.545,0h2.045a2.045,2.045,0,1,0-2.045-2.045Zm2.045,2.727H17.364v4.091h8.864a2.045,2.045,0,0,0,0-4.091Zm-6.818,6.818H17.364v2.045a2.045,2.045,0,1,0,2.045-2.045Zm-4.773-6.818H10.545v8.864a2.045,2.045,0,0,0,4.091,0Zm-8.864,0H7.818v2.045a2.045,2.045,0,1,1-2.045-2.045Z" transform="translate(-1 -1)" fill="#0f0f0f" fill-rule="evenodd" />
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

export default Slack;