import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!formData.username || !formData.email || formData.password) {
    //   return setErrorMessage("Please fill out all fields.");
    // }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      setErrorMessage(null);
      // console.log(data);
      if (res.ok) {
        navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
      setErrorMessage(null);
    }
  };
  return (
    <div className="h-screen w-screen  bg-gradient-to-r from-green-500 to-blue-600 flex flex-col justify-center items-center">
      <div className=" sm:flex gap-4 px-3 max-w-6xl mx-auto">
        <div className="">
          <img src="/logo.jpeg" alt="" className="rounded-full" />
          <p className="text-white mt-4 text-2xl font-mono">
            This is a demo project. You can sign up <br />
            with your email and password or with Google.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-sm ">
          <h2 className="text-center mt-2 text-xl font-semibold text-slate-900">
            SingUp
          </h2>
          <form className="p-10" onSubmit={handleSubmit}>
            <div className="py-2">
              <label
                className="block text-slate-900 font-mono py-1 "
                htmlFor="username"
              >
                UserName
              </label>
              <input
                type="text"
                placeholder="username"
                name="username"
                id="username"
                className="w-full focus:outline-none sm:outline-none border rounded-lg border-slate-900 py-2 px-4"
                onChange={handleChange}
                required
              />
            </div>

            <div className="py-2">
              <label
                className="block text-slate-900 font-mono py-1 "
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                id="email"
                className="w-full focus:outline-none sm:outline-none border rounded-lg border-slate-900 py-2 px-4"
                onChange={handleChange}
                required
              />
            </div>

            <div className="py-2 mb-4">
              <label
                className="block text-slate-900 font-mono py-1 "
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                className="w-full focus:outline-none sm:outline-none border rounded-lg border-slate-900 py-2 px-4"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button
                className="border border-slate-900 rounded-lg py-2 px-4 w-full sm:hover:bg-gradient-to-r from-green-500 to-blue-600  sm:hover:text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
              {/* <button className="border border-slate-900 rounded-lg py-2 px-4 w-full sm:hover:bg-gradient-to-r from-green-500 to-blue-600  sm:hover:text-white mt-4">
                Continue with google
              </button> */}
              {errorMessage && (
                <div className="text-red-700 p-1 my-1">{errorMessage}</div>
              )}
              <span className="text-sm">Have an account?</span>
              <Link to="/sign-in" className="text-blue-900 font-bold ml-2">
                Sing In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
