import React, { useContext, useRef, useState } from 'react';
import Cropper from 'react-cropper';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { userContext } from '@/src/Storage/ContextApi';
const LogoImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [cropAspectRatio, setCropAspectRatio] = useState(3);
  const { logoImage, setLogoImage } = useContext(userContext)
  const cropperRef2 = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleCrop = () => {
    if (!cropperRef2.current || typeof cropperRef2.current.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }

    const croppedCanvas = cropperRef2.current.cropper.getCroppedCanvas({
      minWidth: 200,
      minHeight: 200,
      maxWidth: 800,
      maxHeight: 800,
      fillColor: '#fff',
    });

    setCroppedImage(croppedCanvas.toDataURL());
    setLogoImage(croppedCanvas.toDataURL())
  };

  const handleAspectRatioChange = (e) => {
    setCropAspectRatio(parseFloat(e.target.value));
  };

  const handleCropBoxDataChange = (e) => {
    const { width, height } = e.detail;
    setCropAspectRatio(width / height);
  };

  const cropperOptions = {
    aspectRatio: cropAspectRatio,
    guides: true,
    dragMode: 'crop',
    cropBoxResizable: true,
    cropBoxMovable: true,
    cropBoxData: { width: 200, height: 200 }, // Initial crop area size
    crop: handleCropBoxDataChange, // To update the aspect ratio when crop area is resized
    zoomOnWheel: false, // Disable zoom on wheel
  };
  return (
    <div>
      <div className='mt-8 flex items-center justify-between w-3/4'>
        <div className='relative w-[100px] '>
          <img className='w-[100px]   object-cover' src={logoImage && logoImage} alt="" />
          <span onClick={() => {
            setCroppedImage(null);
            setLogoImage(null); setSelectedImage(null)
          }} className='absolute -right-3 -top-2 w-4 h-4 text-center leading-[10px] bg-[#0F66A0] rounded-full'>
            <CloseIcon className='text-white text-[12px]' />
          </span>
        </div>
        <div className=" w-[266px]">
          <label htmlFor='logoImages' className='flex ml-[10%] bg-gray-200 px-3 py-1 rounded-full'>
            <AddIcon sx={{ color: '#0077B5' }} />
            <p className="text-md">Replace Logo</p>

          </label>
          <input type="file" id='logoImages' accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
        </div>



      </div>
      {selectedImage && !croppedImage &&
        <div className='mt-2 w-[60%]'>
          <Cropper
            ref={cropperRef2}
            src={selectedImage}
            style={{ height: '100%', width: '100%' }}
            {...cropperOptions}
          />

          <div className='mt-2'>
            <button onClick={() => {
              setCroppedImage(null);
              setLogoImage(null); setSelectedImage(null)
            }} className='px-4 py-2 bg-gray-400 mr-2 rounded'>cancel</button>
            <button onClick={handleCrop} className='bg-[#EE490C] px-5 py-2 rounded text-white'>Add Media</button>
          </div>

        </div>
      }
    </div>
  );
};

export default LogoImage;