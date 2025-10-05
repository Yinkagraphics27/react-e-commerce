import React from "react";
import { RiCrossFill } from "react-icons/ri";


const Productpricetag = () => {
  return <div>

  <header
        className="min-h-96 relative opacity-4"
        style={{
          backgroundImage: "url(/navbarbg.png)",
        }}
      >
        <nav className="flex justify-between py-3 px-3">
          <span className="">
            <img src="simplewood ld.png" alt="Simplewood Logo" />
          </span>

          <span className="flex items-center bg-white border border-swBlack rounded-lg px-10 py-2">
            <input
              type="text"
              placeholder="Search For A Collection"
              className="flex-2 outline-none text-swBlack placeholder-swBlack"
            />
            <FaSearch class="text-swGreen ml-10" />
          </span>
         

          <ul className="flex items-center mr-10 gap-5 font-semibold font-poppins text-swWhite ">
            <li>
              <Link to="/home" className="hover:bg-swGray">
                Home
              </Link>
            </li>

            <li>
              <Link to="/catalog" className="hover:bg-swGray">
                Catalog
              </Link>
            </li>

            <li>
              <Link to="/product" className="hover:bg-swGray">
                Product
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex">
          <div className="flex flex-col font-extrabold font-poppins text-5xl text-swWhite py-20 px-24">
            <div>SimpleWood</div>
            <div>ChairCollection</div>
            <div className="font-medium text-base mt-4">
              <div>Find hand-curated collections that fit your style,</div>
              <div>space, and budget.</div>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="navbarimage1.png"
              alt="Navbar image 1"
              className=" w-24 h-32 scale-150 mr-24 mt-24"
            />
            <img
              src="navbarimage2.png"
              alt="Navbar image 2"
              className=" w-24 h-32 mt-24 "
            />
            <img
              src="navbarimage3.png"
              alt="Navbar image 3"
              className=" w-24 h-32 mt-24"
            />
          </div>
        </div>
        <button className="font-poppins text-swWhite bg-swGreen font-medium py-2 px-6 rounded ml-24 mb-24 hover:bg-swGray">
          Shop Now
        </button>
      </header>


  </div>;
};

export default Productpricetag;
