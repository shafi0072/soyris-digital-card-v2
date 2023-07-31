import React from "react";

const CardName = ({handleCardNameOnChange,handleCardName}) => {
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
            name="work"
            id=""
          />
          <input
            onClick={handleCardName}
            className="bg-[#0277B5] text-white px-3 py-1 rounded text-sm"
            type="submit"
            value="SAVE"
          />
        </div>
      </div>
    </div>
  );
};

export default CardName;
