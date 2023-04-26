import { useForm } from '../hooks/useForm';

export const SearchBar = ({ handleSearch }) => {

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if ( searchText.trim().length <= 1 ) return;
    handleSearch( searchText );
  }
    
  return (
    <form className="search-bar" onSubmit={ onSearchSubmit }>
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </button>
        <input
          type="search"
          placeholder="Search for a country..."
          name='searchText'
          value={ searchText }
          onChange={ onInputChange }
        />
    </form>
  )
}
