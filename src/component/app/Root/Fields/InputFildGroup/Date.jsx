import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Date = ({index,handleDateInputChange}) => {
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
                    <h4>Date</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                     name={`date${index + 1}`}
                     onChange={(e) =>
                        handleDateInputChange(
                         index,
                         `date${index + 1}`,
                         e.target.value
                       )
                     }
                    type="date" placeholder='sype' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.059" height="15.692" viewBox="0 0 14.059 15.692">
                            <g id="date-range-svgrepo-com" transform="translate(0.5 0.5)">
                                <path id="Path_37" data-name="Path 37" d="M17.059,8.713V6.265a1.632,1.632,0,0,0-1.632-1.632H5.632A1.632,1.632,0,0,0,4,6.265V8.713m13.059,0v7.346a1.632,1.632,0,0,1-1.632,1.632H5.632A1.632,1.632,0,0,1,4,16.059V8.713m13.059,0H4M7.265,3V6.265M13.795,3V6.265" transform="translate(-4 -3)" fill="none" stroke="#989898" stroke-linecap="round" stroke-width="1" />
                                <rect id="Rectangle_85" data-name="Rectangle 85" width="2.844" height="2.37" rx="0.5" transform="translate(1.422 7.583)" fill="#989898" />
                                <rect id="Rectangle_86" data-name="Rectangle 86" width="2.449" height="2.449" rx="0.5" transform="translate(5.305 7.346)" fill="#989898" />
                                <rect id="Rectangle_87" data-name="Rectangle 87" width="2.37" height="2.37" rx="0.5" transform="translate(9.005 7.583)" fill="#989898" />
                            </g>
                        </svg>

                    </label>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input  
                    name={`funding${index + 1}`}
                    onChange={(e) =>
                       handleDateInputChange(
                        index,
                        `funding${index + 1}`,
                        e.target.value
                      )
                    }
                    type="text" placeholder='New Funding' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
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

export default Date;