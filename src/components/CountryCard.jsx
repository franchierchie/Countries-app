import React from 'react';
import { NavLink } from 'react-router-dom';

export const CountryCard = ({ countries }) => {

  return (
    <div className="countries">
        {
        countries.map(country => (
            <NavLink key={ country.alpha2Code } to={`/country/${country.name}`} className="card">
                <img src={ country.flags.png } alt={ `${ country.name } flag` } />
                <div className="card-detail">
                    <h1 className="country-name">{ country.name }</h1>
                    <p className="data"><span>Pupolation:</span> { country.population.toLocaleString() }</p>
                    <p className="data"><span>Region:</span> { country.region }</p>
                    <p className="data"><span>Capital:</span> { country.capital }</p>
                </div>
            </NavLink>
        ))
        }
    </div>
  )
}
