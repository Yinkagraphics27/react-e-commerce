import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="bg-swLight text-center text-wrap w-full h-48 flex items-center justify-center">
      {/*These are the elements that made up the call-to-action side of the page, and it was also used extensively across the pages of the site.*/}
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
  );
};

export default Cta;
