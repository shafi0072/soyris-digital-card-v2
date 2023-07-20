import React from 'react';
import Navbar from '../Shared/Navbar';
import Sidebar from '../Shared/Sidebar';
import SubNavbar from '../Shared/SubNavbar';

const index = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div class="grid grid-cols-12">

                <div class="col">
                    <Sidebar />
                </div>
                <div class="col-span-11 ...">
                <SubNavbar/>
                {children}</div>
            </div>
            
        </div>
    );
};

export default index;