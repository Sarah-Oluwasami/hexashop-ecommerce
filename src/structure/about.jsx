
import { useDispatch } from "react-redux";

import { addToCart } from "../cartContext/cartSlice";

function About( {savedData} ) {

  const dispatch = useDispatch();
  function handleAddToCart(course) {
    const newCartItem = {
      id: course.id,
      url: course.urls.full,
      description: course.alt_description,
    };
    dispatch(addToCart(newCartItem));
  }

   const filterPhotos = savedData?.filter((_, index) => index < 3);

    return (
      <div>
        <blockquote className="bg-[url('/images/about-hero.jpg')] w-[100%] h-[30rem] bg-cover relative mt-[2rem]">
          <h1 className=" w-[30rem] text-5xl text-center  text-white absolute bottom-32 left-10 ">
            ABOUT HEXASHOP
          </h1>
        </blockquote>

        <section className="grid grid-cols-3">
          {filterPhotos?.map((photo) => (
            <div
              onClick={() => {
                handleAddToCart(photo);
              }}
              key={photo.id}
              className=" mt-14 mx-auto cursor-pointer"
            >
              <img
                src={photo.urls.full}
                alt=""
                className="w-[20rem] h-[23rem] mb-4 object-cover"
              />
            </div>
          ))}
        </section>

        <blockquote className="mt-20 mb-20">
          <h1 className="text-3xl text-center font-semibold mb-6">
            The Founders
          </h1>
        </blockquote>

        <section className="flex justify-evenly">
          <div>
            <img src="/images/person-1.png" alt="" className="w-64 h-60" />
            <p className="font-bold my-4">HM Jawad</p>
          </div>
          <div>
            <img src="/images/person-2.png" alt="" className="w-64 h-60" />
            <p className="font-bold my-4">Furqan Abid</p>
          </div>
          <div>
            <img src="/images/person-3.png" alt="" className="w-64 h-60" />
            <p className="font-bold my-4">Abdullah Ah</p>
          </div>
          <div>
            <img src="/images/person-4.png" alt="" className="w-64 h-60" />
            <p className="font-bold my-4">Abrar Khan</p>
          </div>
        </section>
      </div>
    );
}

export default About;