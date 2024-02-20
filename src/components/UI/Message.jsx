import React, { useEffect } from 'react';

const Message = ({ id, type, message, onHide }) => {
    let bgColor = '';
    let textColor = '';

    switch (type) {
        case 'success':
            bgColor = 'bg-green-500';
            textColor = 'text-white';
            break;
        case 'error':
            bgColor = 'bg-red-500';
            textColor = 'text-white';
            break;
        case 'warning':
            bgColor = 'bg-yellow-500';
            textColor = 'text-black';
            break;
        default:
            bgColor = 'bg-blue-500';
            textColor = 'text-white';
    }

    useEffect(() => {
        const timeout = setTimeout(() => {

            onHide(id);
        }, 5000);
        console.log(id);
        return () => {
            clearTimeout(timeout);
        };
    }, [onHide, id]);

    return (
        <div className={`message-item p-4 ${bgColor} ${textColor} rounded-md shadow-md mb-4`}>
            {message}
        </div>
    );
};

export default Message;
