import React from 'react';

const Vimeo = ({userCardData,newFeilds}) => {
    return (
        <>
        <div className={`${!userCardData?.fields?.vimeo[0] && !newFeilds?.fields?.vimeo ? 'hidden' : 'block mt-5'} `}>
            {
            userCardData?.fields?.vimeo && !newFeilds?.fields?.vimeo &&
            <iframe src={userCardData?.fields?.vimeo} className='-m-[5%] mt-5' width="460" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            }

            { 
            newFeilds?.fields?.vimeo &&
            <iframe src={newFeilds?.fields?.vimeo} className='-m-[5%] mt-5' width="460" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
            }
        </div>
        </>
    );
};

export default Vimeo;