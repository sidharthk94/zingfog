import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions_main">
      <div className="questions_container">
        <div>
          <h1 className="questions_heading">Frequently Asked Questions</h1>
        </div>

        <div className="question_1_main">
          <div className="question_1">
            <h4>Q1. What is ACCESS home lab collection service?</h4>
            <img
              src="./dashicons_arrow-up-alt2.png"
              alt=""
              className="icon_up"
            />
          </div>
          <div>
            <span>
              We are the home collection service provider across different
              cities in Kerala. We simplify lab testing for customers by <br />
              collecting the test samples from their home or office & getting
              those tested at any lab of customer's choice.
            </span>
          </div>
        </div>
        <div className="question_2">
            <h4>Q2. How can I book a home collection?</h4>
            <img
              src="./dashicons_arrow-up-alt2.png"
              alt=""
              className="icon_down"
            />
        </div>

         <div className="question_2">
            <h4>Q3. Is there any collection charge?</h4>
            <img
              src="./dashicons_arrow-up-alt2.png"
              alt=""
              className="icon_down"
            />
        </div>

        <div className="question_2">
            <h4>Q4. Can I get covid tests at home?</h4>
            <img
              src="./dashicons_arrow-up-alt2.png"
              alt=""
              className="icon_down"
            />
        </div>

        <div className="question_2">
            <h4>Q5. How long does it take to get the test reports?</h4>
            <img
              src="./dashicons_arrow-up-alt2.png"
              alt=""
              className="icon_down"
            />
        </div>
      </div>
    </div>
  );
};

export default Questions;
