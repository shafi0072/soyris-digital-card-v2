import { userContext } from "@/src/Storage/ContextApi";
import React from "react";
import { useContext } from "react";
import { QRCode } from 'react-qrcode-logo';
const DottedQRCode = () => {
  const {qrStyle,foregroundColor,backgroundColor,eyeColor,selectedLogo} = useContext(userContext)

  return <QRCode qrStyle={qrStyle} logoImage={selectedLogo} logoPadding={5} value="https://github.com/gcoro/react-qrcode-logo" ecLevel={'M'} bgColor={backgroundColor} fgColor={foregroundColor} eyeRadius={50}  eyeColor={eyeColor} />;
};

export default DottedQRCode;
