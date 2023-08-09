import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Signal = ({index,handleSignalInputChange,items}) => {
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
                    <h4>Signal</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                     name={`signalUserName${index + 1}`}
                     defaultValue={`${items?.signalUserName + index+1}`}
                     onChange={(e) =>
                         handleSignalInputChange(
                         index,
                         `signalUserName${index + 1}`,
                         e.target.value
                       )
                     }
                    type="text" placeholder='Signal' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.504" height="16.504" viewBox="0 0 31.504 31.504">
                            <g id="signal-svgrepo-com" transform="translate(-15.248 -15.247)">
                                <path id="Path_20" data-name="Path 20" d="M30.64,136.4q-.339-.189-.667-.4a1.125,1.125,0,0,0-.821-.156l-3.63.707.707-3.63a1.125,1.125,0,0,0-.156-.821l-.066-.1H23.428q.238.472.509.926l-.729,3.745a1.875,1.875,0,0,0,2.2,2.2l3.745-.729a14.875,14.875,0,0,0,1.489.778Z" transform="translate(-5.829 -94.25)" stroke="#000" stroke-width="1.5" fill-rule="evenodd" />
                                <path id="Path_21" data-name="Path 21" d="M41.606,20.394a15.074,15.074,0,0,0-2.271-1.867A1.125,1.125,0,1,0,38.082,20.4,12.894,12.894,0,0,1,41.6,23.917a1.125,1.125,0,1,0,1.869-1.252,15.064,15.064,0,0,0-1.867-2.271Zm-8.118-1.9a1.125,1.125,0,1,0,.437-2.207,15.077,15.077,0,0,0-5.852,0,1.125,1.125,0,1,0,.437,2.207,12.826,12.826,0,0,1,4.978,0Zm12.224,9.58a1.125,1.125,0,1,0-2.207.437,12.831,12.831,0,0,1,0,4.978,1.125,1.125,0,1,0,2.207.437A15.072,15.072,0,0,0,45.712,28.074Zm-2.24,11.262A1.125,1.125,0,1,0,41.6,38.084a12.9,12.9,0,0,1-3.235,3.324,1.125,1.125,0,1,0,1.3,1.835,15.142,15.142,0,0,0,3.8-3.906ZM23.915,20.4a1.125,1.125,0,1,0-1.252-1.869,15.157,15.157,0,0,0-3.906,3.8,1.125,1.125,0,0,0,1.835,1.3A12.895,12.895,0,0,1,23.915,20.4Zm-5.179,7.1a1.125,1.125,0,0,0-2.164-.616,15.06,15.06,0,0,0-.546,5.019,1.125,1.125,0,1,0,2.246-.135,12.81,12.81,0,0,1,.465-4.269ZM35.116,45.427a1.125,1.125,0,0,0-.616-2.164,12.811,12.811,0,0,1-4.269.465,1.125,1.125,0,1,0-.134,2.246A15.06,15.06,0,0,0,35.116,45.427ZM19.244,35.948a1.125,1.125,0,1,0-2.074.872q.2.472.429.93h2.579a12.636,12.636,0,0,1-.934-1.8Zm6.807,6.806a12.625,12.625,0,0,1-1.8-.934V44.4q.457.23.93.429a1.125,1.125,0,1,0,.872-2.074Z" transform="translate(0)" stroke="#000" stroke-width="1.5" fill-rule="evenodd" />
                            </g>
                        </svg>

                    </label>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                     name={`signalNumber${index + 1}`}
                     defaultValue={`${items?.signalNumber + index+1}`}
                     onChange={(e) =>
                         handleSignalInputChange(
                         index,
                         `signalNumber${index + 1}`,
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

export default Signal;