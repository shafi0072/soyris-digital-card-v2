import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Vimeo = () => {
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
                    <h4>Vimeo</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input type="text" placeholder='Vimeo' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-3 left-3'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="15.584" height="13.459" viewBox="0 0 33 28.811">
                            <path id="vimeo-svgrepo-com" d="M35.485,13.337q-.207,4.526-6.322,12.393-6.322,8.215-10.7,8.216-2.711,0-4.586-5l-2.5-9.174q-1.392-5-2.987-5a9.593,9.593,0,0,0-2.434,1.46L4.5,14.346q2.295-2.016,4.524-4.034,3.061-2.644,4.594-2.783,3.618-.348,4.454,4.946.9,5.713,1.253,7.1,1.044,4.74,2.3,4.738.972,0,2.923-3.075a12.113,12.113,0,0,0,2.087-4.68q.278-2.653-2.087-2.655a5.811,5.811,0,0,0-2.295.508q2.286-7.484,8.731-7.274Q35.759,7.281,35.485,13.337Z" transform="translate(-3.5 -6.135)" fill="none" stroke="#989898" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Vimeo;