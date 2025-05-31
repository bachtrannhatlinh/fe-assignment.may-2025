import { IWorkPackage } from "@/types/work-packages";
import React from "react";
import { Button } from "../ui/button";
import { IconCart } from "../Icons";
import ChevronRight from "../Icons/icon-chevron-right";

const WorkPackages = ({ workPackages }: { workPackages: IWorkPackage[] }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {workPackages.map((wp: IWorkPackage, idx) => (
        <div
          key={idx}
          className="bg-white border border-solid border-gray-200 rounded-lg p-5 flex flex-col justify-between min-h-[160px] gap-4"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold text-gray-800">{wp.title}</div>
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </div>
          <div className="text-gray-500 text-sm mb-4 line-clamp-2">
            {wp.desc}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Button
              size="icon"
              variant="ghost"
              className="bg-[#E2F5F9] text-primary w-7 h-7"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-[#E2F5F9] text-primary w-7 h-7"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <Button variant="gray_F3F4F6">
              View Detail
            </Button>
            <span className="inline-block">
              <IconCart size={20} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkPackages;
