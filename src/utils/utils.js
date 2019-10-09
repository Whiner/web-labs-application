import { format } from 'date-fns';

export function formatDate(date) {
    return format(date, 'dd.MM.yyyy');
}

export function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i += 1) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

export function getBase64(file) {
    let uncoded;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => { uncoded = reader.result; };
    reader.onerror = error => console.log('Error: ', error);
    return uncoded;
}

export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
