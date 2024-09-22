'use client'

import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { RiLogoutBoxRFill } from "@react-icons/all-files/ri/RiLogoutBoxRFill";
import { MdSpaceDashboard } from "@react-icons/all-files/md/MdSpaceDashboard";
import { FaClipboardList } from "@react-icons/all-files/fa/FaClipboardList";
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots";
import { RiEdit2Fill } from "@react-icons/all-files/ri/RiEdit2Fill";
import { CgTrash } from "@react-icons/all-files/cg/CgTrash";
import { IoMdSettings } from "@react-icons/all-files/io/IoMdSettings";

import { User } from "@nextui-org/user";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";

import { motion, useAnimationControls, AnimatePresence } from 'framer-motion'

import SettingsLink from "./SettingsLink";
import SettingsNavigation from "./SettingsNavigation";

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
// import DarkMode from "../../buttons/darkModeBtn/page";

const containerVariants = {
    close: {
        width: '5rem',
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },
    },
    open: {
        width: "16rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },
    },
}

const SideBar = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState<string | null>(null)
    const [firstName, setFirstName] = useState('');
    const [loading, setLoading] = useState(false);
    const containerControls = useAnimationControls()
    const router = useRouter();
    const [categoryButtons, setButtons] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const maxButtons = 6;

    useEffect(() => {
        if(isOpen){
            containerControls.start("open")
        } else {
            containerControls.start("close")
        }
    }, [isOpen])

    const handleOpenClose = () => {
        setIsOpen(!isOpen)
        setSelectedProject(null)
        setShowEditOptions(false);
    }

    const handleAddButton = () => {
        if (inputValue.trim() === '') {
            setStatus('error')
            setShowPopup(true);
            setMessage('Please input category');
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
            return;
        }
        if (inputValue.length > 10) {
            setStatus('error')
            setShowPopup(true);
            setMessage('Category name must be exactly 10 characters long');
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
            return;
        }
        if (categoryButtons.length < maxButtons) {
            setButtons([...categoryButtons, inputValue]);
            setStatus('success')
            setShowPopup(true);
            setMessage('Category added successfully');
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
            setInputValue(''); // Clear the input field after adding
        } else {
            setStatus('error')
            setShowPopup(true);
            setMessage('You can only add up to 6 categories');
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        }
    };

    const handleDeleteButton = (index) => {
        const updatedButtons = categoryButtons.filter((_, i) => i !== index);
        setButtons(updatedButtons);
        setStatus('success')
            setShowPopup(true);
            setMessage('Category deleted successfully');
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);

        // Set showEditOptions to false if no categories are left
        if (updatedButtons.length === 0) {
            setShowEditOptions(false);
        }
    };

    const [showEditOptions, setShowEditOptions] = useState(false);

    const handleEditClick = () => {
        setShowEditOptions(prev => !prev);
    };

    const handleLogout = async () => {
        setLoading(true);
        try {
          await axios.post('/api/auth/logout');
          // Redirect to sign-in page after successful logout
          router.push('/auth/sign-in');
        } catch (error) {
          console.error('Error logging out:', error);
        } finally {
            setLoading(false);
        }
      };

      // Fetch user data
    const fetchUserData = async () => {
        const token = localStorage.getItem('token'); // Retrieve token from local storage

        if (!token) {
        console.error('No token found. Please log in.');
        return;
        }

        try {
        const response = await axios.get('http://localhost:3000/api/auth/profile', {
            headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            },
        });

        // Set the firstName and email
        setFirstName(response.data.firstName);
        } catch (error) {
        console.error('Failed to fetch user data:', error);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData(); // Fetch user data when the component mounts
    }, []);

  return (
    <>
    <motion.nav 
      variants={containerVariants}
      animate={containerControls}
      initial="close"
      className="bg-sbBody flex flex-col z-20 gap-20 p-4 absolute top-0 left-0 h-screen shadow shadow-shadow dark:bg-lightBlue font-poppins">
        <div className="flex flex-row w-full">
            <User
            className={`whitespace-nowrap overflow-hidden ${isOpen ? 'opacity-100' : 'transition-colors-opacity opacity-0'}`}
            name={<span className="dark:text-white text-blue">{firstName}</span>}
            description={<span className="dark:text-white text-blue">Front-End Developer</span>}
            avatarProps={{
                src: "/patrick.jpeg",
                alt: "/"
            }}
            />
            <button
            className='p-2 rounded-lg flex text-white bg-blue absolute right-6 top-5 dark:text-white' 
            onClick={() => handleOpenClose()}>
                <GiHamburgerMenu/>  
            </button>
        </div>
        <div className="flex-1 relative flex-col">
            <label className={`flex text-sm absolute left-0 top-0 ${isOpen ? 'opacity-100' : 'transition-colors-opacity opacity-0'}`}>Main</label>
                <Link href='/main/dashboard'>
                    <div className="flex relative text-blue hover:text-white hover:bg-blue rounded overflow-hidden whitespace-nowrap mb-12 mt-8">
                        <button className="flex text-lg p-2 w-full pl-[50px] items-center">Dashboard<MdSpaceDashboard className='flex absolute left-3' size={24}/></button>
                    </div>
                </Link>
           

            <div className={`flex overflow-hidden flex-col whitespace-nowrap ${isOpen ? 'opacity-100' : 'transition-colors-opacity opacity-0'}`}>
                <label htmlFor="Category" className="block text-sm font-medium leading-6 text-gray-900 ml-1">
                    Your Categories
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                    id="Category"
                    name="Category"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder="Add Category"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-lightBlue placeholder:text-gray sm:text-sm sm:leading-6 outline-none"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <div className="absolute inset-y-0 right-[-10px] flex items-center pr-3">
                            <Button size="sm" onClick={handleAddButton} className="text-gray-500 sm:text-sm text-white bg-blue w-12 rounded h-8">Add</Button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col h-[300px] mt-2 relative'>
                    <div className="flex mb-12">
                    {categoryButtons.length > 0 && (
                        <Tooltip 
                        showArrow
                        placement="right"
                        content="Edit Categories"
                        classNames={{
                            base: [
                            // arrow color
                            "before:bg-blue",
                            ],
                            content: [
                            "py-1 px-4",
                            "text-white bg-blue font-poppins",
                            ],
                        }}
                        >
                            <Button
                            isIconOnly
                            onClick={handleEditClick} 
                            className="text-blue w-12 rounded h-8 absolute right-0.5 top-1 bg-sbBody">
                                <BsThreeDots size={20} className='flex'/>
                            </Button>
                        </Tooltip>
                    )}
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        {categoryButtons.map((buttonLabel, index) => (
                            <div className='flex'>
                                <div key={index} className={`flex w-full ${showEditOptions ? 'w-[149px]' : 'w-full'}`}>
                                    <div className="flex w-full px-2">
                                        <button
                                            className="flex text-blue hover:text-white py-2 px-4 rounded w-full gap-2 hover:bg-blue"
                                        ><FaClipboardList size={18} className='flex mt-0.5'/>
                                            <div className="overflow-hidden">
                                                <span className={`flex ${showEditOptions && buttonLabel.length > 8 ? 'animate-slide' : ''}`}>
                                                    {buttonLabel}
                                                </span>
                                            </div>
                                        </button> 
                                    </div>  
                                </div>
                                <div className={`flex justify-center ${showEditOptions ? 'w-[75px]' : 'w-0'}`}>
                                    {showEditOptions && (
                                    <button
                                        onClick={() => handleDeleteButton(index)}
                                        className="flex text-red-500 hover:text-red-700 p-2 text-lg"
                                    >
                                        <CgTrash />
                                    </button>
                                    )}
                                    {showEditOptions && (
                                        <button
                                            className="flex p-2 text-lg"
                                        >
                                            <RiEdit2Fill />
                                        </button>
                                    )} 
                                </div>      
                            </div>                                             
                        ))}
                    </div>
                </div>
            </div>
        
        </div>
        <div className="flex flex-col gap-3">
            {/* <DarkMode/> */}
            <SettingsLink name="Settings" setSelectedProject={setSelectedProject}>
                <IoMdSettings className="min-w-8 w-8" size={24}/>
            </SettingsLink>
            
            <div className="flex w-full bg-blue h-[1px] dark:bg-lightPurple"></div>
            <div className="flex relative text-blue hover:text-white hover:bg-blue overflow-hidden whitespace-nowrap rounded ">
                <button onClick={handleLogout} className="flex text-lg p-2 w-full pl-[50px] items-center" disabled={loading}>
                {loading ? 'Signing Out...' : 'Log Out'}
                    <RiLogoutBoxRFill className="flex absolute left-3" size={24}/>
                </button>
            </div>

        </div>
        {showPopup &&
                        <div className="flex text-white absolute bottom-10 right-[-1620px] bg-lightPurple h-16 rounded-lg p-4 items-center">
                            {message}
                            <div className="absolute flex h-4 w-4 bottom-[55px] right-[-5px]">
                                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lightPurple opacity-75"></div>
                                <div className={`inline-flex rounded-full h-4 w-4 ${status === 'success' ? 'bg-green-600' : 'bg-red-600'}`}></div>
                            </div>
                        </div>}
      </motion.nav>
      
        <AnimatePresence>
            {selectedProject && (
            <SettingsNavigation
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                isOpen={isOpen}
            />
            )}
        </AnimatePresence>
      </>
  )
}

export default SideBar