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
    <div className='flex flex-col w-full h-[1400px] sm:h-[1300px] xl:h-[1100px] bg-white font-poppins'>

        <div className="flex flex-col w-full h-[400px] xl:h-[600px] items-center justify-center bg-shadow/10">

            <label className='flex text-center text-2xl md:text-3xl xl:text-5xl text-blue font-bold my-5'>Create tasks and track them effortlessly!</label>

            <div className="flex flex-col text-center mx-10">
                <p className="flex text-blue text-lg xl:text-xl mb-4 xl:w-[900px]">Your personal space to organize tasks, track your progress, and stay on top of your goals. 
                    Whether you're planning your day or managing long-term projects, TodoList is here to help you keep everything in order.</p>

                <p className="flex text-blue text-lg justify-center mb-4">Get started by signing in or creating a new account. Happy organizing!</p>
            </div>

        </div>


        <div className="flex flex-col xl:flex-row w-full h-full bg-white">

            <div className='flex flex-col h-full items-center xl:justify-center mx-10 xl:mx-0 xl:w-full xl:px-16 2xl:px-28'>

                <p className='text-blue text-2xl md:text-3xl xl:text-4xl my-10 font-bold text-center xl:text-left 2xl:w-[650px]'>
                  Stay on top of your tasks with ease using 
                  <span className='items-center inline-flex align-middle text-lightPurple font-bold'>
                    <IoMdRocket width={22} height={36} color="#839dd1"/>
                  to
                  </span>
                  <span className='inline-flex align-middle text-lightBlue font-bold'>
                  do
                  </span>!
                </p>
                    
              <p className='flex text-blue text-justify md:text-center xl:text-justify text-lg 2xl:w-[650px]'>
                Todo helps you stay organized and productive by allowing you to effortlessly manage your tasks. 
                Add, edit, and track your to-do items with intuitive features and a clean interface. 
                Whether you're planning your day or managing long-term projects, Todo makes it simple to keep everything on track.</p>

              <Link href='/auth/sign-up'>
                <Button radius='full' className='flex bg-btnPage text-white w-[160px] h-12 md:h-14 mt-4 md:mt-9'>Sign Up Here <IoIosArrowRoundForward size={28}/></Button>
              </Link>
              
            </div>  

          <div className='flex w-full justify-center xl:items-center my-10 xl:my-0'>
            <div className='flex flex-col bg-sbBody/50 w-[450px] sm:w-[550px] xl:w-[650px] h-[584px] xl:h-[600px] rounded-3xl items-center shadow-shadow/50 shadow-xl'>
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
                    className='flex rounded-md bg-[#d3e2f2] text-[#414e6e] p-4 h-[54px] outline-none w-[300px] sm:w-[400px] xl:w-[500px] shadow-md shadow-shadow dark:bg-white dark:shadow-shadow dark:placeholder-gray dark:text-darkGray'
                    placeholder='Add a new task'
                  />
                  <Button
                    className='flex w-[70px] h-[52px] bg-lightPurple ml-2 mt-[1.5px] rounded-md items-center justify-center text-white text-[15px] gap-2 font-semibold outline-none dark:bg-lightBlue shadow-md shadow-shadow'>
                      Add
                  </Button>
              </div>

              <div className="flex relative w-full h-[750px] flex-col items-center rounded-lg mt-6">
                  <div className="flex gap-[120px] sm:gap-[200px] xl:gap-[300px] mt-10">
                      <div className="flex gap-2">
                          <label className="flex text-lightPurple text-[14px] font-bold dark:text-white whitespace-nowrap">Tasks created</label>
                          <label className="flex bg-lightPurple text-white px-2 py-[2px] rounded-full text-[12px] font-bold dark:bg-lightBlue whitespace-nowrap">3</label>
                      </div>
                      <div className="flex gap-2">
                          <label className="flex text-lightPurple text-[14px] font-bold dark:text-[#f2f7fb] whitespace-nowrap">Completed</label>
                          <label className="flex bg-lightPurple text-white px-2 py-[2px] rounded-full text-[12px] font-bold dark:bg-lightBlue whitespace-nowrap">1 out of 3</label>
                      </div>
                  </div>
                <div className="flex w-[400px] sm:w-[500px] xl:w-[600px] bg-blue h-0.5 mt-6 dark:bg-lightPurple"></div> 
                  
                  <ul className='flex relative w-[400px] sm:w-[500px] xl:w-[600px] h-[72px] rounded-md mt-5 p-3 text-[14px] bg-lightPurple text-white'>
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
                <ul className='flex relative w-[400px] sm:w-[500px] xl:w-[600px] h-[72px] rounded-md mt-2 p-3 text-[14px] bg-completed text-white'>
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
                <ul className='flex relative w-[400px] sm:w-[500px] xl:w-[600px] h-[72px] rounded-md mt-2 p-3 text-[14px] bg-lightPurple text-white'>
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