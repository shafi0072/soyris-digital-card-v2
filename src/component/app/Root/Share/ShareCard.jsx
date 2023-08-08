import React, { useContext } from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DottedQRCode from "../QrCodes/QrMain";
import { userContext } from "@/src/Storage/ContextApi";
import { saveAs } from "file-saver";
import QRCode from "qrcode";
import { useState } from "react";
const ShareCard = () => {
  const { userData, settings } = useContext(userContext);
  const [isCopied, setIsCopied] = useState(false);

  // handle qr copy
  const handleQrCopy = () => {
    navigator.clipboard.writeText(`https://easycard-gr.vercel.app/${settings?.url}`).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }).catch((error) => {
      console.error('Failed to copy:', error);
    });
  };

  // handle qr code download
  const handleQrDownload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = "500px";
    canvas.height = "500px";
    QRCode.toCanvas(canvas, userData.userName, (error) => {
      if (error) console.error(error);
      else {
        // Convert canvas to Blob and initiate the download
        canvas.toBlob((blob) => {
          saveAs(blob, "qr_code.png");
        });
      }
    });
  };

  return (
    <>
      <div className="p-8 shadow-lg flex flex-col justify-center items-center w-full">
        <h1 className="text-center text-2xl font-semibold mb-6">Share Card</h1>
        <div>
          <DottedQRCode
            // value={`https://${typeof window !== undefined && window.location.hostname}/${userData.userName}`}
            value={`https://easycard-gr.vercel.app/${settings?.url}`}
            size={300}
            level="M"
            includeMargin
            pattern="Rounded" // Change this prop to "Dots", "Rounded", or "Diamond"
          />
        </div>
        <p className="text-[#0277B5] my-6">Scan now</p>
       <div className="relative">
       <button
          onClick={handleQrCopy}
          className="flex gap-3 items-center mb-4 bg-transparent  text-[#0277B5] font-semibold  py-2 px-4 border border-[#0277B5]  rounded"
        >
          <ContentCopyRoundedIcon /> COPY LINK
        </button>
        {isCopied && <p className="absolute -right-20 -top-2 w-16" style={{ color: 'green' }}>Copied!</p>}
       </div>
        <button
          onClick={handleQrDownload}
          className="flex gap-3 items-center mb-4 bg-transparent  text-[#0277B5] font-semibold  py-2 px-4 border border-[#0277B5]  rounded"
        >
          <FileDownloadOutlinedIcon /> DOWNLOAD QR CODE
        </button>
      </div>
    </>
  );
};

export default ShareCard;
