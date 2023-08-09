import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = ({index,handleHeaderInputChange,items}) => {
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
                    <h4>Header</h4>
                </div>
            </div>
           
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                     name={"label"}
                     defaultValue={items?.label}
                     onChange={(e) =>
                         handleHeaderInputChange(
                         index,
                         "label",
                         e.target.value
                       )
                     }
                    type="text" placeholder='Display Text' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
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

export default Header;