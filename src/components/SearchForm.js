import React, {useRef} from 'react';
import { useGlobalContext } from '../context/ProductsContext';


const SearchForm = () => {
    const {setSearchTerm, searchTerm, products, setProducts,filtered, oldProducts} = useGlobalContext()

        const searchValue = useRef('')
        // sets up reference with name searchValue . initial state is an empty array

    const searchProduct = () => {

        // setSearchTerm(searchValue.current.value)
 
        //     if (searchTerm != '') {
        // setProducts(filtered)
            
        // console.log(products) }
        // else {setProducts(products)}
        // // function which sets the searchTerm state as the current value of whatever the reference will be (coming up below)
    }

      React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <div className='SearchForm'>

 <form action="input">
   <input type="text" placeholder="search" id="name" ref={searchValue} onChange={searchProduct}/>
 </form>
    </div>
  );
};

export default SearchForm;
