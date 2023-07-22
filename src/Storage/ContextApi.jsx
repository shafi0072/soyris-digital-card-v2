import React, { createContext, useContext, useState } from 'react';
export const userContext = createContext()
const ContextApi = ({ children }) => {
    const [color, setColor] = useState('#0077B5')
    const [profileImage, setProfileImage] = useState(null)
    const [logoImage, setLogoImage] = useState(null)
    const [infos, setInfo] = useState({})
    const value = {
        color,
        infos,
        setColor,
        profileImage,
        logoImage,
        setLogoImage,
        setProfileImage,
        setInfo
    }
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

export default ContextApi;