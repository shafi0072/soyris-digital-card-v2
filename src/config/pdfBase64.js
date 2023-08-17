// Function to convert and compress an image to base64
export function convertPDFToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onload = function (event) {
        const base64String = event.target.result;
        resolve(base64String);
      };
  
      reader.onerror = reject;
    });
  }
  