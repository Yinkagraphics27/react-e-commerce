import React from "react";
import { Link } from "react-router-dom";
import { RiCrossFill } from "react-icons/ri";



const Productdisplay = () => {
  return (
    <main className="bg-swwhite">
      <div className="grid grid-cols-3 px-5 py-5 ">
        <div>
          <img
            src="pd sofa.png"
            alt=""
            className="w-96 aspect-square bg-swGray "
          />

          <span>
            <RiCrossFill className="my-2 rounded-full text-swGreen" />
            <p className=" mx-3 font-medium font-poppins">Sofas</p>
          </span>
        </div>

        <div>
          <img
            src="pd cupboard.png"
            alt=""
            className="w-96 aspect-square bg-swGray"
          />
          <p>cupboards</p>
        </div>
        <div>
          <img
            src="pd table.png"
            alt=""
            className="w-96 aspect-square bg-swGray"
          />
          <p>Tables</p>
        </div>
      </div>

      <div className="grid grid-cols-3 px-5 py-5">
        <div>
          <img
            src="pd beds & mattress.png"
            alt=""
            className="w-96 aspect-square bg-swGray"
          />
          <p>Beds & Mattresses</p>
        </div>

        <div>
          <img
            src="pd floor lamps & fixture.png"
            alt=""
            className="w-96 aspect-square bg-swGray"
          />
          <p>Floor lamps & Fixtures</p>
        </div>

        <div>
          <img
            src="pd commode.png"
            alt=""
            className="w-96 aspect-square bg-swGray"
          />
          <p>Commode</p>
        </div>
      </div>

      <div className="grid grid-cols-3 px-5 py-5">
        <div>
          <img
            src="pd shelving.png"
            alt=""
            className="w-96 aspect-square bg-swGray"
          />
          <p>Shelving</p>
        </div>
        <div>
          <img
            src="pd shelving.png"
            alt=""
            className=" w-96 aspect-square bg-swGray"
          />
          <p>Shelving</p>
        </div>

        <div>
          <div className="aspect-square bg-swWhite text-lg">
            <h4 className="font-semibold font-poppins my-2 mx-2 py-2 px-2 ">Get 10% Discount</h4>
            <div className="text-center">
              <span> Get 10% discount with notified about the</span>
              <span>latest news and updates, no spam, we</span>
              <p> proise1</p>
            </div>
            <input className="my-2 mx-12 rounded-full border-2 w-72 text-center py-1 px-1"
              type="text" 
               placeholder=" Enter your email address"
              name=""
              
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Productdisplay;
