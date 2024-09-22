'use client'

import React, { use } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Input } from '@nextui-org/input';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';

import { renderLoadingState } from '../../../../utils/errorHandling';

import { TiDelete } from "@react-icons/all-files/ti/TiDelete";

function Profile() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const [btnDisable, setBtnDisable] = useState(false);
    const [inputDisable, setInputDisable] = useState(true);
    const [isClearable, setIsClearable] = useState(false);

    const handleBackClick = () => {
        setShowButton(prev => !prev); // Toggle visibility
        setBtnDisable(false); //Enable the button
        setInputDisable(true);
        setIsClearable(false);
    };

    // Handler to reset the button states
    const handleEditClick = () => {
        setShowButton(prev => !prev); // Toggle visibility
        setBtnDisable(true); // Disable the button
        setInputDisable(false);
        setIsClearable(true);
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
        setEmail(response.data.email);
        } catch (error) {
        console.error('Failed to fetch user data:', error);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData(); // Fetch user data when the component mounts
    }, []);

    if (loading) return renderLoadingState();

  return (
    <div className='flex justify-center h-screen w-full font-poppins bg-white'>

        <div className="flex flex-col w-[850px] h-full gap-4">

            <div className="flex w-full h-full flex-col rounded-lg relative mb-4 mt-24">
                
                <div className="flex flex-col p-4 gap-2 border-darkGray/20 border rounded-md">
                    <label className="flex text-2xl font-semibold text-darkGray">User</label>

                    {showButton && (
                        <Button size='sm' radius='full' color='danger' isIconOnly className='flex absolute top-3 right-3' onClick={handleBackClick}>
                        <TiDelete size={24}/>
                    </Button>
                    )}
                                 
                    <div className="flex flex-col">
                        <label className="flex text-darkGray">First Name</label>
                        <Input 
                        variant='bordered' 
                        color='primary' 
                        type="text" 
                        size='lg' 
                        labelPlacement='outside' 
                        radius='sm'
                        disabled={inputDisable}
                        value={firstName}
                        isClearable={isClearable}
                        />
                        {showButton && (
                            <Button className='flex w-[120px] bg-lightPurple text-white mt-2'>Save changes</Button>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="flex text-darkGray">Email</label>
                        <Input 
                        variant='bordered' 
                        color='primary' 
                        type="email" 
                        size='lg' 
                        labelPlacement='outside'
                        radius='sm' 
                        disabled={inputDisable}
                        value={email}
                        isClearable={isClearable}
                        />
                        {showButton && (
                            <Button className='flex w-[120px] bg-lightPurple text-white mt-2'>Save changes</Button>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="flex text-darkGray">Title</label>
                        <Input 
                        variant='bordered' 
                        color='primary' 
                        type="text" 
                        size='lg' 
                        labelPlacement='outside' 
                        radius='sm'
                        disabled={inputDisable}
                        isClearable={isClearable}
                        value='Front-End Developer'
                        />
                        {showButton && (
                            <Button className='flex w-[120px] bg-lightPurple text-white mt-2'>Save changes</Button>
                        )}
                    </div>
                    

                <Button className='flex w-[120px] mt-6 bg-lightPurple text-white' onClick={handleEditClick} isDisabled={btnDisable}>Edit Details</Button>
                    
                </div>

                <div className="flex flex-col mt-8 border-darkGray/20 border p-4 rounded-md">
                        <label className="flex text-darkGray">Profile Image</label>
                        <div className="flex gap-5 mt-4">
                            <Avatar name='User' size='lg' src='/patrick.jpeg' alt='/'/>
                            <div className="flex rounded p-3 w-72 gap-2">
                                <Button size='sm' radius='sm' className='flex text-md text-darkGray'>Choose File</Button>
                                <label className='flex items-center text-darkGray text-sm'>No file chosen</label>
                            </div>
                        </div>
                    </div>

            </div>

        </div>
        
    </div>
  )
}

export default Profile