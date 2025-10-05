import React from "react";
import Navbar from "../mini-components/Navbar";
import Productdisplay from "../mini-components/Productdisplay";
import Cta from "../mini-components/Cta";
import Footer from "../mini-components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Productdisplay />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
