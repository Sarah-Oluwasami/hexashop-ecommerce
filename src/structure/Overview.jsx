// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../cartContext/cartSlice";
import { useNavigate } from "react-router-dom";


function Overview({ savedData }) {
  const navigate = useNavigate();
 
  const filterPhotos = savedData?.filter((_, index) => index < 5);
  

  return (
    <div className="relative  ">
      <section className="">
        <div className="bg-[url('/images/hero-bg.png')] w-[100%] md:h-[50rem] h-[25rem] bg-cover relative sm:mt-[2rem] mt-0">
          <h1 className=" w-[25rem] text-4xl text-right md:text-center font-bold text-white absolute top-56 md:top-64 md:right-80 right-0">
            STYLIST PICKS BEAT THE HEAT
          </h1>

          <button className=" border-[5px] px-5 py-1  text-white border-white text-lg absolute md:top-96 top-80 right-1 md:right-[28rem] transition ease-in-out delay-150 hover:-translate-x-1 hover:bg-cyan-800 hover:scale-11">
            SHOP NOW
          </button>
        </div>

        <blockquote className="mt-10  mb-14">
          <h1 className="text-4xl text-center font-medium mb-6">
            Discover New Arrivals
          </h1>
          <p className="text-gray-500 text-center">Recently added shirts!</p>
        </blockquote>

        <div
          id="buyNow"
          className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3"
        >
          {savedData?.map((photo) => (
            <div
              onClick={() => {
                navigate(`/productdetails/${photo.id}`);
              }}
              key={photo.id}
              className=" m-auto cursor-pointer"
            >
              <div className="product-card mb-10 sm:w-[13rem] lg:w-[15rem]">
                <img
                  src={photo.urls.full}
                  alt=""
                  className="w-40 lg:w-[15rem] sm:w-[10rem] h-56 mb-4 object-cover"
                />
                <div className="desc-block">
                  <p className="font-bold sm:ml-0 lg:ml-6 mb-2">
                    {photo.alt_description.substring(0, 20) + "..."}
                  </p>
                  <i className="sm:ml-10 lg:ml-20 pb-1 text-cyan-800">
                    {"$" + photo.height.toFixed(2)}
                  </i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="grid md:grid-cols-4 grid-cols-2 mx-10 my-14 ">
          <div className="flex mb-2">
            <img src="/images/shipping-icon.png" alt="" className="w-6 h-5 " />
            <div className="mx-6">
              <h2 className="font-bold text-xs lg:text-sm mb-2">
                FREE SHIPPING
              </h2>
              <p className="text-xs lg:text-sm text-gray-600">
                Enjoy free shipping on all <br />
                orders above $100
              </p>
            </div>
          </div>

          <div className="flex ">
            <img src="/images/support-icon.png" alt="" className="w-6 h-6" />
            <div className="mx-6">
              <h2 className="font-bold text-xs lg:text-sm mb-2">
                SUPPORT 24/7
              </h2>
              <p className="text-xs lg:text-sm text-gray-600">
                Our support team is there <br /> to help you for queries
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/return-icon.png" alt="" className="w-5 h-5" />
            <div className="mx-6">
              <h2 className="font-bold text-xs lg:text-sm mb-2">
                30 DAYS RETURN
              </h2>
              <p className="text-xs lg:text-sm text-gray-600">
                Simply return it within 30 <br /> days for an exchange.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/payment-icon.png" alt="" className="w-5 h-5" />
            <div className="mx-6">
              <h2 className="font-bold text-xs lg:text-sm mb-2">
                100% PAYMENT SECURE
              </h2>
              <p className="text-xs lg:text-sm text-gray-600">
                Our payments are secured <br /> with 256 bit encryption
              </p>
            </div>
          </div>
        </blockquote>

        <blockquote className="justify-center grid sm:grid-cols-2 gap-2">
          <div className="bg-black flex grow mx-6 max-w-4xl justify-center items-center flex-col text-white h-80 ">
            <h1 className="uppercase md:text-2xl text-xl md:tracking-wider tracking-normal font-semibold mb-4">
              peace of mind
            </h1>
            <p className="md:text-sm text-xs text-slate-300 mb-7 text-center">
              A one-stop platform for all your fashion needs, hassle-free.{" "}
              <br />
              Buy with a peace of mind.
            </p>
            <div className="flex justify-center items-center">
              <a href="#buyNow">
                <button className="border-2 bg-white text-lg text-sky-800  px-8 py-2">
                  BUY NOW
                </button>
              </a>
            </div>
          </div>

          <div className="bg-black flex justify-center items-center flex-col text-white h-80 md:px-20 px-2">
            <h1 className="uppercase md:text-2xl text-xl md:tracking-wider tracking-normal font-semibold mb-4">
              Buy 2 Get 1 Free
            </h1>
            <p className="md:text-sm text-xs text-slate-300 mb-7 text-center">
              End of season sale. Buy any 2 items of your choice <br /> and get
              1 free.
            </p>
            <div className="flex justify-center items-center">
              <a href="#buyNow">
                <button className="border-2 bg-white sm:text-lg text-sky-800 px-8 py-2">
                  BUY NOW
                </button>
              </a>
            </div>
          </div>
        </blockquote>

        <blockquote className="mt-10 mb-14">
          <h1 className="text-4xl text-center font-medium mb-6">Top Sellers</h1>
          <p className="text-gray-500 text-center">
            Browse our top-selling products
          </p>
        </blockquote>

        <div className="grid grid-cols-2 xl:grid-cols-5 sm:max-lg:grid-cols-3 mx-6 lg:grid-cols-3">
          {filterPhotos?.map((photo) => (
            <div
              onClick={() => {
                navigate(`/productdetails/${photo.id}`);
              }}
              key={photo.id}
              className="m-auto cursor-pointer"
            >
              <div className="product-card  lg:w-[15rem]">
                <img
                  src={photo.urls.full}
                  alt=""
                  className="w-40 lg:w-[15rem] sm:[12rem] h-56 mb-2 object-cover"
                />
                <div className="desc-block mb-6">
                  <p className="font-bold lg:ml-6 sm:ml-0 sm:text-sm mb-1">
                    {photo.alt_description.substring(0, 25) + "..."}
                  </p>
                  <i className="sm:ml-8 lg:ml-20 pb-1  text-cyan-800">
                    {"$" + photo.height.toFixed(2)}
                  </i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <blockquote className="flex items-center justify-center sm:mt-20 mb-10 sm:mb-28 ">
          <button className="uppercase bg-sky-800 text-slate-200 px-8 py-4 text-sm">
            Shop now
          </button>
        </blockquote>
      </section>
    </div>
  );
}

export default Overview;
