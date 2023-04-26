import { data } from '../data/countries';

export const getCountriesByRegion = ( region ) => {
    
    const validRegions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    if ( !validRegions.includes( region ) ) {
        throw new Error(`${ region } is not a valid region`);
    }

    return data.filter(country => country.region === region);
}
