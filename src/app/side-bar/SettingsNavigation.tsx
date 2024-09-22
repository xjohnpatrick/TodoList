import React from 'react'

import Link from 'next/link';

import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { ImProfile } from "@react-icons/all-files/im/ImProfile";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { motion } from "framer-motion"
import { FaUserShield } from "@react-icons/all-files/fa6/FaUserShield";

  
  const variants = {
    close: {
      x: -300,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 100,
    },
  }
  
  interface Props {
    selectedProject: string
    isOpen: boolean
    setSelectedProject: (project: string | null) => void
  }
  
  const SettingsNavigation = ({
    selectedProject,
    isOpen,
    setSelectedProject,
  }: Props) => {
    return (
      <motion.nav
        variants={variants}
        initial="close"
        animate="open"
        exit="close"
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className={`h-[240px] rounded-md flex flex-col gap-8 w-64 absolute bottom-10 bg-sbBody ml-0 z-20 font-poppins ${
          isOpen ? "left-64" : "left-20"
        } shadow shadow-shadow p-5`}
      >
        <div className="flex flex-row w-full justify-between place-items-center">
          <h1 className="tracking-wide text-blue text-lg font-poppins">
            {selectedProject}
          </h1>
          <button onClick={() => setSelectedProject(null)}>
            <FaChevronLeft size={16}/>
          </button>
        </div>

        <div className="flex flex-col">

        <Link href='/main/profile'>
          <div className="flex relative text-blue hover:text-white hover:bg-blue rounded">
              <button className="flex text-lg p-2 w-full pl-[50px] items-center">Profile <ImProfile className='flex absolute left-3' size={24}/></button>
          </div>
        </Link>
        
        <Link href='/main/account'>
          <div className="flex relative text-blue hover:text-white hover:bg-blue rounded">
              <button className="flex text-lg p-2 w-full pl-[50px] items-center">Account <FaUser className='flex absolute left-3' size={20}/></button>
          </div>
        </Link>
        
        <Link href='/main/legal-policies'>
          <div className="flex relative text-blue hover:text-white hover:bg-blue rounded">
              <button className="flex text-lg p-2 w-full pl-[50px] items-center">Legal/Policies <FaUserShield className='flex absolute left-3' size={24}/></button>
          </div>
        </Link>

      </div>
        
      </motion.nav>
    )
  }
  
  export default SettingsNavigation