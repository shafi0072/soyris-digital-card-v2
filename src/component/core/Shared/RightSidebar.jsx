import { userContext } from "@/src/Storage/ContextApi";
import React, { useContext } from "react";
import Classic from "./Classic/Classic";
import Flat from "./Flat/Flat";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import FieldData from "./FieldData/FieldData";
import YouTube from "./YouTube/YouTube";
import GalleryImage from "./GalleryImage/GalleryImage";
import DottedQRCode from "../../app/Root/QrCodes/QrMain";
import Moment from "react-moment";
import Pdf from "./Pdf";
import Vimeo from "./Vimeo";
import Content from "./Content/Content";
import Social from "./Social/Social";
import Image from "./Image";
import DateView from "./DateView";
import { useState } from "react";

const RightSidebar = () => {
  const {
    userData,
    newFeilds,
    profileImage,
    setProfileImage,
    userCardData,
    color,
    design,
    logoImage,
    infos,
  } = useContext(userContext);
  const [social, setSocial] = useState([]);
  console.log(social);
  // console.log({ userCardData });
  // console.log({ newFeilds });
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

  // console.log(shouldShowH2)

  return (
    <div className="scroll-hide h-[76vh] overflow-y-scroll">
      <div className="relative w-[363px] ">
        {design === "classic" && (
          <Classic
            color={color}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            logoImage={logoImage}
          />
        )}
        {design === "flat" && (
          <Flat
            color={color}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            logoImage={logoImage}
          />
        )}
        {infos && (
          <ProfileInfo infos={infos} color={color} userData={userData} />
        )}

        <div className="my-5">
          {newFeilds?.map((item, index) => (
            <>
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

              {item?.type === "Facebook" && (
                <a href="" className="w-4 h-4 bg-red-400 rounded-full p-3">
                  1
                </a>
              )}
              {item?.type === "Instagram" && (
                <a href="" className="w-4 h-4 bg-red-400 rounded-full p-3">
                  2
                </a>
              )}

              {item?.type === "Image" && <Image item={item} />}
              {item?.type === "Galary" && <GalleryImage item={item} />}
              {item?.type === "Pdf" && <Pdf item={item} />}
                {item?.type === "Notes" && (
                  <div className="my-5">
                    <p className="italic">{item?.notes}</p>
                  </div>
                )}
                {item?.type === "Date" && <DateView item={item} />}
            </>
          ))}
        </div>

        {/* <div className="my-5">
          {socialHeader && (
            <h2 className="mb-5 pb-2 text-xl   border-b border-[#CBD5E0]">
              Social Media
            </h2>
          )}
          <div className="mt-5  flex gap-2 pt-3">
            {newFeilds?.map((item, index) => (
              <>
                {item?.type === "Facebook" && <Social item={item} />}
                {item?.type === "Instagram" && <Social item={item} />}
                {item?.type === "Twitter" && <Social item={item} />}
                {item?.type === "LinkedIn" && <Social item={item} />}
                {item?.type === "Pinterest" && <Social item={item} />}
                {item?.type === "Tiktok" && <Social item={item} />}
              </>
            ))}
          </div>
        </div> */}
        {/* <div className="mt-5">
          {imageTitle && (
            <h2 className="mb-5 pb-2 text-xl   border-b border-[#CBD5E0]">
              My Work
            </h2>
          )}
          <div className="mt-5">
            {newFeilds?.map((item, index) => (
              <>
                {item?.type === "Image" && <Image item={item} />}
                {item?.type === "Galary" && <GalleryImage item={item} />}
              </>
            ))}
          </div>
        </div> */}
        {/* <div className="mt-5">
          {videoTitle && (
            <h2 className="mb-5 pb-2 text-xl   border-b border-[#CBD5E0]">
              See me in action
            </h2>
          )}
          <div className="mt-5">
            {newFeilds?.map((item, index) => (
              <>
               
                {item?.type === "Youtube" && <YouTube item={item} />}
                {item?.type === "Vimeo" && <YouTube item={item} />}
                {item?.type === "Wistia" && <YouTube item={item} />}
              </>
            ))}
          </div>
        </div>
        <div className="mt-5">
          {otherTitle && (
            <h2 className="mb-5 pb-2 text-xl   border-b border-[#CBD5E0]">
              More Details
            </h2>
          )}
          <div className="mt-5">
            {newFeilds?.map((item, index) => (
              <>
                
                {item?.type === "Pdf" && <Pdf item={item} />}
                {item?.type === "Notes" && (
                  <div className="my-5">
                    <p className="italic">{item?.notes}</p>
                  </div>
                )}
                {item?.type === "Date" && <DateView item={item} />}
              </>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RightSidebar;
