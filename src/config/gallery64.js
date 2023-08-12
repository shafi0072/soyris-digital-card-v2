// Function to convert and compress an image to base64
export function galleryCompressAndConvertToBase64(file, maxWidth, maxHeight, quality) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onload = function (event) {
        const gimg = new Image();
  
        gimg.onload = function () {
          const canvas = document.createElement('canvas');
          let width = gimg.width;
          let height = gimg.height;
  
          // Calculate new dimensions while maintaining aspect ratio
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
  
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
  
          canvas.width = width;
          canvas.height = height;
  
          const ctx = canvas.getContext('2d');
          ctx.drawImage(gimg, 0, 0, width, height);
  
          // Convert canvas content to base64
          const base64String = canvas.toDataURL('image/jpeg', quality);
          resolve(base64String);
        };
  
        gimg.onerror = reject;
  
        gimg.src = event.target.result;
      };
  
      reader.onerror = reject;
    });
  }
  