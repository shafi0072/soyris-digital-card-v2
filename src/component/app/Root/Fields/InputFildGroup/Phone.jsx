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
const Phone = ({
  items,
  handleFieldChange,
  handleImageChanges,
  handleGalaryChanges
}) => {
  const [hideLabel, setHideLabel] = useState(true);
  const [useInternationalNumber, setUseInternationalNumber] = useState(true);

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
        <div onClick={() => (from ? handleRemoveFields() : "")}>
          <CloseIcon />
        </div>
      </div>
      <div className="flex gap-2 justify-between">
        {useInternationalNumber && items?.hasOwnProperty("number") && (
          <div
            className={`${
              items?.hasOwnProperty("ext") ? "w-[70%]" : "w-[100%]"
            }  relative`}
          >
            <input
              type="text"
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
              placeholder={items?.pleaceholder}
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
            <input
              type="text"
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
              placeholder={items?.pleaceholder}
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
            ></textarea>
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
            placeholder={items?.pleaceholder}
            onChange={(e) =>
              handleFieldChange(items?.id, "title", e.target.value)
            }
          >
            <input
              type="text"
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
              placeholder={items?.pleaceholder}
              onChange={(e) =>
                handleFieldChange(items?.id, "title", e.target.value)
              }
            />
            <label htmlFor="" className="absolute top-1/4 left-2">
              {items?.type === "Header" && headerIcon}
            </label>
          </div>
        )}

        {!useInternationalNumber && (
          <div className="w-[70%]">
            <PhoneInput
              country={"us"}
              name={"number"}
              enableAreaCodes={true}
              placeholder={items?.placeholder}
              onChange={(e) => handleFieldChange(items?.id, "number", e)}
              inputProps={{
                required: true,
              }}
            />
          </div>
        )}
        {items?.hasOwnProperty("ext") && (
          <div className="relative w-[25%]">
            <input
              type="text"
              name={"Code"}
              defaultValue={items?.Code}
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
            <input
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
              <option selected>Choice label</option>
              <option value="Office">Office</option>
              <option value="Mobile">Mobile</option>
              <option value="Fax">Fax</option>
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
              <input
                name={`hideLabel`}
                onChange={(e) =>
                  handleFieldChange(items?.id, `hideLabelCopy`, hideLabel)
                }
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
            <input
              onChange={(e) =>
                handleFieldChange(items?.id, "displayUrl", e.target.value)
              }
              type="text"
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

      
      {items.type === 'Image' && (
        <div>
          <label
            htmlFor="image"
            className="flex items-center gap-2 w-full bg-gray-200 px-3 py-1 rounded-full"
          >
            <span>
              {items?.type === "Image" && imageIcon}
              {
                items?.type === "Galary" && imageIcon
              }
            </span>

            <p className="text-md">Add Media</p>
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => handleImageChanges(items?.id, e.target.files[0])}
            style={{ display: "none" }}
          />
        </div>
      )}
      {items.type === 'Galary' && (
        <div>
          <label
            htmlFor="galaryImage"
            className="flex items-center gap-2 w-full bg-gray-200 px-3 py-1 rounded-full"
          >
            <span>{items.icon}</span>

            <p className="text-md">Add Media</p>
          </label>
          <input
            type="file"
            id="galaryImage"
            onChange={(e) => handleGalaryChanges(items?.id, e.target.files[0])}
            style={{ display: "none" }}
          />
        </div>
      )}
      {items.hasOwnProperty("pdf") && (
        <div>
          <label
            htmlFor="p"
            className="flex items-center gap-2 w-full bg-gray-200 px-3 py-1 rounded-full"
          >
            <span>{items?.type === "Pdf" && imageIcon}</span>

            <p className="text-md">Add PDF</p>
          </label>
          <input type="file" id="p" style={{ display: "none" }} />
        </div>
      )}
      {items?.hasOwnProperty("notes") && (
        <div>
          <textarea
            placeholder="Enter your address"
            className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1"
          ></textarea>
          <label htmlFor="" className="absolute top-12 left-5">
            {items?.type === "Notes" && notesIcon}
          </label>
        </div>
      )}
      {items?.hasOwnProperty("date") && (
        <div className="mb-3">
          <div className="w-full relative ">
            <input
              name={`date`}
              //  defaultValue={items?.date}
              //  onChange={(e) =>
              //     handleDateInputChange(
              //      index,
              //      `date`,
              //      e.target.value
              //    )
              //  }
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
            <input
              defaultValue={items?.label}
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