import { sub_Navbar_data } from '@/src/constant/SubNavbar';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SubNavbar = () => {
  const [active, setActive] = useState(0)
  const router = useRouter()
  return (
    <div className='w-[100%] bg-white border-b  shadow-md'>
      <ul style={{ display: 'flex' }}>
        {
          sub_Navbar_data?.map((items, index) => <li className='mx-2 my-2 ' onClick={() => { setActive(index); router.push(items?.url) }}>
            <div className={`${ router.pathname === items?.url    && "bg-[#0277B5]  rounded text-white"} px-4 py-2 cursor-pointer`}>
              <p>{items?.title}</p>
            </div>
          </li>)
        }
      </ul>
    </div>
  );
};

export default SubNavbar;