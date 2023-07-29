import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Facebook = ({index,handleFacebookInputChange}) => {
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
                    <h4>Facebook</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                       name={`url`}
                       onChange={(e) =>
                           handleFacebookInputChange(
                           index,
                           `url`,
                           e.target.value
                         )
                       }
                    type="text" placeholder='facebook.com/michael21' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                        <svg id="Dribbble-Light-Preview" xmlns="http://www.w3.org/2000/svg" width="6.729" height="13.459" viewBox="0 0 6.729 13.459">
                            <g id="icons">
                                <path id="facebook-_176_" data-name="facebook-[#176]" d="M333.59,7252.459V7246.4h1.839l.3-2.691H333.59V7242.4c0-.694.018-1.381.986-1.381h.981v-1.925a10.869,10.869,0,0,0-1.7-.094c-1.78,0-2.9,1.116-2.9,3.164v1.547H329v2.691h1.967v6.057Z" transform="translate(-329 -7239)" fill="#989898" fill-rule="evenodd" />
                            </g>
                        </svg>

                    </label>
                </div>
            </div>

        </div>
    );
};

export default Facebook;