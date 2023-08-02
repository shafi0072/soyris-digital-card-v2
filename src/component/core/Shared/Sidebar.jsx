import { nav_data } from '@/src/constant/Navigation';
import React, { useState } from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useRouter } from 'next/router';
const Sidebar = () => {
  const [expand, setExpand] = useState(-1)
const router = useRouter();
  return (
    <div className='bg-[#0077B5] w-[100%] min-h-screen pl-2 '>
      <ul>
        {
          nav_data?.map((items, index) => <li className='mb-8' onClick={() => setExpand(index)}>
            <h1 className="text-md text-white">{items.name} {items?.drowpDown?.length > 0 && <ExpandMoreRoundedIcon />}</h1>
            {expand === index && <ul className='pl-2'>
              {
                items?.drowpDown?.map((item, index) => <li className='cursor-pointer text-sm text-white my-3' 
                onClick={()=>router.push(item?.link)} >{item?.title}</li>)
              }
            </ul>}
          </li>)
        }
      </ul>
    </div>
  );
};

export default Sidebar;