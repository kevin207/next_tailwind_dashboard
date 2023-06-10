/* eslint-disable jsx-a11y/alt-text */
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

  return (
    <>
      {/* BREADCUMBS 92-4 = 88 */}
      <Breadcumbs breadcumbs={breadcumbs} />
      <div className="h-[88vh] items-center justify-center flex flex-col gap-4">
        <div>Assigment</div>

        <div className="w-64 carousel rounded-box">
          <div className="carousel-item w-full" id="item1">
            <img
              src="https://www.theme-junkie.com/wp-content/uploads/wordpress-carousel-plugin.png"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>

          <div className="carousel-item w-full" id="item2">
            <img
              src="https://upload.jaknot.com/2022/12/images/products/2ff82a/thumbnail/kotak-musik-merry-go-round-musical-box-carousel-hd-yyh.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>

          <div className="carousel-item w-full" id="item3">
            <img
              src="https://img.freepik.com/free-vector/carousel-horse-concept-illustration_114360-9386.jpg?w=2000"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>

        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs focus:bg-slate-700 focus:text-white">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </div>
    </>
  );
};

export default Assigments;
