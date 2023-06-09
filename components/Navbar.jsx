/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import {
  MdMailOutline,
  MdOutlineNotificationsActive,
  MdOutlineAccountCircle,
  MdOutlineSettings,
} from "react-icons/md";

const Navbar = ({ title, children }) => {
  const [pop, setPop] = useState(false);

  return (
    <div className="flex flex-col w-[100%]">
      {/* NAVBAR */}
      <div className="sticky top-0 w-100 h-[8vh] px-12 py-0 bg-white text-slate-700 flex justify-between items-center border-b-2">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="flex flex-row gap-6 items-center">
          <MdOutlineNotificationsActive className="text-3xl cursor-pointer text-slate-500 transition-all ease-in duration-100 hover:text-slate-700" />
          <MdMailOutline className="text-3xl cursor-pointer text-slate-500 transition-all ease-in duration-200 hover:text-slate-700" />

          <div className="relative">
            {/* AVATAR */}
            <img
              onClick={() => {
                setPop(!pop);
              }}
              src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&w=1000&q=80"
              alt="avatar picture"
              className="ml-6 w-[45px] h-[45px] object-cover rounded-full cursor-pointer border-1 border-slate-300"
            />

            {/* AVATAR MENU */}
            <div
              className={
                pop == true
                  ? "absolute right-0 mt-1 h-fit w-fit text-[0.95rem] bg-white text-slate-500 font-medium border-2 rounded-md"
                  : "hidden"
              }
            >
              <div className="pl-4 pr-10 select-none cursor-pointer py-2 hover:bg-gray-100 flex items-center gap-3 border-b-2 border-slate-100">
                <MdOutlineAccountCircle className="text-xl" />
                <div>Profile</div>
              </div>
              <div className="pl-4 pr-10 select-none cursor-pointer py-2 hover:bg-gray-100 flex items-center gap-3 border-b-2 border-slate-100">
                <MdOutlineSettings className="text-xl" />
                <div>Settings</div>
              </div>
              <div className="pl-4 pr-10 select-none cursor-pointer py-2 hover:bg-gray-100 flex items-center gap-3 border-b-2 border-slate-100">
                <BiLogOut className="text-xl" />
                <Link href={"/login"}>Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BREADCUMB */}
      <div className="w-100 h-[5vh] px-12 bg-white text-slate-700 flex justify-between items-center shadow-sm">
        Breadcumb
      </div>

      {/* CHILDREN CONTAINER */}
      <div className="bg-gray w-100 h-[92vh] bg-gray-200 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Navbar;
