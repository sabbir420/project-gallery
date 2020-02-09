import React from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
