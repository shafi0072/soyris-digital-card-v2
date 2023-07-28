import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Discord = ({index,handleDiscordInputChange}) => {
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
                    <h4>Discord</h4>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input 
                     name={`discordUserName${index + 1}`}
                     onChange={(e) =>
                        handleDiscordInputChange(
                         index,
                         `discordUserName${index + 1}`,
                         e.target.value
                       )
                     }
                     type="text" placeholder='Discord' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

                    <label htmlFor="" className='absolute top-2 left-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="17.104" viewBox="0 0 35.5 28.104">
  <g id="discord-svgrepo-com" transform="translate(0 -2.5)">
    <path id="Path_22" data-name="Path 22" d="M11.733,12.958a2.713,2.713,0,0,1-2.367,2.958A2.713,2.713,0,0,1,7,12.958,2.713,2.713,0,0,1,9.367,10,2.713,2.713,0,0,1,11.733,12.958Zm-3.286,0a1.054,1.054,0,0,0,.92,1.149,1.054,1.054,0,0,0,.92-1.149,1.054,1.054,0,0,0-.92-1.149A1.054,1.054,0,0,0,8.447,12.958Z" transform="translate(3.768 4.386)" fill="#0f0f0f" fill-rule="evenodd"/>
    <path id="Path_23" data-name="Path 23" d="M15.367,15.917a2.713,2.713,0,0,0,2.367-2.958A2.713,2.713,0,0,0,15.367,10,2.713,2.713,0,0,0,13,12.958,2.713,2.713,0,0,0,15.367,15.917Zm0-1.809a1.054,1.054,0,0,1-.92-1.149,1.054,1.054,0,0,1,.92-1.149,1.054,1.054,0,0,1,.92,1.149A1.054,1.054,0,0,1,15.367,14.108Z" transform="translate(6.998 4.386)" fill="#0f0f0f" fill-rule="evenodd"/>
    <path id="Path_24" data-name="Path 24" d="M14.772,3.736a1.479,1.479,0,0,0-1.8-1.2A23.018,23.018,0,0,0,5.144,5.676a1.479,1.479,0,0,0-.518.539A34.673,34.673,0,0,0,.973,14.987,39.554,39.554,0,0,0,0,24.687a1.479,1.479,0,0,0,.433,1.046A16.846,16.846,0,0,0,5.5,29.367,15.254,15.254,0,0,0,11.833,30.6a1.479,1.479,0,0,0,1.4-1.011l1-2.994a21.317,21.317,0,0,0,3.515.308,21.317,21.317,0,0,0,3.515-.308l1,2.994a1.479,1.479,0,0,0,1.4,1.011A15.255,15.255,0,0,0,30,29.367a16.847,16.847,0,0,0,5.067-3.634,1.479,1.479,0,0,0,.433-1.046,39.553,39.553,0,0,0-.973-9.7,34.668,34.668,0,0,0-3.653-8.771,1.479,1.479,0,0,0-.518-.539A23.02,23.02,0,0,0,22.531,2.54a1.479,1.479,0,0,0-1.8,1.2l-.559,3.355a19.125,19.125,0,0,0-4.839,0Zm9.951,23.878-.558-1.673a24.565,24.565,0,0,0,3.841-1.4,1.479,1.479,0,1,0-1.281-2.666,21.1,21.1,0,0,1-2.733,1.031,21.54,21.54,0,0,1-6.241,1.042,21.54,21.54,0,0,1-6.241-1.042A21.66,21.66,0,0,1,8.78,21.877,1.479,1.479,0,1,0,7.5,24.545a24.7,24.7,0,0,0,3.833,1.4l-.558,1.673a11.631,11.631,0,0,1-4.076-.95,13.3,13.3,0,0,1-3.741-2.6A35.336,35.336,0,0,1,3.845,15.7,31.132,31.132,0,0,1,7.019,8a18.372,18.372,0,0,1,5.1-2.191l.318,1.906a12.221,12.221,0,0,0-3.7,1.735,1.5,1.5,0,0,0-.3,2.074,1.479,1.479,0,0,0,2.064.3A8.492,8.492,0,0,1,12.29,10.9a14.683,14.683,0,0,1,5.46-1,14.682,14.682,0,0,1,5.46,1A8.489,8.489,0,0,1,25,11.824a1.479,1.479,0,0,0,2.064-.3,1.512,1.512,0,0,0-.306-2.078,12.634,12.634,0,0,0-3.7-1.73l.318-1.906A18.372,18.372,0,0,1,28.481,8a31.139,31.139,0,0,1,3.174,7.7,35.339,35.339,0,0,1,.884,8.368,13.3,13.3,0,0,1-3.741,2.6A11.631,11.631,0,0,1,24.722,27.614ZM13.312,20.99c1.634,0,2.958-1.656,2.958-3.7s-1.324-3.7-2.958-3.7-2.958,1.656-2.958,3.7S11.679,20.99,13.312,20.99Zm11.833-3.7c0,2.042-1.324,3.7-2.958,3.7s-2.958-1.656-2.958-3.7,1.324-3.7,2.958-3.7S25.146,15.249,25.146,17.292ZM13.312,18.728a1.317,1.317,0,0,1-1.149-1.437,1.317,1.317,0,0,1,1.149-1.437,1.317,1.317,0,0,1,1.149,1.437A1.317,1.317,0,0,1,13.312,18.728Zm8.875,0a1.317,1.317,0,0,1-1.149-1.437,1.317,1.317,0,0,1,1.149-1.437,1.317,1.317,0,0,1,1.149,1.437A1.317,1.317,0,0,1,22.187,18.728Z" transform="translate(0 0)" fill="#0f0f0f" fill-rule="evenodd"/>
  </g>
</svg>

                    </label>
                </div>
            </div>
            <div className='mb-3'>
                <div className='w-full relative '>
                    <input
                    name={`discordNumber${index + 1}`}
                    onChange={(e) =>
                        handleDiscordInputChange(
                        index,
                        `discordNumber${index + 1}`,
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

export default Discord;