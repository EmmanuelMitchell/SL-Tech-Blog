import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="h-screen w-screen  bg-gradient-to-r from-green-500 to-blue-600 flex flex-col justify-center items-center">
      <div className=" sm:flex gap-4 px-3 max-w-6xl mx-auto">
        <div className="">
          <img src="./public/logo.jpeg" alt="" className="rounded-full" />
          <p className="text-white mt-4 text-2xl font-mono">
            This is a demo SL-Blog-Tech project. You can sign up <br />
            with your email and password or with Google.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-sm ">
          <h2 className="text-center mt-2 text-xl font-semibold text-slate-900">
            SingUp
          </h2>
          <form className="p-10">
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
                type="text"
                placeholder="email"
                name="email"
                id="email"
                className="w-full focus:outline-none sm:outline-none border rounded-lg border-slate-900 py-2 px-4"
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
                type="text"
                placeholder="password"
                name="password"
                id="password"
                className="w-full focus:outline-none sm:outline-none border rounded-lg border-slate-900 py-2 px-4"
              />
            </div>
            <div>
              <button className="border border-slate-900 rounded-lg py-2 px-4 w-full sm:hover:bg-gradient-to-r from-green-500 to-blue-600  sm:hover:text-white">
                SingUp
              </button>
              <button className="border border-slate-900 rounded-lg py-2 px-4 w-full sm:hover:bg-gradient-to-r from-green-500 to-blue-600  sm:hover:text-white mt-4">
                Continue with google
              </button>
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
