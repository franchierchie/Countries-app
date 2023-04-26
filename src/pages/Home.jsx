import { useMemo, useState } from 'react';
import { CountryCard, Dropdown, SearchBar } from '../components';
import { getCountriesByRegion, getCountryByName } from '../helpers';
import { data } from '../data/countries';

export const Home = ({ theme }) => {

  const [countries, setCountries] = useState(data);

  const handleDropdown = ( region ) => {
    return setCountries(getCountriesByRegion( region ));
  }

  const handleSearch = ( value ) => {
    return setCountries(getCountryByName( value ));
  }

  return (
    <div className="app" data-theme={`${theme}-mode`}>
      <div className="filter-section">
          <SearchBar handleSearch={ handleSearch } />

          <Dropdown handleDropdown={ handleDropdown } />
      </div>

      <CountryCard countries={ countries } />
    </div>
  )
}
