import { sub_Navbar_data } from '@/src/constant/SubNavbar';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { baseUrl } from '@/src/config/Server';
import { userContext } from '@/src/Storage/ContextApi';

const SubNavbar = () => {
  const [active, setActive] = useState(0)
  const { userData } = useContext(userContext)
  const router = useRouter()

  const handleCreateCards = () => {
    fetch(`${baseUrl}/cards/add-cards`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: userData?.email,
        cardUserId: userData?._id
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <>


      <div className='w-[100%] bg-white border-b  shadow-md'>
        {router.pathname === '/my-cards' ? <div className='py-3 ps-3' >
          <button className='bg-[#0077B5] px-4 py-2 flex items-center gap-3 text-white rounded' onClick={handleCreateCards}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17.047" viewBox="0 0 17 17.047">
                <g id="Group_1" data-name="Group 1" transform="translate(0 0.024)">
                  <line id="Line_1" data-name="Line 1" x2="17" transform="translate(0 8.5)" fill="none" stroke="#fff" stroke-width="2.5" />
                  <line id="Line_2" data-name="Line 2" x2="0.321" y2="17" transform="translate(8.213)" fill="none" stroke="#fff" stroke-width="2.5" />
                </g>
              </svg>
            </span>
            Create a card
          </button>
        </div> : <ul style={{ display: 'flex' }}>
          {
            sub_Navbar_data?.map((items, index) => <li className='mx-2 my-2 ' onClick={() => { setActive(index); router.push(items?.url) }}>
              <div className={`${router.pathname === items?.url && "bg-[#0277B5]  rounded text-white"} px-4 py-2 cursor-pointer`}>
                <p>{items?.title}</p>
              </div>
            </li>)
          }
        </ul>}
      </div>
    </>
  );
};

export default SubNavbar;