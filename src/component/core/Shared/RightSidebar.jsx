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
  // console.log({ userCardData });
  // console.log({ newFeilds });
 
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
            <div key={index}>
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

              {(item?.type === "Facebook" || item?.type === "Instagram") && (
                <div className="my-5">
                  <div className="mt-5  flex gap-2 pt-3">
                    <div></div>
                    <div> </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        { 
          <div className="my-5">
          <h2 className="mb-5 pb-2 text-xl   border-b border-[#CBD5E0]">
            Social Media
          </h2>
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
        </div>}
        <div className="mt-5">
          {newFeilds?.map((item, index) => (
            <>
            {/* image - galary */}
              {item?.type === "Image" && <Image item={item} />}
              {item?.type === "Galary" && <GalleryImage item={item} />}

              {/* see me in  action */}
              {item?.type === "Youtube" && <YouTube item={item} />}
              {item?.type === "Vimeo" && <YouTube item={item} />}
              {item?.type === "Wistia" && <YouTube item={item} />}

              {/* {item?.type === "Vimeo" && <Vimeo item={item}/>}
               */}

               {/* more details  */}
               {item?.type === "Pdf" && <Pdf item={item}/>}
               
               
            </>
          ))}
        </div>

        {/* <div className="my-3">
          <FieldData userData={userCardData} newFeilds={newFeilds} />
        </div> */}

        {/* <div className="mt-5 border-t flex gap-2 pt-3">
          {userCardData?.fields?.facebook[0] &&
            !newFeilds?.fields?.facebook[0] && (
              <a
                href={userCardData?.fields?.facebook[0]?.url}
                className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
                style={{ background: color }}
              >
                <svg
                  id="Dribbble-Light-Preview"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                >
                  <g id="icons">
                    <path
                      id="facebook-_176_"
                      data-name="facebook-[#176]"
                      d="M335.821,7259v-9h2.732l.446-4h-3.179v-1.948c0-1.029.026-2.052,1.466-2.052h1.458v-2.86a16.121,16.121,0,0,0-2.519-.14c-2.646,0-4.3,1.657-4.3,4.7v2.3H329v4h2.923v9Z"
                      transform="translate(-329 -7239)"
                      fill="#fff"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              </a>
            )}
          {newFeilds?.fields?.facebook?.toReversed()[0] && (
            <a
              href={newFeilds?.fields?.facebook?.toReversed()[0]?.url}
              className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
              style={{ background: color }}
            >
              <svg
                id="Dribbble-Light-Preview"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="20"
                viewBox="0 0 10 20"
              >
                <g id="icons">
                  <path
                    id="facebook-_176_"
                    data-name="facebook-[#176]"
                    d="M335.821,7259v-9h2.732l.446-4h-3.179v-1.948c0-1.029.026-2.052,1.466-2.052h1.458v-2.86a16.121,16.121,0,0,0-2.519-.14c-2.646,0-4.3,1.657-4.3,4.7v2.3H329v4h2.923v9Z"
                    transform="translate(-329 -7239)"
                    fill="#fff"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
            </a>
          )}
          {userCardData?.fields?.instagram[0] &&
            !newFeilds?.fields?.instagram[0] && (
              <a
                href={
                  userCardData?.fields?.instagram[0]
                    ? userCardData?.fields?.instagram[0]?.url
                    : "#"
                }
                className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
                style={{ background: color }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.5"
                  height="22.5"
                  viewBox="0 0 22.5 22.5"
                >
                  <g
                    id="instagram-svgrepo-com"
                    transform="translate(1.25 1.25)"
                  >
                    <path
                      id="Path_10"
                      data-name="Path 10"
                      d="M19.786,5H11.214A5.714,5.714,0,0,0,5.5,10.714v8.571A5.714,5.714,0,0,0,11.214,25h8.571A5.714,5.714,0,0,0,25.5,19.286V10.714A5.714,5.714,0,0,0,19.786,5Z"
                      transform="translate(-5.5 -5)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      fill-rule="evenodd"
                    />
                    <path
                      id="Path_11"
                      data-name="Path 11"
                      d="M13.143,16.286a3.643,3.643,0,1,1,2.576-1.067A3.643,3.643,0,0,1,13.143,16.286Z"
                      transform="translate(-3.143 -2.643)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      fill-rule="evenodd"
                    />
                    <rect
                      id="Rectangle_38"
                      data-name="Rectangle 38"
                      width="2"
                      height="2"
                      rx="1"
                      transform="translate(14.8 5.2) rotate(-90)"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_39"
                      data-name="Rectangle 39"
                      width="1.214"
                      height="1.214"
                      rx="0.5"
                      transform="translate(15.173 4.827) rotate(-90)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-width="2.5"
                    />
                  </g>
                </svg>
              </a>
            )}
          {newFeilds?.fields?.instagram?.toReversed()[0] && (
            <a
              href={newFeilds?.fields?.instagram?.toReversed()[0].url}
              className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
              style={{ background: color }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.5"
                height="22.5"
                viewBox="0 0 22.5 22.5"
              >
                <g id="instagram-svgrepo-com" transform="translate(1.25 1.25)">
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M19.786,5H11.214A5.714,5.714,0,0,0,5.5,10.714v8.571A5.714,5.714,0,0,0,11.214,25h8.571A5.714,5.714,0,0,0,25.5,19.286V10.714A5.714,5.714,0,0,0,19.786,5Z"
                    transform="translate(-5.5 -5)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M13.143,16.286a3.643,3.643,0,1,1,2.576-1.067A3.643,3.643,0,0,1,13.143,16.286Z"
                    transform="translate(-3.143 -2.643)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    fill-rule="evenodd"
                  />
                  <rect
                    id="Rectangle_38"
                    data-name="Rectangle 38"
                    width="2"
                    height="2"
                    rx="1"
                    transform="translate(14.8 5.2) rotate(-90)"
                    fill="#fff"
                  />
                  <rect
                    id="Rectangle_39"
                    data-name="Rectangle 39"
                    width="1.214"
                    height="1.214"
                    rx="0.5"
                    transform="translate(15.173 4.827) rotate(-90)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="2.5"
                  />
                </g>
              </svg>
            </a>
          )}
          {userCardData?.fields?.twitter[0] &&
            !newFeilds?.fields?.twitter[0] && (
              <a
                href={userCardData?.fields?.twitter[0].url}
                className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
                style={{ background: color }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.193"
                  height="19.108"
                  viewBox="0 0 23.193 19.108"
                >
                  <path
                    id="twitter-svgrepo-com"
                    d="M14.539,1.393A4.641,4.641,0,0,1,17.707,2.6a8.106,8.106,0,0,0,2.524-.942,3.911,3.911,0,0,1-1.748,2.147A8.126,8.126,0,0,0,20.767,3.2a8,8,0,0,1-1.984,2.011c.007.166.011.333.011.5A10.942,10.942,0,0,1,7.617,16.715,11.923,11.923,0,0,1,1.379,15.01a7.892,7.892,0,0,0,.948.056A8.1,8.1,0,0,0,7.269,13.4a3.966,3.966,0,0,1-3.716-2.695,4.129,4.129,0,0,0,.749.07,4.024,4.024,0,0,0,1.047-.137A3.906,3.906,0,0,1,2.157,6.835V6.784a4.044,4.044,0,0,0,1.8.488A3.859,3.859,0,0,1,2.19,4.039a3.786,3.786,0,0,1,.538-1.951,11.4,11.4,0,0,0,8.2,4.056,3.766,3.766,0,0,1-.1-.884,3.7,3.7,0,0,1,3.715-3.868m6.229,1.8h0M14.539,0A5.024,5.024,0,0,0,9.48,4.563,10.02,10.02,0,0,1,3.787,1.192,1.38,1.38,0,0,0,2.728.7q-.054,0-.109,0a1.384,1.384,0,0,0-1.077.67A5.212,5.212,0,0,0,1.13,5.85a1.4,1.4,0,0,0-.357.933v.051A5.229,5.229,0,0,0,2.2,10.414a1.4,1.4,0,0,0,.038.729,5.252,5.252,0,0,0,1.591,2.367,6.884,6.884,0,0,1-1.5.164,6.378,6.378,0,0,1-.781-.046,1.516,1.516,0,0,0-.168-.01,1.394,1.394,0,0,0-.731,2.576,13.271,13.271,0,0,0,6.97,1.916,12.117,12.117,0,0,0,9.363-4.043,12.742,12.742,0,0,0,3.2-8.177,9.368,9.368,0,0,0,1.7-1.855,1.4,1.4,0,0,0-.315-1.982A1.4,1.4,0,0,0,21.1.58,1.378,1.378,0,0,0,19.539.455a6.637,6.637,0,0,1-1.48.632A6.292,6.292,0,0,0,14.539,0Z"
                    transform="translate(0.54 0.5)"
                    fill="#fff"
                    stroke="#fff"
                    stroke-width="1"
                  />
                </svg>
              </a>
            )}
          {newFeilds?.fields?.twitter?.toReversed()[0] && (
            <a
              href={newFeilds?.fields?.twitter?.toReversed()[0].url}
              className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
              style={{ background: color }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.193"
                height="19.108"
                viewBox="0 0 23.193 19.108"
              >
                <path
                  id="twitter-svgrepo-com"
                  d="M14.539,1.393A4.641,4.641,0,0,1,17.707,2.6a8.106,8.106,0,0,0,2.524-.942,3.911,3.911,0,0,1-1.748,2.147A8.126,8.126,0,0,0,20.767,3.2a8,8,0,0,1-1.984,2.011c.007.166.011.333.011.5A10.942,10.942,0,0,1,7.617,16.715,11.923,11.923,0,0,1,1.379,15.01a7.892,7.892,0,0,0,.948.056A8.1,8.1,0,0,0,7.269,13.4a3.966,3.966,0,0,1-3.716-2.695,4.129,4.129,0,0,0,.749.07,4.024,4.024,0,0,0,1.047-.137A3.906,3.906,0,0,1,2.157,6.835V6.784a4.044,4.044,0,0,0,1.8.488A3.859,3.859,0,0,1,2.19,4.039a3.786,3.786,0,0,1,.538-1.951,11.4,11.4,0,0,0,8.2,4.056,3.766,3.766,0,0,1-.1-.884,3.7,3.7,0,0,1,3.715-3.868m6.229,1.8h0M14.539,0A5.024,5.024,0,0,0,9.48,4.563,10.02,10.02,0,0,1,3.787,1.192,1.38,1.38,0,0,0,2.728.7q-.054,0-.109,0a1.384,1.384,0,0,0-1.077.67A5.212,5.212,0,0,0,1.13,5.85a1.4,1.4,0,0,0-.357.933v.051A5.229,5.229,0,0,0,2.2,10.414a1.4,1.4,0,0,0,.038.729,5.252,5.252,0,0,0,1.591,2.367,6.884,6.884,0,0,1-1.5.164,6.378,6.378,0,0,1-.781-.046,1.516,1.516,0,0,0-.168-.01,1.394,1.394,0,0,0-.731,2.576,13.271,13.271,0,0,0,6.97,1.916,12.117,12.117,0,0,0,9.363-4.043,12.742,12.742,0,0,0,3.2-8.177,9.368,9.368,0,0,0,1.7-1.855,1.4,1.4,0,0,0-.315-1.982A1.4,1.4,0,0,0,21.1.58,1.378,1.378,0,0,0,19.539.455a6.637,6.637,0,0,1-1.48.632A6.292,6.292,0,0,0,14.539,0Z"
                  transform="translate(0.54 0.5)"
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="1"
                />
              </svg>
            </a>
          )}

          {userCardData?.fields?.linkedIn[0] &&
            !newFeilds?.fields?.linkedIn[0] && (
              <a
                href={
                  userCardData?.fields?.linkedIn[0]
                    ? userCardData?.fields?.linkedIn[0]?.url
                    : "#"
                }
                className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
                style={{ background: color }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="linkedin-svgrepo-com"
                    d="M6,2A4,4,0,0,0,2,6V18a4,4,0,0,0,4,4H18a4,4,0,0,0,4-4V6a4,4,0,0,0-4-4ZM4,6A2,2,0,0,1,6,4H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2Zm5,5a1,1,0,0,0-2,0v6a1,1,0,0,0,2,0Zm.5-3.5A1.5,1.5,0,1,1,8,6,1.5,1.5,0,0,1,9.5,7.5ZM12,10a1,1,0,0,1,.82.428A3.51,3.51,0,0,1,14.5,10,3.593,3.593,0,0,1,18,13.571v3.4h0v0h0a1,1,0,0,1-2,0h0v0h0v-3.4A1.6,1.6,0,0,0,14.5,12a1.76,1.76,0,0,0-1.5.963V16.98h0a1,1,0,0,1-2,0h0V11.058h0v0h0v0h0A1,1,0,0,1,12,10Z"
                    transform="translate(-2 -2)"
                    fill="#fff"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            )}
          {newFeilds?.fields?.linkedIn?.toReversed()[0] && (
            <a
              href={newFeilds?.fields?.linkedIn?.toReversed()[0].url}
              className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
              style={{ background: color }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  id="linkedin-svgrepo-com"
                  d="M6,2A4,4,0,0,0,2,6V18a4,4,0,0,0,4,4H18a4,4,0,0,0,4-4V6a4,4,0,0,0-4-4ZM4,6A2,2,0,0,1,6,4H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2Zm5,5a1,1,0,0,0-2,0v6a1,1,0,0,0,2,0Zm.5-3.5A1.5,1.5,0,1,1,8,6,1.5,1.5,0,0,1,9.5,7.5ZM12,10a1,1,0,0,1,.82.428A3.51,3.51,0,0,1,14.5,10,3.593,3.593,0,0,1,18,13.571v3.4h0v0h0a1,1,0,0,1-2,0h0v0h0v-3.4A1.6,1.6,0,0,0,14.5,12a1.76,1.76,0,0,0-1.5.963V16.98h0a1,1,0,0,1-2,0h0V11.058h0v0h0v0h0A1,1,0,0,1,12,10Z"
                  transform="translate(-2 -2)"
                  fill="#fff"
                  fill-rule="evenodd"
                />
              </svg>
            </a>
          )}

          {userCardData?.fields?.pinterest[0] &&
            !newFeilds?.fields?.pinterest[0] && (
              <a
                href={
                  userCardData?.fields?.pinterest[0]
                    ? userCardData?.fields?.pinterest[0]?.url
                    : "#"
                }
                className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
                style={{ background: color }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.621"
                  height="19.768"
                  viewBox="0 0 15.621 19.768"
                >
                  <path
                    id="pinterest-svgrepo-com"
                    d="M175.46,13.692c-.528,2.722-1.21,4.685-3.117,6.049-.59-4.113.865-7.2,1.54-10.483-1.151-1.906.138-5.743,2.564-4.8,2.985,1.164-2.37,6.809,1.37,7.55,3.9.772,5.3-5.891,2.883-8.312-3.5-3.5-10.466-.531-9.381,4.424a2.066,2.066,0,0,1-1.05,2.566c-1.2-.488-1.32-2.179-1.258-3.829.138-3.794,3.462-6.451,6.8-6.82,4.216-.465,8.173,1.524,8.719,5.431.616,4.408-1.822,9.472-6.331,9.128a8.487,8.487,0,0,1-2.731-.907"
                    transform="translate(-168.996 0.027)"
                    fill="#fff"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            )}
          {newFeilds?.fields?.pinterest?.toReversed()[0] && (
            <a
              href={newFeilds?.fields?.pinterest?.toReversed()[0].url}
              className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
              style={{ background: color }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.621"
                height="19.768"
                viewBox="0 0 15.621 19.768"
              >
                <path
                  id="pinterest-svgrepo-com"
                  d="M175.46,13.692c-.528,2.722-1.21,4.685-3.117,6.049-.59-4.113.865-7.2,1.54-10.483-1.151-1.906.138-5.743,2.564-4.8,2.985,1.164-2.37,6.809,1.37,7.55,3.9.772,5.3-5.891,2.883-8.312-3.5-3.5-10.466-.531-9.381,4.424a2.066,2.066,0,0,1-1.05,2.566c-1.2-.488-1.32-2.179-1.258-3.829.138-3.794,3.462-6.451,6.8-6.82,4.216-.465,8.173,1.524,8.719,5.431.616,4.408-1.822,9.472-6.331,9.128a8.487,8.487,0,0,1-2.731-.907"
                  transform="translate(-168.996 0.027)"
                  fill="#fff"
                  fill-rule="evenodd"
                />
              </svg>
            </a>
          )}

          {userCardData?.fields?.tikTok[0] && !newFeilds?.fields?.tikTok[0] && (
            <a
              href={
                userCardData?.fields?.tikTok[0]
                  ? userCardData?.fields?.tikTok[0]?.url
                  : "#"
              }
              className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
              style={{ background: color }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.87"
                height="24.412"
                viewBox="0 0 21.87 24.412"
              >
                <path
                  id="tik-tok-brand-assets-video-socialnetwork-oneline-svgrepo-com"
                  d="M24,8.63A5.742,5.742,0,0,1,18,3H14.5V16.708c0,3.917-3.084,5.593-5.139,4.105a2.984,2.984,0,0,1,2.389-5.329V11.323c-2.5,0-7.75.979-7.75,7.1,0,7.833,8.518,7.589,10.5,6.556,3.225-1.68,4-3.5,4-7.535V10.588A17.2,17.2,0,0,0,24,12.057"
                  transform="translate(-3.1 -2.1)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                />
              </svg>
            </a>
          )}
          {newFeilds?.fields?.tikTok?.toReversed()[0] && (
            <a
              href={newFeilds?.fields?.tikTok?.toReversed()[0].url}
              className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
              style={{ background: color }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.87"
                height="24.412"
                viewBox="0 0 21.87 24.412"
              >
                <path
                  id="tik-tok-brand-assets-video-socialnetwork-oneline-svgrepo-com"
                  d="M24,8.63A5.742,5.742,0,0,1,18,3H14.5V16.708c0,3.917-3.084,5.593-5.139,4.105a2.984,2.984,0,0,1,2.389-5.329V11.323c-2.5,0-7.75.979-7.75,7.1,0,7.833,8.518,7.589,10.5,6.556,3.225-1.68,4-3.5,4-7.535V10.588A17.2,17.2,0,0,0,24,12.057"
                  transform="translate(-3.1 -2.1)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                />
              </svg>
            </a>
          )}
        </div> */}
        {/* image */}
        {/* {userCardData?.fields?.image.toReversed()[0] &&
          !newFeilds?.fields?.image && <div>image 2</div>} */}
        {/* {newFeilds?.fields?.image?.image && (
          <div
            className={`
          my-5 w-full  relative h-[300px] flex
          ${
            newFeilds?.fields?.image?.alignment === "left"
              ? "justify-start"
              : newFeilds?.fields?.image?.alignment === "center"
              ? "justify-center"
              : "justify-end"
          }
          `}
          >
            <img
              className="h-[250px] object-cover rounded"
              src={newFeilds?.fields?.image?.image || ''}
              alt=""
              style={{
                width: `${newFeilds?.fields?.image?.width}%`,
              }}
            />
          </div>
        )} */}
        {/* gallery images here */}
        {/* {userCardData?.fields?.galary && (
          <div className="my-5">
            <GalleryImage userCardData={userCardData} newFeilds={newFeilds} />
          </div>
        )} */}

        {/* <div className="mt-5">
          {userCardData?.fields?.youTube > 0 && (
            <YouTube userCardData={userCardData} newFeilds={newFeilds} />
          )}
        </div> */}
        {/* pdf here  */}
        {/* <Pdf
          userCardData={userCardData}
          newFeilds={newFeilds}
          userData={userData}
        /> */}
        {/* YouTube */}
        {/* <YouTube userCardData={userCardData} newFeilds={newFeilds} /> */}

        {/* vimeo */}
        {/* <Vimeo userCardData={userCardData} newFeilds={newFeilds} /> */}

        {/* notes here */}
        {/* {userCardData?.fields?.notes && !newFeilds?.fields?.notes && (
          <div className="my-5">
            <p className="italic">{userCardData?.fields?.notes[0]}</p>
          </div>
        )} */}

        {/* {newFeilds?.fields?.notes && (
          <div className="my-5">
            <p className="italic">{newFeilds?.fields?.notes}</p>
          </div>
        )} */}
        {/* date here */}
        {/* {userCardData?.fields?.dateData[0] &&
          !newFeilds?.fields?.dateData[0] && (
            <div className="my-5 flex gap-4 items-center">
              <div className="bg-[#EB531C] w-[40px] h-[40px] flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.911"
                  height="23.337"
                  viewBox="0 0 20.911 23.337"
                >
                  <path
                    id="Path_37"
                    data-name="Path 37"
                    d="M23.411,11.492V7.853a2.426,2.426,0,0,0-2.426-2.426H6.426A2.426,2.426,0,0,0,4,7.853v3.639m19.411,0V22.411a2.426,2.426,0,0,1-2.426,2.426H6.426A2.426,2.426,0,0,1,4,22.411V11.492m19.411,0H4M8.853,3V7.853M18.558,3V7.853"
                    transform="translate(-3.25 -2.25)"
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width="1.5"
                  />
                </svg>
              </div>
              <div>
                <p>
                  <Moment format="DD/MM/YYYY">
                    {userCardData?.fields?.dateData[0]?.date}
                  </Moment>
                </p>
                <p>{userCardData?.fields?.dateData[0]?.funding}</p>
              </div>
            </div>
          )} */}

        {/* {newFeilds?.fields?.dateData[0] && (
          <div className="my-5 flex gap-4 items-center">
            <div className="bg-[#EB531C] w-[40px] h-[40px] flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.911"
                height="23.337"
                viewBox="0 0 20.911 23.337"
              >
                <path
                  id="Path_37"
                  data-name="Path 37"
                  d="M23.411,11.492V7.853a2.426,2.426,0,0,0-2.426-2.426H6.426A2.426,2.426,0,0,0,4,7.853v3.639m19.411,0V22.411a2.426,2.426,0,0,1-2.426,2.426H6.426A2.426,2.426,0,0,1,4,22.411V11.492m19.411,0H4M8.853,3V7.853M18.558,3V7.853"
                  transform="translate(-3.25 -2.25)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="1.5"
                />
              </svg>
            </div>
            <div>
              <p>
                <Moment format="DD/MM/YYYY">
                  {newFeilds?.fields?.dateData[0]?.date}
                </Moment>
              </p>
              <p>{newFeilds?.fields?.dateData[0]?.funding}</p>
            </div>
          </div>
        )}
        {userCardData?.fields?.QR[0]?.QrCode && (
          <div className="mt-5">
            <DottedQRCode value={userCardData?.fields?.QR[0]?.QrCode} />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default RightSidebar;

