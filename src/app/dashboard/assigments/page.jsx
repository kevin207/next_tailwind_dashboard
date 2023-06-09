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
      <div className="h-[88vh] flex items-center justify-center">
        Assigments
      </div>
    </>
  );
};

export default Assigments;
