import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer_container">
        <div className="footer_top">
          <div className="footer_top_right">
            <div>
              <img src="./image 10.png" alt="logo" className="footer_logo" />
            </div>
            <div>
              <span className="footer_content_text">
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipiscing elit aliquam
              </span>
            </div>
            <div className="footer_social_logo">
              <img src="./Facebook.png" alt="facebook icon" className="footer_social_logos"/>
              <img src="./Twitter.png" alt="twitter logo" className="footer_social_logos"/>
              <img src="./Instagram.png" alt="insta logo" className="footer_social_logos"/>
              <img src="./LinkedIn.png" alt="linked logo"className="footer_social_logos"/>
              <img src="./YouTube.png" alt="youtune logo" className="footer_social_logos"/>
            </div>
          </div>

          <div className="footer_top_left">
            <div>
              <h5 style={{color:"#1F6CAB"}} className="geads">Cities</h5>
              <p className="footer_items">Bangalore</p>
              <p className="footer_items">Delhi</p>
              <p className="footer_items">Noida</p>
              <p className="footer_items">Hydrabad</p>
            </div>
            <div>
              <h5 style={{color:"#1F6CAB"}} className="geads">Support</h5>
              <p className="footer_items">Getting started</p>
              <p className="footer_items">Help center</p>
              <p className="footer_items">Report a bug</p>
              <p className="footer_items">Refund policy</p>
              <p className="footer_items">Call support</p>
            </div>
            <div>
                <div>
                    <h5 style={{color:"#1F6CAB"}} className="geads">Contacts us</h5>
                </div>
              <div className="footer_email">
                <img src="./Email.png" alt="" className="footer_ic"/>
                <span className="footer_items">info@accesslabz.com</span>
              </div>
              <div className="footer_phone">
                <img src="./Phone.png" alt="" className="footer_ic"/>
                <span className="footer_items">(+91) 9288008801</span>
              </div>
              <div className="footer_address">
                <img src="./Spacer Icon Wrapper.png" alt="" className="footer_ic"/>
                <span className="footer_items">
                  Door No. 28/69/1,
                  <br />
                  Patturaikkal, Thrissur,
                  <br /> Kerala 680008, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
            <div>
                <p className="copy_right">Copyright © 2022 Access labz</p>
            </div>
            <div className="all_rights">
                <p>All Rights Reserved |<span style={{color:"blue"}}>Terms and Conditions | Privacy Policy</span></p>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
