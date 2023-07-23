import React from 'react';

import Phone from './InputFildGroup/Phone';
import Website from './InputFildGroup/Website';
import Email from './InputFildGroup/Email';
import Address from './InputFildGroup/Address';
import Link from './InputFildGroup/Link';
import Header from './InputFildGroup/Header';
const Content = ({ feilds }) => {
    return (
        <div className='border-dotted border-2 border-sky-500 p-5 rounded-lg'>
            <Phone/>
            <Website/>
            <Email/>
            <Address/>
            <Link/>
            <Header/>
        </div>
    );
};

export default Content;