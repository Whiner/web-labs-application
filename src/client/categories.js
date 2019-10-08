import { localAxios } from './axios';

// eslint-disable-next-line import/prefer-default-export
export async function getCategories() {
    return localAxios.get('/category');
}
