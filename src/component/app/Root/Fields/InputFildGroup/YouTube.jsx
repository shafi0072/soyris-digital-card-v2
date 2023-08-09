import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { baseUrl } from "@/src/config/Server";
const YouTube = ({ index, handleYoutubeInputChange, items, from }) => {
  const handleRemoveFields = () => {
    const id = localStorage.getItem("cardId");
    fetch(`${baseUrl}/cards/fields/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fieldName: "youTube",
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
          <h4>YouTube</h4>
        </div>
        <div onClick={() => (from ? handleRemoveFields() : "")}>
          <CloseIcon />
        </div>
      </div>
      <div className="mb-3">
        <div className="w-full relative ">
          <input
            name={`YoutubeUserName${index + 1}`}
            defaultValue={`${items}`}
            onChange={(e) =>
              handleYoutubeInputChange(
                index,
                `YoutubeUserName${index + 1}`,
                e.target.value
              )
            }
            type="text"
            placeholder="youtube.com/myvideo/12132a"
            className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
          />

          <label htmlFor="" className="absolute top-2 left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.584"
              height="13.459"
              viewBox="0 0 15.584 13.459"
            >
              <path
                id="youtube-svgrepo-com"
                d="M5.849,4.112a22.3,22.3,0,0,1,5.887,0A3.721,3.721,0,0,1,14.943,6.78a13.482,13.482,0,0,1,0,4.9,3.721,3.721,0,0,1-3.207,2.668,22.307,22.307,0,0,1-5.887,0,3.721,3.721,0,0,1-3.208-2.668,13.481,13.481,0,0,1,0-4.9A3.721,3.721,0,0,1,5.849,4.112Zm6.085-1.4a23.716,23.716,0,0,0-6.284,0,5.126,5.126,0,0,0-4.4,3.8,14.893,14.893,0,0,0,0,5.445,5.126,5.126,0,0,0,4.4,3.8,23.716,23.716,0,0,0,6.284,0,5.126,5.126,0,0,0,4.4-3.8,14.9,14.9,0,0,0,0-5.445A5.126,5.126,0,0,0,11.934,2.709Zm-4.166,3.1a.708.708,0,0,0-1.1.589v5.667a.708.708,0,0,0,1.1.589l4.25-2.833a.708.708,0,0,0,0-1.179Zm2.58,3.423-2.265,1.51V7.72Z"
                transform="translate(-1 -2.5)"
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

export default YouTube;
