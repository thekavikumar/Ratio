import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Generate from "./components/Generate";
import Order from "./components/Order";
import Home from "./Home";
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generate" element={<Generate />} />
      <Route path="/order" element={<Order />} />
      {/* <div className="min-h-screen gradient-bg">
        <div className="">
          <Navbar />
          <Welcome />
          <img src={iphone} alt="iphone" className="iphone" />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div> */}
    </Routes>
  </Router>
);

export default App;
