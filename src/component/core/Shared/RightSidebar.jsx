import { userContext } from '@/src/Storage/ContextApi';
import React, { useContext } from 'react';
import Classic from './Classic/Classic';
import Flat from './Flat/Flat';

const RightSidebar = () => {
    const { profileImage, setProfileImage, color, design } = useContext(userContext)
    return (
        <div>
            <div className='relative w-[363px]'>
                {design === 'classic' && <Classic color={color} profileImage={profileImage} setProfileImage={setProfileImage}/>}
                {design === 'flat' && <Flat color={color} profileImage={profileImage} setProfileImage={setProfileImage}/>}
            </div>
        </div>
    );
};

export default RightSidebar;