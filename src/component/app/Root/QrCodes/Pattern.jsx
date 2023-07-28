import React from "react";
import { useState } from "react";
import { ChromePicker } from "react-color";
import { shapes } from "@/src/constant/Shapes";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
const Pattern = () => {
  const [color, setColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [customColor, setCustomColor] = useState(false);
  const [customBackgroundColor, setCustomBackgroundColor] = useState(false);
  // shapes
  return (
    <>
      <div className="flex justify-between border-b-2 items-center pb-2">
        <h4 className="text-xl font-semibold">Pattern</h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.142"
          height="9.25"
          viewBox="0 0 16.142 9.25"
        >
          <g id="Page-1" transform="translate(15.573 8.75) rotate(180)">
            <g id="Dribbble-Light-Preview">
              <g id="icons">
                <path
                  id="arrow_up-_337_"
                  data-name="arrow_up-[#337]"
                  d="M218.781,6531.976h0a.8.8,0,0,0,0-1.1l-6.2-6.422a1.463,1.463,0,0,0-2.12,0l-6.243,6.469a.8.8,0,0,0-.008,1.091.733.733,0,0,0,1.068.009l5.713-5.921a.731.731,0,0,1,1.061,0l5.668,5.873a.73.73,0,0,0,1.06,0"
                  transform="translate(-204 -6524)"
                  stroke="#000"
                  stroke-width="1"
                  fill-rule="evenodd"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <p className="my-4">
        This will be the color and shape of your QR code’s data-pattern
      </p>
      {/* shapes------- */}
      <div className="flex gap-4 ">
        {shapes.slice(0, 4).map((shape, index) => (
          <button
            className="bg-[#E6ECF2] flex gap-2 items-center px-4 py-2 rounded"
            key={index}
          >
            {shape.icon}
            {shape.name}
          </button>
        ))}
      </div>
      {/* checkbox ----------------- */}
      <p className="mt-6">Foreground Color Type</p>
      <div className="flex gap-6 mt-3">
        <div className="flex item-center gap-2">
          <input type="checkbox" name="solid" id="" />
          <label htmlFor="">Solid</label>
        </div>
        <div className="flex item-center gap-2">
          <input type="checkbox" name="solid" id="" />
          <label htmlFor="">Solid</label>
        </div>
      </div>
      {/* color ------------------- */}
      <div className="flex gap-24">
        <div
          onClick={() => setCustomColor(!customColor)}
          className="flex bg-gray-200 border-2 rounded-lg mt-4 w-32 h-8 cursor-pointer"
        >
          <div
            className="w-[30px] h-[30px] rounded-l-lg"
            style={{ background: color }}
          ></div>
          <div className="px-3">
            <span className="text-center">{color}</span>
          </div>
        </div>
        <div>
          {customColor && (
            <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
          )}
        </div>
      </div>

      {/* background color */}
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
      {/* background color tranparancy */}
      <div className="mt-6">
        <p className="mb-4">Background Color Transparency</p>
        <Box width={300}>
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </>
  );
};

export default Pattern;
