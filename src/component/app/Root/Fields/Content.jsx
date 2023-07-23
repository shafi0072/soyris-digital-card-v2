import React from 'react';

import Phone from './InputFildGroup/Phone';
import Website from './InputFildGroup/Website';
import Email from './InputFildGroup/Email';
import Address from './InputFildGroup/Address';
import Link from './InputFildGroup/Link';
import Header from './InputFildGroup/Header';
import WhatsApp from './InputFildGroup/WhatsApp';
import Viber from './InputFildGroup/Viber';
import Facebook from './InputFildGroup/Facebook';
import Instagram from './InputFildGroup/Instagram';
import LinkedIn from './InputFildGroup/LinkedIn';
import Twitter from './InputFildGroup/Twitter';
import Pinterest from './InputFildGroup/Pinterest';
import TikTok from './InputFildGroup/TikTok';
import Skype from './InputFildGroup/Skype';
import Snapchat from './InputFildGroup/Snapchat';
import Signal from './InputFildGroup/Signal';
import Telegram from './InputFildGroup/Telegram';
import Discord from './InputFildGroup/Discord';
import Slack from './InputFildGroup/Slack';
import Image from './InputFildGroup/Image';
import Gallery from './InputFildGroup/Gallery';
import YouTube from './InputFildGroup/YouTube';
import Vimeo from './InputFildGroup/Vimeo';
import Wistia from './InputFildGroup/Wistia';
const Content = ({ feilds }) => {
    // console.log(feilds);
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
                    {items === 'WhatsApp' && <div className='mb-2'>
                    <WhatsApp />
                    </div>}
                    {items === 'Viber' && <div className='mb-2'>
                    <Viber />
                    </div>}
                    {items === 'Skype' && <div className='mb-2'>
                    <Skype />
                    </div>}
                    {items === 'Snapchat' && <div className='mb-2'>
                    <Snapchat />
                    </div>}
                    {items === 'Signal' && <div className='mb-2'>
                    <Signal />
                    </div>}
                    {items === 'Telegram' && <div className='mb-2'>
                    <Telegram />
                    </div>}
                    {items === 'Discord' && <div className='mb-2'>
                    <Discord />
                    </div>}
                    {items === 'Slack' && <div className='mb-2'>
                    <Slack />
                    </div>}
                    {items === 'Facebook' && <div className='mb-2'>
                    <Facebook />
                    </div>}
                    {items === 'Instagram' && <div className='mb-2'>
                    <Instagram />
                    </div>}
                    {items === 'Twitter' && <div className='mb-2'>
                    <Twitter />
                    </div>}
                    {items === 'LinkedIn' && <div className='mb-2'>
                    <LinkedIn />
                    </div>}
                    {items === 'Pinterest' && <div className='mb-2'>
                    <Pinterest />
                    </div>}

                    {items === 'Tiktok' && <div className='mb-2'>
                    <TikTok />
                    </div>}
                    {items === 'Image' && <div className='mb-2'>
                    <Image />
                    </div>}
                    {items === 'Gallery' && <div className='mb-2'>
                    <Gallery />
                    </div>}
                    {items === 'Youtube' && <div className='mb-2'>
                    <YouTube />
                    </div>}
                    {items === 'Vimeo' && <div className='mb-2'>
                    <Vimeo />
                    </div>}
                    {items === 'Wistia' && <div className='mb-2'>
                    <Wistia />
                    </div>}
                </>)
            }





            
        </div>
    );
};

export default Content;