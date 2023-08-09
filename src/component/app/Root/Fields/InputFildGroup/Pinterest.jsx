import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { baseUrl } from "@/src/config/Server";
const Pinterest = ({ index, handlePinterestInputChange, items, from }) => {
  const handleRemoveFields = () => {
    const id = localStorage.getItem("cardId");
    fetch(`${baseUrl}/cards/fields/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fieldName: "pinterest",
        elementId: items?._id,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
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
          <h4>Pinterest</h4>
        </div>
        <div onClick={() => (from ? handleRemoveFields() : "")}>
          <CloseIcon />
        </div>
      </div>
      <div className="mb-3">
        <div className="w-full relative ">
          <input
            name={`url`}
            defaultValue={items?.url}
            onChange={(e) =>
              handlePinterestInputChange(index, `url`, e.target.value)
            }
            type="text"
            placeholder="pinterest.com/michael21"
            className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
          />

          <label htmlFor="" className="absolute top-2 left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11.664"
              height="14.76"
              viewBox="0 0 11.664 14.76"
            >
              <path
                id="pinterest-svgrepo-com"
                d="M173.823,10.217c-.394,2.033-.9,3.5-2.328,4.517-.44-3.071.646-5.377,1.15-7.827-.86-1.423.1-4.288,1.915-3.583,2.229.869-1.77,5.085,1.023,5.638,2.916.577,3.959-4.4,2.152-6.206-2.612-2.61-7.815-.4-7.005,3.3a1.543,1.543,0,0,1-.784,1.916c-.9-.365-.985-1.627-.939-2.859A5.583,5.583,0,0,1,174.08.022c3.148-.347,6.1,1.138,6.51,4.056.46,3.292-1.361,7.073-4.728,6.816a6.338,6.338,0,0,1-2.04-.677"
                transform="translate(-168.996 0.027)"
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

export default Pinterest;
