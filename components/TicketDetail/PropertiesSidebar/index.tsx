import IconChevronDown from "@/components/Icons/icon-chevron-down";
import IconChevronRight from "@/components/Icons/icon-chevron-right";
import React from "react";

const PropertiesSidebarProps = ({
  titleLeft,
  titleRight,
}: {
  titleLeft: string;
  titleRight: React.ReactNode;
}) => {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500">{titleLeft}</span>
      {titleRight}
    </div>
  );
};

// Helper component để giảm lặp code cho các dòng có icon và value
const SidebarRow = ({
  title,
  value,
  valueClass = "text-gray-700",
  showChevron = true,
}: {
  title: string;
  value: React.ReactNode;
  valueClass?: string;
  showChevron?: boolean;
}) => (
  <PropertiesSidebarProps
    titleLeft={title}
    titleRight={
      <div className="flex items-center gap-1 min-w-[100px]">
        {showChevron && (
          <IconChevronDown className="w-3 h-3 text-gray-500 cursor-pointer" />
        )}
        <span className={valueClass}>{value}</span>
      </div>
    }
  />
);

const PropertiesSidebar = () => {
  return (
    <div className="w-80 bg-white border border-gray-200 rounded h-fit min-w-[260px]">
      <div className="flex items-center justify-between border-b border-solid border-[#D3D3D3] py-4 px-4">
        <div className="flex items-center gap-2 justify-centerh">
          <span className="font-medium text-gray-700">Properties</span>
          <IconChevronDown className="w-3 h-3 text-gray-500 cursor-pointer" />
        </div>
        <IconChevronRight className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>
      <div className="space-y-3 text-sm py-2 px-4">
        <SidebarRow
          title="Status:"
          value="In-Progress"
          valueClass="text-sky-700 font-medium cursor-pointer"
        />
        <SidebarRow
          title="Priority:"
          value="Critical"
          valueClass="text-red-600 font-medium cursor-pointer"
        />
        <SidebarRow title="Assignee:" value="Trangtt" />
        <SidebarRow title="Type:" value="Bug" />
        <SidebarRow title="Stated date:" value="2025-04-04" />
        <SidebarRow title="Target date:" value="2025-04-04" />
      </div>
    </div>
  );
};

export default PropertiesSidebar;
