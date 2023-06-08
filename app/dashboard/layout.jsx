import Navbar from "@/components/Navbar";
import { Raleway } from "next/font/google";
import Drawer from "@/components/Drawer";
import "../styles/globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "ITB - Dashboard Page",
  description: "Dashboard Page",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="flex flex-row w-screen h-screen">
          <Drawer />
          <Navbar title="Assesment System ">{children}</Navbar>
        </div>
      </body>
    </html>
  );
}
