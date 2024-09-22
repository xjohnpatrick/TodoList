import React from 'react'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

function FindYourEmail() {
  return (
    <div className='flex h-screen w-full justify-center items-center font-poppins'>
        <div className="flex flex-col gap-2 border-darkGray/20 border p-4 rounded-md w-[400px] xxsm:w-[450px] xsm:w-[500px] sm:w-[580px] md:w-[668px] mr-[150px] xxsm:mr-[100px] xsm:mr-[40px] sm:mr-0">
                      <label className="flex text-2xl font-semibold text-darkGray mb-5">Forgot Password</label>

                        <label className="flex text-darkGray">Find your email</label>
                        <Input 
                        variant='bordered' 
                        color='primary' 
                        type="text" 
                        size='lg' 
                        placeholder='Enter email address'
                        radius='sm'
                        isClearable
                        />

                        <Link href='/auth/forgot-password/forgotPassword'>
                            <Button className='flex bg-lightPurple text-white w-[160px] p-4 mt-6' radius='sm'>Continue</Button>
                        </Link>
                        
                    </div>
    </div>
  )
}

export default FindYourEmail