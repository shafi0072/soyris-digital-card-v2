import React from 'react';
import Navbar from '../Shared/Navbar';
import Sidebar from '../Shared/Sidebar';
import SubNavbar from '../Shared/SubNavbar';
import RightSidebar from '../Shared/RightSidebar';
import { useRouter } from 'next/router';
import QrCodeCard from '../../app/Root/QrCodes/QrCodeCard';
import Qrcodes from '../../app/Root/QrCodes/Qrcodes';

const index = ({ children }) => {
    const router = useRouter();
    return (
        <div>
            <Navbar />
            <div class="grid grid-cols-12">

                <div class="col fixed top-[6.9%]">
                    <Sidebar />
                </div>
                <div class="col-span-11 ms-[10%] mt-[5%] ...">
                <SubNavbar/>
                <div className='grid grid-cols-12 ps-8 pt-5 gap-8'>
                <div className="col-span-8">
                {children}
                </div>
                <div className={` pl-5 fixed ${router.pathname === '/' ? "right-0":"right-[10%]"}`}>
                    {
                        (router.pathname === '/profileInfo' || router.pathname === "/design" || router.pathname === "/fields") && <RightSidebar/>
                    }
                    {
                        router.pathname === '/qrcodes' && <QrCodeCard/>
                    }
                   
                </div>
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default index;