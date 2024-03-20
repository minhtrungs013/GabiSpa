import axios from 'axios';
import { AES, enc } from 'crypto-js';
import { addMinutes, format, getHours, getMinutes, isAfter, isSameDay, isValid, parseISO, subHours } from 'date-fns';
import { jwtDecode } from 'jwt-decode';
import { clearAuth } from '../../redux/slice/authSlice';
import { clearUserSlice } from '../../redux/slice/userSlice';
import { persistor, store } from '../../redux/store';

/**
 * Get the current date as a timestamp.
 *
 * @returns {number} The current date as a timestamp.
 */
export const CURRENT_DATE = () => {
  const vietNamTimeZone = 'Asia/Ho_Chi_Minh';
  const currentDate = new Date();
  const formattedTodayInVietNam = currentDate.toLocaleString('en-US', { timeZone: vietNamTimeZone });
  return format(formattedTodayInVietNam, 'dd-MMM-yyyy HH:mm')
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
  const formatEndDateTime = new Date(endDateTime)
  formatEndDateTime.setHours(formatEndDateTime.getHours() - 7)
  const endTime = addMinutes(formatEndDateTime, 30)

  if (isSameDay(CURRENT_DATE(), formatDate(startDateTime)) || isAfter(formatDate(startDateTime), CURRENT_DATE())) {
    if (isSameDay(endTime, CURRENT_DATE())) {
      if (getHours(CURRENT_DATE()) > getHours(endTime) || (getHours(CURRENT_DATE()) === getHours(endTime)
        && getMinutes(CURRENT_DATE()) > getMinutes(endTime))) {
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

/**
 * Encrypts the given string value using AES encryption algorithm with the provided secret key.
 * 
 * @param value - The string value to be encrypted.
 * @param secret - The secret key used for encryption.
 * @returns The encrypted string.
 */
export const encryptData = (value, secret) => {
  return AES.encrypt(value, secret).toString();
}

/**
 * Compares the given string value with its encrypted version using AES decryption algorithm 
 * with the provided secret key.
 * 
 * @param value - The original string value to be compared.
 * @param encryptedValue - The encrypted string value to be compared with the original value.
 * @param secret - The secret key used for decryption.
 * @returns A boolean indicating whether the decrypted value matches the original value.
 */
export const compareData = (value, encryptedValue, secret) => {
  return AES.decrypt(encryptedValue, secret).toString(enc.Utf8) === value;
}

export const formatDate = (value) => {
  if (!value) {
    return null;
  }
  const date = typeof value === 'string' ? parseISO(value) : value;
  if (!isValid(date)) {
    return null;
  }
  const vietNamTimeZone = 'Asia/Ho_Chi_Minh';
  const formattedTodayInVietNam = date.toLocaleString('en-US', { timeZone: vietNamTimeZone });
  const formattedDate = format(subtract7HoursFromDate(formattedTodayInVietNam), 'dd-MMM-yyyy HH:mm');
  return formattedDate;
}

export const subtract7HoursFromDate = (date) => {
  return subHours(date, 7);
};

export const checkRefreshToken = (refreshToken) => {
  if (refreshToken === null) return false
  const decodedToken = jwtDecode(refreshToken);
  const currentTimestamp = Math.floor(Date.now() / 1000);
  if (decodedToken.exp && decodedToken.exp < currentTimestamp) {
    persistor.purge()
    store.dispatch(clearUserSlice());
    store.dispatch(clearAuth());
    return false;
  } else {
    return true;

  }
}

export const convertMinutesToHours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} giờ ${remainingMinutes} phút`;
}

export const formatCurrency = (number) => {
  const reversedNumber = number?.toString().split('').reverse().join('');
  const formattedNumber = reversedNumber?.replace(/(\d{3})(?=\d)/g, '$1,');
  const result = formattedNumber?.split('').reverse().join('');
  return `${result} VND`;
};