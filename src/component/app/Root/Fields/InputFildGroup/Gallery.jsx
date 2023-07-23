import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Gallery = () => {
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
                <h4>Gallery</h4>
            </div>
        </div>
        <div className='mb-3'>
            <div className='w-full'>

                <label htmlFor='profileImage' className='flex items-center gap-2 w-full bg-gray-200 px-3 py-1 rounded-full'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12.587" viewBox="0 0 13 12.587">
                            <g id="Group_5" data-name="Group 5" transform="translate(0.399 0.026)">
                                <line id="Line_1" data-name="Line 1" x2="13" transform="translate(-0.399 6.21)" fill="none" stroke="#0277b5" stroke-width="2.5" />
                                <path id="Path_516" data-name="Path 516" d="M0,0,.13,6.268l.13,6.268" transform="translate(5.741 0)" fill="none" stroke="#0277b5" stroke-width="2.5" />
                            </g>
                        </svg>
                    </span>

                    <p className="text-md">Add Media</p>

                </label>
                <input type="file" id='profileImage' style={{ display: 'none' }} />

            </div>
        </div>



    </div>
    );
};

export default Gallery;