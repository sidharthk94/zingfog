import React, { useEffect, useState } from "react";
import "./Landing.css";
import Hero from "../../Components/Hero/Hero";
import PopLabs from "../../Components/PopLabs/PopLabs";
import PopTest from "../../Components/PopTest/PopTest";
import WeWork from "../../Components/HowWeWork/WeWork";
import PickWhere from "../../Components/PickWhere/PickWhere";
import PopularPackages from "../../Components/PopularPackages/PopularPackages";
import Banner from "../../Components/Banner/Banner";
import Questions from "../../Components/Questions/Questions";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import { IoCloseOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Landing = () => {
  const [token, setToken] = useState("");
  const [hamburger, setHamburger] = useState(false);

  const updateToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("user", newToken);
  };

  useEffect(() => {
    setToken(localStorage.getItem("user"));
  }, [token]);

  return (
    <div>
      {token === "" ? (
        <>
          <div className="landing_main">
            <div className="nav_section">
              <div className="nav_log">
                <div className="hamburger_icon" onClick={() => setHamburger(true)}>
                  <GiHamburgerMenu />
                </div>
                <div className="logo">
                  <img src="./image 10.png" alt="logo" className="logo_image" />
                </div>
                {hamburger ? (
                  <>
                    <div className="hamburger_main">
                      <div className="ham_close" onClick={() => setHamburger(false)}>
                        <IoCloseOutline />
                      </div>
                      <div className="ham_navitems">
                        <div>Home</div>
                        <div>About</div>
                        <div>Blog</div>
                        <div>Get the app</div>
                        <div>Add lab</div>
                      </div>
                    </div>
                  </>
                ) : null}

                <>
                  <nav className="nav_items">
                    <div>Home</div>
                    <div>About</div>
                    <div>Blog</div>
                    <div>Get the app</div>
                    <div>Add lab</div>
                  </nav>
                </>
              </div>

              {/* div for login */}
              <div className="login_section">
                <Link to="/login" className="link">
                  <span className="login">Login/sign up</span>
                </Link>
                <img src="./sitting-8.png" alt="" className="login_icon" />
              </div>
            </div>
            <Hero />
            <PopLabs />
            <PopTest />
            <WeWork />
            <PickWhere />
            <PopularPackages />
            <img src="./Advertisement.png" alt="" className="advt" />
            {/* <PickWhere /> */}
            <Banner />
            <Questions />
            <Footer />
          </div>
        </>
      ) : (
        <Dashboard updateToken={updateToken} />
      )}
    </div>
  );
};

export default Landing;
