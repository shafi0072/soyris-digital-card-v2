import React, { useContext, useState, useEffect } from "react";

import Phone from "./Phone";
import Website from "./Website";
import Email from "./Email";
import Address from "./Address";
import Link from "./Link";
import Header from "./Header";
import WhatsApp from "./WhatsApp";
import Viber from "./Viber";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";
import Pinterest from "./Pinterest";
import TikTok from "./TikTok";
import Skype from "./Skype";
import Snapchat from "./Snapchat";
import Signal from "./Signal";
import Telegram from "./Telegram";
import Discord from "./Discord";
import Slack from "./Slack";
import Image from "./Image";
import Gallery from "./Gallery";
import YouTube from "./YouTube";
import Vimeo from "./Vimeo";
import Wistia from "./Wistia";
import PDF from "./PDF";
import Notes from "./Notes";
import Date from "./Date";
import QR from "./QR";
import Divider from "./Divider";
import { userContext } from "@/src/Storage/ContextApi";
import { baseUrl } from "@/src/config/Server";
import { Container, Draggable } from "react-smooth-dnd";
import { toast } from "react-toastify";

const Content = ({ feilds, setFeilds }) => {
  const onDrop = (dropResult) => {
    if (!dropResult.removedIndex && !dropResult.addedIndex) return;

    const newFields = [...feilds];
    const [removed] = newFields.splice(dropResult.removedIndex, 1);
    newFields.splice(dropResult.addedIndex, 0, removed);

    setFeilds(newFields);
  };
  
  // phone
  const [phoneData, setPhoneData] = useState(
    [...Array(feilds.filter((item) => item === "Phone").length)].map(() => "")
  );
  // website
  const [websiteData, setWebsiteData] = useState(
    [...Array(feilds.filter((item) => item === "Website").length)].map(() => "")
  );
  // address
  const [addressData, setAddressData] = useState(
    [...Array(feilds.filter((item) => item === "Address").length)].map(() => "")
  );
  // Email---
  const [emailData, setEmailData] = useState(
    [...Array(feilds.filter((item) => item === "Email").length)].map(() => "")
  );
  // link
  const [linkData, setLinkData] = useState(
    [...Array(feilds.filter((item) => item === "Link").length)].map(() => "")
  );
  // image -----------
  const [image, setImage] = useState(
    [...Array(feilds.filter((item) => item === "image").length)].map(() => "")
  );
  // gallery ---------
  const [galary, setGalary] = useState(
    [...Array(feilds.filter((item) => item === "galary").length)].map(() => "")
  );
  

 
  // what's app
  const [whatsAppData, setWhatsAppData] = useState(
    [...Array(feilds.filter((item) => item === "WhatsApp").length)].map(
      () => ""
    )
  );
  // viber number
  const [viberData, setViberData] = useState(
    [...Array(feilds.filter((item) => item === "Viber").length)].map(() => "")
  );
  // skype
  const [skypeData, setSkypeData] = useState(
    [...Array(feilds.filter((item) => item === "Skype").length)].map(() => "")
  );
  // snapChat
  const [snapChatData, setSnapChatData] = useState(
    [...Array(feilds.filter((item) => item === "SnapChat").length)].map(
      () => ""
    )
  );
  // signal
  const [signalData, setSignalData] = useState(
    [...Array(feilds.filter((item) => item === "Signal").length)].map(() => "")
  );
  // telegram------
  const [telegramData, setTelegramData] = useState(
    [...Array(feilds.filter((item) => item === "Telegram").length)].map(
      () => ""
    )
  );

  // discord ----
  const [discordData, setDiscordData] = useState(
    [...Array(feilds.filter((item) => item === "Discord").length)].map(() => "")
  );
  // slack
  const [slackData, setSlackData] = useState(
    [...Array(feilds.filter((item) => item === "Slack").length)].map(() => "")
  );
  // facebook
  const [facebookData, setFacebookData] = useState(
    [...Array(feilds.filter((item) => item === "Facebook").length)].map(
      () => ""
    )
  );
  // instagram
  const [instagramData, setInstagramData] = useState(
    [...Array(feilds.filter((item) => item === "Instagram").length)].map(
      () => ""
    )
  );
  // twitter
  const [twitterData, setTwitterData] = useState(
    [...Array(feilds.filter((item) => item === "Twitter").length)].map(() => "")
  );
  // linkedin
  const [linkedinData, setLinkedinData] = useState(
    [...Array(feilds.filter((item) => item === "Linkedin").length)].map(
      () => ""
    )
  );
  // pinterest
  const [pinterestData, setPinterestData] = useState(
    [...Array(feilds.filter((item) => item === "Pinterest").length)].map(
      () => ""
    )
  );
  // tiktok
  const [tiktokData, setTiktokData] = useState(
    [...Array(feilds.filter((item) => item === "Tiktok").length)].map(() => "")
  );
  // youtube ------
  const [youtubeData, setYoutubeData] = useState(
    [...Array(feilds.filter((item) => item === "Youtube").length)].map(() => "")
  );
  // Vimeo
  const [vimeoData, setVimeoData] = useState(
    [...Array(feilds.filter((item) => item === "Vimeo").length)].map(() => "")
  );
  // Wistia
  const [wistiaData, setWistiaData] = useState(
    [...Array(feilds.filter((item) => item === "Wistia").length)].map(() => "")
  );
  // pdf
  const [pdfData, setPdfData] = useState(
    [...Array(feilds.filter((item) => item === "Pdf").length)].map(() => "")
  );
  // notes
  const [noteData, setNoteData] = useState(
    [...Array(feilds.filter((item) => item === "Note").length)].map(() => "")
  );
  // date
  const [dateData, setDataData] = useState(
    [...Array(feilds.filter((item) => item === "Date").length)].map(() => "")
  );
  // qr ---
  const [qrData, setQrData] = useState(
    [...Array(feilds.filter((item) => item === "Qr").length)].map(() => "")
  );
  // header
  const [headerData, setHeaderData] = useState(
    [...Array(feilds.filter((item) => item === "Header").length)].map(() => "")
  );
  // driver data
  const [dividerData, setDivider] = useState(
    [...Array(feilds.filter((item) => item === "Driver").length)].map(() => "")
  );

  const { userCardData, newFeilds, setNewFeilds } = useContext(userContext);
  // phone
  const handlePhoneInputChange = (index, field, value) => {
    setPhoneData((prevPhoneData) => {
      const newData = [...prevPhoneData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // const handleImageInputChange = (index, field, value) => {
  //   setImage((prevImageData) => {
  //     const newData = [...prevImageData];
  //     newData[index] = {
  //       ...newData[index],
  //       [field]: value,
  //     };
  //     return newData;
  //   });
  // };
  // website
  const handleWebsiteInputChange = (index, field, value) => {
    setWebsiteData((prevWebsiteData) => {
      const newData = [...prevWebsiteData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };

  // address
  const handleAddressInputChange = (index, field, value) => {
    setAddressData((prevAddressData) => {
      const newData = [...prevAddressData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // email-------
  const handleEmailInputChange = (index, field, value) => {
    setEmailData((prevEmailData) => {
      const newData = [...prevEmailData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };

  // link
  const handleLinkInputChange = (index, field, value) => {
    setLinkData((prevLinkData) => {
      const newData = [...prevLinkData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // What's app
  const handleWhatsAppInputChange = (index, field, value) => {
    setWhatsAppData((prevWhatsAppData) => {
      const newData = [...prevWhatsAppData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // viber data
  const handleViberInputChange = (index, field, value) => {
    setViberData((prevViberData) => {
      const newData = [...prevViberData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // skype
  const handleSkypeInputChange = (index, field, value) => {
    setSkypeData((prevSkypeData) => {
      const newData = [...prevSkypeData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // snapchat
  const handleSnapChatInputChange = (index, field, value) => {
    setSnapChatData((prevSnapData) => {
      const newData = [...prevSnapData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // signal
  const handleSignalInputChange = (index, field, value) => {
    setSignalData((prevSignalData) => {
      const newData = [...prevSignalData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // telegram ---------
  const handleTelegramInputChange = (index, field, value) => {
    setTelegramData((prevTelegramData) => {
      const newData = [...prevTelegramData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // discord ---
  const handleDiscordInputChange = (index, field, value) => {
    setDiscordData((prevDiscordData) => {
      const newData = [...prevDiscordData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // slack
  const handleSlackInputChange = (index, field, value) => {
    setSlackData((prevSlackData) => {
      const newData = [...prevSlackData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // facebook
  const handleFacebookInputChange = (index, field, value) => {
    setFacebookData((prevFacebookData) => {
      const newData = [...prevFacebookData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // instagram -
  const handleInstagramInputChange = (index, field, value) => {
    setInstagramData((prevInstagramData) => {
      const newData = [...prevInstagramData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // twitter
  const handleTwitterInputChange = (index, field, value) => {
    setTwitterData((prevTwitterData) => {
      const newData = [...prevTwitterData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // linkedin
  const handleLinkedinInputChange = (index, field, value) => {
    setLinkedinData((prevLinkedinData) => {
      const newData = [...prevLinkedinData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // pinterest ----------
  const handlePinterestInputChange = (index, field, value) => {
    setPinterestData((prevPinterestData) => {
      const newData = [...prevPinterestData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // tiktik -------------
  const handleTiktokInputChange = (index, field, value) => {
    setTiktokData((prevTiktokData) => {
      const newData = [...prevTiktokData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // youtube
  const handleYoutubeInputChange = (index, field, value) => {
    setYoutubeData((prevYoutubeData) => {
      const newData = [...prevYoutubeData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };

  // vimeo
  const handleVimeoInputChange = (index, field, value) => {
    setVimeoData((prevVimeoData) => {
      const newData = [...prevVimeoData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // wistia
  const handleWistiaInputChange = (index, field, value) => {
    setWistiaData((prevWistiaData) => {
      const newData = [...prevWistiaData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };

  // pdf
  const handlePdfInputChange = (index, field, value) => {
    setPdfData((prevPdfData) => {
      const newData = [...prevPdfData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  const handleNoteInputChange = (index, field, value) => {
    setNoteData((prevNoteData) => {
      const newData = [...prevNoteData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // date
  const handleDateInputChange = (index, field, value) => {
    setDataData((prevDateData) => {
      const newData = [...prevDateData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // qr
  const handleQRInputChange = (index, field, value) => {
    setQrData((prevQrData) => {
      const newData = [...prevQrData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  // header
  const handleHeaderInputChange = (index, field, value) => {
    setHeaderData((prevHeaderData) => {
      const newData = [...prevHeaderData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };
  const handleDriverInputChange = (index, field, value) => {
    setDivider((prevDividerData) => {
      const newData = [...prevDividerData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };

  // console.log(userCardData)

  const phoneArray = Array.isArray(userCardData?.fields?.Phone)
    ? userCardData.fields.Phone
    : [];
  const filteredPhoneData = Array.isArray(phoneData)
    ? phoneData.filter((item) => item !== undefined)
    : [];

  const websiteArray = Array.isArray(userCardData?.fields?.website)
    ? userCardData.fields.website
    : [];
  const filteredWebsiteData = Array.isArray(websiteData)
    ? websiteData.filter((item) => item !== undefined)
    : [];
  // email
  const emailArray = Array.isArray(userCardData?.fields?.email)
    ? userCardData.fields.email
    : [];
  const filteredEmailData = Array.isArray(emailData)
    ? emailData.filter((item) => item !== undefined)
    : [];
  // address
  const addressArray = Array.isArray(userCardData?.fields?.address)
    ? userCardData.fields.address
    : [];
  const filteredAddressData = Array.isArray(addressData)
    ? addressData.filter((item) => item !== undefined)
    : [];
  // link
  const linkArray = Array.isArray(userCardData?.fields?.link)
    ? userCardData.fields.link
    : [];
  const filteredLinkData = Array.isArray(linkData)
    ? linkData.filter((item) => item !== undefined)
    : [];
  // whatsapp
  const whatsAppArray = Array.isArray(userCardData?.fields?.whatsApp)
    ? userCardData.fields.whatsApp
    : [];
  const filteredWhatsAppData = Array.isArray(whatsAppData)
    ? whatsAppData.filter((item) => item !== undefined)
    : [];
  // viber
  const viberArray = Array.isArray(userCardData?.fields?.viber)
    ? userCardData.fields.viber
    : [];
  const filteredViberData = Array.isArray(viberData)
    ? viberData.filter((item) => item !== undefined)
    : [];
  // skype
  const skypeArray = Array.isArray(userCardData?.fields?.skype)
    ? userCardData.fields.skype
    : [];
  const filteredSkypeData = Array.isArray(skypeData)
    ? skypeData.filter((item) => item !== undefined)
    : [];
  // snapchat
  const snapchatArray = Array.isArray(userCardData?.fields?.snapchat)
    ? userCardData.fields.snapchat
    : [];
  const filteredSnapchatData = Array.isArray(snapChatData)
    ? snapChatData.filter((item) => item !== undefined)
    : [];
  // signal
  const signalArray = Array.isArray(userCardData?.fields?.signal)
    ? userCardData.fields.signal
    : [];
  const filteredSignalData = Array.isArray(signalData)
    ? signalData.filter((item) => item !== undefined)
    : [];
  // telegram
  const telegramArray = Array.isArray(userCardData?.fields?.telegram)
    ? userCardData.fields.telegram
    : [];
  const filteredTelegramData = Array.isArray(telegramData)
    ? telegramData.filter((item) => item !== undefined)
    : [];
  // discord
  const discordArray = Array.isArray(userCardData?.fields?.discord)
    ? userCardData.fields.discord
    : [];
  const filteredDiscordData = Array.isArray(discordData)
    ? discordData.filter((item) => item !== undefined)
    : [];
  // slack
  const slackArray = Array.isArray(userCardData?.fields?.slack)
    ? userCardData.fields.slack
    : [];
  const filteredSlackData = Array.isArray(slackData)
    ? slackData.filter((item) => item !== undefined)
    : [];
  // facebook
  const facebookArray = Array.isArray(userCardData?.fields?.facebook)
    ? userCardData.fields.facebook
    : [];
  const filteredFacebookData = Array.isArray(facebookData)
    ? facebookData.filter((item) => item !== undefined)
    : [];
  // instagram
  const instagramArray = Array.isArray(userCardData?.fields?.instagram)
    ? userCardData.fields.instagram
    : [];
  const filteredInstagramData = Array.isArray(instagramData)
    ? instagramData.filter((item) => item !== undefined)
    : [];
  // twitter
  const twitterArray = Array.isArray(userCardData?.fields?.twitter)
    ? userCardData.fields.twitter
    : [];
  const filteredTwitterData = Array.isArray(twitterData)
    ? twitterData.filter((item) => item !== undefined)
    : [];
  // linkedin
  const linkedinArray = Array.isArray(userCardData?.fields?.linkedIn)
    ? userCardData.fields.linkedIn
    : [];
  const filteredLinkedinData = Array.isArray(linkedinData)
    ? linkedinData.filter((item) => item !== undefined)
    : [];
  // pinterest
  const pinterestArray = Array.isArray(userCardData?.fields?.pinterest)
    ? userCardData.fields.pinterest
    : [];
  const filteredPinterestData = Array.isArray(pinterestData)
    ? pinterestData.filter((item) => item !== undefined)
    : [];
  // tiktok
  const tiktokArray = Array.isArray(userCardData?.fields?.tikTok)
    ? userCardData.fields.tikTok
    : [];
  const filteredTiktokData = Array.isArray(tiktokData)
    ? tiktokData.filter((item) => item !== undefined)
    : [];
  // note
  const noteArray = Array.isArray(userCardData?.fields?.notes)
    ? userCardData.fields.notes
    : [];
  const filteredNoteData = Array.isArray(noteData)
    ? noteData.filter((item) => item !== undefined)
    : [];
  // data
  const dateArray = Array.isArray(userCardData?.fields?.Date)
    ? userCardData.fields.Date
    : [];
  const filteredDateData = Array.isArray(dateData)
    ? dateData.filter((item) => item !== undefined)
    : [];
  // qr
  const qrArray = Array.isArray(userCardData?.fields?.qr)
    ? userCardData.fields.qr
    : [];
  const filteredQrData = Array.isArray(qrData)
    ? qrData.filter((item) => item !== undefined)
    : [];
  // header
  const HeaderArray = Array.isArray(userCardData?.fields?.Header)
    ? userCardData.fields.Header
    : [];
  const filteredHeaderData = Array.isArray(headerData)
    ? headerData.filter((item) => item !== undefined)
    : [];
  // divider
  const dividerArray = Array.isArray(userCardData?.fields?.divider)
    ? userCardData.fields.divider
    : [];
  const filteredDividerData = Array.isArray(dividerData)
    ? dividerData.filter((item) => item !== undefined)
    : [];
  // youTube
  const youTubeArray = Array.isArray(userCardData?.fields?.youTube)
    ? userCardData.fields.youTube
    : [];
  const filteredYouTubeData = Array.isArray(youtubeData)
    ? youtubeData.filter((item) => item !== undefined)
    : [];
  // image
  const imageArray = Array.isArray(userCardData?.fields?.image)
    ? userCardData.fields.image
    : [];
  const filteredImageData = Array.isArray(image)
    ? image.filter((item) => item !== undefined)
    : [];
  // image
  const galleryArray = Array.isArray(userCardData?.fields?.galary)
    ? userCardData.fields.galary
    : [];
  const filteredgalleryData = Array.isArray(galary)
    ? galary.filter((item) => item !== undefined)
    : [];

  const updatedPhoneArray = [...phoneArray, ...filteredPhoneData];
  const updatedWebsiteArray = [...websiteArray, ...filteredWebsiteData];
  const updatedEmailArray = [...emailArray, ...filteredEmailData];
  const updatedAddressArray = [...addressArray, ...filteredAddressData];
  const updatedLinkArray = [...linkArray, ...filteredLinkData];
  const updatedWhatsAppArray = [...whatsAppArray, ...filteredWhatsAppData];
  const updatedViberArray = [...viberArray, ...filteredViberData];
  const updatedSkypeArray = [...skypeArray, ...filteredSkypeData];
  const updatedSnapchatArray = [...snapchatArray, ...filteredSnapchatData];
  const updatedSignalArray = [...signalArray, ...filteredSignalData];
  const updatedTelegramArray = [...telegramArray, ...filteredTelegramData];
  const updatedDiscordArray = [...discordArray, ...filteredDiscordData];
  const updatedSlackArray = [...slackArray, ...filteredSlackData];
  const updatedFacebookArray = [...facebookArray, ...filteredFacebookData];
  // instagram
  const updatedInstagramArray = [...instagramArray, ...filteredInstagramData];
  const updatedTwitterArray = [...twitterArray, ...filteredTwitterData];
  const updatedLinkedinArray = [...linkedinArray, ...filteredLinkedinData];
  const updatedPinterestArray = [...pinterestArray, ...filteredPinterestData];
  const updatedTiktokArray = [...tiktokArray, ...filteredTiktokData];
  const updatedNoteArray = [...noteArray, ...filteredNoteData];
  const updatedDateArray = [...dateArray, ...filteredDateData];
  const updatedQrArray = [...qrArray, ...filteredQrData];
  const updatedHeaderArray = [...HeaderArray, ...filteredHeaderData];
  const updatedDividerArray = [...dividerArray, ...filteredDividerData];
  const updatedYouTubeArray = [...youTubeArray,...filteredYouTubeData];
  const updatedImageArray = [...imageArray,...filteredImageData];
  const updatedGalaryArray = [...galleryArray,...filteredgalleryData];

  useEffect(() => {
    setNewFeilds({
      fields: {
        Phone: updatedPhoneArray,
        website: updatedWebsiteArray,
        email: updatedEmailArray,
        address: updatedAddressArray,
        link: updatedLinkArray,
        whatsApp: updatedWhatsAppArray,
        viber: updatedViberArray,
        skype: updatedSkypeArray,
        snapchat: updatedSnapchatArray,
        signal: updatedSignalArray,
        telegram: updatedTelegramArray,
        discord: updatedDiscordArray,
        slack: updatedSlackArray,
        facebook: updatedFacebookArray,
        instagram: updatedInstagramArray,
        twitter: updatedTwitterArray,
        linkedIn: updatedLinkedinArray,
        pinterest: updatedPinterestArray,
        tikTok: updatedTiktokArray,
        notes: updatedNoteArray,
        Date: updatedDateArray,
        qr: updatedQrArray,
        Header: updatedHeaderArray,
        divider: updatedDividerArray,
        youTube: updatedYouTubeArray[0]?.YoutubeUserName1,
        image: updatedImageArray,
        galary: updatedGalaryArray,
      },
    });
  }, [
    phoneData,
    emailData,
    dividerData,
    instagramData,
    pinterestData,
    twitterData,
    qrData,
    websiteData,
    whatsAppData,
    addressData,
    linkData,
    skypeData,
    viberData,
    telegramData,
    signalData,
    discordData,
    slackData,
    facebookData,
    tiktokData,
    youtubeData,
    vimeoData,
    pdfData,
    wistiaData,
    noteData,
    dateData,
    headerData,
    image,
    galary
  ]);

  const handleFieldsOnSubmit = (e) => {
    const userCardId = localStorage.getItem("cardId");
    e.preventDefault();
    fetch(`${baseUrl}/cards/profile/fields/${userCardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Phone: updatedPhoneArray,
          website: updatedWebsiteArray,
          email: updatedEmailArray,
          address: updatedAddressArray,
          link: updatedLinkArray,
          whatsApp: updatedWhatsAppArray,
          viber: updatedViberArray,
          skype: updatedSkypeArray,
          snapchat: updatedSnapchatArray,
          signal: updatedSignalArray,
          telegram: updatedTelegramArray,
          discord: updatedDiscordArray,
          youTube: updatedYouTubeArray[0]?.YoutubeUserName1,
          slack: updatedSlackArray,
          facebook: updatedFacebookArray,
          instagram: updatedInstagramArray,
          twitter: updatedTwitterArray,
          linkedIn: updatedLinkedinArray,
          pinterest: updatedPinterestArray,
          tikTok: updatedTiktokArray,
          notes: updatedNoteArray,
          Date: updatedDateArray,
          qr: updatedQrArray,
          Header: updatedHeaderArray,
          divider: updatedDividerArray,
          image: updatedImageArray,
          galary: updatedGalaryArray,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Profile information updated successfully") {
          toast.success(data?.message);
          window.location.reload();
        }
      });
  };

  return (
    <>
      <div className="border-dotted border-2 bg-gray-200  border-sky-500 p-5 rounded-lg">
        <Container onDrop={onDrop}>
          {userCardData?.fields?.Phone?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Phone
                  items={items}
                  index={index}
                  handlePhoneInputChange={handlePhoneInputChange}
                  phoneData={phoneData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.website?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Website
                  items={items}
                  index={index}
                  handleWebsiteInputChange={handleWebsiteInputChange}
                  websiteData={websiteData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.address?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Address
                  items={items}
                  index={index}
                  handleAddressInputChange={handleAddressInputChange}
                  addressData={addressData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.email?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Email
                  items={items}
                  index={index}
                  handleEmailInputChange={handleEmailInputChange}
                  emailData={emailData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.link?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Link
                  items={items}
                  index={index}
                  handleLinkInputChange={handleLinkInputChange}
                  linkData={linkData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.header?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Header
                  items={items}
                  index={index}
                  handleHeaderInputChange={handleHeaderInputChange}
                  headerData={headerData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.whatsApp?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <WhatsApp
                  items={items}
                  index={index}
                  handleWhatsAppInputChange={handleWhatsAppInputChange}
                  whatsAppData={whatsAppData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.viber?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Viber
                  items={items}
                  index={index}
                  handleViberInputChange={handleViberInputChange}
                  viberData={viberData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.skype?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Skype
                  items={items}
                  index={index}
                  handleSkypeInputChange={handleSkypeInputChange}
                  skypeData={skypeData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.snapchat?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Snapchat
                  items={items}
                  index={index}
                  handleSnapChatInputChange={handleSnapChatInputChange}
                  snapChatData={snapChatData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.signal?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Signal
                  items={items}
                  index={index}
                  handleSignalInputChange={handleSignalInputChange}
                  signalData={signalData}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.telegram?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Telegram
                  items={items}
                  index={index}
                  handleTelegramInputChange={handleTelegramInputChange}
                  telegramData={telegramData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.discord?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Discord
                  items={items}
                  index={index}
                  handleDiscordInputChange={handleDiscordInputChange}
                  discordData={discordData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.slack?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Slack
                  items={items}
                  index={index}
                  handleSlackInputChange={handleSlackInputChange}
                  slackData={slackData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.facebook?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Facebook
                  items={items}
                  index={index}
                  handleFacebookInputChange={handleFacebookInputChange}
                  facebookData={facebookData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.instagram?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Instagram
                  items={items}
                  index={index}
                  handleInstagramInputChange={handleInstagramInputChange}
                  instagramData={instagramData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.twitter?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Twitter
                  items={items}
                  index={index}
                  handleTwitterInputChange={handleTwitterInputChange}
                  twitterData={twitterData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.linkedIn?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <LinkedIn
                  items={items}
                  index={index}
                  handleLinkedinInputChange={handleLinkedinInputChange}
                  linkedinData={linkedinData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.pinterest?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Pinterest
                  items={items}
                  index={index}
                  handlePinterestInputChange={handlePinterestInputChange}
                  pinterestData={pinterestData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.tikTok?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <TikTok
                  items={items}
                  index={index}
                  handleTiktokInputChange={handleTiktokInputChange}
                  tiktokData={tiktokData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.youTube?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <YouTube
                  items={items}
                  index={index}
                  handleYoutubeInputChange={handleYoutubeInputChange}
                  youtubeData={youtubeData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.vimeo?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Vimeo
                  items={items}
                  index={index}
                  handleVimeoInputChange={handleVimeoInputChange}
                  vimeoData={vimeoData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.wistia?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Wistia
                  items={items}
                  index={index}
                  handleWistiaInputChange={handleWistiaInputChange}
                  wistiaData={wistiaData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.pdf?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <PDF
                  items={items}
                  index={index}
                  handlePdfInputChange={handlePdfInputChange}
                  pdfData={pdfData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.notes?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Notes
                  items={items}
                  index={index}
                  handleNoteInputChange={handleNoteInputChange}
                  noteData={noteData}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.image?.length>0 && (
            <Draggable >
              <div className="mb-2">
                <Image
                  setImage={setImage}
                  image={image}
                  items={userCardData?.fields?.image}
                  from={true}
                />
              </div>
            </Draggable>
          )}
          {userCardData?.fields?.galary?.length>0 && (
            <Draggable >
              <div className="mb-2">
              <Gallery 

              setGalary={setGalary} 
              galary={galary} 
              items={userCardData?.fields?.galary[0]}
              from={true}
              />
              </div>
            </Draggable>
          )}
          {userCardData?.fields?.qr?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <QR
                  index={index}
                  handleQRInputChange={handleQRInputChange}
                  qrData={qrData}
                  items={items}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
          {userCardData?.fields?.divider?.map((items, index) => (
            <Draggable key={items}>
              <div className="mb-2">
                <Divider
                  index={index}
                  handleDriverInputChange={handleDriverInputChange}
                  driverData={driverData}
                  items={items}
                  from={true}
                />
              </div>
            </Draggable>
          ))}
        </Container>

        <Container onDrop={onDrop}>
          {feilds.map((items, index) => (
            <Draggable key={items}>
              {items === "Phone" && (
                <div className="mb-2">
                  <Phone
                    index={index}
                    handlePhoneInputChange={handlePhoneInputChange}
                    phoneData={phoneData}
                  />
                </div>
              )}
              {items === "Website" && (
                <div className="mb-2">
                  <Website
                    index={index}
                    handleWebsiteInputChange={handleWebsiteInputChange}
                    websiteData={websiteData}
                  />
                </div>
              )}
              {items === "Address" && (
                <div className="mb-2">
                  <Address
                    index={index}
                    handleAddressInputChange={handleAddressInputChange}
                    addressData={addressData}
                  />
                </div>
              )}
              {items === "Email" && (
                <div className="mb-2">
                  <Email
                    index={index}
                    handleEmailInputChange={handleEmailInputChange}
                    emailData={emailData}
                  />
                </div>
              )}
              {items === "Link" && (
                <div className="mb-2">
                  <Link
                    index={index}
                    handleLinkInputChange={handleLinkInputChange}
                    linkData={linkData}
                  />
                </div>
              )}
              {items === "Header" && (
                <div className="mb-2">
                  <Header
                    index={index}
                    handleHeaderInputChange={handleHeaderInputChange}
                    headerData={headerData}
                  />
                </div>
              )}
              {items === "WhatsApp" && (
                <div className="mb-2">
                  <WhatsApp
                    index={index}
                    handleWhatsAppInputChange={handleWhatsAppInputChange}
                    whatsAppData={whatsAppData}
                  />
                </div>
              )}
              {items === "Viber" && (
                <div className="mb-2">
                  <Viber
                    index={index}
                    handleViberInputChange={handleViberInputChange}
                    viberData={viberData}
                  />
                </div>
              )}
              {items === "Skype" && (
                <div className="mb-2">
                  <Skype
                    index={index}
                    handleSkypeInputChange={handleSkypeInputChange}
                    skypeData={skypeData}
                  />
                </div>
              )}
              {items === "Snapchat" && (
                <div className="mb-2">
                  <Snapchat
                    index={index}
                    handleSnapChatInputChange={handleSnapChatInputChange}
                    snapChatData={snapChatData}
                  />
                </div>
              )}
              {items === "Signal" && (
                <div className="mb-2">
                  <Signal
                    index={index}
                    handleSignalInputChange={handleSignalInputChange}
                    signalData={signalData}
                  />
                </div>
              )}
              {items === "Telegram" && (
                <div className="mb-2">
                  <Telegram
                    index={index}
                    handleTelegramInputChange={handleTelegramInputChange}
                    telegramData={telegramData}
                  />
                </div>
              )}
              {items === "Discord" && (
                <div className="mb-2">
                  <Discord
                    index={index}
                    handleDiscordInputChange={handleDiscordInputChange}
                    discordData={discordData}
                  />
                </div>
              )}
              {items === "Slack" && (
                <div className="mb-2">
                  <Slack
                    index={index}
                    handleSlackInputChange={handleSlackInputChange}
                    slackData={slackData}
                  />
                </div>
              )}
              {items === "Facebook" && (
                <div className="mb-2">
                  <Facebook
                    index={index}
                    handleFacebookInputChange={handleFacebookInputChange}
                    facebookData={facebookData}
                  />
                </div>
              )}
              {items === "Instagram" && (
                <div className="mb-2">
                  <Instagram
                    index={index}
                    handleInstagramInputChange={handleInstagramInputChange}
                    instagramData={instagramData}
                  />
                </div>
              )}
              {items === "Twitter" && (
                <div className="mb-2">
                  <Twitter
                    index={index}
                    handleTwitterInputChange={handleTwitterInputChange}
                    twitterData={twitterData}
                  />
                </div>
              )}
              {items === "LinkedIn" && (
                <div className="mb-2">
                  <LinkedIn
                    index={index}
                    handleLinkedinInputChange={handleLinkedinInputChange}
                    linkedinData={linkedinData}
                  />
                </div>
              )}
              {items === "Pinterest" && (
                <div className="mb-2">
                  <Pinterest
                    index={index}
                    handlePinterestInputChange={handlePinterestInputChange}
                    pinterestData={pinterestData}
                  />
                </div>
              )}

              {items === "Tiktok" && (
                <div className="mb-2">
                  <TikTok
                    index={index}
                    handleTiktokInputChange={handleTiktokInputChange}
                    tiktokData={tiktokData}
                  />
                </div>
              )}
              {items === "Image" && (
                <div className="mb-2">
                  <Image setImage={setImage} image={image} />
                </div>
              )}
              {items === "Gallery" && (
                <div className="mb-2">
                  <Gallery setGalary={setGalary} galary={galary} />
                </div>
              )}
              {items === "Youtube" && (
                <div className="mb-2">
                  <YouTube
                    index={index}
                    handleYoutubeInputChange={handleYoutubeInputChange}
                    youtubeData={youtubeData}
                  />
                </div>
              )}
              {items === "Vimeo" && (
                <div className="mb-2">
                  <Vimeo
                    index={index}
                    handleVimeoInputChange={handleVimeoInputChange}
                    vimeoData={vimeoData}
                  />
                </div>
              )}
              {items === "Wistia" && (
                <div className="mb-2">
                  <Wistia
                    index={index}
                    handleWistiaInputChange={handleWistiaInputChange}
                    wistiaData={wistiaData}
                  />
                </div>
              )}
              {items === "PDF" && (
                <div className="mb-2">
                  <PDF
                    index={index}
                    handlePdfInputChange={handlePdfInputChange}
                    pdfData={pdfData}
                  />
                </div>
              )}
              {items === "Notes" && (
                <div className="mb-2">
                  <Notes
                    index={index}
                    handleNoteInputChange={handleNoteInputChange}
                    noteData={noteData}
                  />
                </div>
              )}
              {items === "Date" && (
                <div className="mb-2">
                  <Date
                    index={index}
                    handleDateInputChange={handleDateInputChange}
                    dateData={dateData}
                  />
                </div>
              )}
              {items === "URL" && (
                <div className="mb-2">
                  <QR
                    index={index}
                    handleQRInputChange={handleQRInputChange}
                    qrData={qrData}
                  />
                </div>
              )}
              {items === "Divider" && (
                <div className="mb-2">
                  <Divider
                    index={index}
                    handleDriverInputChange={handleDriverInputChange}
                    driverData={driverData}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </Container>
      </div>
      <div className="fixed bottom-20 left-[35%]  z-50">
        <input
          type="submit"
          value="Cancel"
          className="px-5 py-1  font-medium text-lg text-black border border-[#0277B5] rounded me-5 cursor-pointer hover:bg-[#0277B5] hover:text-white transition-all duration-500"
        />
        <input
          type="submit"
          onClick={handleFieldsOnSubmit}
          value="Save"
          className="px-5 py-1 border border-[#0277B5] bg-[#0277B5] font-medium text-lg text-white rounded cursor-pointer hover:bg-[#0277B5]"
        />
      </div>
    </>
  );
};

export default Content;
