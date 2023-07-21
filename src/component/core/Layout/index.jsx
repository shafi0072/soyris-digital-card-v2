import React from 'react';
import Navbar from '../Shared/Navbar';
import Sidebar from '../Shared/Sidebar';
import SubNavbar from '../Shared/SubNavbar';
import RightSidebar from '../Shared/RightSidebar';

const index = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div class="grid grid-cols-12">

                <div class="col fixed top-[10%]">
                    <Sidebar />
                </div>
                <div class="col-span-11 ms-[10%] mt-[5%] ...">
                <SubNavbar/>
                <div className='grid grid-cols-12 ps-8 pt-5'>
                <div className="col-span-7">
                {children}
                </div>
                <div className="col-span-4">
                    <RightSidebar/>
                </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default index;