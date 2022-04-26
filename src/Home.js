import React from 'react';
import TopHeader from './components/TopHeader';
import FeaturedProducts from './components/FeaturedProducts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useFetch } from './utils/hooks';

const Home = () => {

  const [data] = useFetch(
    'http://localhost:8000/products'
  );

  return (
    <>
  <div className='main-top'>
    <TopHeader></TopHeader>
 </div>
   <div className='main-center'>
   <FeaturedProducts>
      {data.map((product => {
        return <div>{product.title}</div>
      }))}
   </FeaturedProducts>
</div>
<div className='main-bottom'>
   <Contact></Contact>
</div>
<Footer></Footer>

    </>
  );
};

export default Home;
