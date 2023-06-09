import "./styles/globals.css";
import { Raleway } from "next/font/google";

export const metadata = {
  title: "ITB - Login Page",
  description: "Generated by Next.js",
};

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}