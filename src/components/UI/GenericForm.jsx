import React, { useEffect, useState } from 'react';
import { handleUpload } from '../utils/utils';
import Jobs from './Jobs';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GenericForm = ({ formFields, onSubmit, isUpdate, initialData, selectData, dataJobOfServie, typeForm }) => {
    const [formData, setFormData] = useState({});
    const [jobs, setJos] = useState([]);
    const [images, setImages] = useState(initialData?.images === undefined ? [] : initialData.images)

    useEffect(() => {
        if (isUpdate && initialData) {
            setFormData(initialData);
            if (typeForm === 'serviceSpa') {
                setJos(initialData?.jobs);
            }
        }
    }, [isUpdate, initialData, typeForm]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        const checked = e.target.checked;
        setFormData((prevData) => ({ ...prevData, [name]: name === 'isActive' ? checked : value }));
    };
    const handleChangeImage = async (e) => {
        const files = e.target?.files
        const image = await handleUpload(files)
        setImages((prevImages) => [...prevImages, ...image]);
        if (typeForm !== 'serviceSpa') {
            setFormData((prevData) => ({ ...prevData, image: image[0] }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeForm === 'serviceSpa') {
            formData.jobs = jobs
            formData.images = images
        }
        onSubmit(formData);
    };

    const removeImage = (url) => {
        const newImages = images.filter(image => image !== url);
        setImages(newImages);
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-4">
            <div className={`grid ${formFields.length < 4 && '!grid-cols-2'} grid-cols-3 gap-3`}>
                {formFields.map((field) => (
                    <>
                        {field.name === 'isActive' && !isUpdate ? <></> :
                            <div key={field.name} className="mb-4">
                                <label htmlFor={field.name} className="text-sm  text-gray-600">{field.label}:</label>
                                {field.type === "file" ?
                                    <input
                                        type={field.type}
                                        multiple={typeForm === 'serviceSpa' ? true : false}
                                        onChange={handleChangeImage}
                                        required={field.required}
                                        onInvalid={e => e.target.setCustomValidity(field.textrequired)}
                                        onInput={F => F.target.setCustomValidity('')}
                                        className="text-sm p-2 w-full "
                                    />
                                    :
                                    <>
                                        {field.type === "checkbox" && isUpdate ?
                                            <div className='flex items-center justify-start pt-1'>
                                                <input
                                                    type={field.type}
                                                    id={field.name}
                                                    name={field.name}
                                                    checked={formData[field.name]}
                                                    onChange={handleChange}
                                                    className="cursor-pointer text-xl h-6 p-2 w-6 "
                                                    placeholder={field.label}
                                                />
                                            </div>
                                            :
                                            <>
                                                {field.type === "select" ?
                                                    <div className='flex items-center justify-start '>
                                                        <select id="countries" required={field.required} name={field.name} class="border rounded-lg text-sm border-gray-400 p-2 w-full" value={formData[field.name]} onChange={handleChange}>
                                                            <option value="" disabled selected>Chọn một</option>
                                                            {selectData?.map((task, index) => (
                                                                <option key={index} value={task.id}>{task.name}</option>

                                                            ))}
                                                        </select>
                                                    </div>
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
                                            </>
                                        }
                                    </>
                                }
                            </div>
                        }</>
                ))}
            </div>
            {dataJobOfServie && typeForm === 'serviceSpa' && <Jobs jobs={jobs} setJos={setJos} dataJobOfServie={dataJobOfServie} />}
            <div className='flex justify-between items-baseline'>
                <div className='flex justify-end '>
                    {images.length > 0 && images?.map((url) => (
                        <div className='p-2 relative'>
                            <FontAwesomeIcon icon={faClose} className='h-4 w-4 text-red-700 absolute right-7 cursor-pointer' onClick={() => removeImage(url)} />
                            <img src={url} alt="" className="inline-flex items-center justify-center mr-4 text-sm  transition-all duration-200 ease-soft-in-out h-16 w-16 rounded-sm" />
                        </div>
                    ))}
                </div>
                <button type="submit" className={`${!isUpdate ? " bg-green-500 " : " bg-blue-500 "} max-h-[40px] text-white px-4 py-2 rounded-lg `}>
                    {isUpdate ? 'Cập nhật' : 'Thêm'}
                </button>
            </div>
        </form >
    );
};

export default GenericForm;