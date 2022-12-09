import React from "react";
import Navbar from "./Navbar";
import "./Generate.css";

function Generate() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <div className="parent flex justify-center items-center mt-[100px]">
        <div className="box">
          <div className="form">
            <h2 className="text-[22px] font-semibold text-[#45f3ff] text-center tracking-[0.1em]">
              Generate
            </h2>
            <h2 className="text-[16px] text-[#45f3ff] font-semibold text-center tracking-[0.1em]">
              Your Public Key
            </h2>
            <div className="inputBox">
              <input type="text" required />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="number" required />
              <span>Phone Number</span>
              <i></i>
            </div>
            <input className="submitBtn" type="submit" value="Generate" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generate;
