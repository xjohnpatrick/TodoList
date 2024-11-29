import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white-50 flex w-full xs:h-[2350px] sm:h-[2100px] md:h-[1950px] lg:h-[1850px] justify-center font-poppins">
      <div className="flex flex-col w-[90vw] lg:w-[80vw] 2xl:w-[60vw] h-full gap-4">
        <h1 className="flex text-4xl font-bold mt-20">Privacy Policy</h1>
        <span className="text-purple-100 text-base">
          Updated: November 29, 2024
        </span>
        <span className="flex text-lg font-bold">
          1. Information We Collect
        </span>
        <span className="flex text-base font-bold">Personal Information</span>
        <p className="flex text-base text-justify">
          When you sign up for an account, we may collect personal information
          such as:
        </p>
        <ul className="flex flex-col text-base list-disc ml-12">
          <li>Your name</li>
          <li>Your email address</li>
          <li>Password (encrypted)</li>
        </ul>

        <span className="flex text-lg font-bold">
          2. How We Use Your Information
        </span>
        <p className="flex text-base text-justify">
          We use the information we collect in the following ways:
        </p>
        <ul className="flex flex-col text-base list-disc ml-12">
          <li>To provide, operate, and maintain our Service</li>
          <li>To improve and personalize your experience</li>
          <li>
            To send administrative information such as updates, security alerts,
            and support
          </li>
          <li>
            To monitor usage and detect fraudulent or suspicious activities
          </li>
        </ul>

        <span className="flex text-lg font-bold">3. Data Security</span>
        <p className="flex text-base text-justify">
          We implement a variety of security measures to protect your personal
          data, including:
        </p>
        <ul className="flex flex-col text-base list-disc ml-12">
          <li>Encryption of sensitive data such as passwords</li>
          <li>Regular monitoring of our systems to detect vulnerabilities</li>
          <li>Restricted access to personal information</li>
        </ul>
        <p className="flex text-[12px] text-justify">
          However, no method of transmission over the Internet or electronic
          storage is 100% secure, and we cannot guarantee absolute security.
        </p>

        <span className="flex text-lg font-bold">
          4. Sharing of Your Information
        </span>
        <p className="flex text-base text-justify">
          We do not sell, trade, or otherwise transfer your personal information
          to third parties, except in the following cases:
        </p>
        <ul className="flex flex-col text-base list-disc ml-12">
          <li>To comply with legal obligations</li>
          <li>To protect and defend the rights or property of ToDoList</li>
          <li>To prevent fraud or investigate security issues</li>
        </ul>

        <span className="flex text-lg font-bold">5. Your Data Rights</span>
        <p className="flex text-base text-justify">
          You have the following rights concerning your personal data:
        </p>
        <ul className="flex flex-col text-base list-disc ml-12">
          <li>
            Access: You can request a copy of the personal data we hold about
            you.
          </li>
          <li>
            Correction: You can ask us to update or correct inaccurate data.
          </li>
          <li>
            Deletion: You can request that we delete your account and personal
            data, subject to legal requirements.
          </li>
        </ul>
        <p className="flex text-[12px] text-justify">
          If you wish to exercise any of these rights, please contact us at
          todolist@gmail.com.
        </p>

        <span className="flex text-lg font-bold">6. Cookies</span>
        <p className="flex text-base text-justify">
          We use cookies and similar tracking technologies to track the activity
          on our Service and store certain information. Cookies are files with a
          small amount of data that may include an anonymous unique identifier.
        </p>
        <p className="flex text-base text-justify">
          You can instruct your browser to refuse all cookies or indicate when a
          cookie is being sent. However, if you do not accept cookies, some
          portions of the Service may be unavailable.
        </p>

        <span className="flex text-lg font-bold">7. Third-Party Services</span>
        <p className="flex text-base text-justify">
          Our Service may contain links to third-party services. We are not
          responsible for the privacy practices or the content of third-party
          services.
        </p>

        <span className="flex text-lg font-bold">
          8. Changes to This Privacy Policy
        </span>
        <p className="flex text-base text-justify">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by updating the &ldquo;Last Updated&ldquo; date at the
          top of this policy. We encourage you to review this Privacy Policy
          periodically for any updates.
        </p>

        <span className="flex text-lg font-bold">9. Contact Us</span>
        <p className="text-base text-justify">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at
          <span className="text-purple-100"> todolist@gmail.com</span>
        </p>
        <p className="flex text-base text-justify mb-20">
          By using our Service, you agree to this Privacy Policy.
        </p>
      </div>
    </div>
  );
}
