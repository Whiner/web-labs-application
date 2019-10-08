import axios from './axios';

// eslint-disable-next-line import/prefer-default-export
export function getApplications(category) {
    return axios.get(`/app?category=${category}`);
}
