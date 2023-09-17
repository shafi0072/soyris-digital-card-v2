import { nav_data } from '@/src/constant/Navigation';
import React, { useState } from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/router';
const Sidebar = () => {
  const [expand, setExpand] = useState(-1)
  const router = useRouter();

const hnadleLogout= ()=>{
  localStorage.clear();
  window.location.reload();
}

  return (
    <div className='bg-[#0053a2] w-[100%] min-h-screen pl-2 '>
      <ul>
        {
          nav_data?.map((items, index) => <li className='mb-8' onClick={() => setExpand(index)}>
            <h1 className="text-md text-white">{items.name} {items?.drowpDown?.length > 0 && <ExpandMoreRoundedIcon />}</h1>
            {expand === index && <ul className='pl-2'>
              {
                items?.drowpDown?.map((item, index) => <li key={index} className='cursor-pointer text-sm text-white my-3'
                  onClick={() => router.push(item?.link)} >{item?.title}</li>)
              }
            </ul>}
          </li>)
        }
      </ul>
      <div className='fixed left-3 bottom-3'>
        <button onClick={hnadleLogout} className='flex items-center text-white gap-2 text-sm'>
          <ExitToAppIcon />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;