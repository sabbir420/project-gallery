import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="rt">
          <h2>
            <span>AWS</span>
            Tutorials and more.
          </h2>
        </div>
        <div className="lt">
          <img src="./images/cloud.png" alt="" />
        </div>
      </div>
    </div>
  );
}
