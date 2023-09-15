import React, { useContext } from 'react';

const ProfileInfo = ({ infos,color, userData,userCardData, design }) => {
    console.log({userCardData});
  
    return (
        <>
        {infos &&
        <div className='mt-3'>
            { infos?.prefix || infos?.first_name || infos?.last_name || infos?.suffix ||infos?.accreditations &&<h2 className={`font-bold text-xl   ${design === "classic" ? 'border-l-2 pl-2': ''}`} style={{borderColor: color}}>
                {infos?.prefix ? infos?.prefix + '. ' : ''} {infos?.first_name ? infos?.first_name : userData?.profileInfo?.first_name} {infos?.last_name ? infos?.last_name : userData?.profileInfo?.last_name} <br />
                {infos?.suffix ? infos?.suffix : userData?.profileInfo?.suffix} <span className='font-thin text-base '> {infos?.accreditations ? infos?.accreditations : userData?.profileInfo?.accreditations} </span>
            </h2>}
            <h3 className={`font-base text-[18px] ${design === "classic" && `border-l-2  pl-2`}`}  style={{borderColor: color}}>
                {infos?.job_title ? infos?.job_title : userData?.profileInfo?.job_title}
            </h3>
            <h3 className={`font-semibold text-[18px] ${design === "classic" && 'border-l-2 pl-2'}`} style={{borderColor: color, color: color}}>
                {infos?.department ? infos?.department : userData?.profileInfo?.department}
            </h3>
            <h3 className={`italic text-[18px] ${design === "classic" && 'border-l-2 pl-2'}`} style={{borderColor: color}}>
                {infos?.company ? infos?.company : userData?.profileInfo?.company}
            </h3>
            <p className='italic text-md mt-4'>
                {infos?.introduction ? infos?.introduction : userData?.profileInfo?.introduction}
            </p>
            {infos?.preferred_name ?
            (<h4 className='italic text-[15px]  text-[#656565] mt-3 flex items-center gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                    <g id="chat-bubble-outline-badged-svgrepo-com" transform="translate(-0.049 0.359)">
                        <path id="Path_5" data-name="Path 5" d="M20.341,8.456a4.343,4.343,0,0,1-1.1.386,6.049,6.049,0,0,1,.3,1.841,6.476,6.476,0,0,1-2.168,4.74.584.584,0,0,0-.187.427V18.97l-2.56-1.631a.584.584,0,0,0-.485-.064,9.352,9.352,0,0,1-2.782.421c-4.512,0-8.183-3.144-8.183-7.014s3.67-7.014,8.183-7.014a9.353,9.353,0,0,1,2.66.386,4.348,4.348,0,0,1,.262-1.134A10.52,10.52,0,0,0,11.352,2.5C6.2,2.5,2,6.17,2,10.683s4.2,8.183,9.352,8.183a10.521,10.521,0,0,0,2.852-.4l3.232,2.057a.584.584,0,0,0,.9-.491V16.1a7.6,7.6,0,0,0,2.338-5.418A7.2,7.2,0,0,0,20.341,8.456Z" transform="translate(-0.831 -1.039)" fill="#969696" />
                        <path id="Path_6" data-name="Path 6" d="M10.584,15.5a.584.584,0,1,0,0,1.169h8.183a.584.584,0,0,0,0-1.169Z" transform="translate(-4.155 -6.441)" fill="#969696" />
                        <path id="Path_7" data-name="Path 7" d="M13.834,20.5a.584.584,0,0,0,0,1.169h4.384a.584.584,0,0,0,0-1.169Z" transform="translate(-5.506 -8.518)" fill="#969696" />
                        <path id="Path_8" data-name="Path 8" d="M10.28,11.084a.584.584,0,0,0,.584.584H18.72a.584.584,0,0,0,.485-.275A4.4,4.4,0,0,1,18.3,10.5H10.864A.584.584,0,0,0,10.28,11.084Z" transform="translate(-4.272 -4.363)" fill="#969696" />
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="3" cy="3" r="3" transform="translate(14.049 0.641)" fill="#969696" />
                        <rect id="Rectangle_22" data-name="Rectangle 22" width="21" height="21" transform="translate(0.049 -0.359)" fill="none" />
                    </g>
                </svg>
                Goes by {infos?.preferred_name} {infos?.pronouns && `(${infos?.pronouns})`}
            </h4>): userData?.profileInfo?.preferred_name ? (<h4 className='italic text-[15px] text-[#656565] mt-3 flex items-center gap-1'>
               <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
                    <g id="chat-bubble-outline-badged-svgrepo-com" transform="translate(-0.049 0.359)">
                        <path id="Path_5" data-name="Path 5" d="M20.341,8.456a4.343,4.343,0,0,1-1.1.386,6.049,6.049,0,0,1,.3,1.841,6.476,6.476,0,0,1-2.168,4.74.584.584,0,0,0-.187.427V18.97l-2.56-1.631a.584.584,0,0,0-.485-.064,9.352,9.352,0,0,1-2.782.421c-4.512,0-8.183-3.144-8.183-7.014s3.67-7.014,8.183-7.014a9.353,9.353,0,0,1,2.66.386,4.348,4.348,0,0,1,.262-1.134A10.52,10.52,0,0,0,11.352,2.5C6.2,2.5,2,6.17,2,10.683s4.2,8.183,9.352,8.183a10.521,10.521,0,0,0,2.852-.4l3.232,2.057a.584.584,0,0,0,.9-.491V16.1a7.6,7.6,0,0,0,2.338-5.418A7.2,7.2,0,0,0,20.341,8.456Z" transform="translate(-0.831 -1.039)" fill="#969696" />
                        <path id="Path_6" data-name="Path 6" d="M10.584,15.5a.584.584,0,1,0,0,1.169h8.183a.584.584,0,0,0,0-1.169Z" transform="translate(-4.155 -6.441)" fill="#969696" />
                        <path id="Path_7" data-name="Path 7" d="M13.834,20.5a.584.584,0,0,0,0,1.169h4.384a.584.584,0,0,0,0-1.169Z" transform="translate(-5.506 -8.518)" fill="#969696" />
                        <path id="Path_8" data-name="Path 8" d="M10.28,11.084a.584.584,0,0,0,.584.584H18.72a.584.584,0,0,0,.485-.275A4.4,4.4,0,0,1,18.3,10.5H10.864A.584.584,0,0,0,10.28,11.084Z" transform="translate(-4.272 -4.363)" fill="#969696" />
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="3" cy="3" r="3" transform="translate(14.049 0.641)" fill="#969696" />
                        <rect id="Rectangle_22" data-name="Rectangle 22" width="21" height="21" transform="translate(0.049 -0.359)" fill="none" />
                    </g>
                </svg>
                Goes by {userData?.profileInfo?.preferred_name} {userData?.profileInfo?.pronouns && `(${userData?.profileInfo?.pronouns})`}
            </h4>) : (<></>)
            }

        </div>}
        </>
    );
};

export default ProfileInfo;