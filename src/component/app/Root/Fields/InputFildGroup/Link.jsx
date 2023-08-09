import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Link = ({index,handleLinkInputChange,items}) => {
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
                    <h4>Link</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input
                     name={`url`}
                     defaultValue={items?.url}
                     onChange={(e) =>
                        handleLinkInputChange(
                         index,
                         `url`,
                         e.target.value
                       )
                     }
                    type="text" placeholder='custom-url.com' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
                    <label htmlFor="" className='absolute top-3 left-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.432" height="13.792" viewBox="0 0 14.432 13.792">
                            <g id="Page-1" transform="translate(0.5 0.501)">
                                <g id="Dribbble-Light-Preview">
                                    <g id="icons">
                                        <path id="url-_1424_" data-name="url-[#1424]" d="M245.175,445.723a2.541,2.541,0,0,1,.449-4.04,2.9,2.9,0,0,1,3.485.4l.429.409a.709.709,0,0,0,.969,0,.63.63,0,0,0,0-.923l-.363-.345a4.383,4.383,0,0,0-5.849-.2,3.787,3.787,0,0,0-.09,5.623l.485.462a.709.709,0,0,0,.969,0,.63.63,0,0,0,0-.923Zm9.962.254-.35-.333a.71.71,0,0,0-.969,0,.63.63,0,0,0,0,.923l.429.409a2.565,2.565,0,0,1,.421,3.318,2.833,2.833,0,0,1-4.244.428l-.485-.461a.709.709,0,0,0-.969,0,.63.63,0,0,0,0,.923l.485.461a4.259,4.259,0,0,0,5.893-.074,3.9,3.9,0,0,0-.21-5.593Zm-2.774,3.821-6.219-5.921a.632.632,0,0,1,0-.924.711.711,0,0,1,.969,0l6.22,5.921a.632.632,0,0,1,0,.924.712.712,0,0,1-.97,0Z" transform="translate(-243 -440)" fill="#989898" stroke="#989898" stroke-width="1" fill-rule="evenodd" />
                                    </g>
                                </g>
                            </g>
                        </svg>


                    </label>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input
                    name={`name`}
                    defaultValue={items?.name}
                    onChange={(e) =>
                       handleLinkInputChange(
                        index,
                        `name`,
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
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input
                    name={`label`}
                    onChange={(e) =>
                       handleLinkInputChange(
                        index,
                        `label`,
                        e.target.value
                      )
                    }
                    type="text" placeholder='Label' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
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

export default Link;