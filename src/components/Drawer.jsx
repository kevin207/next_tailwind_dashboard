"use client";
import { useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdDashboard,
  MdSupervisorAccount,
  MdAssignmentTurnedIn,
} from "react-icons/md";
import { FaAtlassian } from "react-icons/fa";
import Link from "next/link";

const Drawer = () => {
  const [drawer, setDrawer] = useState(true);
  const [active, setActive] = useState("dashboard");

  return (
    <div
      className={`w-[15vw] h-[100vh] bg-secondary flex justify-between flex-col transition-all ease-in-out duration-400 ${
        drawer == false && "w-[4vw]"
      }`}
    >
      {/* TOP */}
      <div className="text-tertiary sticky top-0 font-normal bg-primary flex h-[8vh] justify-center items-center shadow-sm">
        <FaAtlassian className="text-3xl" />
        <div className={`text-xl transition-all ease-in ${drawer == false && "opacity-0 absolute duration-0"}`}>
          tlassian
        </div>
      </div>

      {/* MIDDLE */}
      <div className="text-white h-[86vh]">
        {/* FIRST MENU */}
        <div className={`mt-16 flex flex-col`}>
          {/* MENU TITLE */}
          <div
            className={`px-4 text-md font-medium mb-1 text-tertiary ${
              drawer == false && "opacity-0"
            }`}
          >
            MENU
          </div>

          {/* MENU ITEMS */}
          <Link
            href={"/dashboard"}
            onClick={() => setActive("dashboard")}
            className={`flex w-[100%] flex-row gap-4 px-4 py-5 text-slate-200 items-center transition-all ease-in-out duration-300 hover:bg-slate-700 ${
              active == "dashboard" && "bg-slate-700"
            } ${
              drawer == false &&
              "justify-center text-slate-100 group-hover:justify-normal"
            }`}
          >
            <MdDashboard className="text-2xl" />
            <div
              className={`text-md font-medium transition-all ease-in ${
                drawer == false && "duration-0 opacity-0 absolute"
              }`}
            >
              Dashboard
            </div>
          </Link>

          <Link
            href={"/dashboard/students"}
            onClick={() => setActive("students")}
            className={`flex w-[100%] flex-row gap-4 px-4 py-5 text-slate-200 items-center transition-all ease-in-out duration-300 hover:bg-slate-700 ${
              active == "students" && "bg-slate-700"
            } ${drawer == false && "justify-center text-slate-100"}`}
          >
            <MdSupervisorAccount className="text-2xl" />
            <div
              className={`text-md font-medium  transition-all ease-in ${
                drawer == false && "duration-0 opacity-0 absolute"
              }`}
            >
              Students
            </div>
          </Link>

          <Link
            href={"/dashboard/assigments"}
            onClick={() => setActive("assigments")}
            className={`flex w-[100%] flex-row gap-4 px-4 py-5 text-slate-200 items-center transition-all ease-in-out duration-300 hover:bg-slate-700 ${
              active == "assigments" && "bg-slate-700"
            } ${drawer == false && "justify-center text-slate-100"}`}
          >
            <MdAssignmentTurnedIn className="text-2xl" />
            <div
              className={`text-md font-medium  transition-all ease-in ${
                drawer == false && "duration-0 opacity-0 absolute"
              }`}
            >
              Assigments
            </div>
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        onClick={() => {
          setDrawer(!drawer);
        }}
        className={`text-tertiary cursor-pointer font-semibold text-md bg-primary flex h-[6vh] justify-end items-center px-6 transition-all ease-in duration-250 hover:text-slate-400 ${
          drawer == false && "px-3"
        }`}
      >
        <MdKeyboardArrowLeft
          className={`text-3xl transition-all ease-in duration-200 ${
            drawer == false && "rotate-180"
          }`}
        />
      </div>
    </div>
  );
};

export default Drawer;
