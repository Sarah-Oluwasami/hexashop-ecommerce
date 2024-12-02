

function contact() {
  return (
    <div>
      <blockquote className="bg-[url('/images/contact-hero.jpg')] w-[100%] h-[30rem] bg-cover relative mt-[2rem]">
        <h1 className=" w-[30rem] text-5xl text-center  text-white absolute bottom-32 left-10 ">
          CONTACT US
        </h1>
      </blockquote>

      <section className="flex justify-around my-32">
        <div>
          <h1 className="text-2xl font-bold text-zinc-700 mb-12">
            We would love to hear from you.
          </h1>
          <p className="text-xs text-zinc-700 ">
            If you have any query or any type of suggestion, you can contact us
            here. We would love to hear from you.
          </p>

          <form action="" className="mt-12">
            <div className="flex mb-4">
              <blockquote>
                <label htmlFor="Name" className="text-sm text-zinc-700">
                  Name
                </label>
                <br />
                <input
                  type="
            "
                  className="border-2 border-zinc-100 transition duration-500 hover:border-zinc-300 mr-4 w-[19rem] h-12 "
                />
              </blockquote>

              <blockquote>
                <label htmlFor="Email" className="text-sm text-zinc-700">
                  Email
                </label>
                <br />
                <input
                  type="
            "
                  className=" border-2 border-zinc-100 transition duration-500 hover:border-zinc-300 w-[19rem] h-12"
                />
              </blockquote>
            </div>

            <blockquote>
              <label htmlFor="Message" className="text-sm text-zinc-700">
                Message
              </label>
              <br />
              <textarea
                className="border-2 border-zinc-100 transition duration-500 hover:border-zinc-300"
                name="message"
                rows="7"
                cols="82"
              ></textarea>
            </blockquote>

            <button className="border-[5px] mt-5 mx-[-4px] px-10 py-4 text-white border-white text-lg bg-sky-900">
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div>
          <blockquote className="mb-14">
            <h1 className="font-bold text-2xl text-zinc-800 mb-4">Visit Us</h1>
            <p className="text-zinc-500">UET Lahore, Punjab, Pakistan</p>
            <p className="text-zinc-500 font-mono">Phone: +923039898987</p>
          </blockquote>

          <blockquote>
            <h1 className="font-bold text-zinc-800 text-2xl mb-4">
              Get In Touch
            </h1>
            <p className="text-zinc-500 mb-4">
              You can get in touch with us on this provided email.
            </p>
            <p className="text-zinc-500">Email: hmjawad087@gmail.com</p>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default contact
