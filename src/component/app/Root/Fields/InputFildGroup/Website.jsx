import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Website = ({index,handleWebsiteInputChange,items}) => {
    
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
                    <h4>Website</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input
                     name={`address`}
                     defaultValue={items?.address}
                     onChange={(e) =>
                        handleWebsiteInputChange(
                         index,
                         `address`,
                         e.target.value
                       )
                     }
                    type="text" placeholder='www.yourwebsite.gr' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
                    <label htmlFor="" className='absolute top-3 left-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.431" height="13.431" viewBox="0 0 13.431 13.431">
                            <path id="website-dashboard-svgrepo-com" d="M2.672,15.431H14.759a.672.672,0,0,0,.672-.672V2.672A.672.672,0,0,0,14.759,2H2.672A.672.672,0,0,0,2,2.672V14.759a.672.672,0,0,0,.672.672Zm.672-8.059H4.686v6.715H3.343Zm10.745,6.715H6.029V7.372h8.059ZM3.343,3.343H14.088V6.029H3.343Z" transform="translate(-2 -2)" fill="#989898" />
                        </svg>

                    </label>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                     name={`label`}
                     defaultValue={items?.label}
                     onChange={(e) =>
                        handleWebsiteInputChange(
                         index,
                         `label`,
                         e.target.value
                       )
                     }
                    type="text" placeholder='Display URL' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
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

export default Website;