import React from "react";

export default function nav() {
  return (
    <>
      <nav className="d-flex align-items-center">
        <div className=" container d-flex justify-content-between align-items-center">
          <h1>
            <span>AWS</span>Blogs
          </h1>
          <div className="justify-content-end">
            <img src="./images/udacity.png" alt="" className="mr-2" />
            <img src="./images/bertelsmann.jpg" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
}
