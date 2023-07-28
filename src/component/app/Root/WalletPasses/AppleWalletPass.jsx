import React from "react";
import { useState } from "react";
import { ChromePicker } from "react-color";

const AppleWalletPass = () => {
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [customBackgroundColor, setCustomBackgroundColor] = useState(false);
  const [textColor,setTextColor] = useState("#ffffff");
  const [customTextColor,setCustomTextColor] = useState(false)
  return (
    <div>
      <p>Modify your Apple wallet pass</p>
      {/* background color */}
      <div>
        <h2 className="mt-6">Background Color</h2>
        <div className="flex gap-24">
          <div
            onClick={() => setCustomBackgroundColor(!customBackgroundColor)}
            className="flex bg-gray-200 border-2 rounded-lg mt-4 w-32 h-8 cursor-pointer"
          >
            <div
              className="w-[30px] h-[30px] rounded-l-lg"
              style={{ background: backgroundColor }}
            ></div>
            <div className="px-3">
              <span className="text-center">{backgroundColor}</span>
            </div>
          </div>
          <div>
            {customBackgroundColor && (
              <ChromePicker
                color={backgroundColor}
                onChange={(e) => setBackgroundColor(e.hex)}
              />
            )}
          </div>
        </div>
      </div>
      {/* text color */}
      <div>
        <h2 className="mt-6">Text Color</h2>
        <div className="flex gap-24">
          <div
            onClick={() => setCustomTextColor(!customTextColor)}
            className="flex bg-gray-200 border-2 rounded-lg mt-4 w-32 h-8 cursor-pointer"
          >
            <div
              className="w-[30px] h-[30px] rounded-l-lg"
              style={{ background: textColor }}
            ></div>
            <div className="px-3">
              <span className="text-center">{textColor}</span>
            </div>
          </div>
          <div>
            {customTextColor && (
              <ChromePicker
                color={textColor}
                onChange={(e) => setTextColor(e.hex)}
              />
            )}
          </div>
        </div>
      </div>
      <button className="bg-[#0277B5] px-8 text-white py-2 rounded mt-6">Save</button>
    </div>
  );
};

export default AppleWalletPass;
