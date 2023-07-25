import { userContext } from '@/src/Storage/ContextApi';
import { profileData, socialInfo } from '@/src/constant/ProfileInfo';
import React, { useContext } from 'react';

const Profile = ({userData}) => {
    // console.log(userData);/profile/shafi29.dev.bd@gmail.com
    const { color } = useContext(userContext);
    return (
        <div className='max-w-[500px] w-full mx-auto px-3'>
           
            {userData?.display?.desgine === 'flat' &&
            <>
            <div className='h-[400px] ' style={{ background: userData?.display?.color }}>
                <img className='h-[95%] w-full object-cover' src={userData?.display?.ProfileImage} alt="" />
            </div>
            <div className='mt-5'>
                <img className='md:w-3/4 mx-auto' src={userData?.display?.Logo} alt="" />
            </div>
            </>
            }
            {
                userData?.display?.design === "classic" && <>
                <div className=' w-[381px] h-[300px]  relative rounded' style={{ background: userData?.display?.color }}>
                    <img className='h-full w-full object-cover rounded' src={userData?.display?.ProfileImage} alt="" />
                    <div className=''>
                        <div className='absolute  top-[72%]  z-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="381" height="88.28" viewBox="0 0 381 88.28">
  <path id="wave" d="M0,25.9V55.406c70.325,43.351,128.033,45.974,213.535-5.027S340.019,6.009,381,17.739v-7.65C286.9-26.122,210.5,45.427,151.305,63.278S52.111,68.378,0,25.9Z" transform="translate(0 0)" fill={userData?.display?.color}/>
</svg>
                        </div>
                        <div className='absolute bottom-0 left-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="32.781" viewBox="0 0 96 32.781">
  <path id="wave-left" d="M0,35.773V68.554H96l-.032-1.475C63.791,67.267,33.386,56.325,0,35.773Z" transform="translate(0 -35.773)" fill="#fff"/>
</svg>
                        </div>
                        <div className='absolute -bottom-[6px] right-0 z-[5]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="285" height="81.75" viewBox="0 0 285 81.75">
  <path id="wave-right" d="M300.742,6.114c-30.018-.329-66.667,9.2-121,41.617C136.118,73.767,99.61,86.065,65.025,86.281H65v1.575H350V14.529C334.376,10.055,318.753,6.312,300.742,6.114Z" transform="translate(-65 -6.106)" fill="#fff"/>
</svg>
                        </div>
                     <img className='absolute bottom-3 right-0 z-50 w-[100px]' src={userData?.display?.Logo} alt="" />
                    </div>
                </div>
                </>
            }

            <div className='mt-10 border-4 border-dotted p-3' style={{ borderColor: userData?.display?.color }}>
                <h2 className='text-xl font-extrabold'>
                    {userData?.profileInfo?.prefix && userData?.profileInfo?.prefix + '.'} {userData?.profileInfo?.first_name + ' ' + userData?.profileInfo?.last_name}</h2>
                <h3 className='font-bold my-2'>{userData?.profileInfo?.department}</h3>
                <h3 className='font-bold mb-2' style={{ color: color }}>{userData?.profileInfo?.company
}</h3>
                <h4 className='font-medium italic text-[#585858]'>{userData?.profileInfo?.job_title}</h4>
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