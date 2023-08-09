import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { baseUrl } from "@/src/config/Server";
import { compressAndConvertToBase64 } from "@/src/config/base64";
const Image = ({ items, from, image, setImage }) => {
  const [base64Image, setBase64Image] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const handleRemoveFields = () => {
    const id = localStorage.getItem("cardId");
    fetch(`${baseUrl}/cards/fields/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fieldName: "image",
        elementId: items?._id,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const compressedBase64 = await compressAndConvertToBase64(file, 800, 600, 0.8);
        setImage((prev) => {
          const newImage = [...prev, compressedBase64]
          
          return newImage
        })
        setBase64Image(compressedBase64);
      } catch (error) {
        console.error('Error compressing image:', error);
      }
    }
  };

  // const handleImageUpload = (event) => {
  //     const file = event.target.files[0];
  //     croppedCanvas.toBlob(
  //         (blob) => {
  //           if (blob) {
  //             // Convert blob to base64
  //             const reader = new FileReader();
  //             reader.onload = () => {
  //               const base64String = reader.result;
  //             //   setCroppedImage(base64String);
  //             setBase64Image(base64String);
  //             };
  //             reader.readAsDataURL(blob);
  //           }
  //         },
  //         'image/jpeg', // Use 'image/webp' for WebP format
  //         0.8 // Adjust the compression quality as needed
  //       );
  //     // if (file) {
  //     //   const reader = new FileReader();

  //     //   reader.onload = (e) => {
  //     //     const base64String = e.target.result;
  //     //     setBase64Image(base64String);
  //     //   };

  //     //   reader.readAsDataURL(file);
  //     // }
  // };
  
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
         <div className="flex gap-2 flex-wrap my-4">
         {
            image.map((img,index)=><img className="w-[144px] h-[55px]  object-cover" src={img}/>
          )
          }
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
