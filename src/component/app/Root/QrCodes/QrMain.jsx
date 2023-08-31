import { userContext } from "@/src/Storage/ContextApi";
import React from "react";
import { useContext } from "react";
import { QRCode } from 'react-qrcode-logo';
const DottedQRCode = ({ value }) => {
  const { qrStyle, foregroundColor, backgroundColor, outerEyeColor, selectedLogo,innerEyeShape,outesEyeShape,innerEyeColor,qrSize } = useContext(userContext)
console.log({qrSize});
  // return <QRCode qrStyle={qrStyle} logoImage={selectedLogo} logoPadding={5} value={value} ecLevel={'M'} bgColor={backgroundColor} fgColor={foregroundColor}  eyeColor={eyeColor} />;
console.log({outesEyeShape});
  return <QRCode {...{
    qrStyle,
    fgColor:foregroundColor,
    ecLevel: 'M',
    value: value,
    size: qrSize ,
    bgColor:backgroundColor ,
    logoImage: selectedLogo,
    logoPadding: 0,
    eyeRadius: [ // build eyeRadius manually
      {
        outer: outesEyeShape,
        inner: innerEyeShape,
      },
      {
        outer: outesEyeShape,
        inner: innerEyeShape,
      },
      {
        outer: outesEyeShape,
        inner: innerEyeShape,
      }
    ],
    eyeColor: [ // build eyeColor manually
      {
        outer: outerEyeColor,
        inner: innerEyeColor
      },
      {
        outer: outerEyeColor,
        inner: innerEyeColor
      },
      {
        outer: outerEyeColor,
        inner: innerEyeColor
      },
    ]
  }} />
};

export default DottedQRCode;
