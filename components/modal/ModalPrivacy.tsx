import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

import { Button } from "@nextui-org/button";

interface ModalPrivacyProps {
  isPrivacyOpen?: boolean;
  onPrivacyChange?: () => void;
}

const ModalPrivacy = ({
  isPrivacyOpen,
  onPrivacyChange,
}: ModalPrivacyProps) => {
  return (
    <Modal
      placement="bottom-center"
      size="md"
      isOpen={isPrivacyOpen}
      onOpenChange={onPrivacyChange}
      className="flex h-[500px] sm:h-[800px]"
    >
      <ModalContent className="flex font-poppins overflow-y-scroll scrollbar-hide">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-purple-100 font-bold">
              Privacy Policy
              <label className="flex italic text-[12px]">
                Last Updated: September 15, 2024
              </label>
            </ModalHeader>
            <ModalBody className="flex overflow-y-scroll scrollbar-hide">
              <label className="flex text-md font-bold">
                1. Information We Collect
              </label>
              <label className="flex text-sm font-bold">
                Personal Information
              </label>
              <p className="flex text-sm text-justify">
                When you sign up for an account, we may collect personal
                information such as:
              </p>
              <ul className="flex flex-col text-sm list-disc ml-12">
                <li>Your name</li>
                <li>Your email address</li>
                <li>Password (encrypted)</li>
              </ul>

              <label className="flex text-md font-bold">
                2. How We Use Your Information
              </label>
              <p className="flex text-sm text-justify">
                We use the information we collect in the following ways:
              </p>
              <ul className="flex flex-col text-sm list-disc ml-12">
                <li>To provide, operate, and maintain our Service</li>
                <li>To improve and personalize your experience</li>
                <li>
                  To send administrative information such as updates, security
                  alerts, and support
                </li>
                <li>
                  To monitor usage and detect fraudulent or suspicious
                  activities
                </li>
              </ul>

              <label className="flex text-md font-bold">3. Data Security</label>
              <p className="flex text-sm text-justify">
                We implement a variety of security measures to protect your
                personal data, including:
              </p>
              <ul className="flex flex-col text-sm list-disc ml-12">
                <li>Encryption of sensitive data such as passwords</li>
                <li>
                  Regular monitoring of our systems to detect vulnerabilities
                </li>
                <li>Restricted access to personal information</li>
              </ul>
              <p className="flex text-[12px] text-justify">
                However, no method of transmission over the Internet or
                electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>

              <label className="flex text-md font-bold">
                4. Sharing of Your Information
              </label>
              <p className="flex text-sm text-justify">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties, except in the following cases:
              </p>
              <ul className="flex flex-col text-sm list-disc ml-12">
                <li>To comply with legal obligations</li>
                <li>
                  To protect and defend the rights or property of ToDoList
                </li>
                <li>To prevent fraud or investigate security issues</li>
              </ul>

              <label className="flex text-md font-bold">
                5. Your Data Rights
              </label>
              <p className="flex text-sm text-justify">
                You have the following rights concerning your personal data:
              </p>
              <ul className="flex flex-col text-sm list-disc ml-12">
                <li>
                  Access: You can request a copy of the personal data we hold
                  about you.
                </li>
                <li>
                  Correction: You can ask us to update or correct inaccurate
                  data.
                </li>
                <li>
                  Deletion: You can request that we delete your account and
                  personal data, subject to legal requirements.
                </li>
              </ul>
              <p className="flex text-[12px] text-justify">
                If you wish to exercise any of these rights, please contact us
                at todolist@gmail.com.
              </p>

              <label className="flex text-md font-bold">6. Cookies</label>
              <p className="flex text-sm text-justify">
                We use cookies and similar tracking technologies to track the
                activity on our Service and store certain information. Cookies
                are files with a small amount of data that may include an
                anonymous unique identifier.
              </p>
              <p className="flex text-sm text-justify">
                You can instruct your browser to refuse all cookies or indicate
                when a cookie is being sent. However, if you do not accept
                cookies, some portions of the Service may be unavailable.
              </p>

              <label className="flex text-md font-bold">
                7. Third-Party Services
              </label>
              <p className="flex text-sm text-justify">
                Our Service may contain links to third-party services. We are
                not responsible for the privacy practices or the content of
                third-party services.
              </p>

              <label className="flex text-md font-bold">
                8. Changes to This Privacy Policy
              </label>
              <p className="flex text-sm text-justify">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by updating the "Last Updated" date at
                the top of this policy. We encourage you to review this Privacy
                Policy periodically for any updates.
              </p>

              <label className="flex text-md font-bold">9. Contact Us</label>
              <p className="text-sm text-justify">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at
                <span className="text-purple-100"> todolist@gmail.com</span>
              </p>
              <p className="flex text-sm text-justify">
                By using our Service, you agree to this Privacy Policy.
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

export default ModalPrivacy;
