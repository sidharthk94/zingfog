import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner_main">
      <h1 className="banner_heading">Feel free to contact us</h1>
      <p className="banner_text">
        Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quisque
        senectus massa lobortis,
        <br /> scelerisque maecenas sagittis faucibus integer{" "}
      </p>
      <img src="./Frame 343.png" alt="contact us" className="contact_us_button"/>
      <img src="./Vector 6.png" alt=""  className="vector6_image"/>
      <img src="./Vector 7.png" alt=""  className="vector7_image"/>
      <img src="./Vector 5.png" alt=""  className="vector5_image"/>
    </div>
  );
};

export default Banner;
