import { createContext, useEffect, useState } from 'react';
import { baseUrl } from '../config/Server';
export const userContext = createContext()
const ContextApi = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const [userData, setUserData] = useState({})
    const [userCardData, setUserCardData] = useState({})
    const [primaryColor, setPrimaryColor] = useState('#0077B5')
    const [primaryAccent, setPrimaryAccent] = useState('#fff')
    const [secondaryColor, setSecondaryColor] = useState('#0077B5')
    const [secondaryAccent, setSecondaryAccent] = useState('#fff')
    const [profileImage, setProfileImage] = useState(null)
    const [design, setDesign] = useState('classic')
    const [logoImage, setLogoImage] = useState('')
    const [settings, setSettings] = useState({})
    const [infos, setInfo] = useState({})
    const [newFeilds, setNewFeilds] = useState([])
    const [qrStyle, setQrStyle] = useState('squares');
    const [foregroundColor, setForegroundColor] = useState('#000000');
    const [foregroundSecondColor, setForegroundSecondColor] = useState("#000000");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [innerEyeColor, setInnerEyeColor] = useState("#DC0E74");
    const [outerEyeColor, setOuterEyeColor] = useState("#DC0E74");
    const [selectedLogo, setSelectedLogo] = useState(null)
    const [outesEyeShape, setOuterEyeShape] = useState('square')
    const [innerEyeShape, setInnerEyeShape] = useState('square')
    const [qrSize, setQrSize] = useState(100);
    const [logoSize, setLogoSize] = useState(20);

    const value = {
        logoSize,
        qrSize,
        outerEyeColor,
        innerEyeShape,
        outesEyeShape,
        loading,
        selectedLogo,
        innerEyeColor,
        backgroundColor,
        newFeilds,
        primaryColor,
        primaryAccent,
        secondaryColor,
        secondaryAccent,
        infos,
        foregroundColor,
        qrStyle,
        setPrimaryColor,
        setPrimaryAccent,
        setSecondaryColor,
        setSecondaryAccent,
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
        foregroundSecondColor,
        setForegroundSecondColor,
        setBackgroundColor,
        setInnerEyeColor,
        setSelectedLogo,
        setLoading,
        setOuterEyeShape,
        setInnerEyeShape,
        setOuterEyeColor,
        setQrSize,
        setLogoSize
    }


    useEffect(() => {
        const email = localStorage.getItem('email')
        fetch(`${baseUrl}/add-user/user/${email}`)
            .then(res => res.json())
            .then(data => { setUserData(data) })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        setLoading(true)
        const userCardId = localStorage.getItem('cardId')
        fetch(`${baseUrl}/cards/singleCard/${userCardId}`)
            .then(res => res.json())
            .then(data => { setUserCardData(data); setNewFeilds(data?.fields); setInfo(data?.profileInfo); setProfileImage(data?.display?.ProfileImage); setColor(data?.display?.color); setLogoImage(data?.display?.Logo); setDesign(data?.display?.design); setSettings(data?.setting); setLoading(false); })
            .catch(err => console.log(err))
    }, [])
   
    useEffect(() => {
        if(userCardData?.QrCode?.pattern){
            setQrStyle(userCardData?.QrCode?.pattern)
        }
        if(userCardData?.QrCode?.fgColor){
            setForegroundColor(userCardData?.QrCode?.fgColor)
        }
        if(userCardData?.QrCode?.bgColor){
            setBackgroundColor(userCardData?.QrCode?.bgColor)
        }
        if(userCardData?.QrCode?.QrSize){
            setQrSize(parseInt(userCardData?.QrCode?.QrSize))
        }
        if(userCardData?.QrCode?.innerEyeStyle){
            setInnerEyeShape(userCardData?.QrCode?.innerEyeStyle)
        }
        if(userCardData?.QrCode?.innerEyeColor){
            setInnerEyeColor(userCardData?.QrCode?.innerEyeColor)
        }
        if(userCardData?.QrCode?.outerEyeStyle){
            setOuterEyeShape(userCardData?.QrCode?.outerEyeStyle)
        }
        if(userCardData?.QrCode?.outerEyeColor){
            setOuterEyeColor(userCardData?.QrCode?.outerEyeColor)
        }
        if(userCardData?.QrCode?.logo){
            setSelectedLogo(userCardData?.QrCode?.logo)
        }
        if(userCardData?.QrCode?.logoSize){
            setLogoSize(userCardData?.QrCode?.logoSize)
        }
        if(userCardData?.display?.primaryColor) setPrimaryColor(userCardData?.display?.primaryColor)
        if(userCardData?.display?.primaryAccent) setPrimaryAccent(userCardData?.display?.primaryAccent)
        if(userCardData?.display?.secondaryColor) setSecondaryColor(userCardData?.display?.secondaryColor)
        if(userCardData?.display?.secondaryAccent) setSecondaryAccent(userCardData?.display?.secondaryAccent)
        if(userCardData?.display?.Logo) setLogoImage(userCardData?.display?.Logo)
        if(userCardData?.setting) setSettings(userCardData?.setting)

    }, [userCardData?.QrCode, userCardData?.display?.primaryColor,userCardData?.display?.primaryAccent,userCardData?.display?.secondaryColor,userCardData?.display?.secondaryAccent,userCardData?.display?.Logo, userCardData?.setting]);
    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
};

export default ContextApi;