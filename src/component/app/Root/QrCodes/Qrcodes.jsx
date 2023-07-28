import React from "react";
import Pattern from "./Pattern";
import EyeStyle from "./EyeStyle";
import Logo from "./Logo";

const Qrcodes = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl border-b-2 pb-4">Design your QR Code</h2>
        <p className="my-4">Customise the design of your QR code with colors, logos and shapes.</p>
      </div>
      <Pattern/>
      <EyeStyle/>
      <Logo/>
    </>
  );
};

export default Qrcodes;
