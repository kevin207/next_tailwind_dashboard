import Breadcumbs from "@/src/components/Breadcumbs";
import axios from "axios";

// GET DUMMY DATA
async function getData() {
  try {
    const response = await axios.get("https://dummyjson.com/products?limit=10");
    return response?.data?.products;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const Dashboard = async () => {
  const breadcumbs = [];
  const data = await getData();

  return (
    <>
      {/* BREADCUMBS 92-4 = 88 */}
      <Breadcumbs breadcumbs={breadcumbs} />

      <div className="h-[88vh] flex items-center justify-center flex-col gap-4">
        <div>Dashboard</div>

        {/* DAISY UI TABLE */}
        <div className="overflow-x-auto w-[65vw] bg-white rounded-sm">
          <table className="table border-collapse">
            {/* TABLE HEAD */}
            <thead className="bg-slate-700 text-white">
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {data?.map((data) => (
                <tr key={data.id} className="hover:bg-slate-200">
                  <th>{data.id}</th>
                  <td>{data.title}</td>
                  <td className=" overflow-x-hidden">{data.description}</td>
                  <td>${data.price}</td>
                  <td>{data.stock}</td>
                  <td>{data.category}</td>
                  <td>
                    <div className="flex gap-2">
                      <div className="rounded-md bg-green-500 text-xs px-4 py-1 text-white cursor-pointer hover:bg-green-600 transition-all ease-in duration-200">
                        Edit
                      </div>
                      <div className="rounded-md bg-red-500 text-xs px-4 py-1 text-white cursor-pointer hover:bg-red-600 transition-all ease-in duration-200">
                        Delete
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
