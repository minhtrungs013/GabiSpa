import axios from 'axios';
import { addMinutes, format, getHours, getMinutes, isAfter, isSameDay } from 'date-fns';


/**
 * Get the current date as a timestamp.
 *
 * @returns {number} The current date as a timestamp.
 */
export const CURRENT_DATE = () => {
  const vietNamTimeZone = 'Asia/Ho_Chi_Minh';
  const currentDate = new Date();
  const formattedTodayInVietNam = currentDate.toLocaleString('en-US', { timeZone: vietNamTimeZone });
  return format(formattedTodayInVietNam, 'dd-MMM-yyyy- HH:mm');
}


export const handleUpload = async (files) => {
  if (files.length > 0) {
    let newImages = []
    for (let i = 0; i < files.length; i++) {
      const fromData = new FormData()
      fromData.append("file", files[i])
      fromData.append("upload_preset", "kozqobqt")
      await axios.post(`https://api.cloudinary.com/v1_1/dax8xvyhi/upload`, fromData)
        .then((res) => {
          newImages.push(res.data.url);
        }).catch((error) => {
          console.log(error);
        })
    }
    return newImages
  }
};

 /**
    * @returns {boolean} true if the current date is the same as the meeting date or the current date is after the meeting date, false otherwise
    */
export const VALIDATION_DATE_TIME = (startDateTime, endDateTime) => {
  const currentHour = getHours(CURRENT_DATE());
  const currentMinute = getMinutes(CURRENT_DATE());
  const endTime = addMinutes(endDateTime, 30)
  const endHour = getHours(endTime);
  const endMinute = getMinutes(endTime);

  if (isSameDay(startDateTime, CURRENT_DATE()) || isAfter(startDateTime, CURRENT_DATE())) {
    if (isSameDay(endTime, CURRENT_DATE())) {
      if (currentHour > endHour || (currentHour === endHour && currentMinute > endMinute)) {
        return false;
      } else {
        return true;
      }
    } else if (isAfter(endTime, CURRENT_DATE())) {
      return true;
    }
  } else {
    return false;
  }
}
