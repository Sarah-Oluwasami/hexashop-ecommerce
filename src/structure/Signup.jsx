import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      // Save data to localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("Signup successful! You can now log in.");
      navigate("/"); // Redirect to Login page
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div className="flex justify-evenly">
      <div className=" my-20 flex ">
        <blockquote>
          {" "}
          <img
            src="/images/login-picture.png"
            alt=""
            className="w-[30rem] max-lg:hidden"
          />
        </blockquote>

        <div className="m-auto">
          <div className="flex justify-between w-60 mt-10 m-auto">
            <blockquote>
              <img src="/images/login-icon.png" alt="" className="w-14 " />
            </blockquote>
            <blockquote>
              <p className="text-4xl text-zinc-500 ">HEXASHOP</p>
            </blockquote>
          </div>

          <blockquote className="mt-10 w-[29rem] ">
            <p className="uppercase text-xs text-neutral-400 py-2 mx-12">
              {" "}
              welcome 
            </p>
            <h1 className="text-2xl font-semibold text-zinc-700 mx-12">
              Create an Account.
            </h1>
          </blockquote>

          <form action="" onSubmit={handleSubmit} className="mt-6">
            <blockquote className=" bg-zinc-100 rounded-lg w-96 px-6 py-2 m-auto">
              <label
                htmlFor=""
                className="uppercase font-semibold text-neutral-500 text-xs"
              >
                Your name
              </label>
              <br />
              <input
                type="text"
                placeholder="Johnson Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-zinc-100 py-2 w-80 focus:outline-none"
                required
              />
            </blockquote>

            <blockquote className="mt-6 bg-zinc-100 rounded-lg w-96 px-6 py-2 m-auto">
              <label
                htmlFor=""
                className="uppercase font-semibold text-neutral-500 text-xs"
              >
                Email
              </label>
              <br />
              <input
                type="email"
                placeholder="johndoe@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-100 py-2 w-80 focus:outline-none"
                required
              />
            </blockquote>

            <blockquote className="mt-6 bg-zinc-100 rounded-lg w-96 px-6 py-2 m-auto">
              <label
                htmlFor=""
                className="uppercase font-semibold text-neutral-500 text-xs"
              >
                Password
              </label>
              <br />
              <input
                type="password"
                placeholder="enter in your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-zinc-100 py-2 w-80 focus:outline-none"
                required
              />
            </blockquote>

            <button
              type="submit"
              className="uppercase bg-sky-900 text-white text-xs  w-96 py-6 mt-6 rounded-lg mx-12"
            >
              <p className="flex items-center justify-center">
                {" "}
                signup{" "}
                <img
                  src="/images/arrow-login-icon.png"
                  alt=""
                  className="w-4 mx-3"
                />
              </p>
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p className="w-96 text-center m-auto mt-10 ">
            Already have an account?{" "}
            <Link to="/" className="underline text-zinc-600">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
