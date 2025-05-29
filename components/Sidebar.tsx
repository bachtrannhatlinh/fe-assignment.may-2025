"use client";

import React, { useState } from "react";
import {
  IconAdministrations,
  IconDocumentation,
  IconEstimator,
  IconInquiries,
  IconLightMode,
  IconLogo,
  IconOverview,
  IconProjects,
  IconRiverFlow,
  IconVector,
} from "./Icons";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function Sidebar() {
  const isOpen = useSelector((state: RootState) => state.toggle.open);

  return (
    <aside
      className={`bg-[#f5f6f7] py-4 flex flex-col h-full border-r transition-all duration-300 ${
        isOpen ? "w-16 px-0 items-center" : "w-56"
      }`}
    >
      {/* Logo & user */}
      <div className={`flex px-4 mb-6 ${isOpen ? "" : "gap-2"}`}>
        <IconLogo size={50} />
        {!isOpen && (
          <div>
            <div className="font-bold text-base text-[#1a3e6b]">
              ABC Company
            </div>
            <div className="text-xs text-[#3b82f6]">Lisa Rose</div>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between w-full px-4">
        <div>
          <nav className="flex flex-col gap-1">
            <SidebarItem
              icon1={<IconOverview size={18} />}
              label="Overview"
              isOpen={isOpen}
            />
            <SidebarItem
              icon1={<IconInquiries size={18} />}
              label="Inquiries"
              isOpen={isOpen}
            />
            <SidebarItem
              icon1={<IconEstimator size={18} />}
              label="Estimator"
              isOpen={isOpen}
            />
            <SidebarItem
              icon1={<IconProjects size={18} />}
              label="Projects"
              isOpen={isOpen}
              active
            />
          </nav>
        </div>
        <div>
          <nav className="flex flex-col gap-1 px-0">
            <SidebarItem
              icon1={<IconAdministrations size={18} />}
              label="Administrations"
              isOpen={isOpen}
            />
            <SidebarItem
              icon1={<IconDocumentation size={18} />}
              label="Documentation"
              isOpen={isOpen}
            />
          </nav>
          <div className={`flex items-center gap-5 mt-4 mb-2 justify-center`}>
            {isOpen ? (
              <IconRiverFlow size={32} />
            ) : (
              <>
                <IconLightMode size={125} />
                <IconVector size={22} />
              </>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({
  icon1,
  icon2,
  label,
  active,
  isOpen,
}: {
  icon1: React.ReactNode;
  icon2?: React.ReactNode;
  label?: string;
  active?: boolean;
  isOpen?: boolean;
}) {
  return (
    <div
      className={`flex items-center transition-all cursor-pointer
        ${isOpen ? "justify-center py-3 px-0" : "gap-5 px-4 py-2"}
        rounded-sm
        ${
          active
            ? isOpen
              ? "bg-[#e5f0fa] border-l-4 border-[#005B86] text-[#005B86] font-bold"
              : "bg-[#D3D3D3] text-[#005B86] font-bold"
            : isOpen
            ? "hover:bg-[#e5e7eb] text-[#6b7280]"
            : "text-[#6b7280] hover:bg-[#e5e7eb]"
        }
      `}
    >
      {icon1}
      {!isOpen && (
        <>
          {icon2 && <span className="ml-auto">{icon2}</span>}
          <span>{label}</span>
        </>
      )}
    </div>
  );
}
