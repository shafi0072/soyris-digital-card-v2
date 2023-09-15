import { userContext } from "@/src/Storage/ContextApi";
import { baseUrl } from "@/src/config/Server";
import React, { useEffect } from "react";
import { useContext } from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { decodeJwt } from "@/src/config/jwtDecoder";

const SelectCard = () => {
  const { userData } = useContext(userContext);

  
  

  const handleSelectCard = (desg, image, logo) => {
    
    const accessTokenDecode = decodeJwt()
    const words = accessTokenDecode?.name.split(' ');
    console.log(words);
    fetch(`${baseUrl}/cards/add-cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: words?.length > 2 ? words[0] + " " + words[1] : words[0],
        lastName: words[words?.length - 1],
        primaryColor: '#0077B5',
        email: userData?.email,
        cardUserId: userData?._id,
        design: desg,
        ProfileImage: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("cardId", data?._id);
        window.location.assign("/profileInfo");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ height: "80vh" }}>
      <div className="flex gap-14">
        <div
          className="w-[300px] cursor-pointer"
          onClick={() =>
            handleSelectCard(
              "flat",
              "https://suva-trip-exist.s3.amazonaws.com/man.png",
              "https://suva-trip-exist.s3.amazonaws.com/Image+1.png"
            )
          }
        >
          <div className="bg-[#EB531B] w-full h-[300px] rounded-md">
            <img src="/man.jpg" className="w-full h-[95%] " alt="" />
          </div>
          <div className="my-5">
            <img
              className=" w-[80%] h-[50px] mx-auto "
              src="/Image 1.png"
              alt=""
            />
          </div>
          <div className="p-3">
            <div>
              <h2 className="text-xl font-bold">
                Dr. John Andrew <span className="font-thin">PHD</span>{" "}
              </h2>
              <h4 className="text-lg mt-3">Digital Officer</h4>
              <h4 className="italic text-[#EB531B] text-lg">Marketing</h4>
              <h4 className="italic  text-lg">Engine Media</h4>
            </div>
            <div>
              <p className="my-3 italic">
                I lead product across teams for Nike and I ski in my free time.{" "}
              </p>
              <p className="italic text-[#656565] flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                >
                  <g
                    id="chat-bubble-outline-badged-svgrepo-com"
                    transform="translate(-0.13 0.263)"
                  >
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M17.114,7.408a3.579,3.579,0,0,1-.91.318,4.985,4.985,0,0,1,.246,1.517,5.337,5.337,0,0,1-1.787,3.906.482.482,0,0,0-.154.352v2.572L12.4,14.729a.482.482,0,0,0-.4-.053,7.706,7.706,0,0,1-2.293.347c-3.718,0-6.743-2.591-6.743-5.78s3.025-5.78,6.743-5.78a7.708,7.708,0,0,1,2.192.318,3.583,3.583,0,0,1,.216-.935A8.67,8.67,0,0,0,9.706,2.5C5.458,2.5,2,5.525,2,9.243s3.458,6.743,7.706,6.743a8.67,8.67,0,0,0,2.35-.328l2.664,1.7a.482.482,0,0,0,.742-.4V13.708a6.261,6.261,0,0,0,1.927-4.465A5.934,5.934,0,0,0,17.114,7.408Z"
                      transform="translate(-1.275 -1.14)"
                      fill="#969696"
                    />
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M10.482,15.5a.482.482,0,0,0,0,.963h6.743a.482.482,0,0,0,0-.963Z"
                      transform="translate(-5.422 -7.879)"
                      fill="#969696"
                    />
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M13.732,20.5a.482.482,0,1,0,0,.963h3.612a.482.482,0,1,0,0-.963Z"
                      transform="translate(-7.107 -10.47)"
                      fill="#969696"
                    />
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M10.28,10.982a.482.482,0,0,0,.482.482h6.473a.482.482,0,0,0,.4-.226,3.627,3.627,0,0,1-.747-.737H10.762A.482.482,0,0,0,10.28,10.982Z"
                      transform="translate(-5.567 -5.287)"
                      fill="#969696"
                    />
                    <circle
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      cx="2.5"
                      cy="2.5"
                      r="2.5"
                      transform="translate(11.13 0.737)"
                      fill="#969696"
                    />
                    <rect
                      id="Rectangle_22"
                      data-name="Rectangle 22"
                      width="17"
                      height="18"
                      transform="translate(0.13 -0.263)"
                      fill="none"
                    />
                  </g>
                </svg>
                <span>Goes by Mike (He/Him)</span>
              </p>
            </div>
            <div className="bg-black text-white mt-5 flex justify-center rounded">
              <button className="flex items-center gap-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12.059"
                  viewBox="0 0 12 12.059"
                >
                  <g
                    id="Group_1"
                    data-name="Group 1"
                    transform="translate(0 0.029)"
                  >
                    <line
                      id="Line_1"
                      data-name="Line 1"
                      x2="12"
                      transform="translate(0 6)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2.5"
                    />
                    <line
                      id="Line_2"
                      data-name="Line 2"
                      x2="0.281"
                      y2="12"
                      transform="translate(5.771)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2.5"
                    />
                  </g>
                </svg>
                <span>Add to contacts</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-[300px] cursor-pointer"
          onClick={() =>
            handleSelectCard(
              "classic",
              "https://suva-trip-exist.s3.amazonaws.com/lady.png",
              "https://suva-trip-exist.s3.amazonaws.com/Image+1.png"
            )
          }
        >
          <div className="w-full  h-[300px]  relative rounded">
            <img
              className="h-full w-full object-cover rounded"
              src="/lady.png"
            />
            <div className="">
              <div className="absolute  top-[72.4%]  z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300"
                  height="88.28"
                  viewBox="0 0 381 88.28"
                >
                  <path
                    id="wave"
                    d="M0,25.9V55.406c70.325,43.351,128.033,45.974,213.535-5.027S340.019,6.009,381,17.739v-7.65C286.9-26.122,210.5,45.427,151.305,63.278S52.111,68.378,0,25.9Z"
                    transform="translate(0 0)"
                    fill="#0E66A0"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="32.781"
                  viewBox="0 0 96 32.781"
                >
                  <path
                    id="wave-left"
                    d="M0,35.773V68.554H96l-.032-1.475C63.791,67.267,33.386,56.325,0,35.773Z"
                    transform="translate(0 -35.773)"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-[6px] right-0 z-[5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="262"
                  height="81.75"
                  viewBox="0 0 285 81.75"
                >
                  <path
                    id="wave-right"
                    d="M300.742,6.114c-30.018-.329-66.667,9.2-121,41.617C136.118,73.767,99.61,86.065,65.025,86.281H65v1.575H350V14.529C334.376,10.055,318.753,6.312,300.742,6.114Z"
                    transform="translate(-65 -6.106)"
                    fill="#fff"
                  />
                </svg>
              </div>
              <img
                className="absolute bottom-3 right-0 z-50 w-[100px]"
                src="/Image 1.png"
                alt=""
              />
            </div>
          </div>
          <div className="p-3">
            <div className="ps-4 border-l-4 border-[#0E66A0] mt-5">
              <h2 className="text-xl font-bold">
                Dr. John Andrew <span className="font-thin">PHD</span>{" "}
              </h2>
              <h4 className="text-lg mt-3">Digital Officer</h4>
              <h4 className="italic text-[#EB531B] text-lg">Marketing</h4>
              <h4 className="italic  text-lg">Engine Media</h4>
            </div>
            <div>
              <p className="my-3 italic">
                I lead product across teams for Nike and I ski in my free time.{" "}
              </p>
              <p className="italic text-[#656565] flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                >
                  <g
                    id="chat-bubble-outline-badged-svgrepo-com"
                    transform="translate(-0.13 0.263)"
                  >
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M17.114,7.408a3.579,3.579,0,0,1-.91.318,4.985,4.985,0,0,1,.246,1.517,5.337,5.337,0,0,1-1.787,3.906.482.482,0,0,0-.154.352v2.572L12.4,14.729a.482.482,0,0,0-.4-.053,7.706,7.706,0,0,1-2.293.347c-3.718,0-6.743-2.591-6.743-5.78s3.025-5.78,6.743-5.78a7.708,7.708,0,0,1,2.192.318,3.583,3.583,0,0,1,.216-.935A8.67,8.67,0,0,0,9.706,2.5C5.458,2.5,2,5.525,2,9.243s3.458,6.743,7.706,6.743a8.67,8.67,0,0,0,2.35-.328l2.664,1.7a.482.482,0,0,0,.742-.4V13.708a6.261,6.261,0,0,0,1.927-4.465A5.934,5.934,0,0,0,17.114,7.408Z"
                      transform="translate(-1.275 -1.14)"
                      fill="#969696"
                    />
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M10.482,15.5a.482.482,0,0,0,0,.963h6.743a.482.482,0,0,0,0-.963Z"
                      transform="translate(-5.422 -7.879)"
                      fill="#969696"
                    />
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M13.732,20.5a.482.482,0,1,0,0,.963h3.612a.482.482,0,1,0,0-.963Z"
                      transform="translate(-7.107 -10.47)"
                      fill="#969696"
                    />
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M10.28,10.982a.482.482,0,0,0,.482.482h6.473a.482.482,0,0,0,.4-.226,3.627,3.627,0,0,1-.747-.737H10.762A.482.482,0,0,0,10.28,10.982Z"
                      transform="translate(-5.567 -5.287)"
                      fill="#969696"
                    />
                    <circle
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      cx="2.5"
                      cy="2.5"
                      r="2.5"
                      transform="translate(11.13 0.737)"
                      fill="#969696"
                    />
                    <rect
                      id="Rectangle_22"
                      data-name="Rectangle 22"
                      width="17"
                      height="18"
                      transform="translate(0.13 -0.263)"
                      fill="none"
                    />
                  </g>
                </svg>
                <span>Goes by Mike (He/Him)</span>
              </p>
            </div>
            <div className="my-3 flex items-center gap-2">
              <span className="w-[40px] h-[40px] rounded-full bg-[#0E66A0] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14.094"
                  height="15.758"
                  viewBox="0 0 14.094 15.758"
                >
                  <path
                    id="phone-svgrepo-com"
                    d="M10.163,5.554S9.927,5,9.566,5a.9.9,0,0,0-.663.277c-.123.113-2.185,1.807-2.185,1.807a1.948,1.948,0,0,0-.554,1.508A10,10,0,0,0,7.4,12.932,20.094,20.094,0,0,0,12.443,18.9a11.708,11.708,0,0,0,2.809,1.569,8.14,8.14,0,0,0,1.363.285,1.384,1.384,0,0,0,.892-.276c.384-.279,2.538-2.011,2.538-2.011a.656.656,0,0,0-.085-1.03c-.615-.554-2.483-1.785-2.883-2.109a.988.988,0,0,0-1.217.039c-.246.224-.685.593-.738.64-.08.062-.3.261-.547.162a7.538,7.538,0,0,1-2.793-2.454,7.627,7.627,0,0,1-1.493-2.739.4.4,0,0,1,.161-.471c.178-.123.832-.668.832-.668a.944.944,0,0,0,.246-.91c-.177-.492-1.365-3.378-1.365-3.378Z"
                    transform="translate(-6.161 -5)"
                    fill="#fff"
                  />
                </svg>
              </span>
              <h2 className="">
                032937890232 <span className="ml-[26px]">Ext. 8801</span> <br />
                Office
              </h2>
            </div>
            <div className="bg-[#0E66A0] text-white mt-5 flex justify-center rounded">
              <button className="flex items-center gap-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12.059"
                  viewBox="0 0 12 12.059"
                >
                  <g
                    id="Group_1"
                    data-name="Group 1"
                    transform="translate(0 0.029)"
                  >
                    <line
                      id="Line_1"
                      data-name="Line 1"
                      x2="12"
                      transform="translate(0 6)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2.5"
                    />
                    <line
                      id="Line_2"
                      data-name="Line 2"
                      x2="0.281"
                      y2="12"
                      transform="translate(5.771)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2.5"
                    />
                  </g>
                </svg>
                <span>Add to contacts</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-[300px] cursor-pointer"
          onClick={() =>
            handleSelectCard(
              "pro",
              "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
              "https://suva-trip-exist.s3.amazonaws.com/Image+1.png"
            )
          }
        >
          <div className="w-full h-[240px] rounded-md">
            <img
              src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM="
              className="w-full h-full rounded-t-lg "
              alt=""
            />
          </div>
          <div>
            <div className="text-center  mx-auto rounded-b-lg text-white py-4 bg-[#0053A2]">
              <h2 className="text-xl font-bold">
                Dr. John Andrew <span className="font-thin">PHD</span>{" "}
              </h2>
              <h4 className="text-lg mt-3">Digital Officer</h4>
              <h4 className="italic text-[#EB531B] text-lg">Marketing</h4>
              <h4 className="italic  text-lg">Engine Media</h4>
            </div>
            <div className="mx-auto w-3/4 my-4">
              <img
                src="https://suva-trip-exist.s3.amazonaws.com/Image+1.png"
                alt=""
              />
            </div>
            <div>
              <p className="my-3 italic">
                I lead product across teams for Nike and I ski in my free time.{" "}
              </p>
              <p className="italic text-[#656565] flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                >
                  <g
                    id="chat-bubble-outline-badged-svgrepo-com"
                    transform="translate(-0.13 0.263)"
                  >
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M17.114,7.408a3.579,3.579,0,0,1-.91.318,4.985,4.985,0,0,1,.246,1.517,5.337,5.337,0,0,1-1.787,3.906.482.482,0,0,0-.154.352v2.572L12.4,14.729a.482.482,0,0,0-.4-.053,7.706,7.706,0,0,1-2.293.347c-3.718,0-6.743-2.591-6.743-5.78s3.025-5.78,6.743-5.78a7.708,7.708,0,0,1,2.192.318,3.583,3.583,0,0,1,.216-.935A8.67,8.67,0,0,0,9.706,2.5C5.458,2.5,2,5.525,2,9.243s3.458,6.743,7.706,6.743a8.67,8.67,0,0,0,2.35-.328l2.664,1.7a.482.482,0,0,0,.742-.4V13.708a6.261,6.261,0,0,0,1.927-4.465A5.934,5.934,0,0,0,17.114,7.408Z"
                      transform="translate(-1.275 -1.14)"
                      fill="#969696"
                    />
                    <path
                      id="Path_6"
                      data-name="Path 6"
                      d="M10.482,15.5a.482.482,0,0,0,0,.963h6.743a.482.482,0,0,0,0-.963Z"
                      transform="translate(-5.422 -7.879)"
                      fill="#969696"
                    />
                    <path
                      id="Path_7"
                      data-name="Path 7"
                      d="M13.732,20.5a.482.482,0,1,0,0,.963h3.612a.482.482,0,1,0,0-.963Z"
                      transform="translate(-7.107 -10.47)"
                      fill="#969696"
                    />
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M10.28,10.982a.482.482,0,0,0,.482.482h6.473a.482.482,0,0,0,.4-.226,3.627,3.627,0,0,1-.747-.737H10.762A.482.482,0,0,0,10.28,10.982Z"
                      transform="translate(-5.567 -5.287)"
                      fill="#969696"
                    />
                    <circle
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      cx="2.5"
                      cy="2.5"
                      r="2.5"
                      transform="translate(11.13 0.737)"
                      fill="#969696"
                    />
                    <rect
                      id="Rectangle_22"
                      data-name="Rectangle 22"
                      width="17"
                      height="18"
                      transform="translate(0.13 -0.263)"
                      fill="none"
                    />
                  </g>
                </svg>
                <span>Goes by Mike (He/Him)</span>
              </p>
            </div>
            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <div className="bg-[#0053A2] p-2.5 rounded-full  ">
                  <PhoneAndroidIcon className="text-white" />
                </div>
                <p>+8801754547535</p>
              </div>
              {/* <div className="flex gap-2 items-center">
                <div className="bg-[#0053A2] p-2.5 rounded-full  ">
                  <EmailIcon className="text-white" />
                </div>
                <p>jhon@gmail.com</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-[#0053A2] p-2.5 rounded-full  ">
                  <WebAssetOutlinedIcon className="text-white" />
                </div>
                <p>nolimits.digital</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-[#0053A2] p-2.5 rounded-full  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 30.708 30.894"
                  >
                    <g
                      id="Group_11"
                      data-name="Group 11"
                      transform="translate(-1314.304 -532.5)"
                    >
                      <g
                        id="whatsapp-svgrepo-com"
                        transform="translate(1314.41 532.5)"
                      >
                        <path
                          id="Path_14"
                          data-name="Path 14"
                          d="M18.447,14.412c-.376-.178-2.178-1.069-2.515-1.208s-.574-.178-.832.2-.95,1.188-1.168,1.445-.416.277-.792,0a10.158,10.158,0,0,1-2.95-1.822,10.4,10.4,0,0,1-1.98-2.554c-.218-.356,0-.554.158-.752s.356-.416.554-.634a2.752,2.752,0,0,0,.356-.614.752.752,0,0,0,0-.653c0-.178-.832-1.98-1.148-2.713s-.594-.634-.812-.634H6.527a1.426,1.426,0,0,0-.99.455A4.158,4.158,0,0,0,4.25,8a7.108,7.108,0,0,0,1.485,3.861A16.474,16.474,0,0,0,12.052,17.4c.871.376,1.544.594,2.079.772a5.009,5.009,0,0,0,2.317.139,3.821,3.821,0,0,0,2.495-1.742,3.307,3.307,0,0,0,.218-1.742A2.055,2.055,0,0,0,18.447,14.412Z"
                          transform="translate(3.587 3.889)"
                          stroke="#fff"
                          fill="#fff"
                          strokeWidth="1"
                        />
                        <path
                          id="Path_15"
                          data-name="Path 15"
                          d="M25.736,4.817A14.573,14.573,0,0,0,15.262.5,14.731,14.731,0,0,0,2.57,22.578L.59,30.2l7.8-1.98A14.652,14.652,0,0,0,15.42,30h-.158A14.731,14.731,0,0,0,25.736,4.817ZM15.262,27.468a12.118,12.118,0,0,1-6.237-1.723l-.436-.257L3.956,26.7l1.228-4.514-.277-.455a12.227,12.227,0,1,1,10.356,5.742Z"
                          transform="translate(0 0)"
                          stroke="#fff"
                          fill="#fff"
                          strokeWidth="1"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p>Hit me on Whatsapp</p>
              </div> */}
            </div>
            {/* <div>
              <p className="text-xl my-4 ">Social Media</p>
              <div className="flex items-center gap-3">
                <div className="bg-[#0053A2] p-2.5 rounded-full  ">
                  <FacebookOutlinedIcon className="text-white" />
                </div>
                <div className="bg-[#0053A2] p-2.5 rounded-full  ">
                  <InstagramIcon className="text-white" />
                </div>
                <div className="bg-[#0053A2] p-2.5 rounded-full  ">
                  <TwitterIcon className="text-white" />
                </div>
              </div>
            </div> */}
            <div className="bg-[#0053A2] text-white mt-5 flex justify-center rounded">
              <button className="flex items-center gap-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12.059"
                  viewBox="0 0 12 12.059"
                >
                  <g
                    id="Group_1"
                    data-name="Group 1"
                    transform="translate(0 0.029)"
                  >
                    <line
                      id="Line_1"
                      data-name="Line 1"
                      x2="12"
                      transform="translate(0 6)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2.5"
                    />
                    <line
                      id="Line_2"
                      data-name="Line 2"
                      x2="0.281"
                      y2="12"
                      transform="translate(5.771)"
                      fill="none"
                      stroke="#fff"
                      stroke-width="2.5"
                    />
                  </g>
                </svg>
                <span>Add to contacts</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
