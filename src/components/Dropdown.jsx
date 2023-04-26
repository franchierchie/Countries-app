import { useRef, useState } from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export const Dropdown = ({ handleDropdown }) => {

    const [isActive, setIsActive] = useState(false);
    const [optionSelected, setOptionSelected] = useState('Filter by Region');
    const selected = useRef();

    const handleClick = () => {
        setIsActive(prev => !prev);
    }
    const handleOptionClick = (region) => {
        setOptionSelected(region);
        setIsActive(prev => !prev);
        handleDropdown(region);
    }
    
  return (
    <div className="dropdown">
        <button className="dropdown-btn" onClick={ handleClick }>
            <span className="selected" ref={ selected }>{ optionSelected }</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </button>
        <ul data-active={`${ isActive }`}>
            {
                regions.map(reg => (
                    <li key={ reg } onClick={() => handleOptionClick( reg ) }>{ reg }</li>
                ))
            }
        </ul>
    </div>
  )
}
