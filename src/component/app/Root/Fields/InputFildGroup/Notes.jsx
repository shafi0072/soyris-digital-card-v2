import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Notes = () => {
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
                    <h4>Notes</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full'>

                <textarea placeholder='Enter your Notes' rows='4' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1'></textarea>

                </div>
            </div>



        </div>
    );
};

export default Notes;