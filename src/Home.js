import React from 'react';
import Main from './components/Main'
import CocktailList from './components/CocktailList';
import SearchForm from './components/SearchForm';


const Home = () => {
  return (
    <>
 <Main>
      Cocktails

<SearchForm></SearchForm>

      <CocktailList></CocktailList>
         </Main>


    </>
  );
};

export default Home;
