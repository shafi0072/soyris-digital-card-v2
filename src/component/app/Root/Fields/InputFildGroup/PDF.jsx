import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { baseUrl } from "@/src/config/Server";
import { useState } from "react";
import { convertPDFToBase64 } from "@/src/config/pdfBase64";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
const PDF = ({ userData,pdf, setPdf, items, from }) => {
  const [PdfBase64, setPdfBase64] = useState("");
// console.log({userData});

  const filename = `${userData?.email?.slice(0,6)}-document.pdf`;

  const downloadBase64File = () => {
    const link = document.createElement('a');
    link.href = `${pdf}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const base64PDF = await convertPDFToBase64(file);
        setPdf(base64PDF);
        setPdfBase64(base64PDF);
      } catch (error) {
        console.error("Error converting PDF to base64:", error);
      }
    }
  };
  const handleRemoveFields = () => {
    const id = localStorage.getItem("cardId");
    fetch(`${baseUrl}/cards/fields/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fieldName: "pdf",
        elementId: items?._id,
      }),
    })
      .then((response) => response.text())
      .then((result) => {
        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="bg-white px-4 py-2 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb">
          <div className="flex flex-col">
            <span>
              <KeyboardArrowUpIcon />
            </span>
            <span className="-mt-4 ">
              <KeyboardArrowDownIcon />
            </span>
          </div>
          <h4>PDF</h4>
        </div>
        <div onClick={() => (from ? handleRemoveFields() : "")}>
          <CloseIcon />
        </div>
      </div>
      <div className="mb-3">
        <div className="w-full">
          <div className=" flex-wrap my-4">
            
            {
              pdf.length > 0 && <p className="flex gap-4 items-center"> <PictureAsPdfIcon fontSize="large"/> <button title="Click to Download" onClick={downloadBase64File}>
                <CloudDownloadIcon/>
                </button> </p>
            }
            
          </div>
          <label
            htmlFor="p"
            className="flex items-center gap-2 w-full bg-gray-200 px-3 py-1 rounded-full"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12.587"
                viewBox="0 0 13 12.587"
              >
                <g
                  id="Group_5"
                  data-name="Group 5"
                  transform="translate(0.399 0.026)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="13"
                    transform="translate(-0.399 6.21)"
                    fill="none"
                    stroke="#0277b5"
                    stroke-width="2.5"
                  />
                  <path
                    id="Path_516"
                    data-name="Path 516"
                    d="M0,0,.13,6.268l.13,6.268"
                    transform="translate(5.741 0)"
                    fill="none"
                    stroke="#0277b5"
                    stroke-width="2.5"
                  />
                </g>
              </svg>
            </span>

            <p className="text-md">Add PDF</p>
          </label>
          <input
            onChange={handleFileChange}
            type="file"
            id="p"
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PDF;
