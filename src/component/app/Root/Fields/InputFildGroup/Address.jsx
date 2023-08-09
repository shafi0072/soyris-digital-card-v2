import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { baseUrl } from "@/src/config/Server";

const Address = ({ index, handleAddressInputChange, items ,from}) => {
  const handleRemoveFields = () => {
    const id = localStorage.getItem('cardId')
    fetch(`${baseUrl}/cards/fields/delete/${id}`, {
      method: 'DELETE',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        fieldName:'address',
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
          <h4>Address</h4>
        </div>
        <div onClick={() => (from ? handleRemoveFields() : "")}>
          <CloseIcon />
        </div>
      </div>
      <div className="mb-3">
        <div className="w-full relative ">
          <textarea
            name={`location`}
            onChange={(e) =>
              handleAddressInputChange(index, `location`, e.target.value)
            }
            placeholder="Enter your address"
            className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1"
          >
            {items?.location}
          </textarea>
          <label htmlFor="" className="absolute top-2 left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.167"
              height="17.269"
              viewBox="0 0 13.167 17.269"
            >
              <g id="layer1" transform="translate(1 1)">
                <path
                  id="path929"
                  d="M6.9,288.8a5.589,5.589,0,0,0-5.581,5.581c0,5.414,5.267,9.53,5.267,9.53a.507.507,0,0,0,.633,0s5.267-4.116,5.267-9.53A5.592,5.592,0,0,0,6.9,288.8Zm0,1.015a4.561,4.561,0,0,1,4.57,4.566c0,4.429-4.01,7.928-4.566,8.4-.553-.472-4.57-3.971-4.57-8.4A4.558,4.558,0,0,1,6.9,289.812Z"
                  transform="translate(-1.322 -288.797)"
                  fill="#989898"
                  stroke="#989898"
                  stroke-width="2"
                />
                <path
                  id="circle931"
                  d="M4.094,290.385a1.185,1.185,0,1,0,1.186,1.184A1.187,1.187,0,0,0,4.094,290.385Zm0,.474a.711.711,0,1,1-.71.71A.707.707,0,0,1,4.094,290.859Z"
                  transform="translate(1.488 -286.527)"
                  fill="#989898"
                  stroke="#989898"
                  stroke-width="2"
                />
              </g>
            </svg>
          </label>
        </div>
      </div>
      <div className="mb-3">
        <div className="w-full relative ">
          <input
            name={`label`}
            onChange={(e) =>
              handleAddressInputChange(index, `label`, e.target.value)
            }
            defaultValue={items?.label}
            type="text"
            placeholder="Label"
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
    </div>
  );
};

export default Address;
