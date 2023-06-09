import Breadcumbs from "@/src/components/Breadcumbs";
import React from "react";

const Dashboard = () => {
  const breadcumbs = []

  return (
    <>
      {/* BREADCUMBS 92-4 = 88 */}
      <Breadcumbs breadcumbs={breadcumbs} />
      <div className="h-[88vh] flex items-center justify-center">Dashboard</div>
    </>
  );
};

export default Dashboard;
