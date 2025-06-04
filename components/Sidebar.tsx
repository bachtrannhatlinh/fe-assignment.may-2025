"use client";

import React from "react";
import Image from "next/image";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IconAdministrations, IconDocumentation, IconEstimator, IconInquiries, IconLightMode, IconOverview, IconProjects, IconRiverFlow } from "./Icons";
import IconVector from "./Icons/icon-vector";

type SidebarNavItem = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
};

const mainNavItems: SidebarNavItem[] = [
  { icon: <IconOverview />, label: "Overview" },
  { icon: <IconInquiries />, label: "Inquiries" },
  { icon: <IconEstimator />, label: "Estimator" },
  { icon: <IconProjects />, label: "Projects", active: true },
];

const bottomNavItems: SidebarNavItem[] = [
  { icon: <IconAdministrations />, label: "Administrations" },
  { icon: <IconDocumentation />, label: "Documentation" },
];

function SidebarItem({
  iconLeft,
  label,
  active,
  isOpen,
}: {
  iconLeft: React.ReactNode;
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
              ? "bg-[#e5f0fa] border-l-4 border-primary text-primary font-bold"
              : "bg-[#D3D3D3] text-primary font-bold"
            : isOpen
            ? "hover:bg-[#e5e7eb] text-[#6b7280]"
            : "text-[#6b7280] hover:bg-[#e5e7eb]"
        }
      `}
    >
      {iconLeft}
      {!isOpen && <span>{label}</span>}
    </div>
  );
}

export default function Sidebar() {
  const isOpen = useSelector((state: RootState) => state.toggle.open);

  return (
    <aside
      className={`bg-[#f5f6f7] py-4 flex flex-col h-full border-r transition-all duration-300 ${
        isOpen ? "w-16 px-0 items-center" : "w-56"
      }`}
    >
      <div className={`flex px-4 mb-6 ${isOpen ? "" : "gap-2"}`}>
        <Image src="/image/logo.png" alt="logo" width={50} height={50} />
        {!isOpen && (
          <div>
            <div className="font-bold text-xl text-primary">ABC Company</div>
            <div className="text-base text-primary">Lisa Rose</div>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between w-full px-4">
        <div>
          <nav className="flex flex-col gap-3">
            {mainNavItems.map((item) => (
              <SidebarItem
                key={item.label}
                iconLeft={item.icon}
                label={item.label}
                isOpen={isOpen}
                active={item.active}
              />
            ))}
          </nav>
        </div>
        <div>
          <nav className="flex flex-col gap-1 px-0">
            {bottomNavItems.map((item) => (
              <SidebarItem
                key={item.label}
                iconLeft={item.icon}
                label={item.label}
                isOpen={isOpen}
              />
            ))}
          </nav>
          <div className={`flex items-center gap-5 mt-4 mb-2 justify-center`}>
            {isOpen ? (
              <IconRiverFlow />
            ) : (
              <>
                <IconLightMode />
                <IconVector />
              </>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
