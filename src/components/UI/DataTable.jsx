import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link từ thư viện react-router-dom

const DataTable = ({ columnNames, data, handleUpdateUser, deleteUser }) => {
    const fakeData = [

    ]

    return (
        <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
            <thead className="align-bottom">
                <tr>
                    {columnNames?.map((columnName, index) => (
                        <th key={index} className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-800 ">{columnName}</th>
                    ))}
                    <th className="px-6 py-3 font-bold  uppercase align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-800 ">thao tác</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columnNames?.map((columnName, columnIndex) => (
                            <td key={columnIndex} className={`p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ${columnName.className || ''}`}>
                                {columnName.field === 'imageURL' ? (
                                    // Nếu là ảnh, hiển thị ảnh
                                    <img
                                        src={item[columnName.field]}
                                        alt={columnName.name}
                                        className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-soft-in-out h-9 w-9 rounded-xl"
                                    />
                                ) : (
                                    // Nếu không phải là ảnh, hiển thị giá trị bình thường
                                    item[columnName.field]
                                )}
                            </td>
                        ))}
                        <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparen">
                            <Link onClick={() => handleUpdateUser(index + 1)} className="text-xs font-semibold leading-tight text-yellow-500 mr-4">
                                <FontAwesomeIcon icon={faPenToSquare} className="" /> Edit
                            </Link>
                            <Link onClick={() => deleteUser(index + 1)} className="text-xs font-semibold leading-tight text-red-500">
                                <FontAwesomeIcon icon={faTrashCan} /> Del
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
