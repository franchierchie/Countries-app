import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Home, Country } from './pages';
import './css/style.css';

export const CountriesApp = () => {

  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    if ( theme === 'light' ) {
      return setTheme('dark');
    }
    return setTheme('light');
  }

  return (
    <>
      <header data-theme={`${theme}-mode`}>
        <NavLink to="/" className="company-logo">Where in the world?</NavLink>
        <button className="theme-switch-btn" onClick={ handleTheme }>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
          Dark Mode
        </button>
      </header>

    <Routes>
      <Route path='/' element={ <Home theme={ theme } /> } />
      <Route path='/country/:id' element={ <Country theme={ theme } /> } />
    </Routes>
    </>
  )
}
