import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

// ReactDOM.render(<QRCode value="hey" />, document.getElementById("Container"));

const QrCodeCard = () => {
  return (
    <div className="p-8 tex-center">
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
        //   value={value}
          viewBox={`0 0 256 256`}
        />
      </div> */}
    </div>
  );
};

export default QrCodeCard;
