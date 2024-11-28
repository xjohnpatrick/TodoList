import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import React from "react";

interface ModalDeleteAccProps {
  isOpen?: boolean;
  onOpenChange?: () => void;
}

export default function ModalDeleteAcc({
  isOpen,
  onOpenChange,
}: ModalDeleteAccProps) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="font-poppins"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirm Account Deletion
              </ModalHeader>
              <ModalBody className="flex flex-col text-sm lg:text-base">
                <label className="flex font-bold">
                  Are you sure you want to delete your account?
                </label>

                <label>Important:</label>
                <ul className="flex flex-col list-disc ml-12">
                  <li>
                    Deleting your account is permanent and cannot be undone.
                  </li>
                  <li>
                    All your data will be permanently erased, and you will lose
                    access to any associated services or content.
                  </li>
                </ul>

                <label>Please note:</label>
                <ul className="flex flex-col list-disc ml-12">
                  <li>
                    If you have any pending tasks or important data, make sure
                    to save or transfer them before proceeding.
                  </li>
                  <li>
                    If you're unsure or need help, please contact our support
                    team.
                  </li>
                </ul>

                <label className="inline text-[12px]">
                  To confirm deletion, type your account first name below and click{" "}
                  <span className="font-bold">"Delete Account."</span>
                </label>
                <label className="inline text-[12px]">
                  First Name:{" "}
                  <span className="font-bold text-purple-100">John Patrick</span>
                </label>
                <Input />
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="light"
                  onPress={onClose}
                  className="text-purple-100"
                >
                  Close
                </Button>
                <Button
                  color="danger"
                  variant="solid"
                  onPress={onClose}
                  isDisabled
                >
                  Delete Account
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
