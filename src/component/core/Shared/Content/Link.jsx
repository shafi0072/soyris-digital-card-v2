import { userContext } from "@/src/Storage/ContextApi";
import React, { useContext } from "react";

const Link = ({ item, design }) => {
  console.log({ item });

  const { primaryColor, primaryAccent } = useContext(userContext);
  const linkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21.001"
      height="20.049"
      viewBox="0 0 21.001 20.049"
    >
      <path
        id="url-_1424_"
        data-name="url-[#1424]"
        d="M246.238,448.523a3.783,3.783,0,0,1,.669-6.017,4.314,4.314,0,0,1,5.189.6l.639.608a1.056,1.056,0,0,0,1.444,0,.938.938,0,0,0,0-1.374l-.54-.514a6.527,6.527,0,0,0-8.709-.3,5.639,5.639,0,0,0-.135,8.373l.722.687a1.056,1.056,0,0,0,1.444,0,.938.938,0,0,0,0-1.374Zm14.835.378-.521-.5a1.056,1.056,0,0,0-1.444,0,.938.938,0,0,0,0,1.374l.639.608a3.82,3.82,0,0,1,.627,4.941,4.218,4.218,0,0,1-6.319.637l-.722-.687a1.056,1.056,0,0,0-1.444,0,.938.938,0,0,0,0,1.374l.722.687a6.342,6.342,0,0,0,8.775-.11,5.806,5.806,0,0,0-.313-8.329Zm-4.131,5.69-9.261-8.817a.941.941,0,0,1,0-1.375,1.058,1.058,0,0,1,1.444,0l9.262,8.817a.941.941,0,0,1,0,1.375,1.06,1.06,0,0,1-1.445,0Z"
        transform="translate(-242.5 -439.499)"
        fill="#fff"
        stroke={primaryAccent}
        stroke-width="1"
        fill-rule="evenodd"
      />
    </svg>
  );
//kdjkfjdkjfkd
  return (
    <div className="flex gap-3 my-5 items-center">
      <div
        className={`${
          design === "pro" ? "w-[42px] h-[42px]" : "w-[50px] h-[50px]"
        }  rounded-full flex justify-center items-center `}
        style={{ backgroundColor: primaryColor }}
      >
        {item?.type === "Link" && linkIcon}
      </div>
      <div>
        <a
          className={`${design === "pro" && "text-[18px] roboto"} w-[230px]`}
          style={{ overflowWrap: "break-word" }}
          href={item?.url}
        >
          {" "}
          {item?.displayUrl}{" "}
        </a>{" "}
        <br />
        <p
          className={`${design === "pro" && "text-[14px] roboto"} w-[230px]`}
          style={{ overflowWrap: "break-word"}}
        >
          {item?.label}
        </p>
      </div>
    </div>
  );
};

export default Link;
