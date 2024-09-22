'use client'

import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { IoMdRocket } from "@react-icons/all-files/io/IoMdRocket";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { IoMail } from "@react-icons/all-files/io5/IoMail";
import { FaKey } from "@react-icons/all-files/fa6/FaKey";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { IoCloseCircle } from "@react-icons/all-files/io5/IoCloseCircle";

import { Button } from '@nextui-org/button';
import { Checkbox } from "@nextui-org/checkbox";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure} from "@nextui-org/modal";

import '../auth.css'
import { signUp } from './signUpFunctions';

export default function Signup() {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const { isOpen: isTermsOpen, onOpen: openTermsModal, onOpenChange: onTermsChange } = useDisclosure();
    const { isOpen: isPrivacyOpen, onOpen: openPrivacyModal, onOpenChange: onPrivacyChange } = useDisclosure();

    const router = useRouter();

    const clearInputFirstName = () => {
        setFirstName('');
    }
    const clearInputEmail = () => {
        setEmail('');
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        checkPasswordMatch(e.target.value, confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        checkPasswordMatch(password, e.target.value);
    };

    const checkPasswordMatch = (password, confirmPassword) => {
        if (confirmPassword && password !== confirmPassword) {
            setError("Passwords do not match");
            setDisable(true);
        } else {
            setError("");
            setDisable(false);
        }
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (!checkboxChecked) {
            setError('You must agree to the Terms and Conditions and Privacy Policy.');
            setLoading(false);
            setTimeout(() => {
                setError(''); // Clear the error message
              }, 3000); 
            return;
          }
        try {
          await signUp(firstName, email, password);
          setFirstName('');
          setEmail('');
          setPassword('');
          // Redirect upon successful sign-up
          router.push('/auth/sign-in');
        } catch (error) {
            setError(error.message);
            setTimeout(() => {
                setError(''); // Clear the error message
              }, 3000); 
          } finally {
            setLoading(false);
          }
      };

  return (
        <div className='flex bg-white w-full h-screen justify-center items-center dark:bg-[#262c40] font-poppins'>
            <div className="flex w-full items-center flex-col mr-[150px] xxsm:mr-[50px] xsm:mr-0">
                <div className="flex text-[#2B2B2B] text-4xl dark:text-[#f2f7fb] font-bold mb-12">Sign up to
                    <div className="flex items-center">
                    <IoMdRocket width={22} height={36} color="#839dd1"/>
                    <span className="text-[#6374ae] dark:text-[#9cb6dd] ">to</span>
                    <span className="text-[#4a5989] dark:text-[#6a7fc1]">do</span>
                    </div>
                </div>

                
                    <form onSubmit={handleSubmit} className='flex flex-col items-center w-full'>
                    <div className="flex relative">
                    <FaUser 
                        className="absolute left-3 top-4 text-white"
                        size={18}
                        />
                        <input 
                        type="text" 
                        value={firstName} 
                        className='flex w-[317px] bg-[#6a7fc1] text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md mb-5' 
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        />
                        <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">First Name</label>
                        <IoCloseCircle
                            className={`absolute right-3 top-4 text-white cursor-pointer ${firstName ? 'flex' : 'hidden'}`} 
                            size={18}
                            onClick={clearInputFirstName}
                        />
                    </div>
                    
                    <div className="flex relative">
                    <IoMail 
                        className="absolute left-3 top-4 text-white"
                        size={18}
                        />
                        <input 
                        type="email"
                        value={email} 
                        className='flex w-[317px] bg-[#6a7fc1] text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md mb-5' 
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                        <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">Email</label>
                        <IoCloseCircle
                            className={`absolute right-3 top-4 text-white cursor-pointer ${email ? 'flex' : 'hidden'}`} 
                            size={18}
                            onClick={clearInputEmail}
                        />
                    </div>

                    <div className="flex relative">
                    <FaKey 
                        className="absolute left-3 top-4 text-white"
                        size={18}
                        />
                        <input 
                        type="password"
                        value={password} 
                        className='flex w-[317px] bg-[#6a7fc1] text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md mb-5' 
                        placeholder='Password'
                        onChange={handlePasswordChange}
                        required
                        />
                        <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">Password</label>
                    </div>

                    <div className="flex relative">
                    <FaKey 
                        className="absolute left-3 top-4 text-white"
                        size={18}
                        />
                        <input 
                        type="password"
                        value={confirmPassword}
                        className='flex w-[317px] bg-[#6a7fc1] text-white outline-none py-3.5 pl-10 pr-3 placeholder:text-transparent rounded-md mb-5' 
                        placeholder='Confirm Password'
                        onChange={handleConfirmPasswordChange}
                        required
                        />
                        <label className="absolute left-10 top-3.5 text-white/70 transition-all duration-200 ease-out pointer-events-none">Confirm Password</label>
                    </div>

                    <div className="flex text-blue text-[12px] w-80 text-justify">
                        <Checkbox
                        checked={checkboxChecked}
                        onChange={() => setCheckboxChecked(!checkboxChecked)}
                        required/>
                        <span>
                            By signing up, you agree to our <a onClick={openTermsModal} className="text-lightPurple cursor-pointer hover:underline">Terms and Conditions</a> and <a onClick={openPrivacyModal} className="text-lightPurple cursor-pointer hover:underline">Privacy Policy.</a>
                        </span>
                    </div>

                    <div className="flex relative items-center">

                    <Button 
                    type='submit'
                    isLoading={loading}
                    size='lg'
                    isDisabled={disable}
                    className='flex bg-[#414e6e] text-white dark:bg-white dark:text-[#2B2B2B] w-[317px] rounded-md justify-center my-5 p-3'>
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </Button>

                    </div>
                   
                    {error && (
                     <div className="flex absolute text-white bg-red-500 rounded-md p-4 text-sm bottom-4 right-6">
                        <p>{error}</p>
                    </div>
                    )}
                    
                    </form>


                {/* <div className="flex mt-5 items-center gap-7">
                    <div className="flex bg-completed dark:bg-white h-0.5 w-[120px]"></div>
                    <div className="flex text-completed dark:text-white text-md">or</div>
                    <div className="flex bg-completed dark:bg-white h-0.5 w-[120px]"></div>
                </div>
                <div className="flex flex-col items-center mb-5">
                    <Button size='lg' className='flex w-[317px] rounded-md mt-5 p-3 gap-2 text-white bg-lightBlue'><FcGoogle size={22} />Sign up with Google</Button>
                    <Button size='lg' className='flex w-[317px] rounded-md mt-5 p-3 text-white bg-lightBlue gap-2'><FaFacebook size={22} style={{ color: '#f2f2f2' }} />Sign up with Facebook</Button>
                </div> */}

                <Link href="/auth/sign-in"><button className="flex text-[#414e6e] dark:text-white items-center hover:underline">Already have an account?</button></Link>
            </div>
            
            <Modal placement='center' size='md' isOpen={isTermsOpen} onOpenChange={onTermsChange} className='flex h-[500px] sm:h-[800px]'>
                        <ModalContent className='flex font-poppins'>
                        {(onClose) => (
                            <>
                            <ModalHeader className="flex flex-col gap-1 text-lightPurple font-bold">Terms and Conditions</ModalHeader>
                            <ModalBody className='flex overflow-y-scroll scrollbar-hide'>
                                <label className='flex text-md font-bold'>1. Introduction</label>
                                <p className='flex text-sm text-justify'> 
                                Welcome to TodoList. By accessing or using our website and application and application (collectively, "Service"). 
                                you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use our Service.
                                </p>

                                <label className='flex text-md font-bold'>2. Account Registration</label>
                                <p className='flex text-sm text-justify'> 
                                To use certain features of our Service, you may be required to register for an account. 
                                You agree to provide accurate and complete information during registration and to update such information to keep it accurate and complete. 
                                You are responsible for safeguarding your account credentials and for any activity that occurs under your account.
                                </p>

                                <label className='flex text-md font-bold'>3. Use of the Service</label>
                                <p className='flex text-sm text-justify'> 
                                You agree to use our Service only for lawful purposes and in accordance with these Terms and Conditions. 
                                You are responsible for ensuring that your use of the Service does not violate any applicable laws or regulations.
                                </p>

                                <label className='flex text-md font-bold'>4. Prohibited Activities</label>
                                <span className='flex flex-col text-sm gap-4 text-justify'> 
                                    <label>You agree not to:</label>

                                    <ul className='flex flex-col list-disc ml-12 gap-4'>
                                        <li>Use the Service for any illegal or unauthorized purpose.</li>
                                        <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
                                        <li>Engage in any activity that could damage, disable, overburden, or impair the Service.</li>
                                        <li>Attempt to gain unauthorized access to any part of the Service or any other accounts, systems, or networks connected to the Service.</li>
                                    </ul>
                                </span>

                                <label className='flex text-md font-bold'>5. User Content</label>
                                <p className='flex text-sm text-justify'> 
                                You are solely responsible for any content you create, upload, or manage using our Service ("User Content"). 
                                You grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your User Content in connection with the Service.
                                </p>

                                <label className='flex text-md font-bold'>6. Privacy Policy</label>
                                <p className='flex text-sm text-justify'> 
                                Your use of the Service is also governed by our Privacy Policy. 
                                Please review the Privacy Policy to understand how we collect, use, and protect your personal information.
                                </p>

                                <label className='flex text-md font-bold'>7. Termination</label>
                                <p className='flex text-sm text-justify'> 
                                We may terminate or suspend your account and access to the Service at our sole discretion, 
                                without prior notice or liability, for any reason, including if you breach these Terms and Conditions.
                                </p>

                                <label className='flex text-md font-bold'>8. Disclaimer of Warranties</label>
                                <p className='flex text-sm text-justify'> 
                                Our Service is provided on an "as is" and "as available" basis. We make no warranties, express or implied, 
                                regarding the Service, including but not limited to, the accuracy, reliability, or availability of the Service.
                                </p>

                                <label className='flex text-md font-bold'>9. Limitation of Liability</label>
                                <p className='flex text-sm text-justify'> 
                                To the fullest extent permitted by law, we shall not be liable for any indirect, 
                                incidental, special, consequential, or punitive damages arising out of or related to your use of the Service.
                                </p>

                                <label className='flex text-md font-bold'>10. Changes to Terms</label>
                                <p className='flex text-sm text-justify'> 
                                We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective when we post the revised Terms and Conditions on our website. 
                                Your continued use of the Service after such changes constitutes your acceptance of the revised Terms and Conditions.
                                </p>

                                <label className='flex text-md font-bold'>11. Contact Us</label>
                                <p className='text-sm text-justify'> 
                                If you have any questions about these Terms and Conditions, please contact us at 
                                <span className="text-lightPurple"> todolist@gmail.com</span>
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button variant="light" className='text-lightPurple' onPress={onClose}>
                                Close
                                </Button>
                            </ModalFooter>
                            </>
                        )}
                        </ModalContent>
                        </Modal>

            <Modal placement='center' size='md' isOpen={isPrivacyOpen} onOpenChange={onPrivacyChange} className='flex h-[500px] sm:h-[800px]'>
            <ModalContent className='flex font-poppins overflow-y-scroll scrollbar-hide'>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-lightPurple font-bold">Privacy Policy
                <label className='flex italic text-[12px]'>Last Updated: September 15, 2024</label>
                </ModalHeader>
                <ModalBody className='flex overflow-y-scroll scrollbar-hide'>
                    <label className='flex text-md font-bold'>1. Information We Collect</label>
                    <label className='flex text-sm font-bold'>Personal Information</label>
                    <p className='flex text-sm text-justify'> 
                    When you sign up for an account, we may collect personal information such as:
                    </p>
                    <ul className='flex flex-col text-sm list-disc ml-12'>
                        <li>Your name</li>
                        <li>Your email address</li>
                        <li>Password (encrypted)</li>
                    </ul>

                    <label className='flex text-md font-bold'>2. How We Use Your Information</label>
                        <p className='flex text-sm text-justify'> 
                        We use the information we collect in the following ways:
                        </p>
                    <ul className='flex flex-col text-sm list-disc ml-12'>
                        <li>To provide, operate, and maintain our Service</li>
                        <li>To improve and personalize your experience</li>
                        <li>To send administrative information such as updates, security alerts, and support</li>
                        <li>To monitor usage and detect fraudulent or suspicious activities</li>
                    </ul>

                    <label className='flex text-md font-bold'>3. Data Security</label>
                        <p className='flex text-sm text-justify'> 
                        We implement a variety of security measures to protect your personal data, including:
                        </p>
                    <ul className='flex flex-col text-sm list-disc ml-12'>
                        <li>Encryption of sensitive data such as passwords</li>
                        <li>Regular monitoring of our systems to detect vulnerabilities</li>
                        <li>Restricted access to personal information</li>
                    </ul>
                    <p className='flex text-[12px] text-justify'>However, 
                        no method of transmission over the Internet or electronic storage is 
                        100% secure, and we cannot guarantee absolute security.
                    </p>

                    <label className='flex text-md font-bold'>4. Sharing of Your Information</label>
                        <p className='flex text-sm text-justify'> 
                        We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following cases:
                        </p>
                    <ul className='flex flex-col text-sm list-disc ml-12'>
                        <li>To comply with legal obligations</li>
                        <li>To protect and defend the rights or property of ToDoList</li>
                        <li>To prevent fraud or investigate security issues</li>
                    </ul>

                    <label className='flex text-md font-bold'>5. Your Data Rights</label>
                        <p className='flex text-sm text-justify'> 
                        You have the following rights concerning your personal data:
                        </p>
                    <ul className='flex flex-col text-sm list-disc ml-12'>
                        <li>Access: You can request a copy of the personal data we hold about you.</li>
                        <li>Correction: You can ask us to update or correct inaccurate data.</li>
                        <li>Deletion: You can request that we delete your account and personal data, subject to legal requirements.</li>
                    </ul>
                    <p className='flex text-[12px] text-justify'>
                        If you wish to exercise any of these rights, please contact us at todolist@gmail.com.
                    </p>

                    <label className='flex text-md font-bold'>6. Cookies</label>
                        <p className='flex text-sm text-justify'> 
                        We use cookies and similar tracking technologies to track the activity on our Service and store certain information. 
                        Cookies are files with a small amount of data that may include an anonymous unique identifier.
                        </p>
                        <p className='flex text-sm text-justify'>You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. 
                            However, if you do not accept cookies, some portions of the Service may be unavailable.
                        </p>
                    
                    <label className='flex text-md font-bold'>7. Third-Party Services</label>
                        <p className='flex text-sm text-justify'> 
                        Our Service may contain links to third-party services. We are not responsible for the privacy practices or the content of third-party services.
                        </p>

                    <label className='flex text-md font-bold'>8. Changes to This Privacy Policy</label>
                        <p className='flex text-sm text-justify'> 
                        We may update our Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" 
                        date at the top of this policy. We encourage you to review this Privacy Policy periodically for any updates.
                        </p>

                    <label className='flex text-md font-bold'>9. Contact Us</label>
                        <p className='text-sm text-justify'> 
                        If you have any questions or concerns about this Privacy Policy, please contact us at 
                        <span className="text-lightPurple"> todolist@gmail.com</span>
                        </p>
                        <p className='flex text-sm text-justify'>
                        By using our Service, you agree to this Privacy Policy.
                        </p>
                </ModalBody>
                <ModalFooter>
                    <Button variant="light" className='text-lightPurple' onPress={onClose}>
                    Close
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
            </Modal>
        </div>
  )
}
