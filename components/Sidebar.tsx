import React from "react";
import {
  IconAdministrations,
  IconDocumentation,
  IconEstimator,
  IconInquiries,
  IconLightMode,
  IconLogo,
  IconOverview,
  IconProjects,
  IconVector,
} from "./Icons";

export default function Sidebar() {
  return (
    <aside className="bg-[#f5f6f7] py-4 px-4">
      <div className="flex items-center gap-2 mb-6">
        <IconLogo size={50} />
        <div>
          <div className="font-bold text-base text-[#1a3e6b]">ABC Company</div>
          <div className="text-xs text-[#3b82f6]">Lisa Rose</div>
        </div>
      </div>
      <div className="w-56 h-screen flex flex-col justify-between border-r">
        <div>
          <nav className="flex flex-col gap-1">
            <SidebarItem icon1={<IconOverview size={18} />} label="Overview" />
            <SidebarItem
              icon1={<IconInquiries size={18} />}
              label="Inquiries"
            />
            <SidebarItem
              icon1={<IconEstimator size={18} />}
              label="Estimator"
            />
            <SidebarItem
              icon1={<IconProjects size={18} />}
              label="Projects"
              active
            />
          </nav>
        </div>
        <div>
          <nav className="flex flex-col gap-1 px-4">
            <SidebarItem
              icon1={<IconAdministrations size={18} />}
              label="Administrations"
            />
            <SidebarItem
              icon1={<IconDocumentation size={18} />}
              label="Documentation"
            />
          </nav>

          <div className="flex items-center gap-5 px-7 mt-4 mb-2">
            <IconLightMode size={120} />
            <IconVector size={15} />
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
}: {
  icon1: React.ReactNode;
  icon2?: React.ReactNode;
  label?: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-5 px-4 py-2 rounded cursor-pointer ${
        active
          ? "bg-[#e5e7eb] font-bold text-[#1a3e6b]"
          : "text-[#6b7280] hover:bg-[#e5e7eb]"
      }`}
    >
      {icon1}
      {icon2 && <span className="ml-auto">{icon2}</span>}
      <span>{label}</span>
    </div>
  );
}
