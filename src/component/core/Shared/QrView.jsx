import React from "react";
import DottedQRCode from "../../app/Root/QrCodes/QrMain";

const QrView = ({ item }) => {
  return (
    <div>
      <div
        // style={{
        //   width: `${item?.width}%`,
        // }}
        className={`mt-5 flex ${
          item?.align === "left"
            ? "justify-start"
            : item?.align === "center"
            ? "justify-center"
            : "justify-end"
        }`}
      >
        <DottedQRCode value={item?.url} />
      </div>
    </div>
  );
};

export default QrView;
