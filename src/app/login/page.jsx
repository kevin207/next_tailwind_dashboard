import React from "react";
import Link from "next/link";
import Image from "next/image";

import { AiFillLock } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Login = () => {
  return (
    <div className="h-screen z-0  w-screen bg-slate-300 flex justify-center items-center">
      {/* BG + OVERLAY */}
      <div className="bg-slate-800 z-10 absolute w-[100%] h-[100%] opacity-60" />
      <Image
        src="/background.jpg"
        alt="login background"
        width={1920}
        height={1080}
        className="absolute object-cover w-screen h-screen"
      />

      {/* LOGIN FORM */}
      <div className="bg-white z-20 bg-opacity-80 text-slate-700 px-10 pt-12 pb-14 rounded-xl shadow-md w-[500px] ">
        {/* LOGO */}
        <div className="flex items-center justify-center">
          <div className="mb-6 w-[200px] relative h-[200px]">
            <Image
              src="/ITB.png"
              fill={true}
              alt="logo itb"
              sizes="100%"
              priority={true}
            />
          </div>
        </div>

        {/* FORM CONTENT */}
        <div className="text-3xl font-bold mb-4">Login Form</div>
        <form className="flex flex-col gap-3 font-semibold">
          <div>
            <div>Username</div>
            <div className="flex border-2 rounded-md items-stretch bg-white">
              <div className="px-2 border-r-2">
                <MdEmail className="h-[100%]" />
              </div>

              <input
                type="text"
                className="w-[100%] px-2 py-1 outline-slate-500"
              />
            </div>
          </div>

          <div>
            <div>Password</div>
            <div className="flex border-2 rounded-md items-stretch bg-white">
              <div className="px-2 border-r-2">
                <AiFillLock className="h-[100%]" />
              </div>

              <input
                type="password"
                className="w-[100%] px-2 py-1 outline-slate-500"
              />
            </div>
          </div>

          <Link
            href="/"
            className="hover:underline self-end text-sm cursor-pointer"
          >
            Forgot Password?
          </Link>

          <Link
            href={"/dashboard"}
            className="bg-slate-700 rounded-md mt-2 text-white py-2 flex justify-center items-center border-2  hover:bg-slate-800  transition-all ease-out duration-200"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
