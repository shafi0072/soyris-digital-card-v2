import React from "react";

const Social = ({ item }) => {
  const facebookIcon = (
    <svg
      id="Dribbble-Light-Preview"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="20"
      viewBox="0 0 10 20"
    >
      <g id="icons">
        <path
          id="facebook-_176_"
          data-name="facebook-[#176]"
          d="M335.821,7259v-9h2.732l.446-4h-3.179v-1.948c0-1.029.026-2.052,1.466-2.052h1.458v-2.86a16.121,16.121,0,0,0-2.519-.14c-2.646,0-4.3,1.657-4.3,4.7v2.3H329v4h2.923v9Z"
          transform="translate(-329 -7239)"
          fill="#fff"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
  const instagramIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.5"
      height="22.5"
      viewBox="0 0 22.5 22.5"
    >
      <g id="instagram-svgrepo-com" transform="translate(1.25 1.25)">
        <path
          id="Path_10"
          data-name="Path 10"
          d="M19.786,5H11.214A5.714,5.714,0,0,0,5.5,10.714v8.571A5.714,5.714,0,0,0,11.214,25h8.571A5.714,5.714,0,0,0,25.5,19.286V10.714A5.714,5.714,0,0,0,19.786,5Z"
          transform="translate(-5.5 -5)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          fill-rule="evenodd"
        />
        <path
          id="Path_11"
          data-name="Path 11"
          d="M13.143,16.286a3.643,3.643,0,1,1,2.576-1.067A3.643,3.643,0,0,1,13.143,16.286Z"
          transform="translate(-3.143 -2.643)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          fill-rule="evenodd"
        />
        <rect
          id="Rectangle_38"
          data-name="Rectangle 38"
          width="2"
          height="2"
          rx="1"
          transform="translate(14.8 5.2) rotate(-90)"
          fill="#fff"
        />
        <rect
          id="Rectangle_39"
          data-name="Rectangle 39"
          width="1.214"
          height="1.214"
          rx="0.5"
          transform="translate(15.173 4.827) rotate(-90)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-width="2.5"
        />
      </g>
    </svg>
  );


  return (
   
      
       
     <>
      {item?.url?.length > 0 && (
          <a
            href={item?.url}
            className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
            style={{ background: "#EB531C" }}
          >
            {item?.type === "Facebook" && facebookIcon}
            {item?.type === "Instagram" && instagramIcon}
          </a>
        )}
     </>

      
       
     
   
  );
};

export default Social;
