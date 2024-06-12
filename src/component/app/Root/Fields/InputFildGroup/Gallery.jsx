import React, { useContext, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { galleryCompressAndConvertToBase64 } from "@/src/config/gallery64";
import { userContext } from "@/src/Storage/ContextApi";
import CloseIcon from "@mui/icons-material/Close";
import { baseUrl } from "@/src/config/Server";
const Gallery = ({ galary, setGalary, items, from }) => {
 const {newFeilds,userCardData} = useContext(userContext);

  const [base64Galary, setBase64Galary] = useState("");
  const gallerybase64 = galleryCompressAndConvertToBase64;
  const saveImage = newFeilds?.fields?.galary?.length >0 ?  newFeilds?.fields?.galary : userCardData?.fields?.galary?.length >0 ? userCardData?.fields?.galary: []  ;

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

  const handleGalleryChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const compressedBase64 = await gallerybase64(file, 800, 600, 0.8);
        setGalary((prev) => {
          const newGalary = [...prev, compressedBase64];
          
          return newGalary;
        });
        setBase64Galary(compressedBase64);
      } catch (error) {
        console.error("Error compressing image:", error);
      }
    }
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
          <h4>Gallery</h4>
        </div>
        <div onClick={() => (from ? handleRemoveFields() : "")}>
          <CloseIcon />
        </div>
      </div>
      <div className="mb-3">
        <div className="w-full">
          <div className="flex gap-2 flex-wrap my-4">
            {saveImage?.toReversed()?.slice(0,4).map((img, index) => (
              <img key={index} className="w-[144px]  " src={img} />
            ))}
          </div>
          <label
            htmlFor="image"
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
            id="image"
            style={{ display: "none" }}
            onChange={handleGalleryChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
