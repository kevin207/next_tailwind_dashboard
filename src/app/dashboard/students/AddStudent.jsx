"use client";
import React from "react";

const AddStudent = () => {
  return (
    <>
      <button
        className="btn btn-neutral"
        onClick={() => window.add_student.showModal()}
      >
        Open Daisy Modal
      </button>

      {/* MODAL */}
      <dialog id="add_student" className="modal">
        <form method="dialog" className="modal-box rounded-md">
          {/* MODAL HEADER */}
          <h3 className="font-bold text-lg text-slate-700 border-b-2 mb-4 pb-2">
            Add New Student
          </h3>

          {/* MODAL CONTENT */}
          <div className="w-full flex flex-col gap-4">
            <div>
              <input
                type="text"
                placeholder="Student Name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Student Address"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Student Status
                </option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* ACTION BUTTON CONTAINER */}
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="rounded-md px-8 py-2 hover:bg-slate-800 bg-slate-700 text-white transition-all ease-in-out duration-200">
              Add
            </button>
            <button className="rounded-md px-8 py-2 hover:bg-red-700 bg-red-600 text-white transition-all ease-in-out duration-200">
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default AddStudent;
