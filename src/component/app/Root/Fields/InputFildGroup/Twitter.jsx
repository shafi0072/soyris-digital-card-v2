import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Twitter = ({index,handleTwitterInputChange}) => {
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
                    <h4>Twitter</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                     name={`url`}
                     onChange={(e) =>
                         handleTwitterInputChange(
                         index,
                         `url`,
                         e.target.value
                       )
                     }
                    type="text" placeholder='twitter.com/michael21' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.469" height="13.459" viewBox="0 0 16.469 13.459">
                            <path id="twitter-svgrepo-com" d="M10.8,1.035a3.449,3.449,0,0,1,2.355.9,6.025,6.025,0,0,0,1.876-.7,2.906,2.906,0,0,1-1.3,1.6,6.04,6.04,0,0,0,1.7-.455A5.949,5.949,0,0,1,13.959,3.87c.005.123.008.247.008.372A8.132,8.132,0,0,1,5.66,12.424a8.861,8.861,0,0,1-4.637-1.268,5.866,5.866,0,0,0,.7.041A6.024,6.024,0,0,0,5.4,9.961a2.948,2.948,0,0,1-2.762-2A3.069,3.069,0,0,0,3.2,8.01a2.991,2.991,0,0,0,.778-.1A2.9,2.9,0,0,1,1.6,5.08V5.042A3.006,3.006,0,0,0,2.941,5.4,2.868,2.868,0,0,1,1.626,3a2.814,2.814,0,0,1,.4-1.45A8.473,8.473,0,0,0,8.121,4.567a2.8,2.8,0,0,1-.078-.657A2.748,2.748,0,0,1,10.8,1.035m4.629,1.341h0M10.8,0a3.734,3.734,0,0,0-3.76,3.392A7.447,7.447,0,0,1,2.813.886,1.026,1.026,0,0,0,2.026.517q-.04,0-.081,0a1.029,1.029,0,0,0-.8.5A3.874,3.874,0,0,0,.839,4.348a1.039,1.039,0,0,0-.265.694V5.08a3.887,3.887,0,0,0,1.06,2.66,1.043,1.043,0,0,0,.028.541A3.9,3.9,0,0,0,2.844,10.04a5.117,5.117,0,0,1-1.116.122,4.741,4.741,0,0,1-.58-.034,1.127,1.127,0,0,0-.125-.007A1.036,1.036,0,0,0,.48,12.035a9.864,9.864,0,0,0,5.18,1.424,9.006,9.006,0,0,0,6.959-3,9.471,9.471,0,0,0,2.376-6.077A6.962,6.962,0,0,0,16.257,3a1.04,1.04,0,0,0-.234-1.473A1.041,1.041,0,0,0,15.684.431,1.024,1.024,0,0,0,14.521.339a4.933,4.933,0,0,1-1.1.47A4.677,4.677,0,0,0,10.8,0Z" transform="translate(0.005)" fill="#989898" />
                        </svg>
                        
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Twitter;