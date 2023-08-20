import React from "react";
const YouTube = ({ userCardData, newFeilds }) => {
  return (
    <>
    <div className={`${!userCardData?.fields?.youTube[0] && !newFeilds?.fields?.youTube ?  'hidden' : 'block mt-5' } `}>
      {userCardData?.fields?.youTube && !newFeilds?.fields?.youTube && (
        <div className="mt-5">
          <h2 className="mb-5 pb-2 text-xl   border-b border-[#CBD5E0]">
            See me in action
          </h2>
          <iframe
            width="460"
            height="315"
            src={userCardData?.fields?.youTube}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
      {newFeilds?.fields?.youTube && (
        <div className="mt-5">
          <h2 className="mb-5 pb-2 text-xl   border-b border-[#CBD5E0]">
            See me in action
          </h2>
          <iframe
            width="460"
            height="315"
            src={newFeilds?.fields?.youTube}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      )}
      </div>
    </>
  );
};

export default YouTube;
