import React, { useState } from 'react';

import Phone from './Phone';
import Website from './Website';
import Email from './Email';
import Address from './Address';
import Link from './Link';
import Header from './Header';
import WhatsApp from './WhatsApp';
import Viber from './Viber';
import Facebook from './Facebook';
import Instagram from './Instagram';
import LinkedIn from './LinkedIn';
import Twitter from './Twitter';
import Pinterest from './Pinterest';
import TikTok from './TikTok';
import Skype from './Skype';
import Snapchat from './Snapchat';
import Signal from './Signal';
import Telegram from './Telegram';
import Discord from './Discord';
import Slack from './Slack';
import Image from './Image';
import Gallery from './Gallery';
import YouTube from './YouTube';
import Vimeo from './Vimeo';
import Wistia from './Wistia';
import PDF from './PDF';
import Notes from './Notes';
import Date from './Date';
import QR from './QR';
import Divider from './Divider';
const Content = ({ feilds }) => {

    const [phoneData, setPhoneData] = useState([...Array(feilds.filter((item) => item === 'Phone').length)].map(() => ''));

    console.log({ phoneData })
    const handlePhoneInputChange = (index, field, value) => {
        setPhoneData(prevPhoneData => {
            const newData = [...prevPhoneData];
            newData[index] = {
                ...newData[index],
                [field]: value,
            };
            return newData;
        });
    };

    return (
        <div className='border-dotted border-2 bg-gray-200  border-sky-500 p-5 rounded-lg'>
            {
                feilds?.map((items, index) => <>
                    {items === 'Phone' && <div className='mb-2'>
                        <Phone index={index} handlePhoneInputChange={handlePhoneInputChange} phoneData={phoneData} />
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
                    {items === 'PDF' && <div className='mb-2'>
                        <PDF />
                    </div>}
                    {items === 'Notes' && <div className='mb-2'>
                        <Notes />
                    </div>}
                    {items === 'Date' && <div className='mb-2'>
                        <Date />
                    </div>}
                    {items === 'URL' && <div className='mb-2'>
                        <QR />
                    </div>}
                    {items === 'Divider' && <div className='mb-2'>
                        <Divider />
                    </div>}
                </>)
            }

        </div>
    );
};

export default Content;