import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src="https://images.unsplash.com/photo-1528194337623-fdb5edca79eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt=""
        />
      </div>
      <div className="about-right">
        <div className="mission">
          We started in 2001 with the goal of making the #1 store in the world
          which sells every item you could possibly want or need. We have
          definitely met and surpassed this goal, as impossible as that sounds.{" "}
        </div>
        <div className="mission">
          From day one, we've kept up with trends all over the world, and have
          remained dedicated to providing you with the very latest and greatest
          things that are available.
        </div>
        <div className="mission">
          No matter your personal goals or interests, you will certainly find
          what you are looking for at our online shop. We're all about community, so if you
          have an item you'd like to add to our shop, just let us know and we'll sell it free of charge!
        </div>
      </div>
    </div>
  );
};

export default About;
