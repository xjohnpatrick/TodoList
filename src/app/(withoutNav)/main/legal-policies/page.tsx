'use client'

import React from 'react'

function LegalPolicies() {

  return (
    <div className='flex items-center justify-center h-screen w-full font-poppins bg-white'>

        <div className="flex flex-col justify-center w-[850px] h-full gap-4">
            <label className="flex text-2xl font-semibold text-darkGray">Legal and Policies</label>

                <div className="flex flex-col gap-4 border-darkGray/20 border p-4 rounded-md w-full h-96">
                    <label className="flex text-lightPurple font-bold">Terms and Conditions</label>

                     <div className="flex flex-col overflow-y-scroll p-4 gap-8">
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
                        </div>
                </div>


                <div className="flex flex-col gap-4 border-darkGray/20 border p-4 rounded-md w-full h-96">
                    <label className="flex text-lightPurple font-bold">Privacy Policy</label>
                    <label className='flex italic text-[12px]'>Last Updated: September 15, 2024</label>

                    <div className="flex flex-col overflow-y-scroll p-4 gap-8">
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
                    </div>
                    
                </div>

        </div>
        
    </div>
  )
}

export default LegalPolicies