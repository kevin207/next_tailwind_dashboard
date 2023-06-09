"use client";

import Breadcumbs from "@/src/components/Breadcumbs";
import React from "react";

const Dashboard = () => {
  const breadcumbs = [];

  return (
    <>
      {/* BREADCUMBS 92-4 = 88 */}
      <Breadcumbs breadcumbs={breadcumbs} />

      <div className="h-[88vh] flex items-center justify-center flex-col">
        <div>Dashboard</div>

        <button
          className=" bg-slate-700 text-white py-2 px-12 rounded-md"
          onClick={() => window.modal_test.showModal()}
        >
          Open Daisy Modal
        </button>
      </div>

      {/* MODAL */}
      <dialog id="modal_test" className="modal rounded-lg w-[500px]">
        <form method="dialog" className="modal-box px-4 py-4">
          <h3 className="font-semibold text-slate-800 text-lg border-b-2">
            This Is Daisy Modal
          </h3>
          <p className="py-4 font-md text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui
            accusamus voluptatibus repellat, quod reiciendis amet iste, facere
            distinctio tempora cum ipsam! Cum ad quis libero, aut commodi enim
            minima.
          </p>
          <button className="btn bg-red-500 rounded-md py-1 px-12 text-white hover:bg-red-600 transition-all ease-in duration-200">
            Close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default Dashboard;
