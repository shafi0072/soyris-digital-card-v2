import React, { useRef, useState } from 'react';
import Cropper from 'react-cropper';


const ImageCropper = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [cropAspectRatio, setCropAspectRatio] = useState(1);
  const cropperRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleCrop = () => {
    if (!cropperRef.current || typeof cropperRef.current.cropper.getCroppedCanvas() === 'undefined') {
      return;
    }

    const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas({
      minWidth: 200,
      minHeight: 200,
      maxWidth: 800,
      maxHeight: 800,
      fillColor: '#fff',
    });

    setCroppedImage(croppedCanvas.toDataURL());
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
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      {selectedImage ? (
        <>
          <Cropper
            ref={cropperRef}
            src={selectedImage}
            style={{ height: '100%', width: '100%' }}
            {...cropperOptions}
          />
          <div>
            <label htmlFor="aspectRatio">Crop Aspect Ratio:</label>
            <input
              type="number"
              id="aspectRatio"
              step="0.1"
              min="0.1"
              max="10"
              value={cropAspectRatio}
              onChange={handleAspectRatioChange}
            />
          </div>
          <div>
            <button onClick={handleCrop}>Crop Image</button>
          </div>
          {croppedImage && <img src={croppedImage} alt="Cropped" />}
        </>
      ) : (
        <p>Please select an image to crop.</p>
      )}
    </div>
  );
};

export default ImageCropper;
