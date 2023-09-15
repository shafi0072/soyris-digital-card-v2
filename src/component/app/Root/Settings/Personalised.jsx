import { userContext } from "@/src/Storage/ContextApi";
import { baseUrl } from "@/src/config/Server";
import React, { useContext, useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const Personalised = ({ setUrl, handleUrl, isEdit, setEdit,url }) => {
  const inputRef = useRef(null);
  const [isValid,setIsValid] = useState("");

  const { settings,userCardData } = useContext(userContext);
  console.log({userCardData});
  console.log({settings});
  // function for copy text --------------
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyClick = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  };
  const handleEdit = () => {
    setEdit(!isEdit);
  };

  // handle change ---------------
  const permanentUrl = "https://easycards.pro/"; // The permanent URL
  const [inputValue, setInputValue] = useState(settings.url);

  const handleInputChange = (e) => {
    fetch(`${baseUrl}/cards/settings/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "User Name Already Exist") {
            setIsValid("not valid")
        } else {
          const parts = e.target.value;
          setUrl(parts);
          const inputValue = e.target.value;
          setInputValue(inputValue);
          setIsValid("valid")
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-8">
      <h2 className="text-lg font-semibold">Personalised URL</h2>
      <p className="mt-2 text-md">
        Your unique URL is the one below. Click edit to personalise this.
      </p>
      {!isEdit && (
        <>
          <div className="mt-5">
            <div className="flex gap-3 items-center">
              <input
              ref={inputRef}
                value={permanentUrl + `${url?url:settings?.url}`}
                type="text"
                className="px-2 py-1 shadow-lg rounded w-[306px] text-[17px] font-medium"
                name="url"
                id=""
              />
              <span className="cursor-pointer" onClick={handleCopyClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                >
                  <path
                    id="copy-svgrepo-com_1_"
                    data-name="copy-svgrepo-com (1)"
                    d="M19.917,15.833h1.75A2.333,2.333,0,0,0,24,13.5V5.333A2.333,2.333,0,0,0,21.667,3H13.5a2.333,2.333,0,0,0-2.333,2.333v1.75M5.333,11.167H13.5A2.333,2.333,0,0,1,15.833,13.5v8.167A2.333,2.333,0,0,1,13.5,24H5.333A2.333,2.333,0,0,1,3,21.667V13.5A2.333,2.333,0,0,1,5.333,11.167Z"
                    transform="translate(-2 -2)"
                    fill="none"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </span>
              {isCopied && <p style={{ color: "green" }}>Copied!</p>}
            </div>
          </div>
          {/* <button onClick={handleUrl} className='mt-4 bg-[#0277B5] text-sm text-white px-3 py-1 rounded'>EDIT</button> */}
          <button
            onClick={handleEdit}
            className="mt-4 bg-[black] text-sm text-white px-3 py-1 rounded"
          >
            EDIT
          </button>
        </>
      )}
      {isEdit && (
        <>
          <div className="mt-5">
            <div className="">
              <input
                onChange={handleInputChange}
                placeholder="Enter your personalised link"
                type="text"
                className="px-3 py-1 shadow-lg rounded w-[306px] text-[17px] font-medium border-b-2 border-[#0277B5]"
                name="url"
                id=""
              />
              {
                isValid === "not valid" && <CloseIcon sx={{color:"#FF0000"}}></CloseIcon>
              }
              {
                isValid === "valid" && <CheckIcon sx={{color:"#008000"}}/>
              }
              <label className="block ps-3 mt-3">
                https://easycard-gr.vercel.app/{url?url:inputValue?inputValue:""}
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="mt-4 border border-[#0277B5] text-sm  px-3 py-1 rounded"
            >
              Cancel
            </button>
            <button
              disabled={isValid === "valid" ? false :true}
              onClick={handleUrl}
              className="mt-4 bg-[#0277B5] text-sm text-white px-3 py-1 rounded"
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Personalised;
