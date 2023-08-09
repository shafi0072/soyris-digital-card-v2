import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Instagram = ({index,handleInstagramInputChange,items}) => {
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
                    <h4>Instagram</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                    name={`url`}
                    defaultValue={items?.url}
                    onChange={(e) =>
                       handleInstagramInputChange(
                        index,
                        `url`,
                        e.target.value
                      )
                    }
                    type="text" placeholder='instagram.com/michael21' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
                    
                    <label htmlFor="" className='absolute top-2 left-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.959" height="14.959" viewBox="0 0 14.959 14.959">
  <g id="instagram-svgrepo-com" transform="translate(0.75 0.75)">
    <path id="Path_10" data-name="Path 10" d="M15.114,5H9.345A3.845,3.845,0,0,0,5.5,8.845v5.768a3.845,3.845,0,0,0,3.845,3.845h5.768a3.845,3.845,0,0,0,3.845-3.845V8.845A3.845,3.845,0,0,0,15.114,5Z" transform="translate(-5.5 -5)" fill="none" stroke="#989898" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/>
    <path id="Path_11" data-name="Path 11" d="M11.951,13.9a2.452,2.452,0,1,1,1.733-.718A2.451,2.451,0,0,1,11.951,13.9Z" transform="translate(-5.222 -4.722)" fill="none" stroke="#989898" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill-rule="evenodd"/>
    <rect id="Rectangle_38" data-name="Rectangle 38" width="1.346" height="1.346" rx="0.673" transform="translate(9.96 3.499) rotate(-90)" fill="#989898"/>
    <rect id="Rectangle_39" data-name="Rectangle 39" width="0.817" height="0.817" rx="0.409" transform="translate(10.211 3.248) rotate(-90)" fill="none" stroke="#989898" stroke-linecap="round" stroke-width="1.5"/>
  </g>
</svg>


                    </label>
                </div>
            </div>
           
        </div>
    );
};

export default Instagram;