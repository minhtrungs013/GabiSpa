import React, { useState } from 'react';

const MultiSelect = ({ options, onChange }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const toggleOption = (option) => {
        const isSelected = selectedOptions.includes(option);

        if (isSelected) {
            setSelectedOptions((prevOptions) =>
                prevOptions.filter((selected) => selected !== option)
            );
        } else {
            setSelectedOptions((prevOptions) => [...prevOptions, option]);
        }
    };

    return (
        <div className="relative">
            <div
                className="flex items-center justify-between w-full p-2 border border-gray-300 rounded-md cursor-pointer"
                onClick={() => { }}
            >
                {selectedOptions.length > 0 ? (
                    <span>{selectedOptions.join(', ')}</span>
                ) : (
                    <span className="text-gray-500">Chọn các option</span>
                )}
            </div>
            {selectedOptions.length > 0 && (
                <div className="absolute z-50 mt-2 w-full bg-white border border-gray-300 rounded-md">
                    {options.map((option) => (
                        <div
                            key={option}
                            className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => toggleOption(option)}
                        >
                            <input
                                type="checkbox"
                                className="mr-2 cursor-pointer"
                                checked={selectedOptions.includes(option)}
                                readOnly
                            />
                            <span>{option}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


export default MultiSelect;
