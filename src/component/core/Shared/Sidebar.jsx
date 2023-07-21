import { nav_data } from '@/src/constant/Navigation';
import React, { useState } from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
const Sidebar = () => {
  const [expand, setExpand] = useState(-1)

  return (
    <div className='bg-[#0077B5] w-[100%] min-h-screen pl-2 '>
      <ul>
        {
          nav_data?.map((items, index) => <li className='mb-2' onClick={() => setExpand(index)}>
            <h1 className="text-md text-white">{items.name} {items?.drowpDown?.length > 0 && <ExpandMoreRoundedIcon />}</h1>
            {expand === index && <ul className='pl-2'>
              {
                items?.drowpDown?.map((item, index) => <li className='text-sm text-white my-3'>{item?.title}</li>)
              }
            </ul>}
          </li>)
        }
      </ul>
    </div>
  );
};

export default Sidebar;