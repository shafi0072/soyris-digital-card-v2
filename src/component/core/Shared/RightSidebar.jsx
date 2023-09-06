import { userContext } from "@/src/Storage/ContextApi";
import React, { useContext } from "react";
import Classic from "./Classic/Classic";
import Flat from "./Flat/Flat";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import FieldData from "./FieldData/FieldData";
import Video from "./YouTube/YouTube";
import GalleryImage from "./GalleryImage/GalleryImage";
import DottedQRCode from "../../app/Root/QrCodes/QrMain";
import Moment from "react-moment";
import Pdf from "./Pdf";
import Vimeo from "./Vimeo";
import Content from "./Content/Content";
import Social, { facebookIcon, instagramIcon } from "./Social/Social";
import Image from "./Image";
import DateView from "./DateView";
import { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FaTiktok } from "react-icons/fa";

import QrView from "./QrView";
// import dynamic from "next/dynamic";
// const ReactPlayer = dynamic(()=> import('react-player'),{ssr:false});

const RightSidebar = () => {
  const {
    userData,
    newFeilds,
    profileImage,
    setProfileImage,
    userCardData,
    color,
    primaryColor,
    primaryAccent,
    design,
    logoImage,
    infos,
  } = useContext(userContext);
  console.log({ userCardData });
  const socialHeader = newFeilds?.some(
    (item) =>
      item?.type === "Facebook" ||
      item?.type === "Instagram" ||
      item?.type === "Twitter" ||
      item?.type === "LinkedIn" ||
      item?.type === "Pinterest" ||
      item?.type === "Tiktok"
  );
  const imageTitle = newFeilds?.some(
    (item) => item?.type === "Image" || item?.type === "Galary"
  );
  const videoTitle = newFeilds?.some(
    (item) =>
      item?.type === "Youtube" ||
      item?.type === "Vimeo" ||
      item?.type === "Wistia"
  );
  const otherTitle = newFeilds?.some(
    (item) =>
      item?.type === "Pdf" || item?.type === "Notes" || item?.type === "Date"
  );


  return (
    <div className="scroll-hide w-[363px] h-[76vh] overflow-y-scroll bg-white pt-5">
      <div className="relative  w-[363px]">
        {design === "classic" && (
          <Classic
            color={primaryColor}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            logoImage={logoImage}
          />
        )}
        {design === "flat" && (
          <Flat
            color={primaryColor}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            logoImage={logoImage}
          />
        )}
       <div className="mx-5">
       {infos && (
          <ProfileInfo infos={infos} color={primaryColor} userData={userData} design={design} userCardData={userCardData} />
        )}
        <div></div>
        <div className="my-5">
          {newFeilds?.map((item, index) => (
            <>
              {item?.type === "Divider" && (
                <div className="w-full h-[2px] bg-gray-400 mt-3 mb-6"></div>
              )}
              {item?.type === "Header" && (
                <h2 className="text-xl font-semibold mt-6">{item?.title}</h2>
              )}

              {item?.type === "Phone" && <Content item={item} />}
              {item?.type === "Website" && <Content item={item} />}
              {item?.type === "Email" && <Content item={item} />}
              {item?.type === "Address" && <Content item={item} />}
              {item?.type === "Link" && <Content item={item} />}
              {item?.type === "WhatsApp" && <Content item={item} />}
              {item?.type === "Viber" && <Content item={item} />}
              {item?.type === "Skype" && <Content item={item} />}
              {item?.type === "Snapchat" && <Content item={item} />}
              {item?.type === "Signal" && <Content item={item} />}
              {item?.type === "Telegram" && <Content item={item} />}
              {item?.type === "Discord" && <Content item={item} />}
              {item?.type === "Slack" && <Content item={item} />}
              {/* Social media--------------- */}
              {item?.type === "Facebook" && (
                <a
                  href={item?.url}
                  style={{ backgroundColor: primaryColor }}
                  className=" w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                >
                  <FacebookIcon style={{ color: primaryAccent }} />{" "}
                </a>
              )}
              {item?.type === "Instagram" && (
                <a
                  style={{ backgroundColor: primaryColor }}
                  href={item?.url}
                  className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                >
                  <InstagramIcon style={{ color: primaryAccent }} />
                </a>
              )}
              {item?.type === "Twitter" && (
                <a
                  style={{ backgroundColor: primaryColor }}
                  href={item?.url}
                  className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                >
                  <TwitterIcon style={{ color: primaryAccent }} />
                </a>
              )}
              {item?.type === "LinkedIn" && (
                <a
                  style={{ backgroundColor: primaryColor }}
                  href={item?.url}
                  className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                >
                  <LinkedInIcon style={{ color: primaryAccent }} />{" "}
                </a>
              )}
              {item?.type === "Pinterest" && (
                <a
                  style={{ backgroundColor: primaryColor }}
                  href={item?.url}
                  className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2  "
                >
                  <PinterestIcon style={{ color: primaryAccent }} />
                </a>
              )}
              {item?.type === "Tiktok" && (
                <a
                  style={{ backgroundColor: primaryColor }}
                  href={item?.url}
                  className="bg-[#EB531C] w-12 h-12  items-center justify-center inline-flex rounded-full mr-2 "
                >
                  <FaTiktok className="inline text-white text-xl" />
                </a>
              )}

              {/* images */}
              {item?.type === "Image" && <Image item={item} />}
              {item?.type === "Galary" && <GalleryImage item={item} />}
              {/* videos */}
              {item?.type === "Youtube" && <Video item={item} />}
              {item?.type === "Vimeo" && <Video item={item} />}
              {item?.type === "Wistia" && <Video item={item} />}
              {/* more details  */}
              {item?.type === "Pdf" && <Pdf item={item} />}
              {item?.type === "Notes" && (
                <div className="my-5">
                  <p className="italic">{item?.notes}</p>
                </div>
              )}
              {item?.type === "Date" && <DateView item={item} />}
              {item?.type === "QR" && <QrView item={item} />}
            </>
          ))}
        </div>
       </div>
      </div>
    </div>
  );
};

export default RightSidebar;

