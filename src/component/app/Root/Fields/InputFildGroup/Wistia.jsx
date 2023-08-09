import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Wistia = ({index,handleWistiaInputChange,items}) => {
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
                    <h4>Wistia</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                      name={`WistiaUserName${index + 1}`}
                      defaultValue={`${items?.WistiaUserName + index + 1}`}
                      onChange={(e) =>
                          handleWistiaInputChange(
                          index,
                          `WistiaUserName${index + 1}`,
                          e.target.value
                        )
                      }
                    type="text" placeholder='Wistia' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-3 left-3'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="15.584" height="13.459" viewBox="0 0 30 23.347">
                            <path id="wistia-svgrepo-com" d="M29.612,7.591c.634-3.867-1.55-4.93-1.55-4.93s.091,3.149-5.694,3.816C17.233,7.07,0,6.622,0,6.622l5.537,6.351a4.668,4.668,0,0,0,3.984,2.041,71.35,71.35,0,0,0,7.931-.12c2.757-.211,6.687-1.11,9.346-3.169a7.036,7.036,0,0,0,2.812-4.135m.355,4.006s-.695,1.381-4.162,3.566a21.4,21.4,0,0,1-8.491,2.3c-2.131.207-6.052.039-7.735.039s-2.467.356-3.984,2.065L0,25.872s1.937.01,3.4.01,10.61.531,14.669-.585c13.182-3.624,11.9-13.7,11.9-13.7Z" transform="translate(0 -2.661)" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Wistia;