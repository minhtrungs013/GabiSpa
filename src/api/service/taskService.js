import { API_BASE } from "../config";
import API from "../instance";


export function getTaskByIdAPI(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function createTaskAPI(endpoint, body) {
    return API.post(`${API_BASE}/${endpoint}`, body);
}

export function getAllTaskAPI(endpoint) {
    return API.get(`${API_BASE}/${endpoint}`, null);
}

export function updateTaskAPI(endpoint, body) {
    return API.put(`${API_BASE}/${endpoint}`, body);
}
export function deleteTaskAPI(endpoint) {
    return API.delete(`${API_BASE}/${endpoint}`);
}