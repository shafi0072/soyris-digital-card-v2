import React, { useContext, useEffect, useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { userContext } from '@/src/Storage/ContextApi';
import CloseIcon from '@mui/icons-material/Close';
import ProfileImage from './ProfileImage';
import LogoImage from './LogoImage';
import { BlockPicker, ChromePicker } from 'react-color';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { baseUrl } from '@/src/config/Server';
import { toast } from 'react-toastify';
import InputColor from 'react-input-color';

const Design = () => {
    // const [color, setColor] = useState({});
    const [border, setBorder] = useState('clasic');
    const [colorName, setColorname] = useState('')
    const {open, profileImage, logoImage, userData, design, primaryColor,
        primaryAccent,
        secondaryColor,
        secondaryAccent,
        setPrimaryColor,
        setPrimaryAccent,
        setSecondaryColor,
        setSecondaryAccent,
        setDesign, userCardData, setIsLoading } = useContext(userContext)
    const [customColor, setCustomColor] = useState(false)
    console.log({ primaryAccent });
    const colorPicker = useRef()
    const handleColor = color => {
        setPrimaryColor(color);
        setSecondaryColor(color);
        setPrimaryAccent('#fff');
        setSecondaryAccent('#fff');
        setCustomColor(false)
    }
    const handleDesignSubmit = (e) => {
        setIsLoading(true)
        const userCardId = localStorage.getItem('cardId')
        fetch(`${baseUrl}/cards/profile/display/${userCardId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                display: {
                    design: design,
                    primaryColor,
                    primaryAccent,
                    secondaryColor,
                    secondaryAccent,
                    ProfileImage: `${profileImage}`,
                    Logo: `${logoImage}`
                }
            })
        })
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                toast.success('Desgine Update Success fully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(err => console.log({ err }))
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (colorPicker.current && !colorPicker.current.contains(event.target)) {
                setColorname('');
            }
        };

        // Add event listener to listen for clicks outside of colorPicker
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='h-[100vh] overflow-y-scroll mb-20 scroll-hide'>
            <div className='border-b border-[#CBD5E0] pb-8'>
                <h2 className='text-xl font-bold text-black pb-2 '>Design</h2>
                <div className='flex gap-3'>
                    <button className={`${design === 'classic' && 'border border-[#0F66A0]'} p-2  relative w-[90px] h-[120px] shadow-md`} onClick={() => setDesign('classic')}>
                        <span className='absolute top-2 left-2 bottom-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="73.066" height="60.937" viewBox="0 0 73.066 60.937">
                                <g id="Group_3" data-name="Group 3" transform="translate(-610 -437)">
                                    <rect id="Rectangle_24" data-name="Rectangle 24" width="73.031" height="43.449" rx="13" transform="translate(610 437)" fill="#0f66a0" />
                                    <g id="Group_2" data-name="Group 2" transform="translate(610 464.772)">
                                        <path id="wave-left" d="M0,35.773v6.272H18.369l-.006-.282C12.206,41.8,6.388,39.706,0,35.773Z" transform="translate(0 -25.133)" fill="#fff" />
                                        <path id="wave-right" d="M110.107,6.108c-5.744-.063-12.756,1.759-23.152,7.963C78.608,19.052,71.622,21.405,65,21.447h0v.3h54.532V7.718A34.637,34.637,0,0,0,110.107,6.108Z" transform="translate(-46.466 -4.714)" fill="#fff" />
                                        <path id="wave" d="M0,4.956V10.6C13.456,18.9,24.5,19.4,40.858,9.64S65.059,1.15,72.9,3.394V1.93C54.895-5,40.277,8.692,28.951,12.108S9.971,13.083,0,4.956Z" transform="translate(0 0)" fill="#0e66a0" />
                                    </g>
                                    <path id="Rectangle_25" data-name="Rectangle 25" d="M0,0H73.031a0,0,0,0,1,0,0V2.64a13,13,0,0,1-13,13H13a13,13,0,0,1-13-13V0A0,0,0,0,1,0,0Z" transform="translate(610 482.297)" fill="#fff" />
                                </g>
                            </svg>
                        </span>
                        <span className='absolute bottom-2 left-0 right-0 text-center text-[#2C2C2C]'>Classic</span>
                    </button>
                    <button className={`${design === 'flat' && 'border border-[#0F66A0]'} p-2  relative w-[90px] h-[120px] shadow-md`} onClick={() => setDesign('flat')}>
                        <span className='absolute top-2 left-2 bottom-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="73.031" height="35.449" viewBox="0 0 73.031 35.449">
                                <path id="Rectangle_24" data-name="Rectangle 24" d="M13,0H60.031a13,13,0,0,1,13,13V35.449a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V13A13,13,0,0,1,13,0Z" fill="#0f66a0" />
                            </svg>
                        </span>

                        <span className='absolute bottom-2 left-0 right-0 text-center text-[#2C2C2C]'>Flat</span>

                    </button>
                    <button className={`${design === 'pro' && 'border border-[#0F66A0]'} p-2  relative w-[90px] h-[120px] shadow-md`} onClick={() => setDesign('pro')}>
                        <span style={{ transform: "rotate(180deg)" }} className='absolute  left-2 bottom-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="73.031" height="35.449" viewBox="0 0 73.031 35.449">
                                <path id="Rectangle_24" data-name="Rectangle 24" d="M13,0H60.031a13,13,0,0,1,13,13V35.449a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V13A13,13,0,0,1,13,0Z" fill="#0f66a0" />
                            </svg>
                        </span>

                        <span className='absolute bottom-2 left-0 right-0 text-center text-[#2C2C2C]'>Pro</span>

                    </button>
                </div>
            </div>
            <div className='mt-8 border-b border-[#CBD5E0] pb-8'>
                <h2 className='text-xl font-bold text-black pb-2 '>Color</h2>

                <div className='flex'>
                    <div onClick={() => setCustomColor(!customColor)} className="cursor-pointer rounded-full text-white text-center pt-[2px] w-[30px] h-[30px] mr-2 relative ">
                        <img src="/1fb07539-85c6-49e4-80b3-83e7d03064f8.png" alt="" />
                        {primaryColor !== '#cccc00' && primaryColor !== '#0053a2' && primaryColor !== '#1A7C16' && primaryColor !== '#EB531B' && primaryColor !== '#E31BEB' && primaryColor !== '#1D15F7' && <CheckIcon className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 ' />}
                    </div>
                    <div onClick={() => handleColor('#cccc00')} className="cursor-pointer rounded-full text-white text-center pt-[2px] w-[30px] h-[30px] bg-[#cccc00] ml-2">
                        {primaryColor === '#cccc00' && <CheckIcon />}
                    </div>
                    <div onClick={() => { handleColor('#0053a2'); setSecondaryColor('#0053a2') }} className="cursor-pointer rounded-full text-white text-center pt-[2px] borde w-[30px] h-[30px] bg-[#0053a2] ml-2">
                        {primaryColor === '#0053a2' && <CheckIcon />}
                    </div>
                    <div onClick={() => handleColor('#1A7C16')} className="cursor-pointer rounded-full text-white text-center pt-[2px] w-[30px] h-[30px] bg-[#1A7C16] ml-2">
                        {primaryColor === '#1A7C16' && <CheckIcon />}
                    </div>
                    <div onClick={() => handleColor('#EB531B')} className="cursor-pointer rounded-full text-white text-center pt-[2px] w-[30px] h-[30px] bg-[#EB531B] ml-2">
                        {primaryColor === '#EB531B' && <CheckIcon />}
                    </div>
                    <div onClick={() => handleColor('#E31BEB')} className="cursor-pointer rounded-full text-white text-center pt-[2px]  w-[30px] h-[30px] bg-[#E31BEB] ml-2">
                        {primaryColor === '#E31BEB' && <CheckIcon />}
                    </div>
                    <div onClick={() => handleColor('#1D15F7')} className="cursor-pointer rounded-full text-white text-center pt-[2px] w-[30px] h-[30px] bg-[#1D15F7] ml-2">
                        {primaryColor === '#1D15F7' && <CheckIcon />}
                    </div>
                </div>
                {
                    customColor && <div className='flex justify-between items-center'>
                        <div>
                            <div className='flex justify-between items-center my-5'>
                                <div className=''>
                                    <h1 className="text-md font-semibold">Primary Color <InfoOutlinedIcon /></h1>
                                </div>
                                <div className='flex bg-gray-200 w-[150px]  rounded-lg ml-5'>

                                    <input

                                        type="color"
                                        value={primaryColor}
                                        onChange={(e) => setPrimaryColor(e.target.value)}
                                        className='cursor-pointer border-none'

                                    />
                                    <br />
                                    <InputColor
                                        style={{ display: "none" }}
                                        initialValue={primaryColor}
                                        onChange={e => setPrimaryColor(e?.hex)}
                                    />

                                    <div className='px-3'>
                                        <span className='text-center'>{primaryColor}</span>
                                    </div>
                                </div>

                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <div className=''>
                                    <h1 className="text-md font-semibold">Primary Accent <InfoOutlinedIcon /></h1>
                                </div>
                                <div className='flex bg-gray-200 w-[150px] rounded-lg ml-5'>
                                    <input
                                        id="secondaryColor"
                                        type="color"
                                        value={primaryAccent}
                                        onChange={(e) => setPrimaryAccent(e.target.value)}
                                        className='cursor-pointer border-none'

                                    />
                                    <br />
                                    <InputColor
                                        style={{ display: "none" }}
                                        initialValue={primaryAccent}
                                        onChange={e => setPrimaryAccent(e?.hex)}
                                    />
                                    <div className='px-3'>
                                        <span className='text-center'>{primaryAccent}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <div className=''>
                                    <h1 className="text-md font-semibold">Secondary Color <InfoOutlinedIcon /></h1>
                                </div>
                                <div className='flex bg-gray-200 w-[150px]  rounded-lg ml-5'>


                                    <input
                                        id="secondaryColor"
                                        type="color"
                                        value={secondaryColor}
                                        onChange={(e) => setSecondaryColor(e.target.value)}
                                        className='cursor-pointer'

                                    />
                                    <br />
                                    <InputColor
                                        style={{ display: "none" }}
                                        initialValue={secondaryColor}
                                        onChange={e => setSecondaryColor(e?.hex)}
                                    />

                                    <div className='px-3'>
                                        <span className='text-center'>{secondaryColor}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <div className=''>
                                    <h1 className="text-md font-semibold">Secondary Accent <InfoOutlinedIcon /></h1>
                                </div>
                                <div className='flex bg-gray-200 w-[150px]  rounded-lg ml-5'>

                                    <input
                                        id="secondaryAccent"
                                        type="color"
                                        value={secondaryAccent}
                                        onChange={(e) => setSecondaryAccent(e.target.value)}
                                        className='cursor-pointer border-none'
                                    />
                                    <br />
                                    <InputColor
                                        style={{ display: "none" }}
                                        initialValue={secondaryAccent}
                                        onChange={e => setSecondaryAccent(e?.hex)}
                                    />
                                    <div className='px-3'>
                                        <span className='text-center'>{secondaryAccent}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className='mt-5 border-b border-[#CBD5E0] pb-8'>
                <h2 className='text-xl font-bold text-black pb-2 '>Profile Photo</h2>

                <ProfileImage />
            </div>
            <div className='mt-5 '>
                <h2 className='text-xl font-bold text-black pb-2 '>Logo</h2>
                <LogoImage />
            </div>
            <div className={`${!open? 'ps-[5%]' : 'ps-[15%]'}  fixed bottom-0 bg-[white] right-[400px] h-[70px]  left-[0%]    z-20`} style={{ boxShadow: ' 0px -4px  10px lightgray' }}>

                <button onClick={handleDesignSubmit} className='px-5 py-1 my-4 border border-[black] bg-[black] font-medium text-lg text-white rounded cursor-pointer hover:bg-[black]'>Save</button>


            </div>
        </div>


    );
};

export default Design;