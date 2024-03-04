import { API_BASE } from "../config";
import API from "../instance";


export function getUserByIdAPI(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function getUser(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`);
}

export function getAllUser(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function updateUserAPI(endpoint, body) {
    return API.put(`${API_BASE}/${endpoint}`, body);
}

