import { userContext } from "@/src/Storage/ContextApi";
import React from "react";
import { useContext } from "react";
import { QRCode } from 'react-qrcode-logo';
const DottedQRCode = ({ value }) => {
  const { qrStyle, foregroundColor, backgroundColor, eyeColor, selectedLogo,innerEyeShape,outesEyeShape } = useContext(userContext)

  // return <QRCode qrStyle={qrStyle} logoImage={selectedLogo} logoPadding={5} value={value} ecLevel={'M'} bgColor={backgroundColor} fgColor={foregroundColor}  eyeColor={eyeColor} />;
console.log({outesEyeShape});
  return <QRCode {...{
    qrStyle,
    fgColor: '#000',
    ecLevel: 'M',
    value: 'gtgfet',
    bgColor: '#fff',
    logoImage: 'logo',
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
        outer: '#000000',
        inner: '#000000'
      },
      {
        outer: '#000000',
        inner: '#000000'
      },
      {
        outer: '#000000',
        inner: '#000000'
      },
    ]
  }} />
};

export default DottedQRCode;
