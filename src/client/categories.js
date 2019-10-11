import { localAxios } from './axios';

// eslint-disable-next-line import/prefer-default-export
export async function getCategories() {
    return localAxios.get('/category');
}

export function addCategory(name) {
    return localAxios.post('/category/add', { name });
}

export function editCategory(category) {
    return localAxios.post('/category/edit', category);
}

export function deleteCategory(id) {
    return localAxios.post('/category/delete', { id });
}
