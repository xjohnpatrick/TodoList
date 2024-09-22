import React from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import Link from 'next/link';

function ForgotPassword() {
  return (
    <div className='flex h-screen w-full justify-center items-center font-poppins'>
        <div className="flex flex-col gap-2 border-darkGray/20 border p-4 rounded-md w-[400px] xxsm:w-[450px] xsm:w-[500px] sm:w-[580px] md:w-[668px] mr-[150px] xxsm:mr-[100px] xsm:mr-[40px] sm:mr-0">
                      
                      <div className="flex relative">
                        <label className="flex text-2xl font-semibold text-darkGray">Set new password</label>

                        <Link href='/auth/forgot-password/findYourEmail'>
                        <Button isIconOnly size='sm' className="flex absolute right-0 rounded-md bg-lightPurple p-1 text-white"><FaChevronLeft size={20}/></Button>
                        </Link>
                      </div>

                      <label className="flex text-darkGray">New Password</label>
                        <Input 
                        variant='bordered' 
                        color='primary' 
                        type="text" 
                        size='lg' 
                        labelPlacement='outside' 
                        radius='sm'
                        isClearable
                        />

                      <label className="flex text-darkGray">Confirm Password</label>
                        <Input 
                        variant='bordered' 
                        color='primary' 
                        type="text" 
                        size='lg' 
                        labelPlacement='outside' 
                        radius='sm'
                        isClearable
                        />

                        <Link href='/auth/sign-in'>
                          <Button className='flex bg-lightPurple text-white w-[160px] p-4 mt-6' radius='sm'>Save Changes</Button>
                        </Link>
                    </div>
    </div>
  )
}

export default ForgotPassword