// src/components/Body.js
import React from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/button'
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import { IoMdRocket } from "@react-icons/all-files/io/IoMdRocket";
import { CgTrash } from "@react-icons/all-files/cg/CgTrash";
import { FaUnlock } from "@react-icons/all-files/fa/FaUnlock";
import { FaLock } from "@react-icons/all-files/fa/FaLock";

function Body() {

  return (
    <div className='flex flex-col w-[640px] h-screen bg-white font-poppins sm:w-full'>

        <div className="flex flex-col w-full h-full items-center justify-center bg-shadow/10 xl:h-[650px]">

            <label className='flex text-xl text-blue font-bold sm:text-center w-[440px] md:text-4xl sm:w-auto sm:mt-4 md:px-10 xl:p-0 mr-[150px] xxsm:mr-[70px] xsm:mr-[10px] sm:mr-0'>Create tasks and track them effortlessly!</label>

            <div className="flex flex-col w-[450px] sm:w-[784px] my-5 md:my-10 text-center mr-[160px] xxsm:mr-[70px] xsm:mr-[10px] sm:mr-0">
                <p className="flex text-blue text-lg mb-4 sm:px-28 md:text-xl md:px-10 xl:p-0">Your personal space to organize tasks, track your progress, and stay on top of your goals. 
                    Whether you're planning your day or managing long-term projects, TodoList is here to help you keep everything in order.</p>

                <p className="flex text-blue text-lg justify-center sm:px-28 md:text-xl md:px-10 xl:p-0">Get started by signing in or creating a new account. Happy organizing!</p>
            </div>

        </div>


        <div className="flex flex-col lg:flex-row w-full h-full bg-white">

          <div className='flex w-full items-center justify-center h-full xl:h-auto'>

            <div className='flex flex-col w-[584px] h-96 items-center justify-center xl:items-start md:h-full xl:h-96 md:w-full xl:w-[484px]'>

                <p className='text-blue text-xl mb-2 mt-5 font-bold xl:font-normal text-center lg:mt-10 xl:mt-0 lg:mb-6 xl:mb-10 md:text-3xl xl:text-4xl xl:text-left mr-[160px] xxsm:mr-[70px] xsm:mr-[10px] sm:mr-0'>
                  Stay on top of your tasks with ease using 
                  <span className='items-center inline-flex align-middle text-lightPurple font-bold'>
                    <IoMdRocket width={22} height={36} color="#839dd1"/>
                  to
                  </span>
                  <span className='inline-flex align-middle text-lightBlue font-bold'>
                  do
                  </span>!
                </p>
                    
              <p className='flex text-blue text-center text-lg md:mb-10 sm:p-4 sm:text-center sm:text-md lg:text-lg xl:text-left md:px-20 xl:p-0 mr-[160px] xxsm:mr-[70px] xsm:mr-[10px] sm:mr-0'>
                Todo helps you stay organized and productive by allowing you to effortlessly manage your tasks. 
                Add, edit, and track your to-do items with intuitive features and a clean interface. 
                Whether you're planning your day or managing long-term projects, Todo makes it simple to keep everything on track.</p>

              <Link href='/auth/sign-up'>
                <Button radius='full' className='flex bg-btnPage text-white w-[160px] h-14 mt-4 md:mt-0 text-sm md:w-[180px] md:text-lg md:h-14 mr-[160px] xxsm:mr-[70px] xsm:mr-[10px] sm:mr-0'>Sign Up Here <IoIosArrowRoundForward size={28}/></Button>
              </Link>
              
            </div>

          </div>

          <div className='hidden w-full items-center justify-center xl:flex'>
            <div className='flex flex-col bg-sbBody/50 w-[584px] h-[584px] rounded-3xl items-center shadow-shadow/50 shadow-xl'>
              <div className="flex mt-6">
                  <label className="flex text-4xl font-bold items-center">
                      <IoMdRocket width={22} height={36} color="#839dd1" />
                        <span className="text-logoLight dark:text-logoDark">to</span>
                        <span className="text-lightBlue dark:text-lightPurple">do</span>
                  </label>
              </div>
              <div className="flex mt-[53px]">
                  <input
                    type="text"
                    className='flex rounded-md bg-[#d3e2f2] text-[#414e6e] p-4 h-[54px] outline-none w-[455px] shadow-md shadow-shadow dark:bg-white dark:shadow-shadow dark:placeholder-gray dark:text-darkGray'
                    placeholder='Add a new task'
                  />
                  <Button
                    className='flex w-[70px] h-[52px] bg-lightPurple ml-2 mt-[1.5px] rounded-md items-center justify-center text-white text-[15px] gap-2 font-semibold outline-none dark:bg-lightBlue shadow-md shadow-shadow'>
                      Add
                  </Button>
              </div>

              <div className="flex relative w-[555px] h-[750px] flex-col items-center rounded-lg mt-6">
                  <div className="flex gap-[250px] mt-10">
                      <div className="flex gap-2">
                          <label className="flex text-lightPurple text-[14px] font-bold dark:text-white whitespace-nowrap">Tasks created</label>
                          <label className="flex bg-lightPurple text-white px-2 py-[2px] rounded-full text-[12px] font-bold dark:bg-lightBlue whitespace-nowrap">3</label>
                      </div>
                      <div className="flex gap-2">
                          <label className="flex text-lightPurple text-[14px] font-bold dark:text-[#f2f7fb] whitespace-nowrap">Completed</label>
                          <label className="flex bg-lightPurple text-white px-2 py-[2px] rounded-full text-[12px] font-bold dark:bg-lightBlue whitespace-nowrap">1 out of 3</label>
                      </div>
                  </div>
                <div className="flex w-[535px] bg-blue h-0.5 mt-6 dark:bg-lightPurple"></div> 
                  
                  <ul className='flex relative w-[535px] h-[72px] rounded-md mt-5 p-3 text-[14px] bg-lightPurple text-white'>
                  <li className='flex items-center w-full justify-between'>
                      <div className="flex items-center">
                        <label htmlFor="" className="flex ml-3">
                          <span className='flex'>
                            Buy groceries
                          </span>
                          
                        </label>
                      </div>
                  </li>
                  <button className="flex items-center relative"><CgTrash size={24} /></button>
                  <button className="absolute top-[26.5px] right-12">
                    <FaUnlock size={18}/>
                  </button>
                </ul>
                <ul className='flex relative w-[535px] h-[72px] rounded-md mt-2 p-3 text-[14px] bg-completed text-white'>
                  <li className='flex items-center w-full justify-between'>
                      <div className="flex items-center">
                        <label htmlFor="" className="flex ml-3">
                          <span className='flex line-through'>
                            Clean the house
                          </span>
                          <span className="ml-2 text-white bg-green-600 px-0.5 rounded absolute right-20">Completed</span>
                        </label>
                      </div>
                  </li>
                  <button className="flex items-center relative"><CgTrash size={24} /></button>
                  <button className="absolute top-[26.5px] right-12">
                    <FaLock size={18}/>
                  </button>
                </ul>
                <ul className='flex relative w-[535px] h-[72px] rounded-md mt-2 p-3 text-[14px] bg-lightPurple text-white'>
                  <li className='flex items-center w-full justify-between'>
                      <div className="flex items-center">
                        <label htmlFor="" className="flex ml-3">
                          <span className='flex'>
                            Schedule team meeting
                          </span>
                          
                        </label>
                      </div>
                  </li>
                  <button className="flex items-center relative"><CgTrash size={24} /></button>
                  <button className="absolute top-[26.5px] right-12">
                    <FaLock size={18}/>
                  </button>
                </ul>

              </div>
            
            </div>
          </div>
        </div>

    </div>
  )
}

export default Body