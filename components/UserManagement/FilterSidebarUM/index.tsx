import React from "react";
import { Button } from "../../ui/button";
import IconFunnel from "../../Icons/icon-funnel";
import { Checkbox } from "../../ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { styleCheckbox } from "@/constant/color";

const FillInput = ({
  title,
  type = "input",
  options = [],
}: {
  title: string;
  type?: "input" | "select";
  options?: string[];
}) => (
  <div className="mb-3">
    <label className="block text-xs font-semibold mb-1">{title}</label>
    {type === "select" ? (
      <Select>
        <SelectTrigger className="w-full border rounded p-1 text-sm">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    ) : (
      <Input
        placeholder="Input"
        className="w-full border rounded p-1 text-sm"
      />
    )}
  </div>
);

const FilterSidebarUM = () => (
  <aside className="w-64 bg-white border-r border-[#E5E7EB] flex flex-col justify-between h-full pt-4 pb-6 px-4">
    <div>
      <div className="flex items-center justify-between mb-2 border-b border-solid border-gray pb-2">
        <span className="font-bold text-[#767676] tracking-wide text-base">
          FILTER
        </span>
        <IconFunnel className="w-5 h-5 text-[#CFCFCF]" />
      </div>
      <div className="border-b border-[#E5E7EB] mb-4" />
      <FillInput title="User name"
        type="select"/>
      <FillInput title="User ID" />
      <FillInput
        title="User type"
        type="select"
      />
      <FillInput title="Phone number" />
      <FillInput title="Email address" />
      <div className="mb-3">
        <label className="block text-xs font-semibold mb-1">Status</label>
        <div className="flex flex-col gap-2 mt-1">
          <label className="text-xs flex items-center gap-2 cursor-pointer">
            <Checkbox
              id="status-all"
              className={cn(styleCheckbox)}
            />
            <span>All</span>
          </label>
          <label className="text-xs flex items-center gap-2 cursor-pointer">
            <Checkbox id="status-active" className={cn(styleCheckbox)} />
            <span>Active</span>
          </label>
          <label className="text-xs flex items-center gap-2 cursor-pointer">
            <Checkbox id="status-inactive" className={cn(styleCheckbox)} />
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
