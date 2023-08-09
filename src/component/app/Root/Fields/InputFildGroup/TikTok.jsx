import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const TikTok = ({index,handleTiktokInputChange,items}) => {
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
                    <h4>TikTok</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                     name={`url`}
                     defaultValue={items?.url}
                     onChange={(e) =>
                         handleTiktokInputChange(
                         index,
                         `url`,
                         e.target.value
                       )
                     }
                    type="text" placeholder='tiktok.com/@michael21' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.003" height="14.526" viewBox="0 0 13.003 14.526">
                            <path id="tik-tok-brand-assets-video-socialnetwork-oneline-svgrepo-com" d="M15.964,6.368A3.435,3.435,0,0,1,12.374,3H10.281v8.2c0,2.343-1.845,3.346-3.074,2.456a1.785,1.785,0,0,1,1.429-3.188V7.979C7.14,7.979,4,8.564,4,12.225c0,4.686,5.1,4.539,6.281,3.922,1.929-1,2.393-2.093,2.393-4.507v-4.1a10.29,10.29,0,0,0,3.29.879" transform="translate(-3.5 -2.5)" fill="none" stroke="#989898" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
                        </svg>


                    </label>
                </div>
            </div>
          


        </div>
    );
};

export default TikTok;