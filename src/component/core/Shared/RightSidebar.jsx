import { userContext } from '@/src/Storage/ContextApi';
import React, { useContext } from 'react';
import Classic from './Classic/Classic';
import Flat from './Flat/Flat';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import FieldData from './FieldData/FieldData';

const RightSidebar = () => {
    const { userData, profileImage, setProfileImage, color, design,logoImage,infos} = useContext(userContext)
    return (
        <div className='scroll-hide max-h-[70vh] overflow-y-scroll'>
            <div className='relative w-[363px] '>
                {design === 'classic' && <Classic color={color} profileImage={profileImage} setProfileImage={setProfileImage} logoImage={logoImage}/>}
                {design === 'flat' && <Flat color={color} profileImage={profileImage} setProfileImage={setProfileImage} logoImage={logoImage}/>}
                {infos&& <ProfileInfo infos={infos} color={color} userData={userData}/>}
                <div className='my-3'>
                    <FieldData userData={userData}/>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;