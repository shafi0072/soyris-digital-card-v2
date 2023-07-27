import React from "react";
import ShareCard from "./ShareCard";
import Wallet from "./Wallet";

const Share = () => {
  return (
    <>
      <div className="flex gap-16 mt-12">
        <ShareCard />
        <Wallet />
      </div>
    </>
  );
};

export default Share;
