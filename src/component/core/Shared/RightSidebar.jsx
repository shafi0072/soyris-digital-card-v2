import { userContext } from '@/src/Storage/ContextApi';
import React, { useContext } from 'react';
import Classic from './Classic/Classic';
import Flat from './Flat/Flat';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const RightSidebar = () => {
    const { profileImage, setProfileImage, color, design,logoImage,infos} = useContext(userContext)
    return (
        <div className='scroll-hide max-h-[70vh] overflow-y-scroll'>
            <div className='relative w-[363px] '>
                {design === 'classic' && <Classic color={color} profileImage={profileImage} setProfileImage={setProfileImage} logoImage={logoImage}/>}
                {design === 'flat' && <Flat color={color} profileImage={profileImage} setProfileImage={setProfileImage} logoImage={logoImage}/>}
                {infos&& <ProfileInfo design={design} infos={infos} color={color} />}
            </div>
        </div>
    );
};

export default RightSidebar;