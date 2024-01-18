import { createContext, useEffect, useState } from 'react';
import { baseUrl } from '../config/Server';
import LoadingOverlay from 'react-loading-overlay';
import { RiseLoader } from 'react-spinners';
import { useRouter } from 'next/router';
export const userContext = createContext()
const ContextApi = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const [userData, setUserData] = useState({})
    const [userCardData, setUserCardData] = useState({})
    const [primaryColor, setPrimaryColor] = useState('#0053a2')
    const [primaryAccent, setPrimaryAccent] = useState('#ffffff')
    const [secondaryColor, setSecondaryColor] = useState('#0053a2')
    const [secondaryAccent, setSecondaryAccent] = useState('#ffffff')
    const [profileImage, setProfileImage] = useState(null)
    const [design, setDesign] = useState('')
    const [logoImage, setLogoImage] = useState('')
    const [settings, setSettings] = useState({})
    const [infos, setInfo] = useState({})
    const [newFeilds, setNewFeilds] = useState([])
    const [qrStyle, setQrStyle] = useState('dots');
    const [foregroundColor, setForegroundColor] = useState('#0053a2');
    const [foregroundSecondColor, setForegroundSecondColor] = useState("#000000");
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [innerEyeColor, setInnerEyeColor] = useState("#D40808");
    const [outerEyeColor, setOuterEyeColor] = useState("#0053a2");
    const [selectedLogo, setSelectedLogo] = useState(null)
    const [outesEyeShape, setOuterEyeShape] = useState('dots')
    const [innerEyeShape, setInnerEyeShape] = useState('round')
    const [qrSize, setQrSize] = useState(160);
    const [logoSize, setLogoSize] = useState(20);
    const [isLoading, setIsLoading] = useState(false)
    const [openDrawar, setOpenDrawar] = useState(false)
    const [open, setOpen] = useState(false);


    const value = {
        open,
        setOpen,
        openDrawar,
        isLoading,
        setOpenDrawar,
        setIsLoading,
        setSettings,
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
        if (userCardData?.QrCode?.pattern) {
            setQrStyle(userCardData?.QrCode?.pattern)
        }
        if (userCardData?.QrCode?.fgColor) {
            setForegroundColor(userCardData?.QrCode?.fgColor)
        }
        if (userCardData?.QrCode?.bgColor) {
            setBackgroundColor(userCardData?.QrCode?.bgColor)
        }
        if (userCardData?.QrCode?.QrSize) {
            setQrSize(parseInt(userCardData?.QrCode?.QrSize))
        }
        if (userCardData?.QrCode?.innerEyeStyle) {
            setInnerEyeShape(userCardData?.QrCode?.innerEyeStyle)
        }
        if (userCardData?.QrCode?.innerEyeColor) {
            setInnerEyeColor(userCardData?.QrCode?.innerEyeColor)
        }
        if (userCardData?.QrCode?.outerEyeStyle) {
            setOuterEyeShape(userCardData?.QrCode?.outerEyeStyle)
        }
        if (userCardData?.QrCode?.outerEyeColor) {
            setOuterEyeColor(userCardData?.QrCode?.outerEyeColor)
        }
        if (userCardData?.QrCode?.logo) {
            setSelectedLogo(userCardData?.QrCode?.logo)
        }
        if (userCardData?.QrCode?.logoSize) {
            setLogoSize(userCardData?.QrCode?.logoSize)
        }
        if (userCardData?.display?.primaryColor) setPrimaryColor(userCardData?.display?.primaryColor)
        if (userCardData?.display?.primaryAccent) setPrimaryAccent(userCardData?.display?.primaryAccent)
        if (userCardData?.display?.secondaryColor) setSecondaryColor(userCardData?.display?.secondaryColor)
        if (userCardData?.display?.secondaryAccent) setSecondaryAccent(userCardData?.display?.secondaryAccent)
        if (userCardData?.display?.Logo) setLogoImage(userCardData?.display?.Logo)
        if (userCardData?.setting) setSettings(userCardData?.setting)
        if (userCardData?.display?.design) setDesign(userCardData?.display?.design)
    }, [userCardData?.QrCode, userCardData?.display?.primaryColor, userCardData?.display?.primaryAccent, userCardData?.display?.secondaryColor, userCardData?.display?.secondaryAccent, userCardData?.display?.Logo, userCardData?.setting, userCardData?.display?.design]);


    const router = useRouter();

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setIsLoading(true);

            // Set a 2-second delay before setting isLoading to false
            setTimeout(() => {
                setIsLoading(false);
            }, 0);
        };

        // Listen for route changes and trigger loading state
        router.events.on('routeChangeStart', handleRouteChangeStart);

        // Cleanup the event listener when the component unmounts
        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
        };
    }, []);
    return (
        <>
            <userContext.Provider value={value}>
                {children}
            </userContext.Provider>
        </>

    );
};

export default ContextApi;