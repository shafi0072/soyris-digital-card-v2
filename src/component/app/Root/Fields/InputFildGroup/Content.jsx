import React, { useState } from "react";

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
const Content = ({ feilds }) => {
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
  // note
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
  const [driverData, setDriverData] = useState(
    [...Array(feilds.filter((item) => item === "Driver").length)].map(() => "")
  );

  console.log({ phoneData });
  // console.log("website", websiteData);
  // console.log("address", addressData);
  // console.log("email", emailData);
  // console.log("link", linkData);
  // console.log("whatsApp", whatsAppData);
  // console.log("Viber", viberData);
  // console.log("Skype", skypeData);
  // console.log("SnapChat", snapChatData);
  // console.log("signal", signalData);
  // console.log("telegram", telegramData);
  // console.log("discord", discordData);
  // console.log("slack", slackData);
  // console.log("facebook", facebookData);
  // console.log("instagram", instagramData);
  // console.log("twitter", twitterData);
  // console.log("linkedin", linkedinData);
  // console.log("pinterest", pinterestData);
  // console.log("tiktok", tiktokData);
  // console.log("youtube", youtubeData);
  // console.log("vimeo", vimeoData);
  // console.log("wistia", wistiaData);
  // console.log("pdf", pdfData);
  // console.log("note", noteData);
  // console.log("date", dateData);
  // console.log("qr", qrData);
  // console.log("Header", headerData);
  // console.log("driver", driverData);

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
    setDriverData((prevDriverData) => {
      const newData = [...prevDriverData];
      newData[index] = {
        ...newData[index],
        [field]: value,
      };
      return newData;
    });
  };

  return (
    <>
    <div className="border-dotted border-2 bg-gray-200  border-sky-500 p-5 rounded-lg">
      {feilds?.map((items, index) => (
        <>
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
              <Image />
            </div>
          )}
          {items === "Gallery" && (
            <div className="mb-2">
              <Gallery />
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
        </>
      ))}
    </div>
    <div className="fixed bottom-20 left-[35%]  z-50">
        <input
          type="submit"
          value="Cancel"
          className="px-5 py-1  font-medium text-lg text-black border border-[#0277B5] rounded me-5 cursor-pointer hover:bg-[#0277B5] hover:text-white transition-all duration-500"
        />
        <input
          type="submit"
          value="Save"
          className="px-5 py-1 border border-[#0277B5] bg-[#0277B5] font-medium text-lg text-white rounded cursor-pointer hover:bg-[#0277B5]"
        />
      </div>
    </>
  );
};

export default Content;
