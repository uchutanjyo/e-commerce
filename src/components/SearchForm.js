import React, {useRef} from 'react';
import { useGlobalContext } from './context';


const SearchForm = () => {
    const {setSearchTerm, searchTerm} = useGlobalContext()

        const searchValue = useRef('')

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
        console.log(searchTerm)
    }

      React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <div className='SearchForm'>
    <h2>Search your favourite cocktails</h2>
 <form action="input">
   <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
 </form>
    </div>
  );
};

export default SearchForm;
