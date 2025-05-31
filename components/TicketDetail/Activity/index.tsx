import { IconEBook } from "@/components/Icons";
import IconArrowLongUp from "@/components/Icons/icon-arrow-long-up";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Activity = () => {
  return (
    <section className="mt-10">
      <div className="flex items-center gap-2 pb-2 mb-3 py-4 border-solid border-b border-[#D3D3D3]">
        <IconEBook size={0} />
        <span className="font-medium text-gray-700 text-base">Activity</span>
      </div>
      <ul className="activity-list space-y-1 mb-4 flex flex-col gap-3">
        <li className="activity-item flex items-center gap-2 text-sm">
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          <span className="text-gray-700">
            RFX Phu Nguyen Submitted to underwriting
          </span>
          <span className="ml-2 text-gray-400 text-xs">
            2025-04-04 13:00:38
          </span>
        </li>
        <li className="activity-item flex items-center gap-2 text-sm">
          <span className="w-3 h-3 rounded-full bg-blue-700 inline-block"></span>
          <span className="text-gray-700">ABC Trang Nguyen approval</span>
          <span className="ml-2 text-gray-400 text-xs">
            2025-04-04 11:10:38
          </span>
        </li>
        <li className="activity-item flex items-center gap-2 text-sm">
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
          <span className="text-gray-700">
            RFX Phu Nguyen Submitted to underwriting
          </span>
          <span className="ml-2 text-gray-400 text-xs">
            2025-04-04 08:00:00
          </span>
        </li>
        <li className="activity-item flex items-center gap-2 text-sm">
          <span className="w-3 h-3 rounded-full bg-blue-700 inline-block"></span>
          <span className="text-gray-700">
            ABC Trang Nguyen create an issue
          </span>
          <span className="ml-2 text-gray-400 text-xs">
            2025-04-03 17:10:38
          </span>
        </li>
      </ul>
      <div className="bg-gray-100 rounded px-4 py-3 flex items-center relative">
        <Textarea
          placeholder="Leave a comment ..."
          className="w-full bg-transparent outline-none text-sm h-[90px] resize-none border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button
          size="icon"
          variant="ghost"
          className="ml-2 text-primary hover:text-sky-900 absolute right-0 bottom-0"
          type="submit"
        >
          <IconArrowLongUp className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Activity;
