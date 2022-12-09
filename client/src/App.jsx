import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import iphone from "../images/Composition.png";
const App = () => (
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

export default App;
