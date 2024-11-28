import React from "react";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

interface ModalTermsProps {
    isTermsOpen?: boolean;
    onTermsChange?: () => void;
}

export default function ModalTerms ({ isTermsOpen, onTermsChange }: ModalTermsProps) {
  return (
    <Modal
      placement="bottom-center"
      size="md"
      isOpen={isTermsOpen}
      onOpenChange={onTermsChange}
      className="flex h-[500px] sm:h-[800px]"
    >
      <ModalContent className="flex font-poppins">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-purple-100 font-bold">
              Terms and Conditions
            </ModalHeader>
            <ModalBody className="flex overflow-y-scroll scrollbar-hide">
              <label className="flex text-md font-bold">1. Introduction</label>
              <p className="flex text-sm text-justify">
                Welcome to TodoList. By accessing or using our website and
                application and application (collectively, "Service"). you agree
                to comply with and be bound by the following Terms and
                Conditions. If you do not agree with these terms, please do not
                use our Service.
              </p>

              <label className="flex text-md font-bold">
                2. Account Registration
              </label>
              <p className="flex text-sm text-justify">
                To use certain features of our Service, you may be required to
                register for an account. You agree to provide accurate and
                complete information during registration and to update such
                information to keep it accurate and complete. You are
                responsible for safeguarding your account credentials and for
                any activity that occurs under your account.
              </p>

              <label className="flex text-md font-bold">
                3. Use of the Service
              </label>
              <p className="flex text-sm text-justify">
                You agree to use our Service only for lawful purposes and in
                accordance with these Terms and Conditions. You are responsible
                for ensuring that your use of the Service does not violate any
                applicable laws or regulations.
              </p>

              <label className="flex text-md font-bold">
                4. Prohibited Activities
              </label>
              <span className="flex flex-col text-sm gap-4 text-justify">
                <label>You agree not to:</label>

                <ul className="flex flex-col list-disc ml-12 gap-4">
                  <li>
                    Use the Service for any illegal or unauthorized purpose.
                  </li>
                  <li>
                    Interfere with or disrupt the Service or servers or networks
                    connected to the Service.
                  </li>
                  <li>
                    Engage in any activity that could damage, disable,
                    overburden, or impair the Service.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the
                    Service or any other accounts, systems, or networks
                    connected to the Service.
                  </li>
                </ul>
              </span>

              <label className="flex text-md font-bold">5. User Content</label>
              <p className="flex text-sm text-justify">
                You are solely responsible for any content you create, upload,
                or manage using our Service ("User Content"). You grant us a
                non-exclusive, worldwide, royalty-free license to use, display,
                and distribute your User Content in connection with the Service.
              </p>

              <label className="flex text-md font-bold">
                6. Privacy Policy
              </label>
              <p className="flex text-sm text-justify">
                Your use of the Service is also governed by our Privacy Policy.
                Please review the Privacy Policy to understand how we collect,
                use, and protect your personal information.
              </p>

              <label className="flex text-md font-bold">7. Termination</label>
              <p className="flex text-sm text-justify">
                We may terminate or suspend your account and access to the
                Service at our sole discretion, without prior notice or
                liability, for any reason, including if you breach these Terms
                and Conditions.
              </p>

              <label className="flex text-md font-bold">
                8. Disclaimer of Warranties
              </label>
              <p className="flex text-sm text-justify">
                Our Service is provided on an "as is" and "as available" basis.
                We make no warranties, express or implied, regarding the
                Service, including but not limited to, the accuracy,
                reliability, or availability of the Service.
              </p>

              <label className="flex text-md font-bold">
                9. Limitation of Liability
              </label>
              <p className="flex text-sm text-justify">
                To the fullest extent permitted by law, we shall not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages arising out of or related to your use of the
                Service.
              </p>

              <label className="flex text-md font-bold">
                10. Changes to Terms
              </label>
              <p className="flex text-sm text-justify">
                We reserve the right to modify these Terms and Conditions at any
                time. Any changes will be effective when we post the revised
                Terms and Conditions on our website. Your continued use of the
                Service after such changes constitutes your acceptance of the
                revised Terms and Conditions.
              </p>

              <label className="flex text-md font-bold">11. Contact Us</label>
              <p className="text-sm text-justify">
                If you have any questions about these Terms and Conditions,
                please contact us at
                <span className="text-purple-100"> todolist@gmail.com</span>
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="light"
                className="text-purple-100"
                onPress={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
