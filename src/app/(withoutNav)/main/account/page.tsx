'use client'

import React from 'react'
import axios from 'axios';

import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure} from "@nextui-org/modal";
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

import { useState, useEffect } from 'react';
import { renderLoadingState } from '../../../../utils/errorHandling';
import ConnectAccount from '../../../buttons/connectAcc/page';

function Account() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);

    const { isOpen: isDeletionOpen, onOpen: openDeletionModal, onOpenChange: onOpenDeletionChange } = useDisclosure();

    // Fetch user data
    const fetchUserData = async () => {
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        if (!token) {
        console.error('No token found. Please log in.');
        return;
        }

        try {
        const response = await axios.get('http://localhost:3000/api/auth/account', {
            headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            },
        });

        // Set the firstName and email
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
    <div className='flex items-center justify-center h-screen w-full font-poppins bg-white'>

        <div className="flex flex-col items-center justify-center w-[850px] h-full gap-4">

            <ConnectAccount/>

            <div className="flex w-full h-full flex-col rounded-lg relative mb-4">
              
                <div className="flex flex-col p-4 gap-2">
                    
                <div className="flex flex-col gap-2 border-darkGray/20 border p-4 rounded-md">
                      <label className="flex text-2xl font-semibold text-darkGray">Set new password</label>

                        <label className="flex text-darkGray">Current Password</label>
                        <Input 
                        variant='bordered' 
                        color='primary' 
                        type="text" 
                        size='lg' 
                        labelPlacement='outside' 
                        radius='sm'
                        isClearable
                        />

                      <label className="flex text-darkGray">Password</label>
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

                        <Button className='flex bg-lightPurple text-white w-[160px] p-4 mt-6' radius='sm'>Save Changes</Button>
                    </div>

                    <div className="flex flex-col mt-8 gap-2 border-darkGray/20 border p-4 rounded-md">
                        <label className="flex text-darkGray text-2xl font-semibold">Account emails</label>
                        
                        <div className="flex flex-col">
                          <label className="flex text-darkGray">Primary email: <p className='flex ml-2 text-lightPurple'>{email}</p></label>
                          <label className="flex text-darkGray">Google account: <p className='flex ml-2 text-red-600'>Not Connected Yet</p></label>
                          <label className="flex text-darkGray">Facebook account: <p className='flex ml-2 text-red-600'>Not Connected Yet</p></label>
                        </div>
                        
                    </div>

                    <div className="flex flex-col mt-8 gap-2 border-darkGray/20 border p-4 rounded-md">
                        <label className="flex text-darkGray text-2xl font-semibold">Delete Account</label>
                        <label>Deleting your account will erase all data permanently. Make sure this is what you want to do.</label>
                        <Button
                        onPress={openDeletionModal}
                        color='danger'
                        radius='sm'
                        className="flex text-white w-40">Delete this account</Button> 
                    </div>

                </div>
            </div>
        </div>

        <Modal isOpen={isDeletionOpen} onOpenChange={onOpenDeletionChange} isDismissable={false} isKeyboardDismissDisabled={true} placement='center'>
                    <ModalContent className='font-poppins text-sm'>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col">Confirm Account Deletion</ModalHeader>
                          <ModalBody className='flex flex-col'>
                            <label className='flex font-bold'>Are you sure you want to delete your account?</label>

                            <label>Important:</label>
                            <ul className='flex flex-col list-disc ml-12'>
                              <li>Deleting your account is permanent and cannot be undone.</li>
                              <li>All your data will be permanently erased, and you will lose access to any associated services or content.</li>
                            </ul>

                            <label>Please note:</label>
                            <ul className='flex flex-col list-disc ml-12'>
                              <li>If you have any pending tasks or important data, make sure to save or transfer them before proceeding.</li>
                              <li>If you're unsure or need help, please contact our support team.</li>
                            </ul>

                            <label className='flex text-[12px] font-bold'>To confirm deletion, type your account name below and click "Delete Account."</label>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" variant="light" onPress={onClose}>
                              Close
                            </Button>
                            <Button isDisabled color="danger" onPress={onClose}>
                              Delete Account
                            </Button>
                          </ModalFooter>
                        </>
                      )}
                    </ModalContent>
                  </Modal>
    </div>
  )
}

export default Account