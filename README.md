# A React E-Commerce Web Application: (SimpleWood).

//These Are The List Of Pages, and Mini-components that the web app contains

//Pages...

# HomePage

# CatalogPage

# ProductPage

//Mini-components...

# Navbar

# Productdisplay

# Productpricetag

# Addingquantity

# Details

# Cta

# Footer

{
/_ React Icons _/
}
{
/\_ <div>
<MdOutlineCancel />
<IoMdMail />
<FaArrowLeft />
<FaArrowRight />
<RxHamburgerMenu />
<RiCrossFill />
<FaFacebookF />
<BsTwitterX />
<FaYoutube />
<IoLogoGoogle />
<FaRegCopyright />
<MdOutlineShoppingBag />
<FaArrowUp />
<IoIosArrowBack />
<IoStarSharp />
<FaHeart />

</div> _/
}

{/_ <span>
<FaSearch />
</span> _/}

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

https://www.figma.com/files/team/1268822457136482906/recents-and-sharing?fuid=1268822451911536622

## This is the section for the page. On line 609 I have a re-useable button there, to be used on all pages of the web app.



 <header>
          <span>
            <img src="" alt="" />
          </span>
          <input type="text" name="" placeholder="" />
          <span></span>
          <h6>SimpleWood Chair Collection</h6>
          <form action="">
            <label htmlFor="Shop By">Shop By</label>
            <input type="text" placeholder="Shop B" />
          </form>
        </header>

        <main>
          <section className="grid grid-cols-3 py-5 px-5 font-poppins font-medium text-center">
            <div>
              <span className=" w-96 aspect-square bg-swGray">
                <img src="ppt chair1.png" alt="" />
                <div className="mx-32"></div>
                <span></span>
              </span>
            </div>
            <p>Cupboards</p>
            <p className="line-through text-gray-400">$45.00</p>
            <p>$44.00</p>
            <p>3 reviews</p>

            <span className=" w-96 aspect-square bg-swGray">
              <img src="ppt chair2.png" alt="" />
              <h5>Cupboards</h5>
              <h6 className="line-through text-gray-400">$45.00</h6>
              <h6>$44.00</h6>
              <small>3 reviews</small>
              <span></span>
            </span>

            <span className=" w-96 aspect-square bg-swGray">
              <img src="ppt chair3.png" alt="" />
              <h5>Cupboards</h5>
              <h6 className="line-through text-gray-400">$45.00</h6>
              <h6>$44.00</h6>
              <small>3 reviews</small>
              <span></span>
            </span>
          </section>

          <section className="grid grid-cols-3 py-5 px-5 font-poppins font-medium text-center">
            <span className=" w-96 aspect-square bg-swGray">
              <img src="ppt chair4.png" alt="" />
              <h5>Cupboards</h5>
              <h6 className="line-through text-gray-400">$45.00</h6>
              <h6>$44.00</h6>
              <small>3 reviews</small>
              <span></span>
            </span>

            <span className=" w-96 aspect-square bg-swGray">
              <img src="ppt chair2.png" alt="" />
              <h5>Cupboards</h5>
              <h6 className="line-through text-gray-400">$45.00</h6>
              <h6>$44.00</h6>
              <small>3 reviews</small>
              <span></span>
            </span>
            <span className=" w-96 aspect-square bg-swGray">
              <img src="ppt chair1.png" alt="" />
              <h5>Cupboards</h5>
              <h6 className="line-through text-gray-400">$45.00</h6>
              <h6>$44.00</h6>
              <small>3 reviews</small>
              <span></span>
            </span>
          </section>

          <section className="bg-swLight text-center text-wrap">
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
        </main>

        <footer>
          <footer className="">
            <section className=" bg-swBlack text-center">
              <span className="text-center my-3 mx-3 py-4 px-4">
                <img src="simplewood ld.png" alt="" />
              </span>
              <div className="flex justify-center gap-5 font-poppins font-medium text-swWhite">
                <p>Policy </p>
                <p>Term & Conditions </p>
                <p>Help</p>
              </div>
              <p className="font-normal font-poppins text-swGray">
                Copyring © Viachas Kul. All right reserved.
              </p>
            </section>
          </footer>
        </footer>
