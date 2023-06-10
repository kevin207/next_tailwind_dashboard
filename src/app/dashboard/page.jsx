import Breadcumbs from "@/src/components/Breadcumbs";

const Dashboard = () => {
  const breadcumbs = [];

  return (
    <>
      {/* BREADCUMBS 92-4 = 88 */}
      <Breadcumbs breadcumbs={breadcumbs} />

      <div className="h-[88vh] flex items-center justify-center flex-col gap-6">
        <div>Dashboard</div>
      </div>
    </>
  );
};

export default Dashboard;
