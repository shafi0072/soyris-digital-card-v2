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
          {items?.hasOwnProperty('devider') && <button className="ms-4">{items?.type}</button>}
          {!items?.hasOwnProperty('devider') &&
            <h4>{items?.type}</h4>
          }
        </div>
        <div onClick={() => (from ? handleRemoveFields() : "")}>
          <CloseIcon />
        </div>
      </div>
      <div className="flex gap-2 justify-between">
        {useInternationalNumber && items?.hasOwnProperty("number") && (
          <div
            className={`${items?.hasOwnProperty("ext") ? "w-[70%]" : "w-[100%]"
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
              <svg xmlns="http://www.w3.org/2000/svg" width="12.038" height="13.459" viewBox="0 0 12.038 13.459">
                <path id="phone-svgrepo-com" d="M9.579,5.473S9.377,5,9.069,5a.768.768,0,0,0-.566.237C8.4,5.333,6.637,6.78,6.637,6.78a1.663,1.663,0,0,0-.473,1.288,8.537,8.537,0,0,0,1.052,3.706,17.162,17.162,0,0,0,4.311,5.1,10,10,0,0,0,2.4,1.34,6.953,6.953,0,0,0,1.164.243,1.182,1.182,0,0,0,.762-.236c.328-.238,2.168-1.717,2.168-1.717a.56.56,0,0,0-.073-.88c-.526-.473-2.121-1.525-2.462-1.8a.844.844,0,0,0-1.039.033c-.21.191-.585.507-.631.546-.069.053-.256.223-.467.138a6.438,6.438,0,0,1-2.385-2.1,6.514,6.514,0,0,1-1.275-2.339.343.343,0,0,1,.138-.4c.152-.105.71-.571.71-.571a.806.806,0,0,0,.21-.777c-.151-.42-1.166-2.885-1.166-2.885Z" transform="translate(-6.161 -5)" fill="#989898" />
              </svg>

            </label>
          </div>
        )}

        {items?.hasOwnProperty("url") && (
          <div
            className={`${items?.hasOwnProperty("ext") ? "w-[70%]" : "w-[100%]"
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
              {items?.icon}
            </label>
          </div>
        )}
        {items?.hasOwnProperty("address") && (
          <div
            className={`${items?.hasOwnProperty("ext") ? "w-[70%]" : "w-[100%]"
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
              {items?.icon}
            </label>
          </div>
        )}
        {items?.hasOwnProperty("title") && (
          <div
            className={`${items?.hasOwnProperty("ext") ? "w-[70%]" : "w-[100%]"
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
              {items?.icon}
            </label>
          </div>
        )}

        {!useInternationalNumber && (
          <div className="w-[70%]">
            <PhoneInput
              country={"us"}
              name={'number'}
              enableAreaCodes={true}
              placeholder={items?.placeholder}
              onChange={(e) =>
                handleFieldChange(items?.id, "number", e)
              }
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
                handleFieldChange(items?.id, "internationalNumber", e.target.value)
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
                  handleFieldChange(items?.id,
                    `hideLabelCopy`,
                    hideLabel
                  )
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
            <span>{items.icon}</span>

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
      {
        items.hasOwnProperty("pdf") && 
        <div>
           <label
            htmlFor="p"
            className="flex items-center gap-2 w-full bg-gray-200 px-3 py-1 rounded-full"
          >
            <span>
             {items.icon}
            </span>

            <p className="text-md">Add PDF</p>
          </label>
          <input
            type="file"
            id="p"
            style={{ display: "none" }}
          />
        </div>
      }
      {
        items?.hasOwnProperty("notes") && 
        <div>
          <textarea
              placeholder="Enter your address"
              className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1"
            >
          
            </textarea>
            <label htmlFor="" className="absolute top-12 left-5">
              {items?.icon}
            </label>
        </div>
      }
      {
        items?.hasOwnProperty("date") && 
        <div className='mb-3'>
        <div className='w-full relative '>
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
            type="date" placeholder='sype' className='border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 ' />

            <label htmlFor="" className='absolute top-2 left-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.059" height="15.692" viewBox="0 0 14.059 15.692">
                    <g id="date-range-svgrepo-com" transform="translate(0.5 0.5)">
                        <path id="Path_37" data-name="Path 37" d="M17.059,8.713V6.265a1.632,1.632,0,0,0-1.632-1.632H5.632A1.632,1.632,0,0,0,4,6.265V8.713m13.059,0v7.346a1.632,1.632,0,0,1-1.632,1.632H5.632A1.632,1.632,0,0,1,4,16.059V8.713m13.059,0H4M7.265,3V6.265M13.795,3V6.265" transform="translate(-4 -3)" fill="none" stroke="#989898" stroke-linecap="round" stroke-width="1" />
                        <rect id="Rectangle_85" data-name="Rectangle 85" width="2.844" height="2.37" rx="0.5" transform="translate(1.422 7.583)" fill="#989898" />
                        <rect id="Rectangle_86" data-name="Rectangle 86" width="2.449" height="2.449" rx="0.5" transform="translate(5.305 7.346)" fill="#989898" />
                        <rect id="Rectangle_87" data-name="Rectangle 87" width="2.37" height="2.37" rx="0.5" transform="translate(9.005 7.583)" fill="#989898" />
                    </g>
                </svg>

            </label>
        </div>
    </div>
      }

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