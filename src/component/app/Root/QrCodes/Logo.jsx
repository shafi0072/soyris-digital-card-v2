import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import { userContext } from "@/src/Storage/ContextApi";

const Logo = () => {
    // const [selectedLogo,setSelectedLogo] = useState(null)
    const {selectedLogo,setSelectedLogo,logoSize,setLogoSize} = useContext(userContext)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedLogo(URL.createObjectURL(file));
  };
  // console.log({selectedLogo});
  return (
    <>
      <div className="flex justify-between border-b-2 items-center pb-2 mt-12">
        <h4 className="text-xl font-semibold">Logo</h4>
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
      <div className=" w-[266px] mt-6">
        {selectedLogo&& <img src={selectedLogo} className=" w-[50px] h-[50px] rounded my-5"/>}
        <label
          htmlFor="logoImages"
          className="flex  bg-gray-200 px-3 py-2 rounded-full"
        >
          <AddIcon sx={{ color: "#0077B5" }} />
          <p className="text-md">Add a logo</p>
        </label>
        <input
          onChange={handleFileChange}
          type="file"
          id="logoImages"
          accept="image/*"
          style={{ display: "none" }}
        />
      </div>
      <h4 className="my-4">Logo Size</h4>
      <Box width={300}>
          <Slider
            defaultValue={logoSize}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(e)=> setLogoSize(e.target.value)}
            min={20}
            max={30}
          />
        </Box>
    </>
  );
};

export default Logo;
