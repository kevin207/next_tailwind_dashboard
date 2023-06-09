"use client";
import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDashboard,
  MdSupervisorAccount,
  MdAssignmentTurnedIn,
} from "react-icons/md";
import { FaAtlassian } from "react-icons/fa";
import Link from "next/link";

const Drawer = () => {
  const [drawer, setDrawer] = useState(true);

  return (
    <div
      className={
        drawer == true
          ? "w-[15vw] h-[100vh] bg-secondary flex justify-between flex-col transition-all ease-in duration-150"
          : "w-[4vw] h-[100vh] bg-secondary flex justify-between flex-col transition-all ease-in duration-150"
      }
    >
      {/* TOP */}
      <div className="text-tertiary sticky top-0 font-normal bg-primary flex h-[8vh] justify-center items-center shadow-sm">
        {drawer == true ? (
          <>
            <FaAtlassian className="text-3xl" />
            <div className=" text-xl">tlassian</div>
          </>
        ) : (
          <FaAtlassian className="text-3xl" />
        )}
      </div>

      {/* MIDDLE */}
      <div className="text-white h-[86vh]">
        {/* FIRST MENU */}
        <div
          className={
            drawer == true ? "mt-16" : "mt-16 flex flex-col items-center"
          }
        >
          {/* MENU TITLE */}
          <div
            className={
              drawer == true
                ? "px-4 text-md font-medium mb-1 text-tertiary"
                : "hidden"
            }
          >
            MENU
          </div>

          {/* MENU ITEMS */}
          <Link
            href={"/dashboard"}
            className={
              drawer == true
                ? "text-tertiary flex items-center gap-4 py-5 px-4 cursor-pointer transition-all ease-in duration-200 hover:bg-slate-700"
                : "text-tertiary flex items-center justify-center py-5 w-[100%] cursor-pointer transition-all ease-in duration-200 hover:bg-slate-700"
            }
          >
            {drawer == true ? (
              <>
                <MdDashboard className="text-2xl" />
                <div className="text-md font-medium">Dashboard</div>
              </>
            ) : (
              <>
                <MdDashboard className="text-2xl" />
              </>
            )}
          </Link>

          <Link
            href="/dashboard/students"
            className={
              drawer == true
                ? "text-tertiary flex items-center gap-4 py-5 px-4 cursor-pointer transition-all ease-in duration-200 hover:bg-slate-700"
                : "text-tertiary flex items-center justify-center py-5 w-[100%] cursor-pointer transition-all ease-in duration-200 hover:bg-slate-700"
            }
          >
            {drawer == true ? (
              <>
                <MdSupervisorAccount className="text-2xl" />
                <div className="text-md font-medium">Students</div>
              </>
            ) : (
              <>
                <MdSupervisorAccount className="text-2xl" />
              </>
            )}
          </Link>

          <Link
            href="/dashboard/assigments"
            className={
              drawer == true
                ? "text-tertiary flex items-center gap-4 py-5 px-4 cursor-pointer transition-all ease-in duration-200 hover:bg-slate-700"
                : "text-tertiary flex items-center justify-center py-5 w-[100%] cursor-pointer transition-all ease-in duration-200 hover:bg-slate-700"
            }
          >
            {drawer == true ? (
              <>
                <MdAssignmentTurnedIn className="text-2xl" />
                <div className="text-md font-medium">Assignments</div>
              </>
            ) : (
              <>
                <MdAssignmentTurnedIn className="text-2xl" />
              </>
            )}
          </Link>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        onClick={() => {
          setDrawer(!drawer);
        }}
        className={
          drawer == true
            ? "text-tertiary cursor-pointer font-semibold text-md bg-primary flex h-[6vh] justify-end items-center px-6 transition-all ease-in duration-250 hover:text-slate-400"
            : "text-tertiary cursor-pointer font-semibold text-md bg-primary flex h-[6vh] justify-end items-center px-3 transition-all ease-in duration-250 hover:text-slate-400"
        }
      >
        {drawer == true ? (
          <MdKeyboardArrowLeft className="text-3xl " />
        ) : (
          <MdKeyboardArrowRight className="text-3xl " />
        )}
      </div>
    </div>
  );
};

export default Drawer;
