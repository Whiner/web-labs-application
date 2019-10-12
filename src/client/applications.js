import { localAxios } from './axios';

export async function getApplications(category) {
    return localAxios.get(`/app?category=${category || ''}`);
}

export function addApplication(application) {
    return localAxios.post('/app/add', application);
}

export function editApplication(application) {
    return localAxios.post('/app/edit', application);
}

export function deleteApplication(id) {
    return localAxios.post('/app/delete', { id });
}
