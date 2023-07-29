import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const QrCodeCard = () => {
  return (
    <div className="p-8 flex flex-col items-center justify-center w-80 bg-[#F7FAFC]">
      <h2 className="text-2xl font-semibold">PREVIEW</h2>
      {/* <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          // value={value}
          viewBox={`0 0 256 256`}
        />
      </div> */}
        <button className=" mt-8 px-20  py-2 bg-[#0277B5] rounded text-white">
          SAVE
        </button>
        <button className=" mb-4  mt-4 bg-transparent  text-[#FF0000] font-semibold  py-2 px-7 border border-[#FF0000]  rounded">
          RESET TO DEFAULT
        </button>
    </div>
  );
};

export default QrCodeCard;
