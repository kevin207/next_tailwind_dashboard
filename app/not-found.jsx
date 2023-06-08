"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-slate-700 text-9xl">404</div>
      <div className="text-slate-600 text-2xl font-semibold">
        Page Not Found
      </div>
      <div className="text-slate-500 mt-4">
        The page you are looking for does not exist!
      </div>
      <button
        onClick={() => {
          router.back();
        }}
        className="mt-6 bg-slate-700 text-white text-sm font-medium py-2 px-8 flex justify-center items-center rounded-md border-2 border-slate-700 hover:bg-transparent hover:text-slate-700 transition-all ease-in-out duration-300"
        href={"/login"}
      >
        Back to Previous Page
      </button>
    </div>
  );
};

export default NotFound;
