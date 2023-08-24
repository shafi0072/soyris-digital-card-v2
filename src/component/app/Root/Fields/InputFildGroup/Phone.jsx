import React, { useContext } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { baseUrl } from "@/src/config/Server";
import { userContext } from "@/src/Storage/ContextApi";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import {
  addressIcon,
  dateIcon,
  discordIcon,
  emailIcon,
  facebookIcon,
  headerIcon,
  imageIcon,
  instagramIcon,
  linkIcon,
  linkedInIcon,
  notesIcon,
  phoneIcon,
  pinterestIcon,
  qrIcon,
  signalIcon,
  skypeIcon,
  slackIcon,
  snapchatIcon,
  telegramIcon,
  tiktokIcon,
  twitterIcon,
  viberIcon,
  vimeoIcon,
  websiteIcon,
  whatsAppIcon,
  wistiaIcon,
  youtubeIcon,
} from "@/src/component/core/Shared/FieldData/FeildInputIcon";
import Slider from "@mui/material/Slider";
const Phone = ({
  items,
  handleFieldChange,
  handleImageChanges,
  handleGalaryChanges,
  handlePdfChanges,
  handleDelete
}) => {
  const [hideLabel, setHideLabel] = useState(true);
  const [useInternationalNumber, setUseInternationalNumber] = useState(true);
const {userData} = useContext(userContext)
  const handleChange = (event, newValue) => {
    console.log(newValue);
  };
  const filename = `${userData?.email?.slice(0,6)}-document.pdf`;

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = `${items?.pdf}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="bg-white px-4 py-2 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb">
          <div className="flex flex-col">
            <span>
              <KeyboardArrowUpIcon />
            </span>
            <span className="-mt-4 ">
              <KeyboardArrowDownIcon />
            </span>
          </div>
          {items?.hasOwnProperty("devider") && (
            <button className="ms-4">{items?.type}</button>
          )}
          {!items?.hasOwnProperty("devider") && <h4>{items?.type}</h4>}
        </div>
        <div onClick={()=>handleDelete(items?.id)}>
          <CloseIcon />
        </div>
      </div>
      <div className="flex gap-2 justify-between">
        {!items?.internationalNumber && items?.hasOwnProperty("number") && items?.hasOwnProperty("number") && (
          <div
            className={`${
              items?.hasOwnProperty("ext") ? "w-[70%]" : "w-[100%]"
            }  relative`}
          >
            <input id={items?.type}
              type="text"
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
              placeholder={items?.pleaceholder}
              value={items?.number && items?.number}
              onChange={(e) =>
                handleFieldChange(items?.id, "number", e.target.value)
              }
            />

            <label htmlFor="" className="absolute top-1/4 left-2">
              {items?.type === "Phone" && phoneIcon}
              {items?.type === "WhatsApp" && whatsAppIcon}
              {items?.type === "Viber" && viberIcon}
              {items?.type === "Skype" && skypeIcon}
              {items?.type === "Snapchat" && snapchatIcon}
              {items?.type === "Signal" && signalIcon}
              {items?.type === "Telegram" && telegramIcon}
              {items?.type === "Discord" && discordIcon}
              {items?.type === "Slack" && slackIcon}
            </label>
          </div>
        )}

        {items?.hasOwnProperty("url") && (
          <div
            className={`${
              items?.hasOwnProperty("ext") ? "w-[70%]" : "w-[100%]"
            }  relative`}
          >
            <input id={items?.type}
              type="text"
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
              placeholder={items?.pleaceholder}
              value={items?.url && items?.url}
              onChange={(e) =>
                handleFieldChange(items?.id, "url", e.target.value)
              }
            />
            <label htmlFor="" className="absolute top-1/4 left-2">
              {items?.type === "Website" && websiteIcon}
              {items?.type === "Email" && emailIcon}
              {items?.type === "Link" && linkIcon}
              {items?.type === "Facebook" && facebookIcon}
              {items?.type === "Instagram" && instagramIcon}
              {items?.type === "Twitter" && twitterIcon}
              {items?.type === "LinkedIn" && linkedInIcon}
              {items?.type === "Pinterest" && pinterestIcon}
              {items?.type === "Tiktok" && tiktokIcon}
              {items?.type === "Youtube" && youtubeIcon}
              {items?.type === "Vimeo" && vimeoIcon}
              {items?.type === "Wistia" && wistiaIcon}
              {items?.type === "QR" && qrIcon}
            </label>
          </div>
        )}
        {items?.hasOwnProperty("address") && (
          <div
            className={`${
              items?.hasOwnProperty("ext") ? "w-[70%]" : "w-[100%]"
            }  relative`}
          >
            <textarea
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1"
              onChange={(e) =>
                handleFieldChange(items?.id, "address", e.target.value)
              }
              placeholder={items?.pleaceholder}
            >
              {items?.address}
            </textarea>
            <label htmlFor="" className="absolute top-1/4 left-2">
              {items?.type === "Address" && addressIcon}
            </label>
          </div>
        )}
        {items?.hasOwnProperty("title") && (
          <div
            className={`${
              items?.hasOwnProperty("ext") ? "w-[70%]" : "w-[100%]"
            }  relative`}
            // placeholder={items?.pleaceholder}
            // defaultValue={items?.title && items?.title}
            // onChange={(e) =>
            //   handleFieldChange(items?.id, "title", e.target.value)
            // }
          >
            <input id={items?.type}
              type="text"
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
              placeholder={items?.pleaceholder}
              value={items?.title && items?.title}
              onChange={(e) =>
                handleFieldChange(items?.id, "title", e.target.value)
              }
            />
            <label htmlFor="" className="absolute top-1/4 left-2">
              {items?.type === "Header" && headerIcon}
            </label>
          </div>
        )}
        {items?.hasOwnProperty("qr") && (
          <div className="w-full">
          <div
            className={`${
              items?.hasOwnProperty("ext") ? "w-[70%]" : "w-[100%]"
            }  relative`}
            placeholder={items?.pleaceholder}
            onChange={(e) =>
              handleFieldChange(items?.id, "qr", e.target.value)
            }
          >
            <input id={items?.type}
              type="text"
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
              placeholder={items?.pleaceholder}
              onChange={(e) =>
                handleFieldChange(items?.id, "qr", e.target.value)
              }
            />
            <label htmlFor="" className="absolute top-1/4 left-2">
              {items?.type === "QR" && qrIcon}
            </label>

            
          </div>
          {items?.type === 'QR' && (
            <div className="my-5">
              
              <div className="mt-3 flex items-center gap-4">
                <p>Alignment</p>
                <div className="flex border-4 border-[#D5D8DC] rounded-lg">
                  <button
                    className={`p-2 ${
                      items?.align === "left" && "bg-[#D5D8DC]"
                    }`}
                    onClick={() =>
                      handleFieldChange(items?.id, "align", "left")
                    }
                  >
                    <svg
                      id="align-left-svgrepo-com_2_"
                      data-name="align-left-svgrepo-com (2)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.824"
                      height="19.291"
                      viewBox="0 0 16.824 19.291"
                    >
                      <path
                        id="Path_59"
                        data-name="Path 59"
                        d="M7.375,7.618a3.334,3.334,0,0,1,.18-1.57,1.346,1.346,0,0,1,.493-.493,3.334,3.334,0,0,1,1.57-.18h8.075a3.334,3.334,0,0,1,1.57.18,1.346,1.346,0,0,1,.493.493,3.333,3.333,0,0,1,.18,1.57,3.333,3.333,0,0,1-.18,1.57,1.345,1.345,0,0,1-.493.493,3.333,3.333,0,0,1-1.57.18H9.618a3.333,3.333,0,0,1-1.57-.18,1.345,1.345,0,0,1-.493-.493A3.334,3.334,0,0,1,7.375,7.618Z"
                        transform="translate(-3.113 -2.01)"
                        fill="#525962"
                      />
                      <path
                        id="Path_60"
                        data-name="Path 60"
                        d="M7.375,16.618a3.334,3.334,0,0,1,.18-1.57,1.346,1.346,0,0,1,.493-.493,3.333,3.333,0,0,1,1.57-.18H15a3.333,3.333,0,0,1,1.57.18,1.345,1.345,0,0,1,.493.493,3.333,3.333,0,0,1,.18,1.57,3.333,3.333,0,0,1-.18,1.57,1.345,1.345,0,0,1-.493.493,3.333,3.333,0,0,1-1.57.18H9.618a3.333,3.333,0,0,1-1.57-.18,1.346,1.346,0,0,1-.493-.493A3.334,3.334,0,0,1,7.375,16.618Z"
                        transform="translate(-3.113 -2.935)"
                        fill="#525962"
                      />
                      <path
                        id="Path_61"
                        data-name="Path 61"
                        d="M3.3,20.916a.673.673,0,0,0,.673-.673V2.3a.673.673,0,0,0-1.346,0V20.243A.673.673,0,0,0,3.3,20.916Z"
                        transform="translate(-2.625 -1.625)"
                        fill="#525962"
                        fill-rule="evenodd"
                        opacity="0.5"
                      />
                    </svg>
                  </button>
                  <button
                    className={`p-2 ${
                      items?.align === "center" && "bg-[#D5D8DC]"
                    }`}
                    onClick={() =>
                      handleFieldChange(items?.id, "align", "center")
                    }
                  >
                    <svg
                      id="align-horizontal-center-svgrepo-com"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.562"
                      height="19.291"
                      viewBox="0 0 12.562 19.291"
                    >
                      <path
                        id="Path_65"
                        data-name="Path 65"
                        d="M13.729,14H9.243a3.333,3.333,0,0,0-1.57.18,1.346,1.346,0,0,0-.493.493A3.334,3.334,0,0,0,7,16.243a3.334,3.334,0,0,0,.18,1.57,1.346,1.346,0,0,0,.493.493,3.333,3.333,0,0,0,1.57.18h4.486a3.333,3.333,0,0,0,1.57-.18,1.345,1.345,0,0,0,.493-.493,3.333,3.333,0,0,0,.18-1.57,3.333,3.333,0,0,0-.18-1.57,1.345,1.345,0,0,0-.493-.493A3.333,3.333,0,0,0,13.729,14Z"
                        transform="translate(-5.205 -2.56)"
                        fill="#525962"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_66"
                        data-name="Path 66"
                        d="M17.562,7.243a3.333,3.333,0,0,0-.18-1.57,1.346,1.346,0,0,0-.493-.493A3.334,3.334,0,0,0,15.319,5H7.243a3.334,3.334,0,0,0-1.57.18,1.346,1.346,0,0,0-.493.493A3.334,3.334,0,0,0,5,7.243a3.334,3.334,0,0,0,.18,1.57,1.346,1.346,0,0,0,.493.493,3.334,3.334,0,0,0,1.57.18h8.075a3.334,3.334,0,0,0,1.57-.18,1.346,1.346,0,0,0,.493-.493A3.333,3.333,0,0,0,17.562,7.243Z"
                        transform="translate(-5 -1.635)"
                        fill="#525962"
                      />
                      <g
                        id="Group_26"
                        data-name="Group 26"
                        transform="translate(5.608 0)"
                        opacity="0.5"
                      >
                        <path
                          id="Path_67"
                          data-name="Path 67"
                          d="M12.6,4.615V1.923a.673.673,0,1,0-1.346,0V4.615Z"
                          transform="translate(-11.25 -1.25)"
                          fill="#525962"
                        />
                        <path
                          id="Path_68"
                          data-name="Path 68"
                          d="M11.25,10v3.589H12.6V10Z"
                          transform="translate(-11.25 -2.149)"
                          fill="#525962"
                        />
                        <path
                          id="Path_69"
                          data-name="Path 69"
                          d="M11.25,19v2.692a.673.673,0,1,0,1.346,0V19Z"
                          transform="translate(-11.25 -3.074)"
                          fill="#525962"
                        />
                      </g>
                    </svg>
                  </button>
                  <button
                    className={`p-2 ${
                      items?.align === "right" && "bg-[#D5D8DC]"
                    }`}
                    onClick={() =>
                      handleFieldChange(items?.id, "align", "right")
                    }
                  >
                    <svg
                      id="align-right-svgrepo-com"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.824"
                      height="19.291"
                      viewBox="0 0 16.824 19.291"
                    >
                      <path
                        id="Path_62"
                        data-name="Path 62"
                        d="M15.187,7.618a3.333,3.333,0,0,0-.18-1.57,1.346,1.346,0,0,0-.493-.493,3.334,3.334,0,0,0-1.57-.18H4.868a3.334,3.334,0,0,0-1.57.18,1.346,1.346,0,0,0-.493.493,3.334,3.334,0,0,0-.18,1.57,3.334,3.334,0,0,0,.18,1.57,1.345,1.345,0,0,0,.493.493,3.333,3.333,0,0,0,1.57.18h8.075a3.333,3.333,0,0,0,1.57-.18,1.345,1.345,0,0,0,.493-.493A3.333,3.333,0,0,0,15.187,7.618Z"
                        transform="translate(-2.625 -2.01)"
                        fill="#525962"
                      />
                      <path
                        id="Path_63"
                        data-name="Path 63"
                        d="M15.495,16.618a3.333,3.333,0,0,0-.18-1.57,1.345,1.345,0,0,0-.493-.493,3.333,3.333,0,0,0-1.57-.18H7.868a3.333,3.333,0,0,0-1.57.18,1.346,1.346,0,0,0-.493.493,3.334,3.334,0,0,0-.18,1.57,3.334,3.334,0,0,0,.18,1.57,1.346,1.346,0,0,0,.493.493,3.333,3.333,0,0,0,1.57.18h5.384a3.333,3.333,0,0,0,1.57-.18,1.345,1.345,0,0,0,.493-.493A3.333,3.333,0,0,0,15.495,16.618Z"
                        transform="translate(-2.933 -2.935)"
                        fill="#525962"
                      />
                      <path
                        id="Path_64"
                        data-name="Path 64"
                        d="M20.548,20.916a.673.673,0,0,1-.673-.673V2.3a.673.673,0,0,1,1.346,0V20.243A.673.673,0,0,1,20.548,20.916Z"
                        transform="translate(-4.397 -1.625)"
                        fill="#525962"
                        fill-rule="evenodd"
                        opacity="0.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <p>Width</p>
                <div className="imageWidthSlider">
                  <Slider
                    valueLabelDisplay="auto"
                    min={30}
                    max={100}
                    value={items?.width}
                    sx={{
                      width: 200,
                      color: "#D5D8DC",
                      height: 8,
                      padding: "5px 0",
                    }}
                    onChange={(e) =>
                      handleFieldChange(
                        items?.id,
                        "width",
                        parseInt(e.target.value)
                      )
                    }
                  />
                </div>
              </div>
            </div>
          )}
          </div>
        )}

        {items?.internationalNumber && (
          <div className="w-[70%]">
            <PhoneInput
              country={"us"}
              name={"number"}
              enableAreaCodes={true}
              countryCodeEditable={true}
              placeholder={items?.placeholder}
              value={items?.number && items?.number}
              onChange={(e) => handleFieldChange(items?.id, "number", e)}
              inputProps={{
                required: true,
              }}
            />
          </div>
        )}
        {items?.hasOwnProperty("ext") && (
          <div className="relative w-[25%]">
            <input id={items?.type}
              type="text"
              name={"Code"}
              value={items?.ext && items?.ext}
              onChange={(e) =>
                handleFieldChange(items?.id, "ext", e.target.value)
              }
              className="border w-full border-[#C1C1C1] rounded-xl py-1 pl-4"
            />
            <label htmlFor="" className="absolute top-1 left-2 color-[#C1C1C1]">
              #
            </label>
          </div>
        )}
      </div>

      {/* Phone */}
      {items?.type === "Phone" && (
        <>
          <div class="flex items-center mt-4">
            <input id={items?.type}
              onChange={(e) =>
                handleFieldChange(
                  items?.id,
                  "internationalNumber",
                  e.target.value
                )
              }
              onClick={() => setUseInternationalNumber(!useInternationalNumber)}
              id="default-checkbox"
              type="checkbox"
              value={useInternationalNumber}
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Use International Numbers
            </label>
          </div>
          <div className="mt-4 relative">
            <select
              name={`chooseLabel`}
              
              onChange={(e) =>
                handleFieldChange(items?.id, `chooseLabel`, e.target.value)
              }
              id={`choiceLabel`}
              class="w-full py-2 pl-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
            > 

              <option selected >Choice label</option>
              <option value="Office" selected={items?.chooseLabel === "Office"}>Office</option>
              <option value="Mobile" selected={items?.chooseLabel === "Mobile"}>Mobile</option>
              <option value="Fax" selected={items?.chooseLabel === "Fax"}>Fax</option>
            </select>
            <label htmlFor="" className="absolute top-3 left-2 color-[#C1C1C1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.221"
                height="13.431"
                viewBox="0 0 14.221 13.431"
              >
                <path
                  id="text-tool-svgrepo-com"
                  d="M3,4.79A.79.79,0,0,1,3.79,4H16.431a.79.79,0,0,1,.79.79V6.37a.79.79,0,1,1-1.58,0V5.58H10.9V15.851h1.58a.79.79,0,0,1,0,1.58H7.74a.79.79,0,0,1,0-1.58H9.32V5.58H4.58v.79A.79.79,0,0,1,3,6.37Z"
                  transform="translate(-3 -4)"
                  fill="#989898"
                  fill-rule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="mt-4">
            <label class="relative inline-flex items-center cursor-pointer">
              <input id={items?.type}
                name={`hideLabel`}
                onChange={(e) =>
                  handleFieldChange(items?.id, `hideLabelCopy`, hideLabel)
                }
                checked={items?.hideLabelCopy}
                onClick={() => setHideLabel(!hideLabel)}
                type="checkbox"
                value={hideLabel}
                class="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span class="ml-3 text-sm font-medium text-[#585858]">
                Hide label copy
              </span>
            </label>
          </div>
        </>
      )}
      {/* link display Url */}
      {items?.type === "Link" && (
        <div className="my-3">
          <div className="w-full relative ">
            <input id={items?.type}
              onChange={(e) =>
                handleFieldChange(items?.id, "displayUrl", e.target.value)
              }
              type="text"
              value={items?.displayUrl && items?.displayUrl}
              placeholder={items?.displayPleaceHolder}
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
            />
            <label htmlFor="" className="absolute top-3 left-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.221"
                height="13.431"
                viewBox="0 0 14.221 13.431"
              >
                <path
                  id="text-tool-svgrepo-com"
                  d="M3,4.79A.79.79,0,0,1,3.79,4H16.431a.79.79,0,0,1,.79.79V6.37a.79.79,0,1,1-1.58,0V5.58H10.9V15.851h1.58a.79.79,0,0,1,0,1.58H7.74a.79.79,0,0,1,0-1.58H9.32V5.58H4.58v.79A.79.79,0,0,1,3,6.37Z"
                  transform="translate(-3 -4)"
                  fill="#989898"
                  fill-rule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      )}

      {items?.type === "Image" && (
        <div>
          {items?.image && (
            <div className="my-5">
              <div>
                <img
                  src={items?.image}
                  className=" w-[200px] h-[100px] object-cover"
                  alt=""
                />
              </div>
              <div className="mt-3 flex items-center gap-4">
                <p>Alignment</p>
                <div className="flex border-4 border-[#D5D8DC] rounded-lg">
                  <button
                    className={`p-2 ${
                      items?.align === "left" && "bg-[#D5D8DC]"
                    }`}
                    onClick={() =>
                      handleFieldChange(items?.id, "align", "left")
                    }
                  >
                    <svg
                      id="align-left-svgrepo-com_2_"
                      data-name="align-left-svgrepo-com (2)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.824"
                      height="19.291"
                      viewBox="0 0 16.824 19.291"
                    >
                      <path
                        id="Path_59"
                        data-name="Path 59"
                        d="M7.375,7.618a3.334,3.334,0,0,1,.18-1.57,1.346,1.346,0,0,1,.493-.493,3.334,3.334,0,0,1,1.57-.18h8.075a3.334,3.334,0,0,1,1.57.18,1.346,1.346,0,0,1,.493.493,3.333,3.333,0,0,1,.18,1.57,3.333,3.333,0,0,1-.18,1.57,1.345,1.345,0,0,1-.493.493,3.333,3.333,0,0,1-1.57.18H9.618a3.333,3.333,0,0,1-1.57-.18,1.345,1.345,0,0,1-.493-.493A3.334,3.334,0,0,1,7.375,7.618Z"
                        transform="translate(-3.113 -2.01)"
                        fill="#525962"
                      />
                      <path
                        id="Path_60"
                        data-name="Path 60"
                        d="M7.375,16.618a3.334,3.334,0,0,1,.18-1.57,1.346,1.346,0,0,1,.493-.493,3.333,3.333,0,0,1,1.57-.18H15a3.333,3.333,0,0,1,1.57.18,1.345,1.345,0,0,1,.493.493,3.333,3.333,0,0,1,.18,1.57,3.333,3.333,0,0,1-.18,1.57,1.345,1.345,0,0,1-.493.493,3.333,3.333,0,0,1-1.57.18H9.618a3.333,3.333,0,0,1-1.57-.18,1.346,1.346,0,0,1-.493-.493A3.334,3.334,0,0,1,7.375,16.618Z"
                        transform="translate(-3.113 -2.935)"
                        fill="#525962"
                      />
                      <path
                        id="Path_61"
                        data-name="Path 61"
                        d="M3.3,20.916a.673.673,0,0,0,.673-.673V2.3a.673.673,0,0,0-1.346,0V20.243A.673.673,0,0,0,3.3,20.916Z"
                        transform="translate(-2.625 -1.625)"
                        fill="#525962"
                        fill-rule="evenodd"
                        opacity="0.5"
                      />
                    </svg>
                  </button>
                  <button
                    className={`p-2 ${
                      items?.align === "center" && "bg-[#D5D8DC]"
                    }`}
                    onClick={() =>
                      handleFieldChange(items?.id, "align", "center")
                    }
                  >
                    <svg
                      id="align-horizontal-center-svgrepo-com"
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.562"
                      height="19.291"
                      viewBox="0 0 12.562 19.291"
                    >
                      <path
                        id="Path_65"
                        data-name="Path 65"
                        d="M13.729,14H9.243a3.333,3.333,0,0,0-1.57.18,1.346,1.346,0,0,0-.493.493A3.334,3.334,0,0,0,7,16.243a3.334,3.334,0,0,0,.18,1.57,1.346,1.346,0,0,0,.493.493,3.333,3.333,0,0,0,1.57.18h4.486a3.333,3.333,0,0,0,1.57-.18,1.345,1.345,0,0,0,.493-.493,3.333,3.333,0,0,0,.18-1.57,3.333,3.333,0,0,0-.18-1.57,1.345,1.345,0,0,0-.493-.493A3.333,3.333,0,0,0,13.729,14Z"
                        transform="translate(-5.205 -2.56)"
                        fill="#525962"
                        fill-rule="evenodd"
                      />
                      <path
                        id="Path_66"
                        data-name="Path 66"
                        d="M17.562,7.243a3.333,3.333,0,0,0-.18-1.57,1.346,1.346,0,0,0-.493-.493A3.334,3.334,0,0,0,15.319,5H7.243a3.334,3.334,0,0,0-1.57.18,1.346,1.346,0,0,0-.493.493A3.334,3.334,0,0,0,5,7.243a3.334,3.334,0,0,0,.18,1.57,1.346,1.346,0,0,0,.493.493,3.334,3.334,0,0,0,1.57.18h8.075a3.334,3.334,0,0,0,1.57-.18,1.346,1.346,0,0,0,.493-.493A3.333,3.333,0,0,0,17.562,7.243Z"
                        transform="translate(-5 -1.635)"
                        fill="#525962"
                      />
                      <g
                        id="Group_26"
                        data-name="Group 26"
                        transform="translate(5.608 0)"
                        opacity="0.5"
                      >
                        <path
                          id="Path_67"
                          data-name="Path 67"
                          d="M12.6,4.615V1.923a.673.673,0,1,0-1.346,0V4.615Z"
                          transform="translate(-11.25 -1.25)"
                          fill="#525962"
                        />
                        <path
                          id="Path_68"
                          data-name="Path 68"
                          d="M11.25,10v3.589H12.6V10Z"
                          transform="translate(-11.25 -2.149)"
                          fill="#525962"
                        />
                        <path
                          id="Path_69"
                          data-name="Path 69"
                          d="M11.25,19v2.692a.673.673,0,1,0,1.346,0V19Z"
                          transform="translate(-11.25 -3.074)"
                          fill="#525962"
                        />
                      </g>
                    </svg>
                  </button>
                  <button
                    className={`p-2 ${
                      items?.align === "right" && "bg-[#D5D8DC]"
                    }`}
                    onClick={() =>
                      handleFieldChange(items?.id, "align", "right")
                    }
                  >
                    <svg
                      id="align-right-svgrepo-com"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.824"
                      height="19.291"
                      viewBox="0 0 16.824 19.291"
                    >
                      <path
                        id="Path_62"
                        data-name="Path 62"
                        d="M15.187,7.618a3.333,3.333,0,0,0-.18-1.57,1.346,1.346,0,0,0-.493-.493,3.334,3.334,0,0,0-1.57-.18H4.868a3.334,3.334,0,0,0-1.57.18,1.346,1.346,0,0,0-.493.493,3.334,3.334,0,0,0-.18,1.57,3.334,3.334,0,0,0,.18,1.57,1.345,1.345,0,0,0,.493.493,3.333,3.333,0,0,0,1.57.18h8.075a3.333,3.333,0,0,0,1.57-.18,1.345,1.345,0,0,0,.493-.493A3.333,3.333,0,0,0,15.187,7.618Z"
                        transform="translate(-2.625 -2.01)"
                        fill="#525962"
                      />
                      <path
                        id="Path_63"
                        data-name="Path 63"
                        d="M15.495,16.618a3.333,3.333,0,0,0-.18-1.57,1.345,1.345,0,0,0-.493-.493,3.333,3.333,0,0,0-1.57-.18H7.868a3.333,3.333,0,0,0-1.57.18,1.346,1.346,0,0,0-.493.493,3.334,3.334,0,0,0-.18,1.57,3.334,3.334,0,0,0,.18,1.57,1.346,1.346,0,0,0,.493.493,3.333,3.333,0,0,0,1.57.18h5.384a3.333,3.333,0,0,0,1.57-.18,1.345,1.345,0,0,0,.493-.493A3.333,3.333,0,0,0,15.495,16.618Z"
                        transform="translate(-2.933 -2.935)"
                        fill="#525962"
                      />
                      <path
                        id="Path_64"
                        data-name="Path 64"
                        d="M20.548,20.916a.673.673,0,0,1-.673-.673V2.3a.673.673,0,0,1,1.346,0V20.243A.673.673,0,0,1,20.548,20.916Z"
                        transform="translate(-4.397 -1.625)"
                        fill="#525962"
                        fill-rule="evenodd"
                        opacity="0.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <p>Width</p>
                <div className="imageWidthSlider">
                  <Slider
                    valueLabelDisplay="auto"
                    min={30}
                    max={100}
                    value={items?.width}
                    sx={{
                      width: 200,
                      color: "#D5D8DC",
                      height: 8,
                      padding: "5px 0",
                    }}
                    onChange={(e) =>
                      handleFieldChange(
                        items?.id,
                        "width",
                        parseInt(e.target.value)
                      )
                    }
                  />
                </div>
              </div>
            </div>
          )}
          <label
            htmlFor="image"
            className="flex items-center gap-2 w-full bg-gray-200 px-3 py-1 rounded-full"
          >
            <span>{items?.type === "Image" && imageIcon}</span>

            <p className="text-md">Add Media</p>
          </label>
          <input id={items?.type}
            type="file"
            id="image"
            onChange={(e) => handleImageChanges(items?.id, e.target.files[0])}
            style={{ display: "none" }}
          />
        </div>
      )}
      {items?.type === "Galary" && (
        <div>
          {items?.image?.length > 0 && (
            <div className="w-full">
              <div className="flex gap-2 flex-wrap my-4">
                {items?.image
                  ?.toReversed()
                  ?.slice(0, 4)
                  .map((img, index) => (
                    <img
                      key={index}
                      className="w-[144px] h-[55px]  object-cover"
                      src={img}
                    />
                  ))}
              </div>
            </div>
          )}
          <label
            htmlFor="galaryImage"
            className="flex items-center gap-2 w-full bg-gray-200 px-3 py-1 rounded-full"
          >
            <span>{items?.type === "Galary" && imageIcon}</span>

            <p className="text-md">Add Media</p>
          </label>
          <input id={items?.type}
            type="file"
            id="galaryImage"
            onChange={(e) => handleGalaryChanges(items?.id, e.target.files[0])}
            style={{ display: "none" }}
          />
        </div>
      )}
      {items?.hasOwnProperty("pdf") && (
        <div>
            {items?.pdf  && (
          <div className=" flex-wrap my-4">
              <p className="flex gap-4 items-center">
                {" "}
                <PictureAsPdfIcon fontSize="large" />{" "}
                <button title="Click to Download" onClick={downloadPdf}>
                  <CloudDownloadIcon />
                </button>{" "}
              </p>
          </div>
            )}

          <label
            htmlFor="p"
            className="flex items-center gap-2 w-full bg-gray-200 px-3 py-1 rounded-full"
          >
            <span>{items?.type === "Pdf" && imageIcon}</span>

            <p className="text-md">Add PDF</p>
          </label>
          <input id={items?.type}
            type="file"
            id="p"
            style={{ display: "none" }}
            onChange={(e) => handlePdfChanges(items?.id, e.target.files[0])}
          />
        </div>
      )}
      {items?.type === "Notes" && (
        <div className="relative">
          <textarea
            placeholder="Enter your address"
            className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1"

            onChange={(e) =>
              handleFieldChange(
                items?.id,
                "notes",
                e.target.value
              )
            }
          >
            {items?.notes}
          </textarea>
          <label htmlFor="" className="absolute top-1 left-2">
            {items?.type === "Notes" && <EditNoteOutlinedIcon/>}
          </label>
        </div>
      )}
      {items?.hasOwnProperty("date") && (
        <div className="mb-3">
          <div className="w-full relative ">
            <input id={items?.type}
              name={`date`}
              value={items?.date && items?.date}
              onChange={(e) =>
                handleFieldChange(
                  items?.id,
                  "date",
                  e.target.value
                )
              }
              type="date"
              placeholder="sype"
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
            />

            <label htmlFor="" className="absolute top-2 left-3">
              {items?.type === "Date" && dateIcon}
            </label>
          </div>
        </div>
      )}
      {/* not phone */}
      {items?.hasOwnProperty("label") && (
        <div className="my-3">
          <div className="w-full relative ">
            <input id={items?.type}
              value={items?.label && items?.label}
              onChange={(e) =>
                handleFieldChange(items?.id, "label", e.target.value)
              }
              type="text"
              placeholder={items?.labelPleaceholder}
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
            />
            <label htmlFor="" className="absolute top-3 left-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.221"
                height="13.431"
                viewBox="0 0 14.221 13.431"
              >
                <path
                  id="text-tool-svgrepo-com"
                  d="M3,4.79A.79.79,0,0,1,3.79,4H16.431a.79.79,0,0,1,.79.79V6.37a.79.79,0,1,1-1.58,0V5.58H10.9V15.851h1.58a.79.79,0,0,1,0,1.58H7.74a.79.79,0,0,1,0-1.58H9.32V5.58H4.58v.79A.79.79,0,0,1,3,6.37Z"
                  transform="translate(-3 -4)"
                  fill="#989898"
                  fill-rule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Phone;
