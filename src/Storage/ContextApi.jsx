import React, { createContext, useContext, useEffect, useState } from 'react';
import { baseUrl } from '../config/Server';
export const userContext = createContext()
const ContextApi = ({ children }) => {
    const [userData, setUserData] = useState({})
    const [userCardData, setUserCardData] = useState({})
    const [color, setColor] = useState('#0077B5')
    const [profileImage, setProfileImage] = useState(null)
    const [design, setDesign] = useState('classic')
    const [logoImage, setLogoImage] = useState(null)
    const [infos, setInfo] = useState({})
    console.log({infos})
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
            .then(data => {setUserData(data)})
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        const userCardId = localStorage.getItem('cardId')
        fetch(`${baseUrl}/cards/singleCard/${userCardId}`)
            .then(res => res.json())
            .then(data => {setUserCardData(data); setInfo(data?.profileInfo); setProfileImage(data?.display?.ProfileImage); setColor(data?.display?.color); setLogoImage(data?.display?.Logo); setDesign(data?.display?.design)})
            .catch(err => console.log(err))
    }, [])
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

export default ContextApi;