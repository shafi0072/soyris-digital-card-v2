import { userContext } from '@/src/Storage/ContextApi';
import { profileData, socialInfo } from '@/src/constant/ProfileInfo';
import React, { useContext } from 'react';

const Profile = () => {
    const { color } = useContext(userContext);
    return (
        <div className='max-w-[500px] w-full mx-auto px-3'>
            {/* <h2>this is profile page</h2>  */}
            <div className='h-[400px] ' style={{ background: color }}>
                <img className='h-[95%] w-full object-cover' src="https://easycards.gr/wp-content/uploads/2023/07/spyros.jpg" alt="" />
            </div>
            <div className='mt-5'>
                <img className='md:w-3/4 mx-auto' src="https://easycards.gr/wp-content/uploads/2023/07/nolimits-logo.svg" alt="" />
            </div>

            <div className='mt-10 border-4 border-dotted p-3' style={{ borderColor: color }}>
                <h2 className='text-xl font-extrabold'>Spyros Poulis</h2>
                <h3 className='font-bold my-2'>Director</h3>
                <h3 className='font-bold mb-2' style={{ color: color }}>EMEA</h3>
                <h4 className='font-medium italic text-[#585858]'>No Limits Digital</h4>
            </div>
            <div className='mt-2'>
                <p className='italic text-[#69727d]'>Highly motivated and entrepreneurial – minded manager with an exceptional proven record of leading integrated digital marketing campaigns from concept to execution across different vertical markets.</p>
            </div>

            <div className='my-5'>
                {profileData.map((item, index) => <div key={index} className='flex items-center gap-5 mb-3'>
                    <span className='w-[40px] h-[40px]  rounded-full flex items-center justify-center text-white' style={{ background: color }}>{item?.iocn}</span>
                    <h2 className='text-xl'>
                        {item?.name === 'phone' && <a href={`tel:${item?.link}`}> {item?.title}</a>}
                        {item?.name === 'email' && <a href={`mailto:${item?.link}`}> {item?.title}</a>}
                        {item?.name === 'website' && <a href={item?.link}> {item?.title}</a>}
                        {item?.name === 'whatsApp' && <a href={`https://wa.me/${item?.link}`}> {item?.title}</a>}
                    </h2>

                </div>)}
            </div>

            <div className='flex gap-2 flex-wrap my-10'>
                <h2 className='w-full mb-5 font-bold text-xl'>SOCIAL MEDIA</h2>
                {
                    socialInfo.map((item, index) =><a href={item.link} key={index}
                    className={`text-white w-[40px] h-[40px] rounded-full flex items-center justify-center ${item.name=== 'facebook'&& 'bg-blue-900'} ${item.name=== 'instagram' && 'bg-[#8A3AB9]'} ${item.name=== 'twitter' && 'bg-[#1da1f2]'} ${item.name=== 'youTube' && 'bg-[#cd201f]'}`}>
                        {item.iocn}
                    </a> )
                }
            </div>
            <div className='my-10'>
            <h2 className='w-full mb-5 font-bold text-xl'>GET MY CARD</h2>
                <img className='md:w-[250px] w-[60%] md:h-[250px] h-[100px]' src="https://easycards.gr/wp-content/uploads/2023/07/spyros-poulis.svg" alt="" />
            </div>
            <div className='fixed bottom-5 left-[50%] -translate-x-2/4'>
                <button className='text-white px-4 py-1 text-[16px] rounded' style={{background:color}}>+ Add to contacts</button>
            </div>
        </div>
    );
};

export default Profile;