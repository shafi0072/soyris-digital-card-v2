import React from "react";
import { shapes } from "@/src/constant/Shapes";
import { useState } from "react";
import { ChromePicker } from "react-color";
import { useContext } from "react";
import { userContext } from "@/src/Storage/ContextApi";

const EyeStyle = () => {
  const [innerColor, setInnerColor] = useState("#DC0E74");
  const [innerCustomColor, setInnerCustomColor] = useState(false);
  const [outerColor, setOuterColor] = useState("#000000");
  const [outerCustomColor, setOutCustomColor] = useState(false);
  const {eyeColor,setEyeColor} = useContext(userContext);

  return (
    <>
      <div className="flex justify-between border-b-2 items-center pb-2 mt-12">
        <h4 className="text-xl font-semibold">Eye Style</h4>
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
      {/* inner style-----------------------------  */}
      <div>
        <div className="flex gap-2 items-center mt-4 text-xl">
          <input type="checkbox" name="inner-style" id="" />
          <label htmlFor="">Inner eye style</label>
        </div>
        <div className="flex gap-4 mt-4 ">
          {shapes.map((shape, index) => (
            <button
              className="bg-[#E6ECF2] flex gap-2 items-center px-4 py-2 rounded"
              key={index}
            >
              {shape.icon}
              {shape.name}
            </button>
          ))}
        </div>
      </div>
      {/* inner style color-------- */}
      <h4 className="mt-4">Color</h4>
      <div className="flex gap-24">
        <div
          onClick={() => setInnerCustomColor(!innerCustomColor)}
          className="flex bg-gray-200 border-2 rounded-lg mt-4 w-32 h-8 cursor-pointer"
        >
          <div
            className="w-[30px] h-[30px] rounded-l-lg"
            style={{ background: eyeColor }}
          ></div>
          <div className="px-3">
            <span className="text-center">{eyeColor}</span>
          </div>
        </div>
        <div>
          {innerCustomColor && (
            <ChromePicker
              color={eyeColor}
              onChange={(e) => setEyeColor(e.hex)}
            />
          )}
        </div>
      </div>

      {/* outer style ---------------------- */}
      <div>
        <div className="flex gap-2 items-center mt-4 text-xl">
          <input type="checkbox" name="inner-style" id="" />
          <label htmlFor="">Outer eye style</label>
        </div>
        <div className="flex gap-4 mt-4 ">
          {shapes.map((shape, index) => (
            <button
              className="bg-[#E6ECF2] flex gap-2 items-center px-4 py-2 rounded"
              key={index}
            >
              {shape.icon}
              {shape.name}
            </button>
          ))}
        </div>
      </div>
      {/* outer style color */}
      <h4 className="mt-4">Color</h4>
      <div className="flex gap-24">
        <div
          onClick={() => setOutCustomColor(!outerCustomColor)}
          className="flex bg-gray-200 border-2 rounded-lg mt-4 w-32 h-8 cursor-pointer"
        >
          <div
            className="w-[30px] h-[30px] rounded-l-lg"
            style={{ background: outerColor }}
          ></div>
          <div className="px-3">
            <span className="text-center">{outerColor}</span>
          </div>
        </div>
        <div>
          {outerCustomColor && (
            <ChromePicker
              color={outerColor}
              onChange={(e) => setOuterColor(e.hex)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EyeStyle;
