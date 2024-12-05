import { useNavigate } from "react-router-dom";



function About({ savedData }) {
    const navigate = useNavigate();


  const filterPhotos = savedData?.filter((_, index) => index < 3);

  return (
    <div className="">
      <blockquote className="bg-[url('/images/about-hero.jpg')] w-[100%] h-96 sm:h-[30rem] bg-cover relative mt-[2rem]">
        <h1 className=" w-[30rem] text-4xl sm:text-5xl text-center  text-white absolute bottom-20 md:left-10 ">
          ABOUT HEXASHOP
        </h1>
      </blockquote>

      <section className="grid sm:grid-cols-3 ">
        {filterPhotos?.map((photo) => (
          <div
            onClick={() => {
              navigate(`/productdetails/${photo.id}`);
            }}
            key={photo.id}
            className=" mt-14 mx-auto cursor-pointer"
          >
            <img
              src={photo.urls.full}
              alt=""
              className="w-52 lg:w-[20rem] h-52 lg:h-[23rem] mb-4 object-cover"
            />

            <button className="uppercase mx-14 lg:mx-28 bg-sky-900 text-white py-2 px-3 rounded-2xl">
              buy now
            </button>
          </div>
        ))}
      </section>

      <blockquote className="mt-20 mb-20">
        <h1 className="text-3xl text-center font-semibold mb-6">
          The Founders
        </h1>
      </blockquote>

      <section className="grid md:grid-cols-4 grid-cols-2">
        <div className="m-auto">
          <img
            src="/images/person-1.png"
            alt=""
            className="w-40 h-40 lg:w-56 lg:h-56 "
          />
          <p className="font-bold my-4 ">HM Jawad</p>
        </div>
        <div className="m-auto">
          <img
            src="/images/person-2.png"
            alt=""
            className="w-40 h-40 lg:w-56 lg:h-56"
          />
          <p className="font-bold my-4">Furqan Abid</p>
        </div>
        <div className="m-auto">
          <img
            src="/images/person-3.png"
            alt=""
            className="w-40 h-40 lg:w-56 lg:h-56"
          />
          <p className="font-bold my-4">Abdullah Ah</p>
        </div>
        <div className="m-auto">
          <img
            src="/images/person-4.png"
            alt=""
            className="w-40 h-40 lg:w-56 lg:h-56"
          />
          <p className="font-bold my-4">Abrar Khan</p>
        </div>
      </section>
    </div>
  );
}

export default About;
