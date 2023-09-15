import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
const Modal = ({setIsModalOpen}) => {
    return (
        <div className='bg-gray-300 shadow-xl rounded-lg p-6 absolute left-1/2  top-1/2 w-full  lg:w-[500px] h-[200px]'>
          <div className='relative'>
          <div className='absolute -top-10 -right-10 bg-red-500 rounded-full'>
                <CloseIcon  onClick={()=>setIsModalOpen(false)} className='text-white cursor-pointer text-md p-1'/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias voluptatem ipsa consectetur beatae est provident sint sunt accusamus doloribus nostrum!</p>
          </div>
        </div>
    );
};

export default Modal;