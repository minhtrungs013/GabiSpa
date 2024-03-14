import { API_BASE } from "../config";
import API from "../instance";


export function getServiceBookedByIdAPI(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function createServiceBookedAPI(endpoint, body) {
    return API.post(`${API_BASE}/${endpoint}`, body);
}

export function getAllServiceBookedAPI(endpoint, body) {
    return API.post(`${API_BASE}/${endpoint}`, body);
}

export function updateStatusServiceBookedAPI(endpoint, body) {
    return API.put(`${API_BASE}/${endpoint}`, body);
}
export function deleteServiceBookedAPI(endpoint) {
    return API.delete(`${API_BASE}/${endpoint}`);
}