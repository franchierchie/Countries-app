import { data } from '../data/countries';

export const getCountryById = ( id ) => {
    return data.find(country => country.name === id);
}
