import React from "react";
import bgsmall from "../styles/bgsmall.jpg";

// this component wasn't really needed. I may refactor the code and get rid of it.
const TopHeader = ({ children }) => {
  // render TopHeader component
  return (
    <div className="top-header">
      <div className="left">
        <div className="hidden-mountain">
          <h1>The Indispensable.</h1>
          <img src={bgsmall} />
        </div>
        <h1 id="ourstore">
          Our store stays stocked with stuff you definitely can't live without.
        </h1>
        <div className="home-header">
          For decades, we've supplied the world with the most indispensable
          products in existence.
        </div>
      </div>
      <div className="right" id="empty-right"></div>
    </div>
  );
};

export default TopHeader;
