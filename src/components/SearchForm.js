import React, {useRef} from 'react';
import { useGlobalContext } from './context';


const SearchForm = () => {
    const {setSearchTerm, searchTerm} = useGlobalContext()

        const searchValue = useRef('')
        // sets up reference with name searchValue . initial state is an empty array

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
        // function which sets the searchTerm state as the current value of whatever the reference will be (coming up below)
    }

      React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <div className='SearchForm'>
    <h2>Search your favourite cocktails</h2>
 <form action="input">
   <input type="text" id="name" ref={searchValue} onChange={searchCocktail}/>
   {/* reference searchValue is set to the ref of this input field. onChange function set to searchCocktail.
   so, every time a character is entered into the input, the searchTerm state is set to the current.value - whatever is entered into the input.
   this is done via the useRef hook previously set up.
   this in turn changes which data is fetched and what is returned in context.js */}
 </form>
    </div>
  );
};

export default SearchForm;
