import Navbar from "@/src/components/Navbar";
import Drawer from "@/src/components/Drawer";
import "../styles/globals.css";

export const metadata = {
  title: "ITB - Dashboard Page",
  description: "Dashboard Page",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-row w-screen h-screen">
          <Drawer />
          <Navbar title="Assesment System ">{children}</Navbar>
        </div>
      </body>
    </html>
  );
}
