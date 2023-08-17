import React from 'react';
const YouTube = ({userCardData,newFeilds}) => {
    
    return (
        <div>
            <h2 className='mb-5 pb-2 text-xl   border-b border-[#CBD5E0]'>See me in action</h2>
            <iframe width="460" height="315" src={userCardData?.fields?.youTube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default YouTube;