import React, { useState } from "react";
import "./PicWhere.css";

const PickWhere = () => {
  const drName = [
    "Garuda",
    "Dr lal pathlabs",
    "Neuberg",
    "Aster Mims",
    "Dhana lakshmi",
  ];

  const number = drName.length
  const [move, setMove] = useState(0);

  function handleRightClick() {
    setMove((prevMove) => prevMove + 1);
  }

  function handleLeftClick() {
    setMove((prevMove) => prevMove - 1);
  }

  console.log(move, "movee");

  return (
    <div className="pic_where" style={{ "--uuu": move }}>
      <div>
        <h4 className="pick_text">Pick where you left off</h4>
      </div>

      <div style={{ display: "flex", gap: "20px" }} className="hhhh">
        {drName.map((data) => (
          <div className="card">
            <div className="card_head">
              <div>
                <div>
                  <span>{data}</span>
                </div>
                <div>
                  <img src="./frame 2.png" alt="place" className="place_logo" />
                </div>
              </div>

              <div>
                <img src="./rateing.png" alt="rateing" />
              </div>
            </div>
            <div className="card_middle">
              <span className="card_middle_heading">Thyroid profile Total</span>
              <span className="card_middle_subheading">(T3, T4, TSH)</span>
            </div>
            <div className="card_bottom">
              <div>
                <div>
                  <span className="card_bottom_current_price">399/-</span>
                  <span className="card_bottom_previous_price">
                    <del>1299/-</del>
                  </span>
                </div>
                <div>
                  <img src="./Frame 4.png" alt="" />
                </div>
              </div>

              <div className="book">
                <span className="report_days">Expected report in 1 Day</span>
                <img
                  src="./book.png"
                  alt="book button"
                  className="book_button"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {move === 0 ? (
        <></>
      ) : (
        <img
          src="./Right Arrow.png"
          alt=""
          className="left_arrow"
          onClick={handleLeftClick}
        />
      )}
      {move ===  number - 1}
      <img
        src="./Right Arrow.png"
        alt=""
        className="right_arrow"
        onClick={handleRightClick}
      />
    </div>
  );
};

export default PickWhere;
