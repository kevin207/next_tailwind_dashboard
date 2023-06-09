import Breadcumbs from "@/src/components/Breadcumbs";
import React from "react";

const Students = () => {
  const breadcumbs = [
    {
      name: "Students",
      url: "/dashboard/students",
    },
  ];

  return (
    <>
      {/* BREADCUMBS 92-4 = 88 */}
      <Breadcumbs breadcumbs={breadcumbs} />
      <div className="h-[88vh] flex items-center justify-center">Students</div>
    </>
  );
};

export default Students;
