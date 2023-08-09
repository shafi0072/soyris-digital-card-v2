import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Snapchat = ({index,handleSnapChatInputChange,items}) => {
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
                    <h4>Snapchat</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input
                    name={`snapChatUserName${index + 1}`}
                    defaultValue={`${items?.snapChatUserName + index+1}`}
                    onChange={(e) =>
                        handleSnapChatInputChange(
                        index,
                        `snapChatUserName${index + 1}`,
                        e.target.value
                      )
                    }
                    type="text" placeholder='Snapchat' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.147" height="14" viewBox="0 0 28.147 30">
                            <path id="snapchat-svgrepo-com" d="M9.425,4.957A8.56,8.56,0,0,1,16.214,2,8.522,8.522,0,0,1,23.02,5.162a12.153,12.153,0,0,1,2.455,7.11l.132.019.029,0c.242.035.532.078.834.136a4.389,4.389,0,0,1,3.676,2.806,2.9,2.9,0,0,1-.411,2.732,4.361,4.361,0,0,1-1.711,1.254c-.253.114-.5.211-.714.291a15.917,15.917,0,0,0,2.3,3.96,3.518,3.518,0,0,1,.2,3.631,3.562,3.562,0,0,1-2.927,2.145,18.947,18.947,0,0,0-2.556.277,7.331,7.331,0,0,0-1.422.463c-.341.141-.654.28-.991.431-.268.119-.552.246-.878.386A12.274,12.274,0,0,1,16.214,32a12.274,12.274,0,0,1-4.822-1.192c-.326-.14-.61-.266-.878-.386-.338-.15-.65-.29-.991-.431A7.328,7.328,0,0,0,8.1,29.528a18.948,18.948,0,0,0-2.556-.277,3.562,3.562,0,0,1-2.927-2.145,3.518,3.518,0,0,1,.2-3.631A15.861,15.861,0,0,0,5.128,19.49c-.191-.077-.414-.169-.641-.275a4.553,4.553,0,0,1-1.661-1.221,3.054,3.054,0,0,1-.581-2.616c.463-2.2,2.528-2.744,3.621-2.949.31-.058.611-.1.864-.136l.05-.007.171-.024A11.981,11.981,0,0,1,9.425,4.957ZM11.611,6.8C10.522,8.09,9.786,10.17,9.786,13.224v.15l-.031.147a1.782,1.782,0,0,1-1.02,1.232,3.536,3.536,0,0,1-.853.254c-.223.041-.471.076-.693.107l-.066.009c-.253.035-.494.07-.73.114-1.093.205-1.3.477-1.352.73-.038.181-.005.217.014.238l.005.006a1.852,1.852,0,0,0,.638.415c.178.083.365.159.573.242l.051.02c.181.072.4.159.588.248a2.837,2.837,0,0,1,.764.5,1.7,1.7,0,0,1,.5,1.634,16.711,16.711,0,0,1-3.089,5.937.338.338,0,0,0-.023.15,1.262,1.262,0,0,0,.133.518,1.3,1.3,0,0,0,.325.436.356.356,0,0,0,.149.086,21.75,21.75,0,0,1,2.943.321,10.049,10.049,0,0,1,2,.634c.346.143.745.32,1.131.491.27.12.535.237.772.339a9.525,9.525,0,0,0,3.7.961,9.526,9.526,0,0,0,3.7-.961c.237-.1.5-.219.772-.339.387-.172.785-.348,1.131-.491a10.046,10.046,0,0,1,2-.634,21.751,21.751,0,0,1,2.943-.321.357.357,0,0,0,.149-.086,1.3,1.3,0,0,0,.325-.436,1.262,1.262,0,0,0,.133-.518.336.336,0,0,0-.021-.148,16.714,16.714,0,0,1-3.09-5.939,1.7,1.7,0,0,1,.553-1.671,2.981,2.981,0,0,1,.782-.475c.192-.084.409-.167.6-.237l.069-.026c.217-.083.414-.159.6-.242a1.826,1.826,0,0,0,.606-.373.639.639,0,0,0-.031-.136c-.13-.4-.5-.68-1.5-.874-.228-.044-.458-.078-.7-.114l-.055-.008c-.215-.031-.457-.066-.676-.109a3.341,3.341,0,0,1-.841-.265,1.782,1.782,0,0,1-.981-1.219l-.031-.147v-.15A9.816,9.816,0,0,0,20.8,6.962a5.669,5.669,0,0,0-4.587-2.105A5.715,5.715,0,0,0,11.611,6.8Z" transform="translate(-2.167 -2)" fill-rule="evenodd" />
                        </svg>   

                    </label>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input
                     name={`snapChatNumber${index + 1}`}
                     defaultValue={`${items?.snapChatNumber + index+1}`}
                     onChange={(e) =>
                         handleSnapChatInputChange(
                         index,
                         `snapChatNumber${index + 1}`,
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

export default Snapchat;