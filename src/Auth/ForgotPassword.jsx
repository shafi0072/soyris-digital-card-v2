import React from 'react';
import { useState } from 'react';


import { toast } from 'react-toastify';
import { firebase } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const auth = getAuth();
    const [resetEmailSent, setResetEmailSent] = useState(false);
    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth,email)
            setResetEmailSent(true);
            toast.success('Check your email box')
        } catch (error) {
            // Handle errors (e.g., email not found)
            console.error(error);
            toast.error('email not found')
        }
    };
    return (
        <div className='background pt-[2%]'>
            <div className=" container w-[30%] mx-auto content-center  border shadow-lg bg-white rounded  p-5">
                <div className=" content-center ">
                    <h2 className="mb-3 text-xl font-bold text-center">
                        Forgot your Password
                    </h2>
                </div>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-400" />

                    <hr className="w-full dark:text-gray-400" />
                </div>
                <div className="space-y-8 mb-5">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">
                                Email address
                            </label>
                            <input

                                type="email"
                                name="email"
                                id="email"
                                placeholder="leroy@jenkins.com"
                                className="w-full px-3 py-2 border rounded-md "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-48 px-8 py-3 font-semibold rounded-md bg-[#4285F4] hover:bg-[#1da1f2]/90 text-white "
                            onClick={handleResetPassword}
                        >
                            Reset Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;