import { userContext } from '@/src/Storage/ContextApi';
import { baseUrl } from '@/src/config/Server';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
const MyCards = () => {
    const [userCard, setUserCard] = useState([])
    const { userData } = useContext(userContext)


    useEffect(() => {
        fetch(`${baseUrl}/cards/cards/${userData?.email}`)
            .then(res => res.json())
            .then(data => setUserCard(data))
            .catch(err => console.log(err))
    }, [userData, userCard])

    return (
        <>
            <div className='flex'>
            {
                userCard?.map((items, index) => 
                <div className='w-[300px] ml-4 border rounded-2 p-2'>
                    <div className='bg-[#EB531B] w-full h-[300px] rounded-md'>
                        <img src="/man.jpg" className='w-full h-[95%] ' alt="" />
                    </div>
                    <h2 className='text-center text-2xl py-5 border-b-2 border-dashed border-red-300'>Spyros Poulis - Work</h2>
                    <div className='flex justify-center'>
                        <ul className='mt-5 flex gap-4'>
                            <li>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18.06" height="18.031" viewBox="0 0 18.06 18.031">
                                        <g id="edit-3-svgrepo-com" transform="translate(0.75 0.75)">
                                            <path id="Path_502" data-name="Path 502" d="M18.76,5.606l-7.851,7.851c-.782.782-3.1,1.144-3.621.625s-.165-2.839.617-3.621l7.86-7.86a2.123,2.123,0,1,1,3,3Z" transform="translate(-2.892 -1.913)" fill="none" stroke="#0077b5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                            <path id="Path_503" data-name="Path 503" d="M9.407,4H5.292A3.292,3.292,0,0,0,2,7.292v8.23a3.292,3.292,0,0,0,3.292,3.292h9.053c1.819,0,2.469-1.481,2.469-3.292V11.407" transform="translate(-2 -2.283)" fill="none" stroke="#0077b5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                                        </g>
                                    </svg>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15.637" height="16.46" viewBox="0 0 15.637 16.46">
                                        <path id="settings-svgrepo-com_1_" data-name="settings-svgrepo-com (1)" d="M12.282,2.125A4.166,4.166,0,0,0,10.818,2a4.166,4.166,0,0,0-1.464.125,1.652,1.652,0,0,0-.9.891,2.015,2.015,0,0,0-.119.711A1.329,1.329,0,0,1,7.683,4.84a1.35,1.35,0,0,1-1.3.006A2.054,2.054,0,0,0,5.7,4.593a1.668,1.668,0,0,0-1.226.326,4.106,4.106,0,0,0-.841,1.2,4.09,4.09,0,0,0-.623,1.321,1.637,1.637,0,0,0,.329,1.217A2.04,2.04,0,0,0,3.9,9.11a1.3,1.3,0,0,1,0,2.24,2.042,2.042,0,0,0-.561.457,1.637,1.637,0,0,0-.329,1.217,4.09,4.09,0,0,0,.623,1.321,4.105,4.105,0,0,0,.841,1.2,1.668,1.668,0,0,0,1.226.326,2.054,2.054,0,0,0,.679-.253,1.35,1.35,0,0,1,1.3.006,1.329,1.329,0,0,1,.655,1.114,2.015,2.015,0,0,0,.119.71,1.652,1.652,0,0,0,.9.891,4.167,4.167,0,0,0,1.464.125,4.167,4.167,0,0,0,1.464-.125,1.652,1.652,0,0,0,.9-.891,2.014,2.014,0,0,0,.119-.711,1.329,1.329,0,0,1,.655-1.114,1.35,1.35,0,0,1,1.3-.006,2.054,2.054,0,0,0,.679.253,1.667,1.667,0,0,0,1.226-.326,4.1,4.1,0,0,0,.841-1.2,4.091,4.091,0,0,0,.623-1.321,1.637,1.637,0,0,0-.329-1.217,2.041,2.041,0,0,0-.561-.457,1.3,1.3,0,0,1,0-2.24,2.04,2.04,0,0,0,.561-.457,1.637,1.637,0,0,0,.329-1.217A4.092,4.092,0,0,0,18,6.115a4.1,4.1,0,0,0-.841-1.2,1.668,1.668,0,0,0-1.226-.326,2.053,2.053,0,0,0-.679.253,1.35,1.35,0,0,1-1.3-.006A1.329,1.329,0,0,1,13.3,3.727a2.014,2.014,0,0,0-.119-.711A1.652,1.652,0,0,0,12.282,2.125ZM10.818,12.7A2.469,2.469,0,1,0,8.331,10.23,2.478,2.478,0,0,0,10.818,12.7Z" transform="translate(-3 -2)" fill="#0077b5" fill-rule="evenodd" />
                                    </svg>

                                </button>
                            </li>
                            <li>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.991" height="16.46" viewBox="0 0 13.991 16.46">
                                        <path id="share-svgrepo-com" d="M11.979,4.743a2.75,2.75,0,1,1,.793,1.926l-3.815,2.6a2.744,2.744,0,0,1-.15,1.578l4.183,2.748a2.741,2.741,0,1,1-1.012,2.124,2.724,2.724,0,0,1,.238-1.116L8.068,11.875A2.743,2.743,0,1,1,8.414,8.1l3.7-2.517A2.73,2.73,0,0,1,11.979,4.743Z" transform="translate(-3.5 -2)" fill="#0077b5" fill-rule="evenodd" />
                                    </svg>

                                </button>
                            </li>
                            <li>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.228" height="16.814" viewBox="0 0 17.228 16.814">
                                        <g id="analytics-graph-chart-svgrepo-com" transform="translate(1 1)">
                                            <path id="Path_499" data-name="Path 499" d="M3,3V17.814" transform="translate(-3 -3)" fill="none" stroke="#0077b5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                            <path id="Path_500" data-name="Path 500" d="M17.814,21H3" transform="translate(-3 -6.186)" fill="none" stroke="#0077b5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                            <path id="Path_501" data-name="Path 501" d="M7,14.761l4.321-4.321,2.88,2.88L18.522,9" transform="translate(-3.708 -4.062)" fill="none" stroke="#0077b5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                        </g>
                                    </svg>


                                </button>
                            </li>
                        </ul>
                    </div>
                </div>)
            }
            </div>


            {/* <div className='flex gap-14'>
            <div className='w-[300px] '>
                <div className='bg-[#EB531B] w-full h-[300px] rounded-md'>
                    <img src="/man.jpg" className='w-full h-[95%] ' alt="" />
                </div>
                <div className='my-5'>
                    <img className=' w-[80%] h-[50px] mx-auto ' src="/Image 1.png" alt="" />

                </div>
                <div className='p-3'>
                    <div>
                        <h2 className='text-xl font-bold'>Dr. John Andrew <span className='font-thin'>PHD</span> </h2>
                        <h4 className='text-lg mt-3'>Digital Officer</h4>
                        <h4 className='italic text-[#EB531B] text-lg'>Marketing</h4>
                        <h4 className='italic  text-lg'>Engine Media</h4>
                    </div>
                    <div >
                        <p className='my-3 italic'>I lead product across teams for Nike and I
                            ski in my free time. </p>
                        <p className='italic text-[#656565] flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18">
                                <g id="chat-bubble-outline-badged-svgrepo-com" transform="translate(-0.13 0.263)">
                                    <path id="Path_5" data-name="Path 5" d="M17.114,7.408a3.579,3.579,0,0,1-.91.318,4.985,4.985,0,0,1,.246,1.517,5.337,5.337,0,0,1-1.787,3.906.482.482,0,0,0-.154.352v2.572L12.4,14.729a.482.482,0,0,0-.4-.053,7.706,7.706,0,0,1-2.293.347c-3.718,0-6.743-2.591-6.743-5.78s3.025-5.78,6.743-5.78a7.708,7.708,0,0,1,2.192.318,3.583,3.583,0,0,1,.216-.935A8.67,8.67,0,0,0,9.706,2.5C5.458,2.5,2,5.525,2,9.243s3.458,6.743,7.706,6.743a8.67,8.67,0,0,0,2.35-.328l2.664,1.7a.482.482,0,0,0,.742-.4V13.708a6.261,6.261,0,0,0,1.927-4.465A5.934,5.934,0,0,0,17.114,7.408Z" transform="translate(-1.275 -1.14)" fill="#969696" />
                                    <path id="Path_6" data-name="Path 6" d="M10.482,15.5a.482.482,0,0,0,0,.963h6.743a.482.482,0,0,0,0-.963Z" transform="translate(-5.422 -7.879)" fill="#969696" />
                                    <path id="Path_7" data-name="Path 7" d="M13.732,20.5a.482.482,0,1,0,0,.963h3.612a.482.482,0,1,0,0-.963Z" transform="translate(-7.107 -10.47)" fill="#969696" />
                                    <path id="Path_8" data-name="Path 8" d="M10.28,10.982a.482.482,0,0,0,.482.482h6.473a.482.482,0,0,0,.4-.226,3.627,3.627,0,0,1-.747-.737H10.762A.482.482,0,0,0,10.28,10.982Z" transform="translate(-5.567 -5.287)" fill="#969696" />
                                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="2.5" cy="2.5" r="2.5" transform="translate(11.13 0.737)" fill="#969696" />
                                    <rect id="Rectangle_22" data-name="Rectangle 22" width="17" height="18" transform="translate(0.13 -0.263)" fill="none" />
                                </g>
                            </svg>
                            <span>Goes by Mike (He/Him)</span></p>
                    </div>
                    <div className='bg-black text-white mt-5 flex justify-center rounded'>
                        <button className='flex items-center gap-3 py-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12.059" viewBox="0 0 12 12.059">
                                <g id="Group_1" data-name="Group 1" transform="translate(0 0.029)">
                                    <line id="Line_1" data-name="Line 1" x2="12" transform="translate(0 6)" fill="none" stroke="#fff" stroke-width="2.5" />
                                    <line id="Line_2" data-name="Line 2" x2="0.281" y2="12" transform="translate(5.771)" fill="none" stroke="#fff" stroke-width="2.5" />
                                </g>
                            </svg>
                            <span>Add to contacts</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-[381px]'>
                <div
                    className="w-full  h-[300px]  relative rounded"

                >
                    <img
                        className="h-full w-full object-cover rounded"
                        src='/lady.png'
                    />
                    <div className="">
                        <div className="absolute  top-[72%]  z-10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="381"
                                height="88.28"
                                viewBox="0 0 381 88.28"
                            >
                                <path
                                    id="wave"
                                    d="M0,25.9V55.406c70.325,43.351,128.033,45.974,213.535-5.027S340.019,6.009,381,17.739v-7.65C286.9-26.122,210.5,45.427,151.305,63.278S52.111,68.378,0,25.9Z"
                                    transform="translate(0 0)"
                                    fill='#0E66A0'
                                />
                            </svg>
                        </div>
                        <div className="absolute bottom-0 left-0">
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
                        <div className="absolute -bottom-[6px] right-0 z-[5]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="285"
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
                            className="absolute bottom-3 right-0 z-50 w-[100px]"
                            src='/Image 1.png'
                            alt=""
                        />
                    </div>
                </div>
                <div className='p-3'>
                    <div className='ps-4 border-l-4 border-[#0E66A0] mt-5'>
                        <h2 className='text-xl font-bold'>Dr. John Andrew <span className='font-thin'>PHD</span> </h2>
                        <h4 className='text-lg mt-3'>Digital Officer</h4>
                        <h4 className='italic text-[#EB531B] text-lg'>Marketing</h4>
                        <h4 className='italic  text-lg'>Engine Media</h4>
                    </div>
                    <div >
                        <p className='my-3 italic'>I lead product across teams for Nike and I
                            ski in my free time. </p>
                        <p className='italic text-[#656565] flex items-center gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18">
                                <g id="chat-bubble-outline-badged-svgrepo-com" transform="translate(-0.13 0.263)">
                                    <path id="Path_5" data-name="Path 5" d="M17.114,7.408a3.579,3.579,0,0,1-.91.318,4.985,4.985,0,0,1,.246,1.517,5.337,5.337,0,0,1-1.787,3.906.482.482,0,0,0-.154.352v2.572L12.4,14.729a.482.482,0,0,0-.4-.053,7.706,7.706,0,0,1-2.293.347c-3.718,0-6.743-2.591-6.743-5.78s3.025-5.78,6.743-5.78a7.708,7.708,0,0,1,2.192.318,3.583,3.583,0,0,1,.216-.935A8.67,8.67,0,0,0,9.706,2.5C5.458,2.5,2,5.525,2,9.243s3.458,6.743,7.706,6.743a8.67,8.67,0,0,0,2.35-.328l2.664,1.7a.482.482,0,0,0,.742-.4V13.708a6.261,6.261,0,0,0,1.927-4.465A5.934,5.934,0,0,0,17.114,7.408Z" transform="translate(-1.275 -1.14)" fill="#969696" />
                                    <path id="Path_6" data-name="Path 6" d="M10.482,15.5a.482.482,0,0,0,0,.963h6.743a.482.482,0,0,0,0-.963Z" transform="translate(-5.422 -7.879)" fill="#969696" />
                                    <path id="Path_7" data-name="Path 7" d="M13.732,20.5a.482.482,0,1,0,0,.963h3.612a.482.482,0,1,0,0-.963Z" transform="translate(-7.107 -10.47)" fill="#969696" />
                                    <path id="Path_8" data-name="Path 8" d="M10.28,10.982a.482.482,0,0,0,.482.482h6.473a.482.482,0,0,0,.4-.226,3.627,3.627,0,0,1-.747-.737H10.762A.482.482,0,0,0,10.28,10.982Z" transform="translate(-5.567 -5.287)" fill="#969696" />
                                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="2.5" cy="2.5" r="2.5" transform="translate(11.13 0.737)" fill="#969696" />
                                    <rect id="Rectangle_22" data-name="Rectangle 22" width="17" height="18" transform="translate(0.13 -0.263)" fill="none" />
                                </g>
                            </svg>
                            <span>Goes by Mike (He/Him)</span></p>
                    </div>
                    <div className='my-3 flex items-center gap-2'>
                        <span className='w-[40px] h-[40px] rounded-full bg-[#0E66A0] flex items-center justify-center'><svg xmlns="http://www.w3.org/2000/svg" width="14.094" height="15.758" viewBox="0 0 14.094 15.758">
                            <path id="phone-svgrepo-com" d="M10.163,5.554S9.927,5,9.566,5a.9.9,0,0,0-.663.277c-.123.113-2.185,1.807-2.185,1.807a1.948,1.948,0,0,0-.554,1.508A10,10,0,0,0,7.4,12.932,20.094,20.094,0,0,0,12.443,18.9a11.708,11.708,0,0,0,2.809,1.569,8.14,8.14,0,0,0,1.363.285,1.384,1.384,0,0,0,.892-.276c.384-.279,2.538-2.011,2.538-2.011a.656.656,0,0,0-.085-1.03c-.615-.554-2.483-1.785-2.883-2.109a.988.988,0,0,0-1.217.039c-.246.224-.685.593-.738.64-.08.062-.3.261-.547.162a7.538,7.538,0,0,1-2.793-2.454,7.627,7.627,0,0,1-1.493-2.739.4.4,0,0,1,.161-.471c.178-.123.832-.668.832-.668a.944.944,0,0,0,.246-.91c-.177-.492-1.365-3.378-1.365-3.378Z" transform="translate(-6.161 -5)" fill="#fff" />
                        </svg>
                        </span>
                        <h2 className=''>032937890232 <span className='ml-[26px]'>Ext. 8801</span> <br />Office</h2>
                    </div>
                    <div className='bg-[#0E66A0] text-white mt-5 flex justify-center rounded'>
                        <button className='flex items-center gap-3 py-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12.059" viewBox="0 0 12 12.059">
                                <g id="Group_1" data-name="Group 1" transform="translate(0 0.029)">
                                    <line id="Line_1" data-name="Line 1" x2="12" transform="translate(0 6)" fill="none" stroke="#fff" stroke-width="2.5" />
                                    <line id="Line_2" data-name="Line 2" x2="0.281" y2="12" transform="translate(5.771)" fill="none" stroke="#fff" stroke-width="2.5" />
                                </g>
                            </svg>
                            <span>Add to contacts</span>
                        </button>
                    </div>
                </div>
            </div>
        </div> */}
        </>

    );
};

export default MyCards;