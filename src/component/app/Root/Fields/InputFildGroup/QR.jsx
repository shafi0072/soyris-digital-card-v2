import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { baseUrl } from "@/src/config/Server";
const QR = ({ index, handleQRInputChange, items, from }) => {
  const handleRemoveFields = () => {
    const id = localStorage.getItem("cardId");
    fetch(`${baseUrl}/cards/fields/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fieldName: "qr",
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
          <h4>QR</h4>
        </div>
        <div onClick={() => (from ? handleRemoveFields() : "")}>
          <CloseIcon />
        </div>
      </div>
      <div className="mb-3">
        <div className="w-full relative ">
          <input
            name={`qr${index + 1}`}
            defaultValue={`${items?.qr+index+1}`}
            onChange={(e) =>
              handleQRInputChange(index, `qr${index + 1}`, e.target.value)
            }
            type="text"
            placeholder="https://tamastoria.gr/"
            className="border w-full border-[#C1C1C1] rounded-xl ps-8 pr-1 py-1 "
          />

          <label htmlFor="" className="absolute top-2 left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.024"
              height="14.024"
              viewBox="0 0 14.024 14.024"
            >
              <g id="qr-code-svgrepo-com" transform="translate(0.5 0.5)">
                <path
                  id="Path_38"
                  data-name="Path 38"
                  d="M2,15.714a3.221,3.221,0,0,1,.192-1.592,1.3,1.3,0,0,1,.43-.43A3.221,3.221,0,0,1,4.214,13.5H4.93c1.228,0,1.842,0,2.223.381s.381,1,.381,2.223v.716a3.221,3.221,0,0,1-.192,1.592,1.3,1.3,0,0,1-.43.43,3.221,3.221,0,0,1-1.592.192,4.831,4.831,0,0,1-2.388-.288,1.953,1.953,0,0,1-.645-.645"
                  transform="translate(-2 -6.011)"
                  fill="none"
                  stroke="#989898"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_39"
                  data-name="Path 39"
                  d="M19.035,5.321a3.221,3.221,0,0,1-.192,1.592,1.3,1.3,0,0,1-.43.43,3.221,3.221,0,0,1-1.592.192H16.1c-1.228,0-1.842,0-2.223-.381s-.381-1-.381-2.223V4.214a3.221,3.221,0,0,1,.192-1.592,1.3,1.3,0,0,1,.43-.43A3.221,3.221,0,0,1,15.714,2a4.832,4.832,0,0,1,2.388.288,1.953,1.953,0,0,1,.645.645"
                  transform="translate(-6.011 -2)"
                  fill="none"
                  stroke="#989898"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <path
                  id="Path_40"
                  data-name="Path 40"
                  d="M16.5,5.814c0-.336,0-.5.084-.622a.456.456,0,0,1,.108-.108C16.811,5,16.978,5,17.314,5s.5,0,.622.084a.456.456,0,0,1,.108.108c.084.118.084.286.084.622s0,.5-.084.622a.456.456,0,0,1-.108.108c-.119.084-.286.084-.622.084s-.5,0-.622-.084a.456.456,0,0,1-.108-.108C16.5,6.317,16.5,6.15,16.5,5.814Z"
                  transform="translate(-7.057 -3.046)"
                  fill="#989898"
                />
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M12.75,18.774a.488.488,0,0,0,.977,0Zm1.067-5.316.271.406h0Zm-.359.359-.406-.271h0ZM16.82,12.75h-1.3v.977h1.3Zm-4.07,4.07v1.954h.977V16.82Zm2.768-4.07c-.447,0-.819,0-1.119.03a1.811,1.811,0,0,0-.852.272l.543.812a.866.866,0,0,1,.409-.112c.239-.024.553-.025,1.021-.025Zm-1.791,2.768c0-.467,0-.781.025-1.021a.866.866,0,0,1,.112-.409l-.812-.543a1.811,1.811,0,0,0-.272.852c-.031.3-.03.672-.03,1.119Zm-.181-2.466a1.79,1.79,0,0,0-.494.494l.812.543a.813.813,0,0,1,.225-.225Z"
                  transform="translate(-5.749 -5.749)"
                  fill="#989898"
                />
                <path
                  id="Path_42"
                  data-name="Path 42"
                  d="M20.744,13.238a.488.488,0,1,0-.977,0Zm-1.292,5.436.187.451h0Zm.7-.7-.451-.187h0ZM17,19.262h1.3v-.977H17Zm3.744-3.744V13.238h-.977v2.279ZM18.3,19.262c.3,0,.544,0,.746-.014a1.838,1.838,0,0,0,.591-.123l-.374-.9a.9.9,0,0,1-.283.051c-.161.011-.369.011-.679.011Zm1.465-2.442c0,.31,0,.518-.011.679a.9.9,0,0,1-.051.283l.9.374a1.838,1.838,0,0,0,.123-.591c.014-.2.014-.449.014-.746Zm-.129,2.306a1.791,1.791,0,0,0,.969-.969l-.9-.374a.814.814,0,0,1-.44.441Z"
                  transform="translate(-7.232 -5.749)"
                  fill="#989898"
                />
                <path
                  id="Path_43"
                  data-name="Path 43"
                  d="M2,5.321a4.832,4.832,0,0,1,.288-2.388,1.954,1.954,0,0,1,.645-.645A4.832,4.832,0,0,1,5.321,2a3.221,3.221,0,0,1,1.592.192,1.3,1.3,0,0,1,.43.43,3.221,3.221,0,0,1,.192,1.592V4.93c0,1.228,0,1.842-.381,2.223s-1,.381-2.223.381H4.214a3.221,3.221,0,0,1-1.592-.192,1.3,1.3,0,0,1-.43-.43A3.221,3.221,0,0,1,2,5.321Z"
                  transform="translate(-2 -2)"
                  fill="none"
                  stroke="#989898"
                  stroke-width="1"
                />
                <path
                  id="Path_44"
                  data-name="Path 44"
                  d="M5,5.814c0-.336,0-.5.084-.622a.456.456,0,0,1,.108-.108C5.311,5,5.478,5,5.814,5s.5,0,.622.084a.456.456,0,0,1,.108.108c.084.118.084.286.084.622s0,.5-.084.622a.456.456,0,0,1-.108.108c-.118.084-.286.084-.622.084s-.5,0-.622-.084a.456.456,0,0,1-.108-.108C5,6.317,5,6.15,5,5.814Z"
                  transform="translate(-3.046 -3.046)"
                  fill="#989898"
                />
                <path
                  id="Path_45"
                  data-name="Path 45"
                  d="M5,17.314c0-.336,0-.5.084-.622a.456.456,0,0,1,.108-.108c.118-.084.286-.084.622-.084s.5,0,.622.084a.456.456,0,0,1,.108.108c.084.119.084.286.084.622s0,.5-.084.622a.456.456,0,0,1-.108.108c-.118.084-.286.084-.622.084s-.5,0-.622-.084a.456.456,0,0,1-.108-.108C5,17.817,5,17.65,5,17.314Z"
                  transform="translate(-3.046 -7.057)"
                  fill="#989898"
                />
                <path
                  id="Path_46"
                  data-name="Path 46"
                  d="M16,17.14a1.607,1.607,0,0,1,.11-.85.652.652,0,0,1,.18-.18,1.607,1.607,0,0,1,.85-.11,1.607,1.607,0,0,1,.85.11.652.652,0,0,1,.18.18,1.607,1.607,0,0,1,.11.85,1.607,1.607,0,0,1-.11.85.652.652,0,0,1-.18.18,1.607,1.607,0,0,1-.85.11,1.607,1.607,0,0,1-.85-.11.652.652,0,0,1-.18-.18A1.607,1.607,0,0,1,16,17.14Z"
                  transform="translate(-6.883 -6.883)"
                  fill="#989898"
                />
              </g>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default QR;
