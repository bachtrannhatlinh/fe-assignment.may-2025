import React from "react";
import Sidebar from "../components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col min-h-screen py-6 px-3 bg-[#FFFFFF]">
           {children}
          </div>
        </div>
      </body>
    </html>
  );
}
