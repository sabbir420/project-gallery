import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="rt">
          <h2>
            <span>What</span>
            is Cloud Computing?
          </h2>
        </div>
        <div className="lt">
          <img src="./images/cloud.png" alt="" />
        </div>
      </div>
    </div>
  );
}
