import { localAxios } from './axios';

// eslint-disable-next-line import/prefer-default-export
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
