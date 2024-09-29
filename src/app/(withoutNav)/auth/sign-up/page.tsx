'use client'

import React from 'react'
import Link from 'next/link';

import { IoMdRocket } from "@react-icons/all-files/io/IoMdRocket";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { IoMail } from "@react-icons/all-files/io5/IoMail";
import { FaKey } from "@react-icons/all-files/fa6/FaKey";

import { IoCloseCircle } from "@react-icons/all-files/io5/IoCloseCircle";

import { Button } from '@nextui-org/button';
import { Checkbox } from "@nextui-org/checkbox";

import '../auth.css'
import { signUpFunctions } from './signUpUtils';

import ModalPrivacy from '../../../../components/ui/ModalPrivacy';
import ModalTerms from '../../../../components/ui/ModalTerms';

export default function Signup() {

    const {
        firstName, setFirstName,
        email, setEmail,
        password, confirmPassword,
        error, loading, disable, checkboxChecked,
        clearInputFirstName, clearInputEmail,
        handlePasswordChange, handleConfirmPasswordChange,
        handleSubmit, openPrivacyModal, closePrivacyModal,
        openTermsModal, closeTermsModal,
        isPrivacyModalOpen, isTermsModalOpen,
        setCheckboxChecked,
      } = signUpFunctions();

  return (
        <div className='flex bg-white w-full h-screen justify-center items-center dark:bg-[#262c40] font-poppins'>
            <div className="flex w-full items-center flex-col">
                <div className="flex text-[#2B2B2B] text-4xl dark:text-[#f2f7fb] font-bold mb-12">Sign up to
                    <div className="flex items-center">
                    <IoMdRocket width={22} height={36} color="#839dd1"/>
                    <span className="text-[#6374ae] dark:text-[#9cb6dd] ">to</span>
                    <span className="text-[#4a5989] dark:text-[#6a7fc1]">do</span>
                    </div>
                </div>

                
                    <form onSubmit={handleSubmit} className='flex flex-col items-center w-full'>
                    <div className="flex relative">
                    <FaUser 
                        className="absolute left-3 top-4 text-white"
                        size={18}
                        />
                        <input 
                        type="text" 
                        value={firstName} 
                        className='flex w-[317px] bg-[#6a7fc1] text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md mb-5' 
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        />
                        <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">First Name</label>
                        <IoCloseCircle
                            className={`absolute right-3 top-4 text-white cursor-pointer ${firstName ? 'flex' : 'hidden'}`} 
                            size={18}
                            onClick={clearInputFirstName}
                        />
                    </div>
                    
                    <div className="flex relative">
                    <IoMail 
                        className="absolute left-3 top-4 text-white"
                        size={18}
                        />
                        <input 
                        type="email"
                        value={email} 
                        className='flex w-[317px] bg-[#6a7fc1] text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md mb-5' 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                        <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">Email</label>
                        <IoCloseCircle
                            className={`absolute right-3 top-4 text-white cursor-pointer ${email ? 'flex' : 'hidden'}`} 
                            size={18}
                            onClick={clearInputEmail}
                        />
                    </div>

                    <div className="flex relative">
                    <FaKey 
                        className="absolute left-3 top-4 text-white"
                        size={18}
                        />
                        <input 
                        type="password"
                        value={password} 
                        className='flex w-[317px] bg-[#6a7fc1] text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md mb-5' 
                        placeholder='Password'
                        onChange={handlePasswordChange}
                        required
                        />
                        <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">Password</label>
                    </div>

                    <div className="flex relative">
                    <FaKey 
                        className="absolute left-3 top-4 text-white"
                        size={18}
                        />
                        <input 
                        type="password"
                        value={confirmPassword}
                        className='flex w-[317px] bg-[#6a7fc1] text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md mb-5' 
                        placeholder='Confirm Password'
                        onChange={handleConfirmPasswordChange}
                        required
                        />
                        <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">Confirm Password</label>
                    </div>

                    <div className="flex text-blue text-[12px] w-80 text-justify">
                        <Checkbox
                        checked={checkboxChecked}
                        onChange={() => setCheckboxChecked(!checkboxChecked)}
                        required/>
                        <span>
                            By signing up, you agree to our <a onClick={openTermsModal} className="text-lightPurple cursor-pointer hover:underline">Terms and Conditions</a> and <a onClick={openPrivacyModal} className="text-lightPurple cursor-pointer hover:underline">Privacy Policy.</a>
                        </span>
                    </div>

                    <div className="flex relative items-center">

                    <Button 
                    type='submit'
                    isLoading={loading}
                    size='lg'
                    isDisabled={disable}
                    className='flex bg-[#414e6e] text-white dark:bg-white dark:text-[#2B2B2B] w-[317px] rounded-md justify-center my-5 p-3'>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </Button>

                    </div>
                   
                    {error && (
                     <div className="flex absolute text-white bg-red-500 rounded-md p-4 text-sm bottom-4 right-6">
                        <p>{error}</p>
                    </div>
                    )}
                    
                    </form>

                <Link href="/auth/sign-in"><button className="flex text-[#414e6e] dark:text-white items-center hover:underline">Already have an account?</button></Link>
            </div>
            <ModalPrivacy isPrivacyOpen={isPrivacyModalOpen} onPrivacyChange={closePrivacyModal} />
            <ModalTerms isTermsOpen={isTermsModalOpen} onTermsChange={closeTermsModal} />
        </div>
  )
}
