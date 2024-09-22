// src/components/Header.js
'use client'

import React from 'react'
import { IoMdRocket } from "@react-icons/all-files/io/IoMdRocket";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { useState, useEffect } from 'react';

function Header() {

  return (
    <header className='flex w-full h-24 font-poppins bg-blue'>
      
      <div className='flex items-center'>
        <Link href='/'>
          <button className='flex items-center font-bold text-4xl p-2 ml-16 xxsm:ml-32 hover:bg-lightPurple/30 rounded-lg'>
            <IoMdRocket width={22} height={36} color="#839dd1"/>
            <span className="text-lightPurple">to</span>
            <span className="text-lightPurple">do</span>
          </button>
        </Link>
      </div>

      <div className='flex relative w-full h-full items-center text-white'>
        <div className='flex items-center absolute xsm:right-24 sm:right-32 whitespace-nowrap'>
          <label className='hidden xsm:flex'>Log In</label>
          <Link href='/auth/sign-in'>
              <Button radius='full' className='flex bg-btnPage text-white w-[180px] h-14 text-lg ml-4'>Get started <IoIosArrowRoundForward size={28}/></Button>
          </Link>
        </div>
      </div>
      
    </header>
  )
}

export default Header