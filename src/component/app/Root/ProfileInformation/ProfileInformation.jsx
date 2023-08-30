import { userContext } from '@/src/Storage/ContextApi';
import { baseUrl } from '@/src/config/Server';
import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const ProfileInformation = () => {
    const { userData, infos, setInfo } = useContext(userContext);

    const handleFieldsOnChange = (e) => {
        const newData = { ...infos }
        newData[e.target.name] = e.target.value
        setInfo(newData)
    }
    const handleOnSubmit = (e) => {
        const userCardId = localStorage.getItem('cardId')
        e.preventDefault()
        fetch(`${baseUrl}/cards/profile/${userCardId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({profileInfo: { ...infos }})
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Profile Information Update SuccessFully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(err => console.log(err))
    }
    return (
        <div className=''>

            <div className='mb-10'>
                <form onSubmit={handleOnSubmit}>
                    <div className='mb-8 w-[635px]'>
                        <h2 className='text-xl font-bold text-black pb-2 border-b border-[#CBD5E0]'>Personal</h2>
                    </div>
                    <div className='grid grid-cols-2 mb-5'>
                        <div className=''>
                            <label htmlFor="first_name" className='block mb-2'>First Name</label>
                            <input defaultValue={infos?.first_name} onChange={handleFieldsOnChange} type="text" className='w-[300px] py-1 shadow-md rounded px-2 border border-[#CBD5E0]' name='first_name' id='first_name' />
                        </div>
                        <div className=''>
                            <label htmlFor="last_name" className='block mb-2'>Last Name</label>
                            <input defaultValue={infos?.last_name} onChange={handleFieldsOnChange} type="text" className='w-[300px] py-1 shadow-md rounded px-2 border border-[#CBD5E0]' name='last_name' id='last_name' />

                        </div>
                    </div>
                    <div className='grid grid-cols-2 mb-5'>
                        <div className=''>
                            <label htmlFor="prefix" className='block mb-2'>Prefix</label>
                            <input defaultValue={infos?.prefix} onChange={handleFieldsOnChange} type="text" className='w-[300px] py-1 shadow-md rounded px-2 border border-[#CBD5E0]' name='prefix' id='prefix' />

                        </div>
                        <div className=''>
                            <label htmlFor="suffix" className='block mb-2'>Suffix</label>
                            <input defaultValue={infos?.suffix} onChange={handleFieldsOnChange} type="text" className='w-[300px] py-1 shadow-md rounded px-2 border border-[#CBD5E0]' name='suffix' id='suffix' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 mb-5'>
                        <div className=''>
                            <label htmlFor="accreditations" className='block mb-2'>Accreditations</label>
                            <input defaultValue={infos?.accreditations} onChange={handleFieldsOnChange} type="text" className='w-[300px] py-1 shadow-md rounded px-2 border border-[#CBD5E0]' name='accreditations' id='accreditations' />

                        </div>
                        <div className=''>
                            <label htmlFor="preferred_name" className='block mb-2'>Preferred Name</label>
                            <input defaultValue={infos?.preferred_name} onChange={handleFieldsOnChange} type="text" className='w-[300px] py-1 shadow-md rounded px-2 border border-[#CBD5E0]' name='preferred_name' id='preferred_name' />

                        </div>
                    </div>
                    <div className='my-8 w-[635px]'>
                        <h2 className='text-xl font-bold text-black pb-2 border-b border-[#CBD5E0]'>Affiliation</h2>
                    </div>
                    <div className='grid grid-cols-2 mb-5'>
                        <div className=''>
                            <label htmlFor="job_title" className='block mb-2'>Job Title</label>
                            <input defaultValue={infos?.job_title} onChange={handleFieldsOnChange} type="text" className='w-[300px] py-1 shadow-md rounded px-2 border border-[#CBD5E0]' name='job_title' id='job_title' />

                        </div>
                        <div className=''>
                            <label htmlFor="pronouns" className='block mb-2'>Pronouns</label>
                            <input defaultValue={infos?.pronouns} onChange={handleFieldsOnChange} type="text" className='w-[300px] py-1 shadow-md rounded px-2 border border-[#CBD5E0]' name='pronouns' id='pronouns' />

                        </div>
                    </div>
                    <div className='grid grid-cols-2 mb-5'>
                        <div className=''>
                            <label htmlFor="department" className='block mb-2'>Department</label>
                            <input defaultValue={infos?.department} onChange={handleFieldsOnChange} type="text" className='w-[300px] py-1 shadow-md rounded px-2 border border-[#CBD5E0]' name='department' id='department' />

                        </div>
                        <div className=''>
                            <label htmlFor="company" className='block mb-2'>Company</label>
                            <input defaultValue={infos?.company}  onChange={handleFieldsOnChange} type="text" className='w-[300px] py-1 shadow-md rounded px-2 border border-[#CBD5E0]' name='company' id='company' />

                        </div>
                    </div>
                    <div className="mb-8">
                        <label for="introduction" class="block mb-2 text-sm font-medium text-gray-900 ">Introduction</label>

                        <textarea defaultValue={infos?.introduction} onChange={handleFieldsOnChange} id="introduction" rows="5" class="block w-[636px] p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " name='introduction'></textarea>
                    </div>
                    <div className='fixed bottom-20 left-[20%] z-50'>
                       
                        <input type="submit" value="Save" className='px-5 py-1 border border-[#0277B5] bg-[#0277B5] font-medium text-lg text-white rounded cursor-pointer hover:bg-[#0277B5]' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileInformation;