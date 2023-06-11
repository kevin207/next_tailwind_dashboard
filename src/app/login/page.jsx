import React from "react";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    <div className="h-screen z-0  w-screen bg-slate-300 flex justify-center items-center">
      {/* BG + OVERLAY */}
      <Image
        src="/background.jpg"
        alt="login background"
        width={1920}
        height={1080}
        className="absolute object-cover w-screen h-screen"
      />
      <div className="bg-slate-800 z-10 absolute w-[100%] h-[100%] opacity-50" />

      {/* LOGIN FORM */}
      <div className="bg-white z-20 bg-opacity-80 text-slate-700 px-8 py-14 rounded-lg shadow-md w-[500px] ">
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
