import React from 'react';

const CardName = () => {
    return (
        <div>
            <h2 className='text-lg font-semibold'>Card Name</h2>
            <p className='mt-2 text-md'>This name is for internal reference and it does not appear in the card.</p>
            <form action="" className='mt-5'>
                <div className="flex gap-3 items-center">
                    <input type="text" className='px-2 py-1 shadow-lg rounded w-[174px] text-[17px] font-medium' placeholder='Work' name="work" id="" /> 
                    <input className='bg-[#0277B5] text-white px-3 py-1 rounded text-sm' type="submit" value="SAVE" />
                </div>
            </form>
        </div>
    );
};

export default CardName;