import React from "react";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

const Pdf = ({ newFeilds, userCardData, userData }) => {
  const filename = `${userData?.email?.slice(0, 6)}-document.pdf`;
  const newPdf = newFeilds?.fields?.pdf || userCardData?.fields?.pdf[0];
  // console.log("pgd",newFeilds?.fields?.pdf)

  const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = `${newPdf}`;
    link.download = filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      {userCardData?.fields?.pdf[0] && !newFeilds?.fields?.pdf && (
        <div className="mt-5">
          <h2 className="mb-5 pb-2 text-xl   border-b border-[#CBD5E0]">
            More Details
          </h2>
          <div className="flex gap-3 items-center">
            <div className="bg-[#EB531C] p-2 rounded-full">
              <PictureAsPdfOutlinedIcon sx={{ color: "#fff" }} />
            </div>
            <button onClick={downloadPdf} title="click to download pdf">
              {" "}
              <h2 className="text-xl">See My Experience</h2>
            </button>
          </div>
        </div>
      )}
      {newFeilds?.fields?.pdf && (
        <div className="mt-5">
          <h2 className="mb-5 pb-2 text-xl   border-b border-[#CBD5E0]">
            More Details
          </h2>
          <div className="flex gap-3 items-center">
            <div className="bg-[#EB531C] p-2 rounded-full">
              <PictureAsPdfOutlinedIcon sx={{ color: "#fff" }} />
            </div>
            <button onClick={downloadPdf} title="click to download pdf">
              {" "}
              <h2 className="text-xl">See My Experience</h2>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Pdf;
