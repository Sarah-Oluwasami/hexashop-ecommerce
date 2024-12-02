import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fetch data from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      setError("");
      navigate("/overview"); // Redirect to Dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <div className=" my-10 flex justify-evenly">
        <blockquote>
          {" "}
          <img src="/images/login-picture.png" alt="" className="w-[30rem]" />
        </blockquote>
        <div>
          <div className="flex justify-between w-60 mt-32">
            <blockquote>
              <img src="/images/login-icon.png" alt="" className="w-14" />
            </blockquote>
            <blockquote>
              <p className="text-4xl text-zinc-500 ">HEXASHOP</p>
            </blockquote>
          </div>

          <blockquote className="mt-10  w-[29rem]">
            <p className="uppercase text-xs text-neutral-400 py-2">
              {" "}
              welcome back
            </p>
            <h1 className="text-2xl font-semibold text-zinc-700">
              Continue to your Account.
            </h1>
          </blockquote>

          <form action="" onSubmit={handleSubmit} className="mt-6">
            <blockquote className="bg-zinc-100 rounded-lg w-96 px-6 py-2">
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

            <blockquote className="mt-6 bg-zinc-100 rounded-lg w-96 px-6 py-2">
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
              className="uppercase bg-sky-900 text-white text-xs w-96 py-6 mt-6 rounded-lg"
            >
              <p className="flex items-center justify-center">
                {" "}
                Continue{" "}
                <img
                  src="/images/arrow-login-icon.png"
                  alt=""
                  className="w-4 mx-3"
                />
              </p>
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <p className="w-96 text-center mt-10">
            Dont have an account?{" "}
            <Link to="/signup" className="underline text-zinc-600">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
