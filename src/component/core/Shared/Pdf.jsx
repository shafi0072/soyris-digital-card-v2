import React, { useContext } from "react";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import { userContext } from "@/src/Storage/ContextApi";

const Pdf = ({item}) => {
  const {userData,color,primaryAccent,primaryColor} = useContext(userContext)
  const filename = `${userData?.email?.slice(0, 6)}-document.pdf`;

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = `${item?.pdf.file}`;
    link.download = item?.pdf.name;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className={`${!item?.pdf ?  'hidden' : 'block mt-5' } `} onClick={downloadPdf}>
      {item?.pdf  &&(
        <div className="mt-5">
         
          <div className="flex gap-3 items-center">
            <div    style={{ backgroundColor: primaryColor }} className=" p-2 rounded-full">
              <PictureAsPdfOutlinedIcon sx={{ color: primaryAccent }} />
            </div>
            <button  title="click to download pdf">
              {" "}
              <h2 className="text-xl">{item?.label}</h2>
            </button>
          </div>
        </div>
      )}
      </div>

    </>
  );
};

export default Pdf;
