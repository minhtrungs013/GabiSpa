import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RenderStars = (rating) => {
    const fullStars = 5;
    const halfStar = fullStars - rating;
    const stars = [];

    for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon key={`full-${i}`} className='pr-2 text-sm text-[#cb8a40]' icon={faStar} />);
    }
    for (let i = 0; i < halfStar; i++) {
        stars.push(<FontAwesomeIcon key="half" className='pr-2 text-sm ' icon={faStar} />);
    }
    return stars;
};

