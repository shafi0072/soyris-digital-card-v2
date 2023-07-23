import React from 'react';

import Phone from './InputFildGroup/Phone';
import Website from './InputFildGroup/Website';
import Email from './InputFildGroup/Email';
import Address from './InputFildGroup/Address';
import Link from './InputFildGroup/Link';
import Header from './InputFildGroup/Header';
const Content = ({ feilds }) => {
    return (
        <div className='border-dotted border-2 bg-gray-300  border-sky-500 p-5 rounded-lg'>
            {
                feilds?.map((items, index) => <>
                    {items === 'Phone' && <div className='mb-2'>
                        <Phone />
                    </div>}
                    {items === 'Website' && <div className='mb-2'>
                        <Website />
                    </div>}
                    {items === 'Address' && <div className='mb-2'>
                        <Address />
                    </div>}
                    {items === 'Email' && <div className='mb-2'>
                        <Email />
                    </div>}
                    {items === 'Link' && <div className='mb-2'>
                        <Link />
                    </div>}
                    {items === 'Header' && <div className='mb-2'>
                    <Header />
                    </div>}
                </>)
            }





            
        </div>
    );
};

export default Content;