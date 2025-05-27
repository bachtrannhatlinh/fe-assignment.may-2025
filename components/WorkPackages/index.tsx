import { IWorkPackage } from "@/types/work-packages";
import React from "react";
import { Button } from "../ui/button";
import { IconCart } from "../Icons";
import ChevronRight from "../Icons/icon-chevron-right";
import { cn } from "@/lib/utils";
import { borderGray, textGray600 } from "@/constant/color";

const WorkPackages = ({ workPackages }: { workPackages: IWorkPackage[] }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {workPackages.map((wp: IWorkPackage, idx) => (
        <div
          key={idx}
          className="bg-white border border-solid border-gray-200 rounded-lg p-5 flex flex-col justify-between min-h-[160px] gap-4"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="font-medium text-lg text-[#000000]">{wp.title}</div>
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
              <ChevronRight className={`${cn(textGray600)} w-7 h-7`}/>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="bg-[#E2F5F9] text-primary w-7 h-7"
            >
              <ChevronRight className={`${cn(textGray600)} w-7 h-7`}  />
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <Button className={`text-base font-medium ${cn(borderGray)}`}>
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
