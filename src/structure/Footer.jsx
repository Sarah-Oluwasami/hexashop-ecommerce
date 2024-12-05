// import React from "react";

function Footer() {
  return (
    <div className="bg-gray-50 h-fit">
      <section className="grid grid-cols-4 justify-around sm:mx-14 mb-32 pt-10 text-xs">
        <div>
          <h1 className="uppercase text-sm tracking-wider font-semibold mb-8">
            Company info
          </h1>
          <ul className="">
            <a href="" className="">
              About Us
            </a>
            <br />
            <a href="" className="">
              Latest Posts
            </a>
            <br />
            <a href="" className="">
              Contact Us
            </a>
            <br />
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <h1 className="uppercase text-sm tracking-wider font-semibold mb-8">
            help links
          </h1>
          <ul>
            <a href="">Tracking </a>
            <br />
            <a href=""> Order Status</a>
            <br />
            <a href="">Delivery</a>
            <br />
            <a href="">Shipping Info</a>
            <br />
            <a href="">FAQ</a>
          </ul>
        </div>

        <div>
          <h1 className="uppercase text-sm tracking-wider font-semibold mb-8">
            useful links
          </h1>
          <ul>
            <a href="">Special </a>
            <br />
            <a href="">Offers</a>
            <br />
            <a href="">Gift Cards </a>
            <br />
            <a href="">Advertising Terms of Use</a>
          </ul>
        </div>

        <div>
          <h1 className="uppercase text-sm tracking-wider font-semibold mb-8">
            get in the know
          </h1>
          <form action="">
            <input
              type="text"
              className="md:w-64 w-20 py-2 bg-inherit border-b-2 border-gray-500"
              placeholder="Enter email"
            />
          </form>
        </div>
      </section>

      <hr className="sm:mx-14 mx-2 bg-gray-800 " />

      <blockquote className=" sm:mx-12 mx-2 my-2 sm:my-10">
        <div>
          <h1 className="my-2">&copy; 2020 NorthStar eCommerce</h1>
          <span>Privacy Policy </span>{" "}
          <span className="pl-2">Terms & Conditions</span>
        </div>
      </blockquote>
    </div>
  );
}

export default Footer;
