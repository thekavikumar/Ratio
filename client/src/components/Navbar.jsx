import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/main.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const NavBarItem = ({ title, classprops }) => (
  <li
    className={`mx-4 cursor-pointer hover:bg-[#45f3ff] transition-all p-2 rounded-md ease-in delay-75 hover:text-black ${classprops}`}
  >
    {title}
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const { loginWithPopup, logout, user, isAuthenticated } = useAuth0();
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-5">
      <div className="md:flex-[0.9] flex-initial justify-center items-center">
        <div className="flex cursor-pointer items-center">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="text-white text-3xl ">Ratio</h1>
        </div>
        {/* <img src={logo} alt="logo" className="w-32 cursor-pointer" /> */}
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <Link
          className="mx-4 cursor-pointer hover:bg-[#45f3ff] transition-all p-2 rounded-md ease-in delay-75 hover:text-black"
          to="/"
        >
          Home
          <i></i>
        </Link>
        <Link
          className="mx-4 cursor-pointer hover:bg-[#45f3ff] transition-all p-2 rounded-md ease-in delay-75 hover:text-black"
          to="/generate"
        >
          Generate
        </Link>
        <Link
          className="mx-4 cursor-pointer hover:bg-[#45f3ff] transition-all p-2 rounded-md ease-in delay-75 hover:text-black"
          to="/order"
        >
          Order
        </Link>
        {["Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}

        {!isAuthenticated ? (
          <li
            className="bg-[#45f3ff] py-2 px-7 text-black mx-4 rounded-full cursor-pointer hover:bg-[#45f3ff]"
            onClick={loginWithPopup}
          >
            Login
          </li>
        ) : (
          <li
            className="bg-[#45f3ff] py-2 px-7 mx-4 text-black rounded-full cursor-pointer hover:bg-[#45f3ff]"
            onClick={logout}
          >
            Logout
          </li>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classprops="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
