import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const LinkedIn = ({index,handleLinkedinInputChange}) => {
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
                    <h4>LinkedIn</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                      name={`url`}
                      defaultValue={items?.url}
                      onChange={(e) =>
                         handleLinkedinInputChange(
                          index,
                          `url`,
                          e.target.value
                        )
                      }
                    type="text" placeholder='linkedin.com/in/michael21' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13.459" height="13.459" viewBox="0 0 13.459 13.459">
  <path id="linkedin-svgrepo-com" d="M4.692,2A2.692,2.692,0,0,0,2,4.692v8.075a2.692,2.692,0,0,0,2.692,2.692h8.075a2.692,2.692,0,0,0,2.692-2.692V4.692A2.692,2.692,0,0,0,12.767,2ZM3.346,4.692A1.346,1.346,0,0,1,4.692,3.346h8.075a1.346,1.346,0,0,1,1.346,1.346v8.075a1.346,1.346,0,0,1-1.346,1.346H4.692a1.346,1.346,0,0,1-1.346-1.346ZM6.711,8.057a.673.673,0,1,0-1.346,0v4.038a.673.673,0,0,0,1.346,0ZM7.047,5.7A1.009,1.009,0,1,1,6.038,4.692,1.009,1.009,0,0,1,7.047,5.7ZM8.729,7.384a.672.672,0,0,1,.552.288,2.362,2.362,0,0,1,1.13-.288,2.418,2.418,0,0,1,2.355,2.4v2.269h0a.673.673,0,0,1-1.346,0h0V9.787a1.073,1.073,0,0,0-1.009-1.057A1.184,1.184,0,0,0,9.4,9.378v2.686h0a.673.673,0,0,1-1.346,0h0V8.147h0v0h0v0h0A.673.673,0,0,1,8.729,7.384Z" transform="translate(-2 -2)" fill="#989898" fill-rule="evenodd"/>
</svg>

                        
                    </label>
                </div>
            </div>

        </div>
    );
};

export default LinkedIn;