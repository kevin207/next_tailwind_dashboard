import Breadcumbs from "@/src/components/Breadcumbs";
import AddStudent from "./AddStudent";

const Students = () => {
  const breadcumbs = [
    {
      name: "Students",
      url: "/dashboard/students",
    },
  ];

  return (
    <>
      {/* BREADCUMBS 92-4 = 88vh */}
      <Breadcumbs breadcumbs={breadcumbs} />
      <div className="h-[88vh] flex items-center justify-center flex-col gap-4">
        <div>Student</div>
        <AddStudent />
      </div>
    </>
  );
};

export default Students;
