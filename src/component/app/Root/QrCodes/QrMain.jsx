import { userContext } from "@/src/Storage/ContextApi";
import React from "react";
import { useContext } from "react";
import { QRCode } from 'react-qrcode-logo';
const DottedQRCode = ({ value }) => {
  const { qrStyle, foregroundColor, backgroundColor, outerEyeColor, selectedLogo, innerEyeShape, outesEyeShape, innerEyeColor, qrSize,logoSize } = useContext(userContext)
  console.log({ qrSize });
  // return <QRCode qrStyle={qrStyle} logoImage={selectedLogo} logoPadding={5} value={value} ecLevel={'M'} bgColor={backgroundColor} fgColor={foregroundColor}  eyeColor={eyeColor} />;
  return <QRCode {...{
    qrStyle,
    fgColor: foregroundColor,
    ecLevel: 'M',
    value: value,
    size: qrSize,
    bgColor: backgroundColor,
    logoImage: selectedLogo,
    logoPadding: 5,
    logoWidth:logoSize,
    eyeRadius: [ 
      {
        outer: outesEyeShape === 'square' && 0 || outesEyeShape === 'dots' && 50 || outesEyeShape === 'round' && 6 || outesEyeShape === 'flower' && [12, 12, 0, 16] || outesEyeShape === 'leaf' && [50, 0, 50, 0],
        inner: innerEyeShape === 'square' && 0  || innerEyeShape === 'dots' && 50 || innerEyeShape === 'round' && 6 || innerEyeShape === 'flower' && [12, 12, 0, 16] || innerEyeShape === 'leaf' && [50, 0, 50, 0],
      },
      {
        outer: outesEyeShape === 'square' && 0 || outesEyeShape === 'dots' && 50 || outesEyeShape === 'round' && 6 || outesEyeShape === 'flower' && [12, 12, 0, 16] || outesEyeShape === 'leaf' && [50, 0, 50, 0],
        inner: innerEyeShape === 'square' && 0 || innerEyeShape === 'dots' && 50 || innerEyeShape === 'round' && 6 || innerEyeShape === 'flower' && [12, 12, 0, 16] || innerEyeShape === 'leaf' && [50, 0, 50, 0],
      },
      {
        outer: outesEyeShape === 'square' && 0 || outesEyeShape === 'dots' && 50 || outesEyeShape === 'round' && 6 || outesEyeShape === 'flower' && [12, 12, 0, 16] || outesEyeShape === 'leaf' && [50, 0, 50, 0],
        inner: innerEyeShape === 'square' && 0 || innerEyeShape === 'dots' && 50 || innerEyeShape === 'round' && 6 || innerEyeShape === 'flower' && [12, 12, 0, 16] || innerEyeShape === 'leaf' && [50, 0, 50, 0],
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
