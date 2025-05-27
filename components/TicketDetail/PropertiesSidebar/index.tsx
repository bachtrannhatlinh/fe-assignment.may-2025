import IconChevronDown from "@/components/Icons/icon-chevron-down";
import IconChevronRight from "@/components/Icons/icon-chevron-right";
import { textGray600 } from "@/constant/color";
import { cn } from "@/lib/utils";
import React from "react";

type Property = {
  label: string;
  value: React.ReactNode;
  valueClass?: string;
  showChevron?: boolean;
};

const properties: Property[] = [
  {
    label: "Status:",
    value: "In-Progress",
    valueClass: "text-[#007AFF] font-normal cursor-pointer",
    showChevron: true,
  },
  {
    label: "Priority:",
    value: "Critical",
    valueClass: "text-[#E10E0E] font-normal cursor-pointer",
    showChevron: true,
  },
  {
    label: "Assignee:",
    value: "Trangtt",
    valueClass: cn(textGray600),
    showChevron: true,
  },
  {
    label: "Type:",
    value: "Bug",
    valueClass: cn(textGray600),
    showChevron: true,
  },
  {
    label: "Stated date:",
    value: "2025-04-04",
    valueClass: cn(textGray600),
    showChevron: true,
  },
  {
    label: "Target date:",
    value: "2025-04-04",
    valueClass: cn(textGray600),
    showChevron: true,
  },
];

const SidebarRow = ({ label, value, valueClass, showChevron }: Property) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-500">{label}</span>
    <div className="flex items-center gap-1 min-w-[100px]">
      {showChevron && (
        <IconChevronDown className="w-3 h-3 text-gray-500 cursor-pointer" />
      )}
      <span className={valueClass}>{value}</span>
    </div>
  </div>
);

const PropertiesSidebar = () => (
  <div className="w-80 bg-white border border-gray-200 rounded h-fit min-w-[260px]">
    <div className="flex items-center justify-between border-b border-solid border-[#D3D3D3] py-3 px-4">
      <div className="flex items-center gap-2">
        <span className={`${cn(textGray600)} !text-base`}>Properties</span>
        <IconChevronDown className="w-3 h-3 text-gray-500 cursor-pointer" />
      </div>
      <IconChevronRight className="w-5 h-5 text-gray-500 cursor-pointer" />
    </div>
    <div className="space-y-3 text-sm py-2 px-4">
      {properties.map((prop, idx) => (
        <SidebarRow key={idx} {...prop} />
      ))}
    </div>
  </div>
);

export default PropertiesSidebar;
