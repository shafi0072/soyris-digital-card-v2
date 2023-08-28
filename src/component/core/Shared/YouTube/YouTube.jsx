import React from "react";
import YouTube from "react-youtube";
import WistiaPlayer from "./WistiaPlayer";
var Vimeo = require('react-vimeo');
const Video = ({ item }) => {
  const youtubeVideoId = extractVideoId(
    item?.type === "Youtube" ? item?.url : ""
  );

  const opts = {
    height: "315",
    width: "460",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div className={`${!item?.url ? "hidden" : "block mt-5"} `}>
        {item?.type === "Youtube" && (
          <>
            {item?.url && (
              <div className="mt-5">
                {/* <iframe
            width="460"
            height="315"
            src={item?.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
                <YouTube videoId={youtubeVideoId} opts={opts} />
              </div>
            )}
          </>
        )}
        {item?.type === "Vimeo" && (
          <>
            {item?.url && (
              <div className="mt-5">
                {/* <iframe
                  src={item?.url}
                  title="Vimeo Video"
                  width="640"
                  height="360"
                  allowFullScreen
                /> */}
                <Vimeo videoId={ item?.url?.split('/')?.reverse()[0] } autoplay={true} height={315} width={460}/>,
              </div>
            )}
          </>
        )}
        {item?.type === "Wistia" && (
          <>
            {item?.url && (
              <div className="mt-5">
                {/* <iframe
                  src={item?.url}
                  title="Vimeo Video"
                  width="640"
                  height="360"
                  allowFullScreen
                /> */}
                <WistiaPlayer videoId="abcxyz123"
            wrapper="wistia-player-container-1"/>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
function extractVideoId(url) {
  const videoIdMatch = url.match(
    /(?:\?v=|\/embed\/|\/\d\d?\/|\/vi?\/|https:\/\/youtu\.be\/|\/v\/|\/e\/|https:\/\/www\.youtube\.com\/user\/[^#]*#([^\/]*?\/)*)?([^#\&\?]*).*/
  );
  return videoIdMatch && videoIdMatch[2].length === 11 ? videoIdMatch[2] : null;
}

export default Video;


