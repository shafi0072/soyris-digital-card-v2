import { userContext } from "@/src/Storage/ContextApi";
import React from "react";
import { useContext } from "react";

const CardName = ({handleCardNameOnChange,handleCardName}) => {
  const {settings} = useContext(userContext)
  return (
    <div>
      <h2 className="text-lg font-semibold">Card Name</h2>
      <p className="mt-2 text-md">
        This name is for internal reference and it does not appear in the card.
      </p>
      <div   className="mt-5">
        <div className="flex gap-3 items-center">
          <input
          onChange={handleCardNameOnChange}
            type="text"
            className="px-2 py-1 shadow-lg rounded w-[174px] text-[17px] font-medium"
            placeholder="Work"
            defaultValue={settings?.cardName}
            name="work"
            id=""
          />
          <input
            onClick={handleCardName}
            className="bg-[black] text-white px-3 py-1 rounded text-sm cursor-pointer"
            type="submit"
            value="SAVE"
          />
        </div>
      </div>
    </div>
  );
};

export default CardName;
