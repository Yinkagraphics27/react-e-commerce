import Productpricetag from "./Layout";

const Catalog = () => {
  return (
    <>
      <Productpricetag />
      {/*Here I have the elements that makes up the Catalog page.*/ }
      <main>
        <div className="grid grid-cols-3 py-5 px-5 font-poppins font-medium">
          <div>
            <img
              src="ppt chair1.png"
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

          <div>
            <img
              src="ppt chair3.png"
              alt=""
              className="w-96 h-96 aspect-square bg-swGray"
            />
            <p>Cupboards</p>
            <p className="line-through text-gray-500">$45.00</p> <p>$44.00</p>
            <p className="text-gray-400">3 reviews</p>
            <span></span>
          </div>
        </div>

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
      </main>
      {/*Section two*/}

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

      <footer className="">
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
    </>
  );
};
export default Catalog;
