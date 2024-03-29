import React, { useEffect } from "react";
import TopHeader from "./components/TopHeader";
import FeaturedProducts from "./components/FeaturedProducts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  }, []);

  return (
    <>
      <div className="main-top">
        <TopHeader></TopHeader>
      </div>
      <div className="main-center">
        <FeaturedProducts></FeaturedProducts>
      </div>
      <div className="main-bottom">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
