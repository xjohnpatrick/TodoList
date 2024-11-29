import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="bg-white-50 flex w-full xs:h-[2750px] sm:h-[2000px] md:h-[1800px] lg:h-[1600px] justify-center font-poppins">
      <div className="flex flex-col w-[90vw] lg:w-[80vw] 2xl:w-[60vw] h-full gap-4">
        <h1 className="flex text-3xl lg:text-4xl font-bold mt-20">
          TodoList Terms and Conditions
        </h1>
        <p className="flex text-base text-justify">
          Welcome to TodoList. By accessing or using our website application
          (collectively, &ldquo;Service&ldquo;). you agree to comply with and be
          bound by the following Terms and Conditions. If you do not agree with
          these terms, please do not use our Service.
        </p>

        <span className="flex text-lg font-bold">1. Account Registration</span>
        <p className="flex text-base text-justify">
          To use certain features of our Service, you may be required to
          register for an account. You agree to provide accurate and complete
          information during registration and to update such information to keep
          it accurate and complete. You are responsible for safeguarding your
          account credentials and for any activity that occurs under your
          account.
        </p>

        <span className="flex text-lg font-bold">2. Use of the Service</span>
        <p className="flex text-base text-justify">
          You agree to use our Service only for lawful purposes and in
          accordance with these Terms and Conditions. You are responsible for
          ensuring that your use of the Service does not violate any applicable
          laws or regulations.
        </p>

        <span className="flex text-lg font-bold">3. Prohibited Activities</span>
        <span className="flex flex-col text-base gap-4 text-justify">
          <span>You agree not to:</span>

          <ul className="flex flex-col list-disc ml-12 gap-4">
            <li>Use the Service for any illegal or unauthorized purpose.</li>
            <li>
              Interfere with or disrupt the Service or servers or networks
              connected to the Service.
            </li>
            <li>
              Engage in any activity that could damage, disable, overburden, or
              impair the Service.
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Service or
              any other accounts, systems, or networks connected to the Service.
            </li>
          </ul>
        </span>

        <span className="flex text-lg font-bold">4. User Content</span>
        <p className="flex text-base text-justify">
          You are solely responsible for any content you create, upload, or
          manage using our Service (&ldquo;User Content&ldquo;). You grant us a
          non-exclusive, worldwide, royalty-free license to use, display, and
          distribute your User Content in connection with the Service.
        </p>

        <span className="flex text-lg font-bold">5. Privacy Policy</span>
        <p className="flex text-base text-justify">
          Your use of the Service is also governed by our Privacy Policy. Please
          review the Privacy Policy to understand how we collect, use, and
          protect your personal information.
        </p>

        <span className="flex text-lg font-bold">6. Termination</span>
        <p className="flex text-base text-justify">
          We may terminate or suspend your account and access to the Service at
          our sole discretion, without prior notice or liability, for any
          reason, including if you breach these Terms and Conditions.
        </p>

        <span className="flex text-lg font-bold">
          7. Disclaimer of Warranties
        </span>
        <p className="flex text-base text-justify">
          Our Service is provided on an &ldquo;as is&ldquo; and &ldquo;as
          available&ldquo; basis. We make no warranties, express or implied,
          regarding the Service, including but not limited to, the accuracy,
          reliability, or availability of the Service.
        </p>

        <span className="flex text-lg font-bold">
          8. Limitation of Liability
        </span>
        <p className="flex text-base text-justify">
          To the fullest extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising out of or related to your use of the Service.
        </p>

        <span className="flex text-lg font-bold">9. Changes to Terms</span>
        <p className="flex text-base text-justify">
          We reserve the right to modify these Terms and Conditions at any time.
          Any changes will be effective when we post the revised Terms and
          Conditions on our website. Your continued use of the Service after
          such changes constitutes your acceptance of the revised Terms and
          Conditions.
        </p>

        <span className="flex text-lg font-bold">10. Contact Us</span>
        <p className="text-base text-justify mb-20">
          If you have any questions about these Terms and Conditions, please
          contact us at
          <span className="text-purple-100"> todolist@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
