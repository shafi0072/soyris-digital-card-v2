import React, { useContext, useRef, useState } from "react";
import Cropper from "react-cropper";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { userContext } from "@/src/Storage/ContextApi";
const LogoImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [cropAspectRatio, setCropAspectRatio] = useState(1);
  const { logoImage, setLogoImage } = useContext(userContext);
  const cropperRef2 = useRef(null);
  // console.log({ logoImage });
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleCrop = () => {
    if (
      !cropperRef2.current ||
      typeof cropperRef2.current.cropper.getCroppedCanvas() === "undefined"
    ) {
      return;
    }

    const croppedCanvas = cropperRef2.current.cropper.getCroppedCanvas({
      minWidth: 200,
      minHeight: 200,
      maxWidth: 400,
      maxHeight: 200,
      fillColor: "#fff",
    });

    croppedCanvas.toBlob(
      (blob) => {
        if (blob) {
          // Convert blob to base64
          const reader = new FileReader();
          reader.onload = () => {
            const base64String = reader.result;
            setCroppedImage(base64String);
            setLogoImage(base64String);
          };
          reader.readAsDataURL(blob);
        }
      },
      "image/jpeg", // Use 'image/webp' for WebP format
      0.8 // Adjust the compression quality as needed
    );
  };

  const cropperOptions = {
    // aspectRatio: cropAspectRatio,
    // guides: true,
    // dragMode: "crop",
    cropBoxResizable: true,
    // cropBoxMovable: true,
     cropBoxData: { width: 200, height: 200 }, // Initial crop area size
    // crop: handleCropBoxDataChange, // To update the aspect ratio when crop area is resized
    zoomOnWheel: false, // Disable zoom on wheel
  };
  return (
    <div className="mb-[100px]">
      <div className='mt-8 flex items-center justify-between w-3/4'>
      {logoImage !== 'null' && logoImage !== null && logoImage &&<div className='relative w-[100px] '>
          <>
            <img className='w-[100px]  rounded-full   object-cover'  src={logoImage && logoImage} alt="" />
          <span onClick={() => {
            setCroppedImage(null);
            setLogoImage(null); setSelectedImage(null)
          }} className='absolute -right-3 -top-2 w-[20px] h-[20px]  flex  items-center justify-center bg-[#0F66A0] rounded-full cursor-pointer'>
            <CloseIcon className='text-white text-[12px]' />
          </span>
          </>
        </div>
          }
        <div className=" w-[266px]">
          <label htmlFor='logoImages' className='cursor-pointer flex ml-[10%] bg-gray-200 px-3 py-1 rounded-full'>
            <AddIcon sx={{ color: '#0053a2' }} />
            <p className="text-md"> {logoImage? 'Replace Logo' : 'Add Logo'} </p>

          </label>
          <input
            type="file"
            id="logoImages"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
      {selectedImage && !croppedImage && (
        <div className="mt-2 w-[60%]">
          <Cropper
            ref={cropperRef2}
            src={selectedImage}
            style={{ height: '100%', width: '100%'  }}
            {...cropperOptions}
          />

          <div className="mt-2">
            <button
              onClick={() => {
                setCroppedImage(null);
                setLogoImage(null);
                setSelectedImage(null);
              }}
              className="px-4 py-2 bg-gray-400 mr-2 rounded"
            >
              cancel
            </button>
            <button
              onClick={handleCrop}
              className="bg-[#EE490C] px-5 py-2 rounded text-white"
            >
              Add Media
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoImage;
