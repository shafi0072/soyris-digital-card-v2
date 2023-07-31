import React, { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import auth from '@/src/config/firebase';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { baseUrl } from '../config/Server';
const index = () => {
  const provider = new GoogleAuthProvider();
  const router = useRouter()
  const [signUp, setSignUp] = useState(false)
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: ''
  })
  const [signIpData, setSignIpData] = useState({
    email: '',
    password: ''
  })
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log({ user: result.user })

        fetch(`${baseUrl}/add-user/auth`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            full_name: result?.user?.displayName,
            email: result?.user?.email
          })
        })
          .then(res => res.json())
          .then(data => console.log({ data }))
          .catch(err => console.log(err))
        localStorage.setItem('email', result?.user?.email)
        localStorage.setItem('accessToken', result.user.accessToken)
        window.location.assign('/')
      })
      .catch((err) => console.log(err));
  };

  const handleSignUpOnChange = (e) => {
    const newSignUpData = { ...signUpData }
    newSignUpData[e.target.name] = e.target.value
    setSignUpData(newSignUpData)
  }


  const handleSignInOnChange = (e) => {
    const newSignUpData = { ...signIpData }
    newSignUpData[e.target.name] = e.target.value
    setSignIpData(newSignUpData)
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, signUpData?.email, signUpData?.password)
      .then((userCredential) => {
        localStorage.setItem('accessToken', userCredential.user.accessToken)
        localStorage.setItem('email', signUpData?.email)
        fetch(`${baseUrl}/add-user/auth`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            full_name: signUpData?.fullName,
            email: signUpData?.email
          })
        })
          .then(res => res.json())
          .then(data => console.log({ data }))
          .catch(err => console.log(err))
        toast.success('Sign Up successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        window.location.assign('/')
      })
      .catch(err => {
        if (err.customData._tokenResponse.error.message === 'EMAIL_EXISTS') {
          toast.error('This Email Already in use', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, signIpData?.email, signIpData?.password)
      .then((userCredential) => {
        console.log({ userCredential })
        localStorage.setItem('accessToken', userCredential.user.accessToken)
        localStorage.setItem('email', signIpData?.email)
        
        toast.success('Sign Ip successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        window.location.assign('/')
      })

  }
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      window.location.assign('/')
    }
  }, [])

  return (
    <div className='background'>
      <div className='flex justify-center '>
        {!signUp && <div className='container w-[30%] content-center  border shadow-lg bg-white rounded mt-[2%] p-5'>
          <div className=" content-center ">
            <h2 className="mb-3 text-xl font-bold text-center">Login to your account</h2>

          </div>
          <div className="my-6 space-y-4 flex justify-center">
            <button onClick={signInWithGoogle} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
              <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
              </svg>
              Sign in with Google
            </button>

          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-gray-400" />
            <p className="px-3 dark:text-gray-400">OR</p>
            <hr className="w-full dark:text-gray-400" />
          </div>
          <form onSubmit={handleSignIn} className="space-y-8 mb-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">Email address</label>
                <input onChange={handleSignInOnChange} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md " />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">Password</label>
                  <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-blue-00">Forgot password?</a>
                </div>
                <input type="password" onChange={handleSignInOnChange} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md" />
              </div>
            </div>
            <p className="text-sm text-center dark:text-gray-400">Dont have account?
              <button onClick={() => setSignUp(true)} rel="noopener noreferrer" className="focus:underline underline font-bold text-[#4285F4]">Sign up </button>
              here
            </p>
            <div className='flex justify-center'>
              <button type="submit" className="w-48 px-8 py-3 font-semibold rounded-md bg-[#4285F4] hover:bg-[#1da1f2]/90 text-white ">Sign in</button>
            </div>
          </form>
        </div>}
        {signUp && <div className='container w-[30%] content-center rounded bg-white mt-[2%] border shadow-lg  p-5  '>
          <div className=" content-center ">
            <h2 className="mb-3 text-2xl font-bold text-center">Create an account to get started!</h2>

          </div>

          <form onSubmit={handleSignUp} noValidate="" className="space-y-8 mb-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">First Name</label>
                <input onChange={handleSignUpOnChange} type="text" name="fullName" id="fullName" placeholder="John Doe" className="w-full px-3 py-2 border rounded-md " />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">Last Name</label>
                <input type="text" name="fullName" id="fullName" placeholder="John Doe" className="w-full px-3 py-2 border rounded-md " />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">Email address</label>
                <input onChange={handleSignUpOnChange} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md " />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">Password</label>

                </div>
                <input type="password" onChange={handleSignUpOnChange} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm">Verify Password</label>

                </div>
                <input type="password" onChange={handleSignUpOnChange} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md" />
              </div>
              <div class="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <span className='text-blue-600'>Terms of Service</span> and <span className='text-blue-600'>Acceptable Use Policy</span> </label>
              </div>
              <div className='flex justify-center'>
                <button type="submit" className="w-48 px-8 py-3 font-semibold rounded-md bg-[#4285F4] hover:bg-[#1da1f2]/90 text-white ">Create account</button>
              </div>
              <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
              </div>
              <div className='flex justify-center'>
                <button onClick={signInWithGoogle} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                  </svg>
                  Sign in with Google
                </button>

              </div>
            </div>
            <p className="text-sm text-center dark:text-gray-400">Already have an account?
              <button onClick={() => setSignUp(false)} rel="noopener noreferrer" className="focus:underline underline font-bold text-[#4285F4]">Log in </button>
              here
            </p>

          </form>
        </div>}
      </div>
    </div>
  );
};

export default index;