import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCountryById } from '../helpers/getCountryById';

export const Country = ({ theme }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const country = getCountryById( id );

  const handleClick = () => {
    navigate(-1);
  }
    
  return (
  <div className="country-page" data-theme={`${theme}-mode`}>
    <button className="previous-page" onClick={ handleClick }>
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-left" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="9" y2="16" />
        <line x1="5" y1="12" x2="9" y2="8" />
      </svg>
      Back
    </button>
    <div className="country-container">

      <img src={ country.flag } alt={`${ country.name } flag`} />

      <div className="country-info">
        <h1 className="country-name">{ country.name }</h1>

        <div>
          <p><span>Native Name: </span>{ country.nativeName }</p>
          <p><span>Population: </span>{ country.population.toLocaleString() }</p>
          <p><span>Region: </span>{ country.region }</p>
          <p><span>Sub Region: </span>{ country.subregion }</p>
          <p><span>Capital: </span>{ country.capital }</p>
        </div>

        <div>
          <p>
            <span>Top Level Domain: </span>
            { country.topLevelDomain }
          </p>
          <p className="list">
            <span>Currencies: </span>
            { country.currencies.map(currency => <span className="tag-info" key={ currency.code }>{ currency.code }</span>) }
          </p>
          <p className="list">
            <span>Languages: </span>
            { country.languages.map(language => <span className="tag-info" key={ language.name }>{ language.name }</span>) }
          </p>
          {/* //TODO: agregar espacio estre los idiomas y monedas */}
        </div>

        <p className="border-countries"><span>Border Countries: </span>{ country.borders.map(border => (<span className="tag" key={ border }>{border}</span>)) }</p>
      
      </div>
    </div>
  </div>
  )
}
