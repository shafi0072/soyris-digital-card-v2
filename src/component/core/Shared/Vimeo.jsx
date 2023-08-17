import React from 'react';

const Vimeo = ({userCardData,newFeilds}) => {
    return (
        <div className='my-5'>
            {userCardData?.fields?.vimeo && !newFeilds?.fields?.vimeo &&
            <iframe src={userCardData?.fields?.vimeo} width="460" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>}
            { newFeilds?.fields?.vimeo &&
            <iframe src={newFeilds?.fields?.vimeo} width="460" height="315" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>}
        </div>
    );
};

export default Vimeo;