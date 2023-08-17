import React, { useCallback, useContext, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { baseUrl } from "@/src/config/Server";
import { compressAndConvertToBase64 } from "@/src/config/base64";
import { userContext } from "@/src/Storage/ContextApi";
import Slider from '@mui/material/Slider';



const Image = ({ items, from, image, setImage, align, setAlign,imageWidth,setImageWidth }) => {
  console.log({align});
  console.log({imageWidth});
  const { newFeilds, userCardData } = useContext(userContext);
  const [base64Image, setBase64Image] = useState("");
  const saveImage =
    newFeilds?.fields?.image?.length > 0
      ? newFeilds?.fields?.image
      : userCardData?.fields?.image?.length > 0
      ? userCardData?.fields?.image
      : null;
  const handleRemoveFields = () => {
    const id = localStorage.getItem("cardId");
    fetch(`${baseUrl}/cards/fields/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fieldName: "image",
        elementId: items,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  };
  const handleFileChange = useCallback(async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const compressedBase64 = await compressAndConvertToBase64(
          file,
          800,
          600,
          0.8
        );
        // setImage((prev) => {
        //   const newImage = [...prev, compressedBase64];

        //   return newImage;
        // });
        setImage([{
          alignment:align,
          width: imageWidth,
          image: compressedBase64
        }])
        setBase64Image(compressedBase64);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
  },[align,imageWidth])
  const handleChange = (event, newValue) => {
    setImageWidth(newValue);
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
          <h4>Image</h4>
        </div>
        <div onClick={() => (from ? handleRemoveFields() : "")}>
          <CloseIcon />
        </div>
      </div>
      <div className="mb-3">
        <div className="w-full">
          <div className=" my-4">
            {saveImage && (
              <>
                <div>
                  <img
                    className="w-[144px] h-[55px]  object-cover "
                    src={saveImage?.toReversed()[0]?.image}
                  />
                </div>
                <div className="mt-3 flex items-center gap-4">
                  <p>Alignment</p>
                  <div className="flex border-4 border-[#D5D8DC] rounded-lg">
                    <button
                      className={`p-2 ${align === "left" && "bg-[#D5D8DC]"}`}
                      onClick={() => setAlign("left")}
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
                      className={`p-2 ${align === "center" && "bg-[#D5D8DC]"}`}
                      onClick={() => setAlign("center")}
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
                      className={`p-2 ${align === "right" && "bg-[#D5D8DC]"}`}
                      onClick={() => setAlign("right")}
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
                  
                  <Slider valueLabelDisplay="auto" min={30} max={100}  value={imageWidth} sx={{width:200, color: '#D5D8DC', height: 8, padding: '5px 0'}} onChange={handleChange} />
                  
                  </div>
                </div>
              </>
            )}
          </div>
          <label
            htmlFor="profileImage"
            className="flex items-center gap-2 w-full bg-gray-200 px-3 py-1 rounded-full"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12.587"
                viewBox="0 0 13 12.587"
              >
                <g
                  id="Group_5"
                  data-name="Group 5"
                  transform="translate(0.399 0.026)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="13"
                    transform="translate(-0.399 6.21)"
                    fill="none"
                    stroke="#0277b5"
                    stroke-width="2.5"
                  />
                  <path
                    id="Path_516"
                    data-name="Path 516"
                    d="M0,0,.13,6.268l.13,6.268"
                    transform="translate(5.741 0)"
                    fill="none"
                    stroke="#0277b5"
                    stroke-width="2.5"
                  />
                </g>
              </svg>
            </span>

            <p className="text-md">Add Media</p>
          </label>
          <input
            type="file"
            id="profileImage"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Image;
