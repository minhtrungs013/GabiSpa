import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useEffect } from 'react';

const Modal = ({ isOpen, onClose, children, title }) => {
    
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0  bg-opacity-30 flex items-start top-28 justify-center" onClick={onClose}>
                    <div onClick={(e) => e.stopPropagation()}>
                    <div className="relative border-solid shadow-soft-xl drop-shadow-lg bg-white pb-4 pt-12 px-4 rounded-lg">
                        <h3 className="text-lg !z-10 absolute top-0 left-0 p-4 text-black font-medium" >{title}</h3>
                        <FontAwesomeIcon icon={faXmark} onClick={onClose} className="text-xl  !z-10 cursor-pointer absolute top-0 right-0 p-4 text-gray-600 hover:text-gray-800" />
                        {children}
                    </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;