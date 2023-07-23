import React, { createContext, useContext, useEffect, useState } from 'react';
import { baseUrl } from '../config/Server';
export const userContext = createContext()
const ContextApi = ({ children }) => {
    const [color, setColor] = useState('#0077B5')
    const [profileImage, setProfileImage] = useState(null)
    const [design, setDesign] = useState('classic')
    const [logoImage, setLogoImage] = useState(null)
    const [infos, setInfo] = useState({})
    const [userData, setUserData] = useState({})
    const value = {
        color,
        infos,
        setColor,
        profileImage,
        logoImage,
        setInfo,
        setLogoImage,
        setProfileImage,
        design,
        setDesign,
        userData
    }
    useEffect(() => {
        const email = localStorage.getItem('email')
        fetch(`${baseUrl}/add-user/user/${email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

export default ContextApi;