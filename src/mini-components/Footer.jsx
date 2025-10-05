import { BsTwitterX } from "react-icons/bs";
import { IoLogoGoogle } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/*Here I have the Footer elements, and it was used extensively across the pages of the site.*/}
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
  );
};

export default Footer;
