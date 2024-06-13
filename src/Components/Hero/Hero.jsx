import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero_main">
      <div className="main_contents">
        <div className="main_banner">
          <h1>We have served more than 7000+ customers</h1>
        </div>
        <p className="sub_banner">
          Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quisque
          senectus massa lobortis, scelerisque maecenas sagittis faucibus
          integer
        </p>
        <div className="searc_main">
          <div className="location">
            <img src="./Group.png" alt="" className="location_iconz"/>
            <span className="bnglr_text">Banglore</span>
          </div>

          <div className="search_box_main">
            <input type="text" className="input_box" placeholder="Search for test ..."/>
            <img src="./akar-icons_search.png" alt="search icon" className="search_iconz"/>
          </div>
        </div>
        <div className="associated">
            <p>We are associated with more than 25+ lab.</p>
        </div>
      </div>

      <div className="ellipse">
          <img src="./Ellipse 142.png" alt="" />
          <img src="./Ellipse 143.png" alt="" />
          <img src="./Ellipse 144.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
