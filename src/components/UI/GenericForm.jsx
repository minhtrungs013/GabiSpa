import React, { useEffect, useState } from 'react';
import { handleUpload } from '../utils/utils';

const GenericForm = ({ formFields, onSubmit, isUpdate, initialData }) => {
    const [formData, setFormData] = useState({});
    const [images, setImages] = useState([initialData?.image]);
    useEffect(() => {
        if (isUpdate && initialData) {
            setFormData(initialData);
        }
    }, [isUpdate, initialData]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleChangeImage = async (e) => {
        const files = e.target?.files
        const image = await handleUpload(files)
        setImages((prevImages) => [...prevImages, ...image]);
        setFormData((prevData) => ({ ...prevData, image: image[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-4">
            <div className='grid grid-cols-3 gap-3'>
                {formFields.map((field) => (
                    <div key={field.name} className="mb-4">
                        <label htmlFor={field.name} className="text-sm  text-gray-600">{field.label}:</label>
                        {field.type === "file" ?
                            <input
                                type={field.type}
                                onChange={handleChangeImage}
                                className="text-sm p-2 w-full "
                            />
                            :
                            <input
                                type={field.type || 'text'}
                                id={field.name}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                className="border rounded-lg text-sm border-gray-400 p-2 w-full "
                                required={field.required}
                                onInvalid={e => e.target.setCustomValidity(field.textrequired)}
                                onInput={F => F.target.setCustomValidity('')}
                                placeholder={field.label}
                            />
                        }
                    </div>
                ))}
            </div>
            <div className='flex justify-between items-baseline'>
                <div className='flex justify-end '>
                    {images.length > 0 && images?.map((url) => (
                        <img src={url} alt="" className="inline-flex items-center justify-center mr-4 text-sm  transition-all duration-200 ease-soft-in-out h-16 w-16 rounded-sm" />
                    ))}
                </div>
                <button type="submit" className={`${!isUpdate ? " bg-green-500 " : " bg-blue-500 "} max-h-[40px] text-white px-4 py-2 rounded-lg `}>
                    {isUpdate ? 'Cập nhật' : 'Thêm'}
                </button>
            </div>
        </form>
    );
};

export default GenericForm;