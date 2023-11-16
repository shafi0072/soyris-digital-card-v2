import { userContext } from '@/src/Storage/ContextApi';
import { baseUrl } from '@/src/config/Server';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Spinner from '@/src/component/core/Spinner';
const MyCards = () => {
    const [userCard, setUserCard] = useState([])

    const { userData, isLoading, setIsLoading } = useContext(userContext)
    const [showMessage, setShowMessage] = useState(false);
    const router = useRouter()

    useEffect(() => {
        setIsLoading(true)
        fetch(`${baseUrl}/cards/cards/${userData?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserCard(data);
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            })
            .catch(err => { setIsLoading(false) })
    }, [userData])
    console.log({ userCard });
    useEffect(() => {
        // After a specified delay (e.g., 2000 milliseconds), show the message

        const delay = setTimeout(() => {
            if (userCard.length === 0) {
                setShowMessage(true);
            }
        }, 2000);


        // Clean up the timeout if the component unmounts or if you don't want to show the message anymore for some reason.
        return () => clearTimeout(delay);
    }, []);

    return (
        <div style={{ height: '80vh' }}>

            {!isLoading && userCard?.length === 0 && showMessage && (
                <p className='text-2xl font-semibold' style={{ color: '#000000ab' }}>Please Create a Card</p>
            )}
            <div className='flex flex-wrap'>
                {
                    userCard?.map((items, index) =>
                        <div className=' cursor-pointer w-[300px] ml-4 mb-5  rounded-2 p-2' onClick={() => { localStorage.setItem('cardId', items?._id); window.location.assign('/profileInfo') }}>
                            {items?.display?.design === "flat" && <div className=' relative w-full h-[300px] '>
                                <img src={items?.display?.ProfileImage ? items?.display?.ProfileImage : "/man.jpg"} className='w-full h-full rounded-t-md' alt="" />
                                <div className='absolute top-[95%] h-5 w-full rounded-b-md' style={{ borderBottom: `10px solid ${items?.display?.primaryColor}` }}></div>
                            </div>}
                            {items?.display?.design === 'classic' &&
                                <div
                                    className=" w-[300px] h-[300px]  relative rounded"

                                >

                                    <div className="">
                                        <div className="absolute  top-[72.6%]  z-10">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="300"
                                                height="88.28"
                                                viewBox="0 0 381 88.28"
                                            >
                                                <path
                                                    id="wave"
                                                    d="M0,25.9V55.406c70.325,43.351,128.033,45.974,213.535-5.027S340.019,6.009,381,17.739v-7.65C286.9-26.122,210.5,45.427,151.305,63.278S52.111,68.378,0,25.9Z"
                                                    transform="translate(0 0)"
                                                    fill={items?.display?.primaryColor}
                                                />
                                            </svg>
                                        </div>
                                        <div className="absolute bottom-[0.1%] left-[0.1%]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="96"
                                                height="32.781"
                                                viewBox="0 0 96 32.781"
                                            >
                                                <path
                                                    id="wave-left"
                                                    d="M0,35.773V68.554H96l-.032-1.475C63.791,67.267,33.386,56.325,0,35.773Z"
                                                    transform="translate(0 -35.773)"
                                                    fill="#fff"
                                                />
                                            </svg>
                                        </div>
                                        <div className="absolute -bottom-[8px] right-0 z-[5]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="262"
                                                height="81.75"
                                                viewBox="0 0 285 81.75"
                                            >
                                                <path
                                                    id="wave-right"
                                                    d="M300.742,6.114c-30.018-.329-66.667,9.2-121,41.617C136.118,73.767,99.61,86.065,65.025,86.281H65v1.575H350V14.529C334.376,10.055,318.753,6.312,300.742,6.114Z"
                                                    transform="translate(-65 -6.106)"
                                                    fill="#fff"
                                                />
                                            </svg>
                                        </div>
                                        <img
                                            className="h-[300px] w-full object-cover rounded"
                                            src={items?.display?.ProfileImage ? items?.display?.ProfileImage : "/man.jpg"}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            }
                            {items?.display?.design === 'pro' &&

                                <div>
                                    <img className="h-[300px] w-full object-cover rounded" src={items?.display?.ProfileImage ? items?.display?.ProfileImage : "/man.jpg"} alt="" />
                                </div>
                            }
                            <h2 className={` text-center text-2xl py-5 border-b-2 border-dashed`} style={{ borderColor: items?.display?.primaryColor, background: items?.display?.design === 'pro' ? items?.display?.primaryColor : 'transparent', color:items?.display?.design === 'pro' ? 'white' : 'black'  }}>{items?.profileInfo?.first_name}, {items?.profileInfo?.last_name}</h2>
                            <div className='flex justify-center'>
                                <ul className='mt-5 flex gap-4'>
                                    <li>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18.06" height="18.031" viewBox="0 0 18.06 18.031">
                                                <g id="edit-3-svgrepo-com" transform="translate(0.75 0.75)">
                                                    <path id="Path_502" data-name="Path 502" d="M18.76,5.606l-7.851,7.851c-.782.782-3.1,1.144-3.621.625s-.165-2.839.617-3.621l7.86-7.86a2.123,2.123,0,1,1,3,3Z" transform="translate(-2.892 -1.913)" fill="none" stroke={items?.display?.primaryColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                    <path id="Path_503" data-name="Path 503" d="M9.407,4H5.292A3.292,3.292,0,0,0,2,7.292v8.23a3.292,3.292,0,0,0,3.292,3.292h9.053c1.819,0,2.469-1.481,2.469-3.292V11.407" transform="translate(-2 -2.283)" fill="none" stroke={items?.display?.primaryColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                                </g>
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15.637" height="16.46" viewBox="0 0 15.637 16.46">
                                                <path id="settings-svgrepo-com_1_" data-name="settings-svgrepo-com (1)" d="M12.282,2.125A4.166,4.166,0,0,0,10.818,2a4.166,4.166,0,0,0-1.464.125,1.652,1.652,0,0,0-.9.891,2.015,2.015,0,0,0-.119.711A1.329,1.329,0,0,1,7.683,4.84a1.35,1.35,0,0,1-1.3.006A2.054,2.054,0,0,0,5.7,4.593a1.668,1.668,0,0,0-1.226.326,4.106,4.106,0,0,0-.841,1.2,4.09,4.09,0,0,0-.623,1.321,1.637,1.637,0,0,0,.329,1.217A2.04,2.04,0,0,0,3.9,9.11a1.3,1.3,0,0,1,0,2.24,2.042,2.042,0,0,0-.561.457,1.637,1.637,0,0,0-.329,1.217,4.09,4.09,0,0,0,.623,1.321,4.105,4.105,0,0,0,.841,1.2,1.668,1.668,0,0,0,1.226.326,2.054,2.054,0,0,0,.679-.253,1.35,1.35,0,0,1,1.3.006,1.329,1.329,0,0,1,.655,1.114,2.015,2.015,0,0,0,.119.71,1.652,1.652,0,0,0,.9.891,4.167,4.167,0,0,0,1.464.125,4.167,4.167,0,0,0,1.464-.125,1.652,1.652,0,0,0,.9-.891,2.014,2.014,0,0,0,.119-.711,1.329,1.329,0,0,1,.655-1.114,1.35,1.35,0,0,1,1.3-.006,2.054,2.054,0,0,0,.679.253,1.667,1.667,0,0,0,1.226-.326,4.1,4.1,0,0,0,.841-1.2,4.091,4.091,0,0,0,.623-1.321,1.637,1.637,0,0,0-.329-1.217,2.041,2.041,0,0,0-.561-.457,1.3,1.3,0,0,1,0-2.24,2.04,2.04,0,0,0,.561-.457,1.637,1.637,0,0,0,.329-1.217A4.092,4.092,0,0,0,18,6.115a4.1,4.1,0,0,0-.841-1.2,1.668,1.668,0,0,0-1.226-.326,2.053,2.053,0,0,0-.679.253,1.35,1.35,0,0,1-1.3-.006A1.329,1.329,0,0,1,13.3,3.727a2.014,2.014,0,0,0-.119-.711A1.652,1.652,0,0,0,12.282,2.125ZM10.818,12.7A2.469,2.469,0,1,0,8.331,10.23,2.478,2.478,0,0,0,10.818,12.7Z" transform="translate(-3 -2)" fill={items?.display?.primaryColor} fillRule="evenodd" />
                                            </svg>

                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.991" height="16.46" viewBox="0 0 13.991 16.46">
                                                <path id="share-svgrepo-com" d="M11.979,4.743a2.75,2.75,0,1,1,.793,1.926l-3.815,2.6a2.744,2.744,0,0,1-.15,1.578l4.183,2.748a2.741,2.741,0,1,1-1.012,2.124,2.724,2.724,0,0,1,.238-1.116L8.068,11.875A2.743,2.743,0,1,1,8.414,8.1l3.7-2.517A2.73,2.73,0,0,1,11.979,4.743Z" transform="translate(-3.5 -2)" fill={items?.display?.primaryColor} fillRule="evenodd" />
                                            </svg>

                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17.228" height="16.814" viewBox="0 0 17.228 16.814">
                                                <g id="analytics-graph-chart-svgrepo-com" transform="translate(1 1)">
                                                    <path id="Path_499" data-name="Path 499" d="M3,3V17.814" transform="translate(-3 -3)" fill="none" stroke={items?.display?.primaryColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                    <path id="Path_500" data-name="Path 500" d="M17.814,21H3" transform="translate(-3 -6.186)" fill="none" stroke={items?.display?.primaryColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                    <path id="Path_501" data-name="Path 501" d="M7,14.761l4.321-4.321,2.88,2.88L18.522,9" transform="translate(-3.708 -4.062)" fill="none" stroke={items?.display?.primaryColor} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                                </g>
                                            </svg>


                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>)
                }
            </div>



        </div>

    );
};

export default MyCards;