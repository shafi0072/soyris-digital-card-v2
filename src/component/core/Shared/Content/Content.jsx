import { userContext } from "@/src/Storage/ContextApi";
import React from "react";
import { useContext } from "react";

const Content = ({ item, design }) => {
  const { primaryColor, primaryAccent } = useContext(userContext);
  console.log(item?.url);
  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.085"
      height="19.102"
      viewBox="0 0 17.085 19.102"
    >
      <path
        id="phone-svgrepo-com"
        d="M11.012,5.671S10.726,5,10.288,5a1.09,1.09,0,0,0-.8.336c-.149.137-2.648,2.191-2.648,2.191a2.361,2.361,0,0,0-.671,1.829,12.117,12.117,0,0,0,1.493,5.26,24.358,24.358,0,0,0,6.119,7.239,14.192,14.192,0,0,0,3.4,1.9,9.868,9.868,0,0,0,1.652.346,1.678,1.678,0,0,0,1.082-.334c.465-.338,3.076-2.437,3.076-2.437a.8.8,0,0,0-.1-1.249c-.746-.671-3.01-2.164-3.495-2.556a1.2,1.2,0,0,0-1.475.047c-.3.272-.83.719-.9.775-.1.075-.364.317-.662.2a9.137,9.137,0,0,1-3.385-2.975,9.245,9.245,0,0,1-1.809-3.32.486.486,0,0,1,.2-.57c.215-.149,1.008-.81,1.008-.81a1.144,1.144,0,0,0,.3-1.1c-.214-.6-1.655-4.095-1.655-4.095Z"
        transform="translate(-6.162 -5)"
        fill={primaryAccent}
      />
    </svg>
  );

  const websiteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        id="website-dashboard-svgrepo-com"
        d="M3,22H21a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1ZM4,10H6V20H4ZM20,20H8V10H20ZM4,4H20V8H4Z"
        transform="translate(-2 -2)"
        fill={primaryAccent}
      />
    </svg>
  );
  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.5"
      height="22.5"
      viewBox="0 0 22.5 22.5"
    >
      <path
        id="email-svgrepo-com"
        d="M17.444,13A4.444,4.444,0,1,1,13,8.556,4.445,4.445,0,0,1,17.444,13Zm0,0v1.667a2.778,2.778,0,0,0,2.778,2.778h0A2.778,2.778,0,0,0,23,14.667V13A10,10,0,1,0,13,23h4.444"
        transform="translate(-1.75 -1.75)"
        fill="none"
        stroke={primaryAccent}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
      />
    </svg>
  );
  const locationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.905"
      height="22.545"
      viewBox="0 0 16.905 22.545"
    >
      <g id="layer1" transform="translate(0.75 0.75)">
        <path
          id="path929"
          d="M9.022,288.8a7.71,7.71,0,0,0-7.7,7.7c0,7.469,7.266,13.147,7.266,13.147a.7.7,0,0,0,.873,0s7.266-5.678,7.266-13.147A7.715,7.715,0,0,0,9.022,288.8Zm0,1.4a6.293,6.293,0,0,1,6.3,6.3c0,6.11-5.533,10.938-6.3,11.591-.763-.651-6.3-5.479-6.3-11.591A6.288,6.288,0,0,1,9.022,290.2Z"
          transform="translate(-1.322 -288.797)"
          fill="none"
          stroke={primaryAccent}
          stroke-width="1.5"
        />
        <path
          id="circle931"
          d="M4.232,290.385a1.323,1.323,0,1,0,1.324,1.322A1.326,1.326,0,0,0,4.232,290.385Zm0,.529a.794.794,0,1,1-.793.793A.79.79,0,0,1,4.232,290.914Z"
          transform="translate(3.469 -284.876)"
          fill="none"
          stroke={primaryAccent}
          stroke-width="1.5"
        />
      </g>
    </svg>
  );
  const skypeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.305"
      height="27.305"
      viewBox="0 0 27.305 27.305"
    >
      <path
        id="skype-svgrepo-com"
        d="M3.482,7.826a4.344,4.344,0,0,1,7.4-3.084l.506.5.689-.184A9.938,9.938,0,0,1,24.245,17.225l-.184.689.5.506a4.344,4.344,0,0,1-6.143,6.143l-.506-.5-.689.184A9.938,9.938,0,0,1,5.06,12.08l.184-.689-.5-.506A4.326,4.326,0,0,1,3.482,7.826ZM7.826,1A6.826,6.826,0,0,0,2.5,12.1,12.421,12.421,0,0,0,17.2,26.8a6.826,6.826,0,0,0,9.6-9.6A12.421,12.421,0,0,0,12.1,2.5,6.8,6.8,0,0,0,7.826,1Zm5.141,10.339a1.813,1.813,0,0,1,1.6-.72,4.185,4.185,0,0,1,2.7.876,1.241,1.241,0,0,0,1.506-1.973,6.661,6.661,0,0,0-4.209-1.385,4.266,4.266,0,0,0-3.858,2.16,3.072,3.072,0,0,0,.1,3.061,4.182,4.182,0,0,0,2.541,1.809l1.928.519c.743.2,1.871.89,1.465,1.82a2.572,2.572,0,0,1-2.391,1.181,4.621,4.621,0,0,1-2.978-.876,1.241,1.241,0,1,0-1.506,1.973,6.452,6.452,0,0,0,4.209,1.385c1.96,0,4.1-.742,4.941-2.67a3.417,3.417,0,0,0-.287-3.279c-.953-1.47-2.594-1.895-4.184-2.306-.185-.048-.369-.1-.551-.145C13.341,12.593,12.577,12.082,12.967,11.339Z"
        transform="translate(-1 -1)"
        fill={primaryAccent}
        fill-rule="evenodd"
      />
    </svg>
  );

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

  const whatsapppIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21.582"
      height="21.575"
      viewBox="0 0 21.582 21.575"
    >
      <g id="whatsapp-svgrepo-com" transform="translate(0.348 0.25)">
        <path
          id="Path_14"
          data-name="Path 14"
          d="M14.278,11.492c-.266-.126-1.538-.755-1.776-.853s-.406-.126-.587.14-.671.839-.825,1.021-.294.2-.559,0a7.174,7.174,0,0,1-2.084-1.287,7.342,7.342,0,0,1-1.4-1.8c-.154-.252,0-.392.112-.531s.252-.294.392-.448A1.944,1.944,0,0,0,7.8,7.3a.531.531,0,0,0,0-.462c0-.126-.587-1.4-.811-1.916s-.42-.448-.573-.448H5.858a1.007,1.007,0,0,0-.7.322A2.937,2.937,0,0,0,4.25,6.96,5.021,5.021,0,0,0,5.3,9.687,11.636,11.636,0,0,0,9.76,13.6c.615.266,1.091.42,1.468.545a3.538,3.538,0,0,0,1.636.1,2.7,2.7,0,0,0,1.762-1.231,2.336,2.336,0,0,0,.154-1.231A1.451,1.451,0,0,0,14.278,11.492Z"
          transform="translate(0.869 1.082)"
          fill="#fff"
          stroke={primaryAccent}
          stroke-width="0.5"
        />
        <path
          id="Path_15"
          data-name="Path 15"
          d="M18.351,3.549A10.293,10.293,0,0,0,10.953.5,10.405,10.405,0,0,0,1.989,16.094L.59,21.478l5.51-1.4a10.349,10.349,0,0,0,4.965,1.259h-.112a10.405,10.405,0,0,0,7.4-17.789Zm-7.4,16a8.559,8.559,0,0,1-4.405-1.217L6.24,18.15,2.967,19l.867-3.189-.2-.322a8.636,8.636,0,1,1,7.314,4.056Z"
          transform="translate(-0.59 -0.5)"
          fill={primaryAccent}
          stroke={primaryAccent}
          stroke-width="0.5"
        />
      </g>
    </svg>
  );
  const viberIcon = (
    <svg
      id="viber-svgrepo-com"
      xmlns="http://www.w3.org/2000/svg"
      width="20.938"
      height="21.584"
      viewBox="0 0 20.938 21.584"
    >
      <path
        id="Path_16"
        data-name="Path 16"
        d="M12.924,4a.924.924,0,0,0,0,1.847,3.7,3.7,0,0,1,2.7,1,3.7,3.7,0,0,1,1,2.7.924.924,0,1,0,1.847,0,5.539,5.539,0,0,0-1.541-4A5.54,5.54,0,0,0,12.924,4Z"
        transform="translate(-1.531 -0.823)"
        fill={primaryAccent}
      />
      <path
        id="Path_17"
        data-name="Path 17"
        d="M5.013,7.853C5.118,7.018,6.2,5.884,7.064,6.01h0c.72.137,1.31,1.22,1.7,1.934.064.117.122.225.175.316a.915.915,0,0,1-.154,1.148l-.089.071c-.329.261-.756.6-.656.941a13.173,13.173,0,0,0,3.639,3.627c.348.2.618-.189.85-.524.055-.079.107-.155.158-.219a.9.9,0,0,1,1.14-.158A12.715,12.715,0,0,1,15.8,14.562a.78.78,0,0,1,.165,1.03c-.372.7-1.449,1.626-2.23,1.438A12.833,12.833,0,0,1,5.074,8.363a.916.916,0,0,1-.064-.488Z"
        transform="translate(-0.997 -0.976)"
        fill={primaryAccent}
      />
      <path
        id="Path_18"
        data-name="Path 18"
        d="M12.924,7a.924.924,0,1,0,0,1.847,1.082,1.082,0,0,1,.924.924.924.924,0,1,0,1.847,0A2.9,2.9,0,0,0,12.924,7Z"
        transform="translate(-1.531 -1.052)"
        fill={primaryAccent}
      />
      <path
        id="Path_19"
        data-name="Path 19"
        d="M6.994,22.054q.039.022.081.04c.5.216,1.12-.266,2.358-1.228l1.24-.964a17.572,17.572,0,0,0,6.292-.825,6.466,6.466,0,0,0,3.967-3.967,18.256,18.256,0,0,0,0-9.813,6.466,6.466,0,0,0-3.967-3.967,22.489,22.489,0,0,0-11.66,0A6.466,6.466,0,0,0,1.337,5.3a18.256,18.256,0,0,0,0,9.813A6.466,6.466,0,0,0,5.3,19.076a10.211,10.211,0,0,0,1.212.363C6.516,21.007,6.516,21.791,6.994,22.054Zm1.369-2.7V18.323A.46.46,0,0,0,8,17.872a17.043,17.043,0,0,1-2.085-.539A4.618,4.618,0,0,1,3.081,14.5a14.1,14.1,0,0,1-.568-4.3,14.1,14.1,0,0,1,.568-4.3A4.618,4.618,0,0,1,5.915,3.073a17.436,17.436,0,0,1,5.2-.665,17.39,17.39,0,0,1,5.239.665,4.618,4.618,0,0,1,2.834,2.834,14.1,14.1,0,0,1,.568,4.3,14.1,14.1,0,0,1-.568,4.3,4.618,4.618,0,0,1-2.834,2.834,16.881,16.881,0,0,1-6.121.705.465.465,0,0,0-.3.1Z"
        transform="translate(-0.666 -0.56)"
        fill={primaryAccent}
        fill-rule="evenodd"
      />
    </svg>
  );
  const snapchatIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.618"
      height="27.305"
      viewBox="0 0 25.618 27.305"
    >
      <path
        id="snapchat-svgrepo-com"
        d="M8.773,4.692A7.791,7.791,0,0,1,14.952,2a7.757,7.757,0,0,1,6.194,2.878,11.061,11.061,0,0,1,2.235,6.471l.12.017.027,0c.22.032.484.071.759.124a3.994,3.994,0,0,1,3.346,2.554,2.635,2.635,0,0,1-.374,2.487A3.969,3.969,0,0,1,25.7,17.676c-.23.1-.458.192-.65.265a14.487,14.487,0,0,0,2.1,3.6,3.2,3.2,0,0,1,.178,3.3A3.242,3.242,0,0,1,24.663,26.8a17.245,17.245,0,0,0-2.326.253,6.672,6.672,0,0,0-1.294.422c-.31.128-.595.255-.9.392-.244.109-.5.224-.8.351A11.172,11.172,0,0,1,14.952,29.3a11.171,11.171,0,0,1-4.389-1.085c-.3-.127-.555-.242-.8-.351-.307-.137-.592-.264-.9-.392a6.67,6.67,0,0,0-1.294-.422A17.245,17.245,0,0,0,5.242,26.8,3.242,3.242,0,0,1,2.578,24.85a3.2,3.2,0,0,1,.178-3.3,14.436,14.436,0,0,0,2.106-3.627c-.173-.07-.377-.153-.583-.25a4.144,4.144,0,0,1-1.512-1.111,2.779,2.779,0,0,1-.529-2.381c.421-2,2.3-2.5,3.3-2.684.282-.053.556-.092.786-.124l.045-.006.156-.022A10.9,10.9,0,0,1,8.773,4.692Zm1.989,1.675C9.771,7.543,9.1,9.436,9.1,12.216v.137l-.028.134a1.622,1.622,0,0,1-.928,1.122,3.219,3.219,0,0,1-.777.232c-.2.038-.429.069-.631.1l-.06.008c-.231.032-.449.063-.664.1-.995.187-1.182.434-1.231.665-.035.164,0,.2.013.216l0,.005a1.685,1.685,0,0,0,.581.378c.162.076.332.145.521.221l.046.018c.165.066.361.144.535.226a2.582,2.582,0,0,1,.7.453,1.548,1.548,0,0,1,.457,1.487,15.21,15.21,0,0,1-2.811,5.4.308.308,0,0,0-.021.137,1.149,1.149,0,0,0,.121.471,1.18,1.18,0,0,0,.3.4.324.324,0,0,0,.135.078,19.8,19.8,0,0,1,2.678.292,9.146,9.146,0,0,1,1.821.577c.315.13.678.291,1.03.447.246.109.487.216.7.309a8.67,8.67,0,0,0,3.364.875,8.67,8.67,0,0,0,3.364-.875c.216-.093.457-.2.7-.309.352-.156.714-.317,1.03-.447A9.143,9.143,0,0,1,21.87,24.5a19.8,19.8,0,0,1,2.678-.292.325.325,0,0,0,.135-.078,1.18,1.18,0,0,0,.3-.4,1.149,1.149,0,0,0,.121-.471.306.306,0,0,0-.02-.135,15.212,15.212,0,0,1-2.813-5.405,1.542,1.542,0,0,1,.5-1.521,2.713,2.713,0,0,1,.712-.432c.174-.077.373-.152.542-.216l.063-.024c.2-.075.376-.145.544-.22a1.662,1.662,0,0,0,.552-.34.582.582,0,0,0-.028-.123c-.118-.368-.453-.619-1.364-.8-.207-.04-.416-.071-.637-.1l-.05-.007c-.2-.028-.416-.06-.615-.1a3.041,3.041,0,0,1-.765-.241,1.622,1.622,0,0,1-.893-1.109l-.028-.134v-.137a8.934,8.934,0,0,0-1.676-5.7A5.16,5.16,0,0,0,14.952,4.6,5.2,5.2,0,0,0,10.762,6.367Z"
        transform="translate(-2.167 -2)"
        fill={primaryAccent}
        fill-rule="evenodd"
      />
    </svg>
  );
  const signalIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28.808"
      height="28.808"
      viewBox="0 0 28.808 28.808"
    >
      <g id="signal-svgrepo-com" transform="translate(0.75 0.753)">
        <path
          id="Path_20"
          data-name="Path 20"
          d="M29.969,136.007q-.309-.172-.607-.362a1.024,1.024,0,0,0-.747-.142l-3.3.643.643-3.3a1.024,1.024,0,0,0-.142-.747l-.06-.095H23.405q.217.43.463.843l-.663,3.408a1.706,1.706,0,0,0,2,2l3.408-.663a13.541,13.541,0,0,0,1.355.708Z"
          transform="translate(-21.948 -112.204)"
          fill={primaryAccent}
          stroke={primaryAccent}
          stroke-width="1.5"
          fill-rule="evenodd"
        />
        <path
          id="Path_21"
          data-name="Path 21"
          d="M39.3,20a13.72,13.72,0,0,0-2.067-1.7A1.024,1.024,0,1,0,36.1,20a11.736,11.736,0,0,1,3.2,3.2A1.024,1.024,0,1,0,41,22.066,13.71,13.71,0,0,0,39.3,20ZM31.916,18.27a1.024,1.024,0,1,0,.4-2.009,13.722,13.722,0,0,0-5.326,0,1.024,1.024,0,1,0,.4,2.009,11.674,11.674,0,0,1,4.531,0Zm11.126,8.719a1.024,1.024,0,1,0-2.009.4,11.678,11.678,0,0,1,0,4.531,1.024,1.024,0,1,0,2.009.4A13.718,13.718,0,0,0,43.043,26.989ZM41,37.239a1.024,1.024,0,1,0-1.7-1.14,11.743,11.743,0,0,1-2.944,3.025,1.024,1.024,0,1,0,1.186,1.67A13.782,13.782,0,0,0,41,37.239ZM23.2,20a1.024,1.024,0,1,0-1.139-1.7,13.8,13.8,0,0,0-3.555,3.46,1.024,1.024,0,0,0,1.67,1.186A11.736,11.736,0,0,1,23.2,20ZM18.49,26.466a1.024,1.024,0,1,0-1.97-.56,13.707,13.707,0,0,0-.5,4.568,1.024,1.024,0,1,0,2.044-.123,11.659,11.659,0,0,1,.423-3.885ZM33.4,42.783a1.024,1.024,0,0,0-.56-1.97,11.66,11.66,0,0,1-3.885.423,1.024,1.024,0,1,0-.122,2.044A13.707,13.707,0,0,0,33.4,42.783ZM18.952,34.156a1.024,1.024,0,1,0-1.888.794q.181.43.391.846H19.8a11.5,11.5,0,0,1-.85-1.64Zm6.2,6.195a11.491,11.491,0,0,1-1.64-.85v2.348q.416.21.846.39a1.024,1.024,0,1,0,.794-1.888Z"
          transform="translate(-15.999 -16)"
          fill={primaryAccent}
          stroke={primaryAccent}
          stroke-width="1.5"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
  const telegramIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="29.808"
      height="25.032"
      viewBox="0 0 29.808 25.032"
    >
      <path
        id="telegram-svgrepo-com"
        d="M15.675,44.8s12.076-4.941,16.265-6.681c1.605-.7,7.05-2.923,7.05-2.923s2.513-.974,2.3,1.392c-.07.974-.628,4.384-1.187,8.073-.838,5.219-1.745,10.926-1.745,10.926s-.139,1.6-1.326,1.879-3.141-.974-3.49-1.253c-.279-.209-5.235-3.34-7.05-4.871a1.316,1.316,0,0,1,.07-2.227c2.513-2.3,5.515-5.15,7.329-6.959.838-.835,1.675-2.784-1.815-.418-4.956,3.41-9.843,6.611-9.843,6.611a4.112,4.112,0,0,1-3.211.07c-2.094-.626-4.537-1.461-4.537-1.461s-1.675-1.044,1.187-2.157Z"
        transform="translate(-12.748 -33.748)"
        fill={primaryAccent}
        stroke={primaryAccent}
        stroke-width="2.5"
      />
    </svg>
  );
  const discordIcon = (
    <svg
      id="discord-svgrepo-com"
      xmlns="http://www.w3.org/2000/svg"
      width="32.31"
      height="25.579"
      viewBox="0 0 32.31 25.579"
    >
      <path
        id="Path_22"
        data-name="Path 22"
        d="M11.308,12.693a2.469,2.469,0,0,1-2.154,2.693A2.469,2.469,0,0,1,7,12.693,2.469,2.469,0,0,1,9.154,10,2.469,2.469,0,0,1,11.308,12.693Zm-2.991,0a.959.959,0,0,0,.837,1.046.959.959,0,0,0,.837-1.046.959.959,0,0,0-.837-1.046A.959.959,0,0,0,8.317,12.693Z"
        transform="translate(2.801 0.818)"
        fill={primaryAccent}
        fill-rule="evenodd"
      />
      <path
        id="Path_23"
        data-name="Path 23"
        d="M15.154,15.385a2.469,2.469,0,0,0,2.154-2.693A2.469,2.469,0,0,0,15.154,10,2.469,2.469,0,0,0,13,12.693,2.469,2.469,0,0,0,15.154,15.385Zm0-1.646a.959.959,0,0,1-.837-1.046.959.959,0,0,1,.837-1.046.959.959,0,0,1,.837,1.046A.959.959,0,0,1,15.154,13.739Z"
        transform="translate(5.202 0.818)"
        fill={primaryAccent}
        fill-rule="evenodd"
      />
      <path
        id="Path_24"
        data-name="Path 24"
        d="M13.444,3.625A1.346,1.346,0,0,0,11.8,2.537,20.95,20.95,0,0,0,4.682,5.391a1.346,1.346,0,0,0-.472.491A31.558,31.558,0,0,0,.886,13.865,36,36,0,0,0,0,22.694a1.346,1.346,0,0,0,.394.952,15.333,15.333,0,0,0,4.612,3.307,13.884,13.884,0,0,0,5.764,1.126,1.346,1.346,0,0,0,1.277-.921l.908-2.725a19.4,19.4,0,0,0,3.2.28,19.4,19.4,0,0,0,3.2-.28l.908,2.725a1.346,1.346,0,0,0,1.277.921A13.884,13.884,0,0,0,27.3,26.953a15.333,15.333,0,0,0,4.612-3.307,1.346,1.346,0,0,0,.394-.952,36,36,0,0,0-.886-8.829A31.553,31.553,0,0,0,28.1,5.881a1.346,1.346,0,0,0-.472-.491,20.951,20.951,0,0,0-7.122-2.854,1.346,1.346,0,0,0-1.64,1.088l-.509,3.054a17.406,17.406,0,0,0-4.4,0ZM22.5,25.357l-.508-1.523a22.358,22.358,0,0,0,3.5-1.273,1.346,1.346,0,1,0-1.166-2.427,19.2,19.2,0,0,1-2.488.938,19.6,19.6,0,0,1-5.68.949,19.6,19.6,0,0,1-5.68-.949,19.714,19.714,0,0,1-2.484-.936,1.346,1.346,0,1,0-1.163,2.429,22.477,22.477,0,0,0,3.489,1.27L9.81,25.357A10.586,10.586,0,0,1,6.1,24.493a12.1,12.1,0,0,1-3.405-2.365,32.161,32.161,0,0,1,.8-7.616A28.335,28.335,0,0,1,6.388,7.505a16.721,16.721,0,0,1,4.641-1.994l.289,1.735A11.123,11.123,0,0,0,7.947,8.824a1.369,1.369,0,0,0-.273,1.888,1.346,1.346,0,0,0,1.879.274,7.729,7.729,0,0,1,1.634-.841,13.364,13.364,0,0,1,4.969-.913,13.363,13.363,0,0,1,4.969.913,7.726,7.726,0,0,1,1.634.841,1.346,1.346,0,0,0,1.879-.274,1.376,1.376,0,0,0-.278-1.892,11.5,11.5,0,0,0-3.366-1.575l.289-1.735a16.722,16.722,0,0,1,4.641,1.994,28.341,28.341,0,0,1,2.889,7.007,32.164,32.164,0,0,1,.8,7.616,12.1,12.1,0,0,1-3.405,2.365A10.586,10.586,0,0,1,22.5,25.357ZM12.116,19.328c1.487,0,2.693-1.507,2.693-3.366S13.6,12.6,12.116,12.6,9.424,14.1,9.424,15.963,10.629,19.328,12.116,19.328Zm10.77-3.366c0,1.859-1.205,3.366-2.693,3.366S17.5,17.821,17.5,15.963,18.707,12.6,20.194,12.6,22.887,14.1,22.887,15.963ZM12.116,17.27a1.2,1.2,0,0,1-1.046-1.308,1.2,1.2,0,0,1,1.046-1.308,1.2,1.2,0,0,1,1.046,1.308A1.2,1.2,0,0,1,12.116,17.27Zm8.078,0a1.2,1.2,0,0,1-1.046-1.308,1.2,1.2,0,0,1,1.046-1.308,1.2,1.2,0,0,1,1.046,1.308A1.2,1.2,0,0,1,20.194,17.27Z"
        transform="translate(0 -2.5)"
        fill={primaryAccent}
        fill-rule="evenodd"
      />
    </svg>
  );
  const slackIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.305"
      height="27.305"
      viewBox="0 0 27.305 27.305"
    >
      <path
        id="slack-svgrepo-com"
        d="M27,14.652a4.345,4.345,0,0,0-4.9-7.029V5.344A4.344,4.344,0,0,0,14.652,2.3a4.345,4.345,0,0,0-7.029,4.9H5.344A4.344,4.344,0,0,0,2.3,14.652a4.345,4.345,0,0,0,4.9,7.029v2.28A4.344,4.344,0,0,0,14.652,27a4.345,4.345,0,0,0,7.029-4.9h2.28A4.344,4.344,0,0,0,27,14.652ZM11.549,3.482a1.862,1.862,0,0,1,1.862,1.862V7.206H11.549a1.862,1.862,0,0,1,0-3.723Zm4.344,1.862a1.862,1.862,0,0,1,3.723,0v8.067H15.893Zm-2.482,8.067V9.688H5.344a1.862,1.862,0,1,0,0,3.723Zm8.688,0h1.862A1.862,1.862,0,1,0,22.1,11.549Zm1.862,2.482H15.893v3.723h8.067a1.862,1.862,0,1,0,0-3.723ZM17.755,22.1H15.893v1.862A1.862,1.862,0,1,0,17.755,22.1Zm-4.344-6.206H9.688v8.067a1.862,1.862,0,1,0,3.723,0Zm-8.067,0H7.206v1.862a1.862,1.862,0,1,1-1.862-1.862Z"
        transform="translate(-1 -1)"
        fill={primaryAccent}
        fill-rule="evenodd"
      />
    </svg>
  );

  return (
    <div className="flex gap-3 my-5 items-center">
      <div
        className={`${
          design === "pro" ? "w-[42px] h-[42px]" : "w-[50px] h-[50px]"
        } rounded-full flex justify-center items-center`}
        style={{ backgroundColor: primaryColor }}
      >
        {item?.type === "Phone" && phoneIcon}

        {item?.type === "Website" && websiteIcon}
        {item?.type === "Email" && emailIcon}
        {item?.type === "Address" && locationIcon}
        {item?.type === "Link" && linkIcon}
        {item?.type === "WhatsApp" && whatsapppIcon}
        {item?.type === "Viber" && viberIcon}
        {item?.type === "Skype" && skypeIcon}
        {item?.type === "Snapchat" && snapchatIcon}
        {item?.type === "Signal" && signalIcon}
        {item?.type === "Telegram" && telegramIcon}
        {item?.type === "Discord" && discordIcon}
        {item?.type === "Slack" && slackIcon}
      </div>
      <div>
        <p
          className={`${
            design === "pro" ? "roboto text-[18px]" : "text-[16px]"
          } w-[230px] `}
          style={{ overflowWrap: 'break-word' }}
        >
          {/* {item?.type !== "Phone" && item?.number && item?.number}{" "} */}
          {item?.number && !item?.internationalNumber && item?.number}
          {item?.number &&
            item?.internationalNumber &&
            `+(${item?.number.substring(0, 3)}) ${item?.number.substring(
              3,
              6
            )}-${item?.number.substring(6)}`}
          {item?.url && item?.url} {item?.address && item?.address}{" "}
          <span className="ms-5"> {item?.ext && `ext: ${item?.ext}`} </span>{" "}
          <br />{" "}
          {item?.chooseLabel && !item?.hideLabelCopy && (
            <span className={`${design === "pro" && "text-[14px]"}`}>
              {item?.chooseLabel}
            </span>
          )}{" "}
          {item?.displayUrl && (
            <span className="block">{item?.displayUrl}</span>
          )}
          {item?.label && (
            <span className={`${design === "pro" && "text-[14px] roboto"}`}>
              {item?.label}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Content;
