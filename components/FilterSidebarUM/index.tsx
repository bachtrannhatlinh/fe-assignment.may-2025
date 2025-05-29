import React from "react";
import { Button } from "../ui/button";
import IconFunnel from "../Icons/icon-funnel";
import { Checkbox } from "../ui/checkbox";

const FillInput = ({ title }: { title: string }) => {
  return (
    <div className="mb-3">
      <label className="block text-xs font-semibold mb-1">{title}</label>
      <select className="w-full border rounded p-1 text-sm" />
    </div>
  );
};

const FilterSidebarUM = () => (
  <aside className="w-64 bg-white border-r border-[#E5E7EB] flex flex-col justify-between h-full pt-4 pb-6 px-4">
    <div>
      <div className="flex items-center justify-between mb-2 border-b border-solid border-[#D9D9D9] pb-2">
        <span className="font-bold text-[#767676] tracking-wide text-base">
          FILTER
        </span>
        <IconFunnel className="w-5 h-5 text-[#CFCFCF]" />
      </div>
      <div className="border-b border-[#E5E7EB] mb-4" />
      <FillInput title="User name" />
      <FillInput title="User ID" />
      <FillInput title="User type" />
      <FillInput title="Phone number" />
      <FillInput title="Email address" />
      <div className="mb-3">
        <label className="block text-xs font-semibold mb-1">Status</label>
        <div className="flex flex-col gap-2 mt-1">
          <label className="text-xs flex items-center gap-2 cursor-pointer">
            <Checkbox
              id="status-all"
              className="rounded border-[#E1E1E3] data-[state=checked]:border-[#E1E1E3]"
            />
            <span>All</span>
          </label>
          <label className="text-xs flex items-center gap-2 cursor-pointer">
            <Checkbox id="status-active" className="rounded border-[#E1E1E3] data-[state=checked]:border-[#E1E1E3]" />
            <span>Active</span>
          </label>
          <label className="text-xs flex items-center gap-2 cursor-pointer">
            <Checkbox id="status-inactive" className="rounded border-[#E1E1E3] data-[state=checked]:border-[#E1E1E3]" />
            <span>Inactive</span>
          </label>
        </div>
      </div>
    </div>

    <Button variant="outline" className="w-full mt-4">
      Export Data
    </Button>
  </aside>
);

export default FilterSidebarUM;
