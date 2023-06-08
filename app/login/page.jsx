import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="h-screen z-0  w-screen bg-slate-300 flex justify-center items-center itb">
      <div className="bg-slate-800 z-10 absolute w-screen h-screen opacity-40" />
      <div className="bg-white z-20 bg-opacity-80 text-slate-700 px-8 py-16 rounded-lg shadow-md w-[500px] ">
        <div className="text-3xl font-bold">Login Form</div>

        <form className="flex flex-col gap-3 mt-6 font-medium">
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
