import { API_BASE } from "../config";
import API from "../instance";


export function getCategoryByIdAPI(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function createCategoryAPI(endpoint, body) {
    return API.post(`${API_BASE}/${endpoint}`, body);
}

export function getAllCategoryAPI(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function updateCategoryAPI(endpoint, body) {
    return API.put(`${API_BASE}/${endpoint}`, body);
}
export function deleteCategoryAPI(endpoint) {
    return API.delete(`${API_BASE}/${endpoint}`);
}