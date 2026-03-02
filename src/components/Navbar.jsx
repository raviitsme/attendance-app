import { Link } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (menuOpen) {
        setShow(true);
      } else if (currentScroll > lastScroll && currentScroll > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, menuOpen]);

  return (
    <>
    {!show && (
      <div
        onClick={() => setShow(true)}
        className="fixed top-0 left-1/2 -translate-x-1/2 w-40 h-12 z-40"
      />
    )}
    <div
      className={`w-full top-6 z-50 fixed flex justify-center transition-all duration-500 hover:translate-y-0 ${show ? "translate-y-0" : "-translate-y-16"}`}
    >
      <div className="relative w-11/12 max-w-6xl rounded-2xl">
        {/* Blurred Border Layer */}
        <div className="absolute inset-0 rounded-2xl bg-rosePink blur-md opacity-60"></div>

        {/* Actual Navbar */}
        {/* Desktop View */}
        <div className="relative backdrop-blur-md bg-deepNavy border border-rosePink rounded-2xl shadow-lg px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl text-white font-bold tracking-wider cursor-pointer">
            <Link to={"/"}>AttendX</Link>
          </h1>
          <ul className="hidden md:flex items-center ml-11 text-white space-x-8 font-medium">
            <li className="hover:text-amberGold cursor-pointer transition duration-200">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-amberGold cursor-pointer transition duration-200">
              <a href="#features">Features</a>
            </li>
            <li className="hover:text-amberGold cursor-pointer transition duration-200">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-amberGold cursor-pointer transition duration-200">
              Contact Us
            </li>
          </ul>

          <div className="hidden md:flex font-bold items-center space-x-2">
            <Button
              variant="outline"
              className="hover:bg-white hover:text-deepNavy"
            >
              Login
            </Button>
            <Button
              variant="primary"
              className="hover:bg-amberGold hover:text-deepNavy"
            >
              Get Started
            </Button>
          </div>
          {/* Mobile View */}
          <div
            className="md:hidden text-3xl text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative w-8 h-8">
              <FaBars
                className={`absolute transition-all duration-300 ${
                  menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <FaTimes
                className={`absolute transition-all duration-300 ${
                  menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </div>

          <div
            className={`absolute top-24 w-full inset-x-0 max-w-6xl bg-deepNavy border border-white/30 rounded-2xl shadow-lg p-6 md:hidden transform transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95 pointer-events-none"}`}
          >
            <ul className="flex flex-col gap-6 text-white font-medium">
              <li
                className="active:text-amberGold hover:text-amberGold focus:text-amberGold transition text-center duration-200 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </li>
              <li
                className="active:text-amberGold hover:text-amberGold focus:text-amberGold transition text-center duration-200 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </li>
              <li
                className="active:text-amberGold hover:text-amberGold focus:text-amberGold transition text-center duration-200 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                About
              </li>
              <li
                className="active:text-amberGold hover:text-amberGold focus:text-amberGold transition text-center duration-200 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-4 font-bold">
              <Button
                variant="outline"
                className="focus:bg-white focus:text-deepNavy"
              >
                Login
              </Button>
              <Button
                variant="primary"
                className="focus:bg-amberGold focus:text-deepNavy"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
