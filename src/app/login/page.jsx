/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="h-screen z-0  w-screen bg-slate-300 flex justify-center items-center itb">
      {/* OVERLAY BG */}
      <div className="bg-slate-800 z-10 absolute w-screen h-screen opacity-40" />

      {/* LOGIN FORM */}
      <div className="bg-white z-20 bg-opacity-80 text-slate-700 px-8 py-14 rounded-lg shadow-md w-[500px] ">
        {/* LOGO */}
        <div className="mb-6 w-[100%] flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/id/9/95/Logo_Institut_Teknologi_Bandung.png"
            className="rounded-full h=[180px] w-[180px]"
            alt="logo itb"
          />
        </div>

        {/* FORM CONTENT */}
        <div className="text-3xl font-bold mb-2 ">Login Form</div>
        <form className="flex flex-col gap-3 font-medium">
          <div>
            <div>Username</div>
            <input
              type="text"
              className="w-[100%] border-2 rounded-md px-2 py-1"
            />
          </div>

          <div>
            <div>Password</div>
            <input
              type="password"
              className="w-[100%] border-2 rounded-md px-2 py-1"
            />
          </div>

          <Link
            href={"/dashboard"}
            className="bg-slate-700 rounded-md mt-2 text-white py-2 flex justify-center items-center border-2 border-slate-700 hover:bg-transparent hover:text-slate-700 transition-all ease-out duration-200"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
