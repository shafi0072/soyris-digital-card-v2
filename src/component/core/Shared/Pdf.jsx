import React, { useContext } from "react";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { userContext } from "@/src/Storage/ContextApi";

const Pdf = ({item}) => {
  const {userData,color} = useContext(userContext)
  const filename = `${userData?.email?.slice(0, 6)}-document.pdf`;

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = `${item?.pdf}`;
    link.download = filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className={`${!item?.pdf ?  'hidden' : 'block mt-5' } `}>
      {item?.pdf  &&(
        <div className="mt-5">
         
          <div className="flex gap-3 items-center">
            <div    style={{ backgroundColor: color }} className=" p-2 rounded-full">
              <PictureAsPdfOutlinedIcon sx={{ color: "#fff" }} />
            </div>
            <button onClick={downloadPdf} title="click to download pdf">
              {" "}
              <h2 className="text-xl">See My Experience</h2>
            </button>
          </div>
        </div>
      )}
      </div>

    </>
  );
};

export default Pdf;
