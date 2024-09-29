'use client'

import React from 'react'
import { IoMdRocket } from "@react-icons/all-files/io/IoMdRocket";
import { IoMail } from "@react-icons/all-files/io5/IoMail";
import { FaKey } from "@react-icons/all-files/fa6/FaKey";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { IoCloseCircle } from "@react-icons/all-files/io5/IoCloseCircle";
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import '../auth.css'
import { signInFunctions } from './signInUtils';


export default function Signin() {
    const {
        email, setEmail,
        password, setPassword,
        error,
        loading,
        handleSubmit,
        clearInput
    } = signInFunctions();

  return (
        <div className='flex bg-white w-full h-screen justify-center items-center dark:bg-[#262c40] font-poppins'>
            <div className="flex items-center flex-col">
                <div className="flex text-[#2B2B2B] text-4xl dark:text-[#f2f7fb] font-bold mb-12">Log in to
                    <div className="flex items-center">
                    <IoMdRocket width={22} height={36} color="#839dd1"/>
                    <span className="text-logoLight dark:text-logoDark ">to</span>
                    <span className="text-lightBlue dark:text-lightPurple">do</span>
                    </div>
                </div>
                    
                    <form onSubmit={handleSubmit} >
                    <div className="flex relative">
                    <IoMail 
                        className="absolute left-3 top-4 text-white"
                        size={18}
                        />
                        <input
                        type="email"
                        value={email} 
                        className='flex w-[317px] bg-lightPurple text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md mb-5' 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                        <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">Email</label>
                        <IoCloseCircle
                            className={`absolute right-3 top-4 text-white cursor-pointer ${email ? 'block' : 'hidden'}`} 
                            size={18}
                            onClick={clearInput}
                        />
                    </div>
                    

                    <div className="flex w-full gap-4 flex-col relative rounded">
                    <FaKey 
                        className="absolute left-3 top-4 text-white"
                        size={18}
                        />
                        <input 
                        type="password"
                        value={password} 
                        className='flex w-[317px] bg-lightPurple text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md mb-5' 
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                        <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">Password</label>
                        
                        <Link href='/auth/forgot-password/findYourEmail'>
                            <button type='button' className="flex text-completed dark:text-white text-xs absolute top-16 bottom-0 right-0 hover:underline">Forgot your password?</button>
                        </Link>
                        
                    </div>

                   
                    <div className="flex relative justify-center">
                
                    <Button
                    type='submit'
                    name='signInBtn'
                    size='lg'
                    isLoading={loading}
                    className='flex bg-completed text-white dark:bg-white dark:text-[#2B2B2B] w-[317px] rounded-md justify-center p-3 mt-10 mb-5'>
                        {loading ? 'Signing In...' : 'Log In'}
                    </Button>

                    </div>

                    {error && (
                    <div className="flex text-white bg-red-500 rounded-md p-4 text-sm absolute bottom-4 right-6">
                         <p>{error}</p>
                    </div>
                    )}
                    
                    </form>
                    

                <div className="flex mt-5 items-center gap-7">
                    <div className="flex bg-completed dark:bg-white h-0.5 w-[120px]"></div>
                    <div className="flex text-completed dark:text-white text-md">or</div>
                    <div className="flex bg-completed dark:bg-white h-0.5 w-[120px]"></div>
                </div>
                
                <div className="flex flex-col items-center mb-5">
                    <Button size='lg' className='flex w-[317px] rounded-md mt-5 p-3 gap-2 text-white bg-lightBlue'><FcGoogle size={22} />Sign in with Google</Button>
                    <Button size='lg' className='flex w-[317px] rounded-md mt-5 p-3 text-white bg-lightBlue gap-2'><FaFacebook size={22} style={{ color: '#f2f2f2' }} />Sign in with Facebook</Button>
                </div>

                <Link href="/auth/sign-up"><button className="flex text-completed dark:text-white items-center hover:underline">Don't have an account?</button></Link>

            </div>
        </div>
  )
}
