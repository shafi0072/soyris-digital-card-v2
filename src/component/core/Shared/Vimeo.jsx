import React from "react";

const Vimeo = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className={`${!item?.url ? "hidden" : "block mt-5"} `}>
        {item?.url && (
          <iframe
            src={item?.url}
            className="-m-[5%] mt-5"
            width="460"
            height="315"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </div>
    </>
  );
};

export default Vimeo;
