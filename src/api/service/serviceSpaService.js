import { API_BASE } from "../config";
import API from "../instance";


export function getServiceSpaByIdAPI(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function createServiceSpaAPI(endpoint, body) {
    return API.post(`${API_BASE}/${endpoint}`, body);
}

export function getAllServiceSpaAPI(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function updateServiceSpaAPI(endpoint, body) {
    return API.put(`${API_BASE}/${endpoint}`, body);
}
export function deleteServiceSpaAPI(endpoint) {
    return API.delete(`${API_BASE}/${endpoint}`);
}

export function serviceBookedAPI(endpoint, body) {
    return API.post(`${API_BASE}/${endpoint}`, body);
}