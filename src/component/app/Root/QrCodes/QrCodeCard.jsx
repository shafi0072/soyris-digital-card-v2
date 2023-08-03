import React from "react";
import DottedQRCode from "./QrMain";

const QrCodeCard = () => {
  return (
    <div className="p-8  w-full bg-[#F7FAFC]">
      <h2 className="text-2xl font-semibold text-center mb-2">PREVIEW</h2>
      <div
        className="flex justify-center"
      >
        <DottedQRCode
          value={"asdasd"}
          size={300}
          level="M"
          includeMargin
          pattern="Square" // Change this prop to "Dots", "Rounded", or "Diamond"
        />
      </div>
      <div className="flex justify-center">
        <button className=" mt-8 px-20  py-2 bg-[#0277B5] rounded text-white">
          SAVE
        </button>
      </div>

      <div className="flex justify-center">
        <button className=" mb-4  mt-4 bg-transparent  text-[#FF0000] font-semibold  py-2 px-7 border border-[#FF0000]  rounded">
          RESET TO DEFAULT
        </button>
      </div>
    </div>
  );
};

export default QrCodeCard;
