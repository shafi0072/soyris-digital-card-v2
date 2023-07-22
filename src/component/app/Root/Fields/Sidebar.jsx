import { userContext } from '@/src/Storage/ContextApi';
import { field_data } from '@/src/constant/Fields';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';

const Sidebar = () => {
  const { color } = useContext(userContext)
  const [exapnd, setExpand] = useState({
    id: 0,
    status: false
  })

  const handleFieldSelect = (e) => {
    let newFields = [...fields]
    newFields.push(e)
    setFields(newFields)
  }
  
  return (
    <div className='border-dotted border-2 border-sky-500 p-5 rounded-lg'>
       <div>
        {
          field_data?.map((items, index) => <div key={index} >
            <div className='flex justify-between items-center border-b' onClick={() => setExpand({ id: index, status: !exapnd?.status })}>
              <h1 className='text-md font-bold' style={{ color: '#0077B5' }}>{items?.title} ({items?.fields?.length})</h1>
              {exapnd?.id === index  ? <svg height="48" viewBox="0 0 48 48" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z" /><path d="M0 0h48v48h-48z" fill="none" /></svg> : <svg height="48" viewBox="0 0 48 48" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>}
            </div>
            {exapnd?.id === index && <div className="grid md:grid-cols-3  gap-4 mt-3">
              {
                items?.fields?.map((item, indes) => <div key={indes} onClick={() => handleFieldSelect(item?.name)} className='bg-gray-100 p-2 text-center rounded'>
                  <div className='flex justify-center mb-2'>{item?.icon}</div>
                  <p className='text-sm '>{item?.name}</p>
                </div>)
              }
            </div>}
          </div>)
        }
      </div>
    </div>
  );
};

export default Sidebar;