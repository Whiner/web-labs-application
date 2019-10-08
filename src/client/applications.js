import { localAxios } from './axios';

// eslint-disable-next-line import/prefer-default-export
export async function getApplications(category) {
    return localAxios.get(`/app?category=${category || ''}`);
}
