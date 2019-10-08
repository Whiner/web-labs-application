import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const localAxios = axios.create({
    baseURL: 'http://localhost:8081',
});
