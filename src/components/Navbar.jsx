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
  // const [pop, setPop] = useState(false);

  return (
    <div className="flex flex-col w-[100%]">
      {/* NAVBAR */}
      <div className="sticky top-0 w-100 h-[8vh] px-12 py-0 bg-white text-slate-700 flex justify-between items-center border-b-2">
        <div className="text-2xl font-semibold text-slate-700">{title}</div>
        <div className="flex flex-row gap-6 items-center">
          {/* ICON MENU */}
          <MdOutlineNotificationsActive className="text-3xl cursor-pointer text-text transition-all ease-in duration-100 hover:text-slate-700" />
          <MdMailOutline className="text-3xl cursor-pointer text-text transition-all ease-in duration-200 hover:text-slate-700" />

          {/* AVATAR + DROPDOWN */}
          <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
            <img
              tabIndex={0}
              src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&w=1000&q=80"
              alt="avatar picture"
              className="ml-6 w-[45px] h-[45px] object-cover rounded-full cursor-pointer border-1 border-slate-300"
            />
            <ul
              tabIndex={0}
              className="dropdown-content menu mt-1  bg-white rounded-md w-44 text-slate-700 p-0 shadow overflow-hidden border-[1px] border-slate-300"
            >
              <li className="border-b-[1px] border-gray-200">
                <div className="flex items-center flex-row gap-3 rounded-none">
                  <MdOutlineAccountCircle className="text-xl" />
                  <div>Profile</div>
                </div>
              </li>

              <li className="border-b-[1px] border-gray-200">
                <div className="flex items-center flex-row gap-3 rounded-none">
                  <MdOutlineSettings className="text-xl" />
                  <div>Settings</div>
                </div>
              </li>

              <li className="border-b-[1px] border-gray-200">
                <Link
                  href={"/login"}
                  className="flex items-center flex-row gap-3 rounded-none"
                >
                  <BiLogOut className="text-xl" />
                  <div>Logout</div>
                </Link>
              </li>
            </ul>
          </div>

          {/* OLD AVATAR + DROPDOWN */}
          {/* <div className="relative">
         
            <img
              onClick={() => {
                setPop(!pop);
              }}
              src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&w=1000&q=80"
              alt="avatar picture"
              className="ml-6 w-[45px] h-[45px] object-cover rounded-full cursor-pointer border-1 border-slate-300"
            />

       
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
          </div> */}
          
        </div>
      </div>

      {/* CHILDREN CONTAINER */}
      <div className="bg-gray-100 w-100 h-[92vh]">{children}</div>
    </div>
  );
};

export default Navbar;
