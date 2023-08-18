import React from 'react';

const GalleryImage = ({newFeilds,userCardData}) => {

    // const saveImage = newFeilds?.fields?.galary?.length >0 ?  newFeilds?.fields?.galary : userCardData?.fields?.galary?.length >0 ? userCardData?.fields?.galary: []  ;
    const saveImage = newFeilds?.fields?.galary?.length > 0 ? newFeilds?.fields?.galary : userCardData?.fields?.galary?.length > 0 ? userCardData?.fields?.galary :null
    return (
        <div>
           
            {saveImage && <>
                <h2 className='mb-5 pb-2 text-xl   border-b border-[#CBD5E0]'>My Work</h2>
            <div className='grid grid-cols-12 gap-[10px]'>
                {
                    saveImage?.toReversed()?.slice(0,10)?.map((item,index)=> <div key={index} className='col-span-5'>
                        <img src={item} className='w-full h-[100px] object-cover rounded' alt="" />
                        
                    </div>)
                }
            </div>
            </>}
        </div>
    );
};

export default GalleryImage;