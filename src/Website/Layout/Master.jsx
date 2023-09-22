import React from "react";
import Header from "../MainComponents/Header";
import Footer from "../MainComponents/Footer";

const Master = ({ Rcf }) => {
  return (
    <div>
      <Header></Header>
      <div>
        <Rcf></Rcf>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Master;
