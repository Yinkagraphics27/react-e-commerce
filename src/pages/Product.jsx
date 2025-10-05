import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";  


const Product = () => {
  return (
    <>
      <header className="bg-gray-100">
        {/*These are the elements that makes up the product page.*/ }
        <div className=" flex items-center justify-center gap-10">
          <span className="flex justify-center py-5">
            <img src="simplewood ld.png" alt="" className="bg-swBlack" />
          </span>

          <div className="flex items-center bg-white border border-swBlack rounded-lg px-10 py-1">
            <input
              type="text"
              name=""
              placeholder="New Luma Yoga Collection"
              className="flex-2 outline-none text-swBlack placeholder-swBlack"
            />
            <FaSearch class="text-swGreen ml-10" />
          </div>
          <span className="w-24 text-gray-100 ">
            <MdOutlineShoppingBag className="w-7 h-7" />
          </span>
        </div>
        <div className="relative w-full h-96 flex items-center justify-center bg-gray-100 my-10">
          <img
            src="/ppt chair3.png"
            alt="chair"
            className="w-96  h-96 aspect-square bg-swGray"
          />
          <div>
            <FaArrowRight className="" />
            <FaArrowLeft className="" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <h3 className="text-center font-medium font-poppins text-swBlack text-lg ">
            Simple Wood Chair Collection
          </h3>
          <h6 className="text-center underline text-swGray">3 reviews</h6>
          <h6 className="text-center underline text-swGray">Add Your Review</h6>
          <small className="text-swGray">As low as</small>
          <h3 className="text-swBlack font-bold font-poppins">$40.00</h3>
          <h4 className="text-swGray font-bold font-poppins">IN STOCK</h4>
          <h4>SKU#: 24-MB05</h4>
        </div>
        <p className="border-t border-swGray mx-5 my-5"></p>
        <main>
          <h5>Quantity</h5>
          <button className="font-poppins text-swblack bg-swwhite border font-medium py-2 px-6 rounded ml-24 mb-24 hover:bg-swGray">
            1
          </button>
          <button className="font-poppins text-swWhite bg-swGreen font-medium py-2 px-6 rounded ml-24 mb-24 hover:bg-swGray">
            Add To Cart
          </button>
          <h4>ADD TO WISH LIST</h4>
          <h4>ADD TO COMPARE</h4>
          <h4>EMAIL</h4>
          <h5>Details</h5>
          <p className="w-48 py-10 px-5 font-poppins font-medium">
            The sofa quickly and easily turns into a spacious bed. It is
            recommended to use as a sleeping place for guests, not intended for
            daily use as a bed.
          </p>
          <p className="border-t border-swGray mx-5 my-5">
            <br />
          </p>
          <div className="font-poppins font-medium">
            <h5 className="py-2 px-5">Sizes</h5>
            <p className="border-t w-72 border-swGray mx-1 my-1"></p>

            <h5 className="py-2 px-5">Care instructions</h5>
            <p className="border-t w-72 border-swGray mx-1 my-1"></p>

            <h5 className="py-2 px-5">Quality and environmental information</h5>
            <p className="border-t w-72 border-swGray mx-1 my-1"></p>

            <h5 className="py-2 px-5">Packing Information</h5>
            <p className="border-t w-72 border-swGray mx-1 my-1"></p>

            <h5 className="py-2 px-5">Instructions and documents</h5>
            <p className="border-t w-72 border-swGray mx-1 my-1"></p>

            <h5 className="py-2 px-5">Product Availability</h5>
            <p className="border-t w-72 border-swGray mx-1 my-1"></p>

            <h5 className="py-2 px-5">Reviews</h5>
            <p className="border-t w-72 border-swGray mx-1 my-1"></p>

            <h5 className="py-2 px-5">Related Products</h5>
            <p className="border-t w-72 border-swGray mx-1 my-1"></p>

            
          </div>
        </main>

        <div>
          <div className="grid grid-cols-3 py-5 px-5 font-poppins font-medium">
            <div>
              <img
                src="ppt chair4.png"
                alt=""
                className="w-96 h-96 aspect-square bg-swGray"
              />
              <p>Cupboards</p>
              <p className="line-through text-gray-500">$45.00</p>
              <p>$44.00</p>
              <p className="text-gray-400">3 reviews</p>
              <span></span>
            </div>

            <div>
              <img
                src="ppt chair3.png"
                alt=""
                className="w-96 h-96 aspect-square bg-swGray"
              />
              <p>Cupboards</p>
              <p className="line-through text-gray-500">$45.00</p>
              <p>$44.00</p>
              <p className="text-gray-400">3 reviews</p>
              <span></span>
            </div>

            <div>
              <img
                src="ppt chair2.png"
                alt=""
                className="w-96 h-96 aspect-square bg-swGray"
              />
              <p>Cupboards</p>
              <p className="line-through text-gray-500">$45.00</p>
              <p>$44.00</p>
              <p className="text-gray-400">3 reviews</p>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-swLight text-center text-wrap w-full h-48 flex items-center justify-center">
        <div>
          <h4 className="font-poppins font-bold text-lg">
            Join our newsletter for £10 off
          </h4>
          <div className="">
            <span> We'll email you a voucher worth £10 off</span>
            <span> your first order over £50. By subscribing </span>
            <span> you agree to our Terms & Conditions and </span>
            <span> Privacy & Cookies Policy.</span>
          </div>
          <input
            className="my-2 mx-12 rounded-full border-2 w-72 text-center py-1 px-1"
            type="text"
            placeholder=" Enter your email address"
            name=""
          />
        </div>
      </section>
      <br />
      <br />

      <footer>
        <section className=" bg-swBlack flex items-center justify-center gap-10 w-full h-48">
          <span className="">
            <img src="simplewood ld.png" alt="" />
          </span>
          <div className="font-poppins font-medium text-swWhite">
            <p>Policy </p>
            <p>Term & Conditions </p>
            <p>Help</p>
          </div>
          <p className="font-normal font-poppins text-swGray">
            Copyring © Viachas Kul. All right reserved.
          </p>
        </section>
      </footer>

      <div></div>
    </>
  );
};

export default Product;
