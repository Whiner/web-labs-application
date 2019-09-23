import { format } from 'date-fns';

// eslint-disable-next-line import/prefer-default-export
export function formatDate(date) {
    return format(date, 'dd.MM.yyyy');
}
