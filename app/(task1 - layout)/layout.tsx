'use client';
import React from "react";
import Providers from "@/components/Providers";
import '../globals.css';
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col pt-6 px-3 bg-[#FFFFFF] overflow-auto">
          {children}
        </div>
      </div>
    </Providers>
  );
}
