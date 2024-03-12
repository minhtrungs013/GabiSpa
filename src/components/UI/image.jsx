import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';

export default function Image({ images }) {
    const [indexImage, setIndexImage] = useState(1);
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef(null);

    const prevAndNext = (key) => {
        if (key === 1 && indexImage < images.length) {
            setIndexImage(indexImage + 1);
        } else if (key === 0 && indexImage !== 1) {
            setIndexImage(indexImage - 1);
        } else if (key === 0 && indexImage === 1) {
            setIndexImage(images.length);
        } else if (key === 1 && indexImage === images.length) {
            setIndexImage(1);
        }
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        let intervalId;
        if (!isHovered) {
            intervalId = setInterval(() => {
                if (indexImage < images.length) {
                    setIndexImage(indexImage + 1);
                } else {
                    setIndexImage(1);
                }
            }, 5000);
        }

        return () => clearInterval(intervalId);
    }, [indexImage, images, isHovered]);

    useEffect(() => {
        const container = containerRef.current;
        if (container && indexImage >= 0 && images && indexImage < images.length && !isHovered) {
            const selectedImage = container.children[indexImage];
            container.scrollLeft = selectedImage.offsetLeft - (container.clientWidth - selectedImage.clientWidth) / 1;
        }
    }, [indexImage, images, isHovered]);

    return (
        <div className='relative'>
            <div className="pt-6 pb-3 ">
                <img className={`min-h-[325px] max-h-[325px]`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={images && images.length > 0 && images[indexImage - 1]} alt="" />
            </div>
            <FontAwesomeIcon className='absolute left-0 bottom-0 py-8 hover:opacity-70 hover:bg-slate-300 px-2 cursor-pointer ' icon={faAngleLeft} onClick={() => prevAndNext(0)} />
            <div className={`flex justify-center overflow-x-auto ${images && images.length > 3 && '!justify-start' }`} ref={containerRef} style={{ overflowX: 'hidden', whiteSpace: 'nowrap' }}>
                {images && images.length > 0 && images?.map((url, index) => (
                    <img key={index}
                        className={`h-20 w-24 mx-2 cursor-pointer image-thumbnail ${indexImage - 1 === index && 'selected'}`}
                        src={images && images.length > 0 && url} alt=""
                        onClick={() => setIndexImage(index + 1)}
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                ))}
            </div>
            <FontAwesomeIcon className='absolute right-0 bottom-0 hover:opacity-70 hover:bg-slate-300 py-8 px-2 cursor-pointer' icon={faAngleRight} onClick={() => prevAndNext(1)} />
        </div>
    )
}
