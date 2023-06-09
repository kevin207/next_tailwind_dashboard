/* eslint-disable @next/next/no-img-element */
"use client";
import Breadcumbs from "@/src/components/Breadcumbs";

const Dashboard = () => {
  const breadcumbs = [];

  return (
    <>
      {/* BREADCUMBS 92-4 = 88 */}
      <Breadcumbs breadcumbs={breadcumbs} />

      <div className="h-[88vh] flex items-center justify-center flex-col gap-6">
        <div>Dashboard</div>

        <button
          className="btn btn-neutral"
          onClick={() => window.my_modal_1.showModal()}
        >
          Open Daisy Modal
        </button>
      </div>

      {/* MODAL */}
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-slate-700">
            This Is Daisy UI Modal!
          </h3>
          <p className="py-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            iusto sed omnis laudantium explicabo repellat officiis nulla esse
            exercitationem doloribus deserunt, eius libero cumque optio
            voluptate, inventore vitae blanditiis eveniet.
          </p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="rounded-md px-8 py-1 hover:bg-green-600 bg-green-500 text-white transition-all ease-in-out duration-200">
              Add
            </button>
            <button className="rounded-md px-8 py-1 hover:bg-red-600 bg-red-500 text-white transition-all ease-in-out duration-200">
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Dashboard;
