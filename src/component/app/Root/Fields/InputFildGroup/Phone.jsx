import React, { useContext } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useEffect } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { baseUrl } from "@/src/config/Server";
import { userContext } from "@/src/Storage/ContextApi";
const Phone = ({ index,phoneData, handlePhoneInputChange, items, from }) => {
  const {userCardData}= useContext(userContext);
  let n = userCardData?.fields?.Phone?.length > 0 ? userCardData.fields?.Phone?.length +1 : index
  console.log({n});
  const [hideLabel, setHideLabel] = useState(true);
  const [useInternationalNumber, setUseInternationalNumber] = useState(true);
  const handleRemoveFields = () => {
    const id = localStorage.getItem('cardId')
    fetch(`${baseUrl}/cards/fields/delete/${id}`, {
      method: 'DELETE',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        fieldName:'Phone',
        elementId:items?._id
      }),
      
    })
  .then(response => response.text())
  .then(result => {
    window.location.reload()
  })
  .catch(error => console.log('error', error));
  }

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
          <h4>Phone</h4>
        </div>
        <div onClick={() => from ? handleRemoveFields() : ''}>
          <CloseIcon />
        </div>
      </div>
      <div className="flex gap-2 justify-between">
      {useInternationalNumber  &&<div className="w-[70%] relative ">
       
          <input
            type="text"
            defaultValue={items?.Number}
            name={`Number `}
            onChange={(e) =>
              handlePhoneInputChange(
                index,
                `Number`,
                e.target.value
              )
            }
            className="border w-full border-[#C1C1C1] rounded-xl ps-4 pr-1 py-1 "
          />
          <label htmlFor="" className="absolute top-1/4 left-2">
            
             <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.013"
              height="13.431"
              viewBox="0 0 12.013 13.431"
            >
              <path
                id="phone-svgrepo-com"
                d="M9.572,5.472S9.371,5,9.063,5a.766.766,0,0,0-.565.236c-.105.1-1.862,1.54-1.862,1.54a1.66,1.66,0,0,0-.472,1.286,8.52,8.52,0,0,0,1.049,3.7,17.127,17.127,0,0,0,4.3,5.09,9.979,9.979,0,0,0,2.394,1.338,6.938,6.938,0,0,0,1.162.243,1.18,1.18,0,0,0,.761-.235c.327-.237,2.163-1.714,2.163-1.714a.559.559,0,0,0-.073-.878c-.524-.472-2.117-1.521-2.457-1.8a.842.842,0,0,0-1.037.033c-.209.191-.584.505-.629.545-.068.053-.256.223-.466.138a6.425,6.425,0,0,1-2.38-2.092A6.5,6.5,0,0,1,9.68,10.1a.342.342,0,0,1,.137-.4c.151-.105.709-.57.709-.57a.8.8,0,0,0,.21-.775c-.151-.419-1.164-2.879-1.164-2.879Z"
                transform="translate(-6.161 -5)"
                fill="#989898"
              />
            </svg>
          </label>
        
        </div>}
        {!useInternationalNumber && <div className="w-[70%]">
          <PhoneInput
           
            country={'us'}
            enableAreaCodes={true}
            defaultValue={items?.Number}
            name={`Number `}
            onChange={(e) =>
            
              handlePhoneInputChange(
                index,
                `Number`,
                e
              )
            }
            inputProps={{
              required: true,
            }}
          />
          </div>}
        <div className="relative w-[25%]">
          <input
            type="text"
            name={"Code"}
            defaultValue={items?.Code}
            onChange={(e) =>
              handlePhoneInputChange(index, "Code", e.target.value)
            }
            className="border w-full border-[#C1C1C1] rounded-xl py-1 pl-4"
          />
          <label htmlFor="" className="absolute top-1 left-2 color-[#C1C1C1]">
            #
          </label>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <input
          name={`internationalNumber`}
          onChange={(e) =>
            handlePhoneInputChange(
              index,
              `internationalNumber`,
              useInternationalNumber
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
          name={`choiceLabel`}
          onChange={(e) =>
            handlePhoneInputChange(
              index,
              `choiceLabel`,
              e.target.value
            )
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
            name={`hideLabel${index + 1}`}
            onChange={(e) =>
              handlePhoneInputChange(
                index,
                `hideLabel${index + 1}`,
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
    </div>
  );
};

export default Phone;
