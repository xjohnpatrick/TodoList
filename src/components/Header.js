// src/components/Header.js
'use client'

import React from 'react'
import { IoMdRocket } from "@react-icons/all-files/io/IoMdRocket";
import Link from 'next/link';

function Header() {

  return (
    <header className='flex w-full h-24 font-poppins bg-blue items-center relative'>
      
      <div className='flex w-full justify-center'>
        <Link href='/'>
          <button className='flex items-center font-bold text-4xl p-2 hover:bg-lightPurple/30 rounded-lg sm:absolute sm:left-5 sm:top-5 md:left-20 xl:left-32'>
            <IoMdRocket width={22} height={36} color="#839dd1"/>
            <span className="text-lightPurple">to</span>
            <span className="text-lightPurple">do</span>
          </button>
        </Link>
      </div>

      <div className='flex w-full justify-center text-white'>
        <div className='flex sm:absolute sm:right-5 sm:top-5 md:right-20 xl:right-32 gap-10'>
        <Link href='#'>
            <button className='flex text-white h-14 text-lg items-center hover:bg-lightPurple/30 p-2 rounded-lg'>About Us</button>
        </Link>
        <Link href='/auth/sign-in'>
            <button className='flex text-white h-14 text-lg items-center hover:bg-lightPurple/30 p-2 rounded-lg'>Log in</button>
        </Link>
        </div>
      </div>
      
    </header>
  )
}

export default Header