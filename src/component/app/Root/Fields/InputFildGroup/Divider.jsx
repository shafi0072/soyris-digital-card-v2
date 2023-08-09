import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Divider = ({items,from}) => {
    return (
        <div className='bg-white px-4 py-2 rounded-lg'>

            <div className='flex items-center '>
                <div className='flex items-center gap-2 mb-3 relative'>
                    <input className=' w-full pl-8' type="button" value="Divider" />
                    <div className='absolute left-0  flex flex-col'>
                        <span>
                            <KeyboardArrowUpIcon />
                        </span>
                        <span className='-mt-4 '>
                            <KeyboardArrowDownIcon />
                        </span>
                    </div>
                </div>
            </div>
           

        </div>
    );
};

export default Divider;