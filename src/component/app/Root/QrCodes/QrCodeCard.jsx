import React from "react";
import DottedQRCode from "./QrMain";
import { QRCode } from 'react-qrcode-logo';
import { useContext } from "react";
import { userContext } from "@/src/Storage/ContextApi";
import { baseUrl } from '@/src/config/Server'
const QrCodeCard = () => {
  const { qrStyle, foregroundColor, backgroundColor, outerEyeColor, selectedLogo, innerEyeShape, outesEyeShape, innerEyeColor, qrSize, userCardData,logoSize } = useContext(userContext)
  const handleQr = () => {
    try {
      fetch(`${baseUrl}/cards/profile/QrCode/${userCardData?._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          QrCode: {
            pattern: qrStyle,
            fgColor: foregroundColor,
            bgColor: backgroundColor,
            QrSize: qrSize,
            innerEyeStyle: innerEyeShape,
            innerEyeColor,
            outerEyeStyle: outesEyeShape,
            outerEyeColor,
            logo:selectedLogo,
            logoSize
          }
        })
      })
        .then(res => res.json())
        .then(data => console.log({ data }))
    } catch (err) {
      console.log(err.message);
    }
  }
  const handleReset=()=>{
    window.location.reload()
  }
  return (
    <div className="p-8 w-full bg-[#F7FAFC]">
      <h2 className="text-2xl font-semibold text-center mb-2">PREVIEW</h2>
      <div
        className="flex justify-center"
      >
        <DottedQRCode value={'hello'} />
        {/* <QRCode value="https://github.com/gcoro/react-qrcode-logo" eyeRadius={10} eyeColor={'red'} qrStyle={'dots'}/>, */}
      </div>
      <div className="flex justify-center">
        <button className=" mt-8 px-20  py-2 bg-[#0277B5] rounded text-white" onClick={handleQr}>
          SAVE
        </button>
      </div>

      <div className="flex justify-center">
        <button onClick={handleReset}
        className=" mb-4  mt-4 bg-transparent  text-[#FF0000] font-semibold  py-2 px-7 border border-[#FF0000]  rounded">
          RESET TO DEFAULT
        </button>
      </div>
    </div>
  );
};

export default QrCodeCard;
