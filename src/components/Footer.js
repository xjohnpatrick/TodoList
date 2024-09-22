// src/components/Footer.js
import React from 'react'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaXTwitter } from "@react-icons/all-files/fa6/FaXTwitter";
import { Button } from '@nextui-org/button';
import Link from 'next/link';

function Footer() {
  
  return (
    <footer className='flex w-full h-56 font-poppins flex-col bg-blue text-white'>
        <div className='flex flex-col gap-10 w-full h-full justify-center items-center'>
            <div className='flex w-[484px] justify-center gap-10 mr-[160px] xxsm:mr-[100px] xsm:mr-[50px] sm:mr-0'>
              <Button isIconOnly size='sm' radius='full' className='flex bg-blue text-white'>
                <FaFacebook size={34}/>
              </Button>
              <Button isIconOnly size='sm' radius='md' className='flex bg-blue text-white'>
                <FaInstagram size={34}/>
              </Button>
              <Button isIconOnly size='sm' radius='md' className='flex bg-blue text-white'>
                <FaXTwitter size={34}/>
              </Button>
            </div>
            <div className='flex w-[484px] justify-center gap-10 mr-[160px] xxsm:mr-[100px] xsm:mr-[50px] sm:mr-0'>
              <Link href='/footer-main/about-us'>
              <button className='flex hover:underline'>
                About Us
              </button>
              </Link>
              <button className='flex hover:underline'>
                Terms and Conditions
              </button>
              <Link href='/footer-main/howDoesItWork'>
              <button className='flex hover:underline'>
                How does it work
              </button>
              </Link>
            </div>
        </div>
        <div className='flex w-full items-center justify-center pr-[155px] xxsm:pr-[100px] xsm:pr-[50px] sm:pr-0'>
          © 2024 TodoList. All rights reserved.
        </div> 
    </footer>
  )
}

export default Footer