import React from "react";
import { Footer, Navbar, Services, Transactions, Welcome } from "./components";
function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="">
        <Navbar />
        <Welcome />
        <div className=" flex items-center justify-center mt-3">
          <img
            src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="iphone"
            className="w-[60%] rounded-2xl white-shadow hover:rotate-2 transition-all delay-300 ease-out"
          />
        </div>
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default Home;
