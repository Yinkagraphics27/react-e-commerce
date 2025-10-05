//Importation of React Icons
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCrossFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

//other importations in relation with the Pages
import { Link } from "react-router-dom";
import Product from "./../pages/Product";
import Home from "../pages/Home";

const Navbar = () => {
  return (
    <div>
      <header
        className="min-h-96 relative bg-center bg-cover opacity-4"
        style={{
          backgroundImage: "url(/navbarbg.png)",
        }}
      >
        {/*Navbar*/}
        <nav className="flex flex-col md:flex-row justify-between items-center gap-4 py-3 px-4 md:px-8">
          <span className="flex-shrink-0">
            <img
              src="simplewood ld.png"
              alt="Simplewood Logo"
              className="w-32 md:w-40"
            />
          </span>
          {/* Search bar */}
          <span className="flex items-center bg-white border border-swBlack rounded-lg px-4 md:px-8 py-1 w-full max-w-sm">
            <input
              type="text"
              placeholder="Search For A Collection"
              className="flex-1 outline-none text-swBlack placeholder-swBlack text-sm md:text-base"
            />
            <FaSearch class="text-swGreen ml-4 md:ml-6" />
          </span>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6 font-semibold font-poppins text-swWhite text-sm md:text-base ">
            <li>
              <Link to="/home" className="hover:bg-swGray px-2 py-1 rounded">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/catalog"
                className="hover:bg-swGray  px-2 py-1 rounded"
              >
                Catalog
              </Link>
            </li>

            <li>
              <Link
                to="/product"
                className="hover:bg-swGray  px-2 py-1 rounded"
              >
                Product
              </Link>
            </li>
          </ul>
        </nav>
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row  justify-between items-center px-6  md:px-16 py-12 md:py-20">
          <div className="flex flex-col text-center lg:text-left font-extrabold font-poppins text-5xl text-swWhite py-20 px-24">
            <div className="font-extrabold text-3xl sm:text-4xl md:text-5xl">
              SimpleWood
            </div>
            <div className="font-extrabold text-3xl sm:text-4xl md:text-5xl">
              ChairCollection
            </div>
            <div className="font-medium text-sm sm:text-base mt-4 leading-relaxed ">
              <div>Find hand-curated collections that fit your style,</div>
              <div>space, and budget.</div>
            </div>
          </div>
        </div>
        <button className=" mt-6 font-medium py-2 px-6 rounded font-poppins text-swWhite bg-swGreen hover:bg-swGray mx-auto lg:mx-0">
          Shop Now
        </button>
        {/* Images */}
        <div className="flex justify-center gap-4 mt-10 lg:mt-0">
          <img
            src="navbarimage1.png"
            alt="Navbar image 1"
            className=" w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-32"
          />
          <img
            src="navbarimage2.png"
            alt="Navbar image 2"
            className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-32"
          />
          <img
            src="navbarimage3.png"
            alt="Navbar image 3"
            className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-32"
          />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
