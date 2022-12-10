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
    </Routes>
  </Router>
);

export default App;
