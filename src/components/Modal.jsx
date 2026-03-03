import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, children }) => {
    if(!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose}></div>

        <div className="relative z-50 bg-deepNavy rounded-xl w-96 p-6 border border-amberGold">
            <button onClick={onClose} className="absolute top-3 right-3 text-rosePink cursor-pointer hover:text-amberGold text-xl">
                <FaTimes/>
            </button>
            {children}
        </div>
    </div>
  )
}

export default Modal