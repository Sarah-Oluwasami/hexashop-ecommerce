import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { addToCart } from "../cartContext/cartSlice";

function Productdetails() {
  const dispatch = useDispatch();
  const [savedData, setSavedData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const carts = useSelector((state) => state.cart.carts);

    useEffect(() => {
      console.log("Current carts:", carts); // Log the carts array to the console
    }, [carts]);

  function handleAddToCart(course) {
    if (!course) return;
    const newCartItem = {
      id: course.id,
      url: course.urls.full,
      description: course.alt_description,
      price: course.height,
    };
    dispatch(addToCart(newCartItem));
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/${id}`, {
          headers: {
            Authorization:
              "Client-ID JWaba-oKF0FaLeccIragCY_7WInUQM-gXRpPZMpJ_qo",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        if (data) {
          setSavedData(data);
        } else {
          throw new Error("Data not found");
        }
      } catch (error) {
        setError(error.message);
        console.log("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, [id]);

  return (
    <div>
      <div className="main-container my-20 lg:my-36 mx-2 lg:mx-14 grid grid-cols-2 gap-2">
        <blockquote>
          {savedData ? (
            <img
              src={savedData.urls.full}
              alt={savedData.alt_description || "Product Image"}
              className="w-[20rem] h-56 lg:w-[32rem] xl:h-[47rem] mb-4 object-cover"
              onClick={() => {
                handleAddToCart(savedData);
              }}
            />
          ) : (
            <p>Loading...</p>
          )}
        </blockquote>

        <blockquote className="  sm:w-fit ">
          <div className="uppercase text-xs tracking-tight mb-3">
            <b className=" text-zinc-400 font-semibold">
              home / shop / randoms /
            </b>
            <b className=""> shop</b>
          </div>
          <p className="font-semibold sm:text-xl xl:text-3xl mb-1 sm:mb-6">
            {savedData?.alt_description || "Product Description"}
          </p>

          <div className="flex items-center w-3 xl:w-6 mb-2 sm:mb-8">
            <img src="/images/star-icon.jpg" alt="star icon" />
            <img src="/images/star-icon.jpg" alt="star icon" />
            <img src="/images/star-icon.jpg" alt="star icon" />
            <img src="/images/star-icon.jpg" alt="star icon" />
            <img src="/images/faded-star-icon.jpg" alt="star icon" />
            <p className="px-2 text-xs xl:text-xl">(15)</p>
          </div>

          <div className="mb-2 sm:mb-6">
            <i className="text-sky-900 text-xl xl:text-3xl">
              {"$" + savedData?.height.toFixed(2)}
            </i>
          </div>

          <div className="text-neutral-700 mb-8 xl:mb-16 xl:text-2xl text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              odio ipsam quisquam soluta ducimus quaerat unde reprehenderit, eos
              porro minus nostrum ut, veniam, quis nam cum sed a ad impedit.
            </p>
          </div>

          <div className="group relative xl:mb-5 inline-block">
            <button className="border-2 xl:w-56 px-10 py-2 xl:h-14 hover:bg-zinc-100">
              Select Size
            </button>

            <div className="dropdown-content bg-white w-56 group-hover:block hidden absolute shadow-2xl z-10">
              <a href="#" className=" px-2 py-3 flex justify-between">
                Small <p>S</p>
              </a>
              <a href="#" className=" px-2 py-3 flex justify-between">
                Medium <p>M</p>
              </a>
              <a href="#" className=" px-2 py-3 flex justify-between">
                Large <p>L</p>
              </a>
              <a href="#" className=" px-2 py-3 flex justify-between">
                Extra Large <p>XL</p>
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                handleAddToCart(savedData);
              }}
              className="border-[5px] mt-5 mb-6 mx-[-4px] xl:px-10 px-6 py-2 xl:py-4 text-white border-white xl:text-lg bg-sky-800"
            >
              ADD TO CART
            </button>
          </div>

          <div className="xl:text-lg ">
            <p>
              Category:
              <span className="text-zinc-700"> Women, Polo, Casual</span>
            </p>
            Tags: <span className="text-zinc-700 ">Modern, Design, cotton</span>
          </div>

          {/* <div className="flex items-center w-6">
            <img
              src="/images/facebook-icon.png"
              alt="Facebook"
              className="mx-1"
            />
            <img
              src="/images/instagram-icon.png"
              alt="Instagram"
              className="mx-1"
            />
            <img
              src="/images/new-twitter-icon.png"
              alt="Twitter"
              className="mx-1"
            />
            <img src="/images/google-icon.png" alt="Google" className="mx-1" />
            <img src="/images/gmail-icon.png" alt="Gmail" className="mx-1" />
          </div> */}
        </blockquote>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <div className="sec-container mb-6">
        <blockquote className="flex">
          <p className="border px-5 py-3 font-semibold">Description</p>
          <p className="border px-5 py-3 text-neutral-500 font-semibold">
            Reviews(0)
          </p>
        </blockquote>
        <blockquote className="border w-full px-16 py-14 text-neutral-600">
          <p>
            A key objective is engaging digital marketing customers and allowing
            them to interact with the brand through servicing and delivery of
            digital media. Information is easy to access at a fast rate through
            the use of digital communications.
          </p>
          <br />
          <p>
            Users with access to the Internet can use many digital mediums, such
            as Facebook, YouTube, Forums, and Email etc. Through Digital
            communications it creates a Multi-communication channel where
            information can be quickly exchanged around the world by anyone
            without any regard to whom they are.
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default Productdetails;
