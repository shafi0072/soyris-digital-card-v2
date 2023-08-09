import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Viber = ({index,handleViberInputChange, items}) => {
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
                    <h4>Viber</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input
                    name={`number`}
                    defaultValue={items?.number}
                    onChange={(e) =>
                        handleViberInputChange(
                        index,
                        `number`,
                        e.target.value
                      )
                    }
                    type="text" placeholder='074384783411' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                        <svg id="viber-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="13.196" height="13.604" viewBox="0 0 13.196 13.604">
                            <path id="Path_16" data-name="Path 16" d="M12.582,4a.582.582,0,0,0,0,1.164,2.332,2.332,0,0,1,1.7.63,2.332,2.332,0,0,1,.63,1.7.582.582,0,0,0,1.164,0A3.491,3.491,0,0,0,15.1,4.971,3.491,3.491,0,0,0,12.582,4Z" transform="translate(-5.402 -1.998)" fill="#989898" />
                            <path id="Path_17" data-name="Path 17" d="M5.008,7.168c.067-.526.75-1.241,1.293-1.162h0c.454.086.826.769,1.071,1.219.04.074.077.142.11.2a.577.577,0,0,1-.1.724l-.056.045c-.207.165-.477.378-.414.593a8.3,8.3,0,0,0,2.294,2.286c.219.127.39-.119.536-.33.034-.05.068-.1.1-.138a.567.567,0,0,1,.718-.1,8.014,8.014,0,0,1,1.243.893.492.492,0,0,1,.1.649c-.235.442-.913,1.025-1.406.906A8.088,8.088,0,0,1,5.047,7.489a.577.577,0,0,1-.04-.307Z" transform="translate(-2.477 -2.833)" fill="#989898" />
                            <path id="Path_18" data-name="Path 18" d="M12.582,7a.582.582,0,1,0,0,1.164.682.682,0,0,1,.582.582.582.582,0,1,0,1.164,0A1.831,1.831,0,0,0,12.582,7Z" transform="translate(-5.402 -3.251)" fill="#989898" />
                            <path id="Path_19" data-name="Path 19" d="M4.654,14.107q.025.014.051.025c.316.136.706-.167,1.486-.774l.782-.608a11.075,11.075,0,0,0,3.966-.52,4.075,4.075,0,0,0,2.5-2.5,11.506,11.506,0,0,0,0-6.185,4.075,4.075,0,0,0-2.5-2.5,14.174,14.174,0,0,0-7.349,0,4.075,4.075,0,0,0-2.5,2.5,11.506,11.506,0,0,0,0,6.185,4.075,4.075,0,0,0,2.5,2.5,6.436,6.436,0,0,0,.764.229C4.353,13.447,4.353,13.941,4.654,14.107Zm.863-1.7v-.652a.29.29,0,0,0-.229-.284,10.741,10.741,0,0,1-1.314-.34A2.911,2.911,0,0,1,2.188,9.345,8.89,8.89,0,0,1,1.83,6.638,8.89,8.89,0,0,1,2.188,3.93,2.911,2.911,0,0,1,3.974,2.144a10.99,10.99,0,0,1,3.278-.419,10.961,10.961,0,0,1,3.3.419A2.911,2.911,0,0,1,12.34,3.93,8.889,8.889,0,0,1,12.7,6.638a8.889,8.889,0,0,1-.358,2.708,2.911,2.911,0,0,1-1.786,1.786,10.64,10.64,0,0,1-3.858.444.293.293,0,0,0-.188.061Z" transform="translate(-0.666 -0.56)" fill="#989898" fill-rule="evenodd" />
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
                        handleViberInputChange(
                        index,
                        `label`,
                        e.target.value
                      )
                    }
                    type="text" placeholder='074384783411' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />
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

export default Viber;