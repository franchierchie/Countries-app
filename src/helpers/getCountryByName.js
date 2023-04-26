import { data } from '../data/countries';

export const getCountryByName = ( name ) => {

    name = name.toLowerCase().trim();

    if ( name.length === 0 ) return [];

    return data.filter(
        country => country.name.toLowerCase().includes( name )
    );
}
