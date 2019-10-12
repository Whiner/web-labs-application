import axios from 'axios';

export const localAxios = axios.create({
    baseURL: 'http://localhost:8081',
});
