import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcumbs = ({ breadcumbs }) => {
  const lastItem = breadcumbs.length;

  return (
    <div className="w-100 h-[4vh] text-sm px-12 bg-white text-slate-700 flex gap-2 items-center shadow-sm">
      <Link
        className={
          lastItem == 0
            ? "text-gray-400 font-semibold pointer-events-none"
            : "hover:underline font-semibold"
        }
        href={"/dashboard"}
      >
        Home
      </Link>
      {breadcumbs?.map((breadcumbs, index) => (
        <div key={index} className="flex gap-1 items-center font-semibold">
          <MdKeyboardArrowRight />
          <Link
            className={
              index + 1 == lastItem
                ? "text-gray-400 pointer-events-none"
                : "hover:underline"
            }
            href={breadcumbs.url}
          >
            {breadcumbs.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Breadcumbs;
