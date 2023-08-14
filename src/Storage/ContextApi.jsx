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
    const [settings, setSettings] = useState({})
    const [infos, setInfo] = useState({})
    const [newFeilds, setNewFeilds] = useState({})
    const [qrStyle,setQrStyle] = useState('squares');
    const [foregroundColor, setForegroundColor] = useState('#000000')
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [eyeColor, setEyeColor] = useState("#DC0E74");
    const [selectedLogo,setSelectedLogo] = useState(null)
    console.log({infos})
    const value = {
        selectedLogo,
        eyeColor,
        backgroundColor,
        newFeilds,
        color,
        infos,
        foregroundColor,
        qrStyle,
        setColor,
        profileImage,
        logoImage,
        userCardData,
        setInfo,
        setLogoImage,
        setProfileImage,
        design,
        setDesign,
        userData,
        settings,
        setNewFeilds,
        setQrStyle,
        setForegroundColor,
        setBackgroundColor,
        setEyeColor,
        setSelectedLogo
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
            .then(data => {setUserCardData(data); setInfo(data?.profileInfo); setProfileImage(data?.display?.ProfileImage); setColor(data?.display?.color); setLogoImage(data?.display?.Logo); setDesign(data?.display?.design); setSettings(data?.setting)})
            .catch(err => console.log(err))
    }, [])
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

export default ContextApi;