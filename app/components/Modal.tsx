import { div } from "framer-motion/client";
import React from "react";

interface ModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  return <>{showModal ? <div>Modal</div> : null}</>;
};

export default Modal;
