import React from "react";
import { Footer, Navbar, Services, Transactions, Welcome } from "./components";
import iphone from "../images/Composition.png";
function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="">
        <Navbar />
        <Welcome />
        <img src={iphone} alt="iphone" className="iphone" />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default Home;
