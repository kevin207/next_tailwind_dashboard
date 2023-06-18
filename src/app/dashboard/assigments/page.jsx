/* eslint-disable @next/next/no-img-element */
import Breadcumbs from "@/src/components/Breadcumbs";
import React from "react";

const Assigments = () => {
  const breadcumbs = [
    {
      name: "Assigments",
      url: "/dashboard/assigments",
    },
  ];

  const profiles = [
    {
      id: 1,
      photo:
        "https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg",
      name: "Oliver",
      alias: "The Cat",
    },
    {
      id: 2,
      photo:
        "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg",
      name: "Bruno",
      alias: "The Dog",
    },
    {
      id: 3,
      photo:
        "https://img.freepik.com/premium-vector/red-dragon-head-illustration_113398-564.jpg?w=2000",
      name: "Shen",
      alias: "The Dragon",
    },
    {
      id: 4,
      photo:
        "https://play-lh.googleusercontent.com/8QnH9AhsRfhPott7REiFUXXJLRIxi8KMAP0mFAZpYgd44OTOCtScwXeb5oPe1E4eP4oF",
      name: "Mbek",
      alias: "The Goat",
    },
  ];

  return (
    <>
      {/* BREADCUMBS 92-4 = 88 */}
      <Breadcumbs breadcumbs={breadcumbs} />
      <div className="h-[88vh] items-center justify-center flex flex-col gap-4">
        <div>Assigment</div>

        <div className="flex flex-col">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="flex flex-row justify-between bg-white px-4 py-2 items-center w-[400px] border-b-2"
            >
              <div className="flex gap-4 items-center">
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img alt="profile avatar" src={profile.photo} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <strong>{profile.name}</strong>
                  <div className="text-gray-400 font-semibold text-sm">
                    {profile.alias}
                  </div>
                  <small className="text-gray-400">Popular</small>
                </div>
              </div>

              <button className="px-2 py-1 bg-sky-500 text-white text-base font-bold rounded-[5px] hover:bg-sky-600 transition-all ease-in-out duration-300">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Assigments;
