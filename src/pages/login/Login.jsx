import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "daya" && password === "123") {
      localStorage.setItem("user", username);
      navigate("/");
    } else {
      setErrorMsg(true);
    }
  }
  return (
    <div className="login_main">
      <div className="login_form_container">
        <form className="login_form">
          <div>
            <div className="zin_image_container">
              <img
                src="./Group 366.png"
                alt="zinfog image"
                className="zin_image"
              />
            </div>

            <div className="login_form_content">
              <div>
                <h5 style={{ color: "#1F6CAB" }}>Report Downlad portal</h5>
              </div>
              <div className="login_inputs">
                <div>
                  <p style={{ color: "#1F6CAB" }}>Login</p>
                </div>

                <div className="login_form_inputs">
                  <span>Username</span>
                  <input
                    type="text"
                    placeholder="Enter Email id"
                    className="user_input"
                    onChange={(e) => {
                      setErrorMsg(false);
                      setuserName(e.target.value);
                    }}
                    required
                  />
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="EnterPassword"
                    className="password_input"
                    onChange={(e) => {
                      setErrorMsg(false);
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </div>
                <button className="form_button" onClick={handleSubmit}>
                  SUBMIT
                </button>
                <div>
                  <p className="reset_text">
                    <u>Reset Password</u>
                  </p>
                </div>
              </div>
            </div>
            {errorMsg && (
              <span className="error_message">
                Wrong Credentials! your email Id or password entered is wrong
              </span>
            )}

            <div className="login_phone">
              <img src="./Phone.png" alt="" />
              <span>(+91) 9288008801</span>
            </div>
          </div>
          <div className="terms_and_condi">
            <span className="agree_text">
              I hereby agree and accept the{" "}
              <span style={{ color: "blue" }}>Terms of service</span> and{" "}
              <span style={{ color: "blue" }}>Privacy policy</span>
            </span>
          </div>
        </form>
      </div>

      <div className="login_footer">
        <div>
          <span style={{ color: "white" }}>
            Copyright © 2023 Access Home Lab Solutions
          </span>
        </div>
        <div>
          <span style={{ color: "white" }}>
            All Rights Reserved |
            <span style={{ color: "green" }}>Terms and Conditions</span> |{" "}
            <span style={{ color: "green" }}>Privacy Policy</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
