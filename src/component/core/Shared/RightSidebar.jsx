import { userContext } from '@/src/Storage/ContextApi';
import React, { useContext } from 'react';
import Classic from './Classic/Classic';
import Flat from './Flat/Flat';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const RightSidebar = () => {
    const { userData, profileImage, setProfileImage, color, design,logoImage,infos} = useContext(userContext)
    return (
        <div className='scroll-hide max-h-[70vh] overflow-y-scroll'>
            <div className='relative w-[363px] '>
                {design === 'classic' && <Classic color={color} profileImage={profileImage} setProfileImage={setProfileImage} logoImage={logoImage}/>}
                {design === 'flat' && <Flat color={color} profileImage={profileImage} setProfileImage={setProfileImage} logoImage={logoImage}/>}
<<<<<<< HEAD
                {infos&& <ProfileInfo design={design} infos={infos} color={color} />}
=======
                {infos&& <ProfileInfo infos={infos} color={color} userData={userData}/>}
>>>>>>> c388d3dfa6298e5b7fa0a42c7be7d4e64c142a8b
            </div>
        </div>
    );
};

export default RightSidebar;