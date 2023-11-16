import React, { useState } from "react";

const ReviewUrl = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="my-8">
      <h2 className="text-lg font-semibold">Review URL</h2>
      <p className="mt-2 text-md">
        Your unique URL is the one below. Click edit to review this.
      </p>
      {!isEdit && (
        <>
          <div className="mt-5">
            <div className="flex gap-3 items-center">
              <input
                type="text"
                className="px-2 py-1 shadow-lg rounded w-[306px] text-[17px] font-medium"
                placeholder="Enter Your URL"
                name="url"
                id=""
              />
            </div>
          </div>
          <button
            // onClick={handleEdit}
            className="mt-4 bg-[black] text-sm text-white px-3 py-1 rounded"
          >
            Save
          </button>
        </>
      )}
    </div>
  );
};

export default ReviewUrl;
