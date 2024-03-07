import { API_BASE } from "../config";
import API from "../instance";


export function getUserByIdAPI(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function createUserAPI(endpoint, body) {
    return API.post(`${API_BASE}/${endpoint}`, body);
}
export function getAllUserAPI(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function updateUserAPI(endpoint, body) {
    return API.put(`${API_BASE}/${endpoint}`, body);
}
export function updateUserActiveAPI(endpoint, body) {
    return API.put(`${API_BASE}/${endpoint}`, body);
}

