import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const GoogleWalletPass = ({setGoogleCardBackgroundColor,googleCardBackgroundColor}) => {
    
    const [customBackgroundColor, setCustomBackgroundColor] = useState(false);
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
              style={{ background: googleCardBackgroundColor }}
            ></div>
            <div className="px-3">
              <span className="text-center">{googleCardBackgroundColor}</span>
            </div>
          </div>
          <div>
            {customBackgroundColor && (
              <ChromePicker
                color={googleCardBackgroundColor}
                onChange={(e) => setGoogleCardBackgroundColor(e.hex)}
              />
            )}
          </div>
        </div>
      </div>
      <button className="bg-[#0277B5] px-8 text-white py-2 rounded mt-6">Save</button>
    </div>
    );
};

export default GoogleWalletPass;