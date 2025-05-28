import React from "react";
import { ChevronDown, ChevronRight, ArrowUpRight, Info } from "lucide-react";

import Header from "./Header";
import { IconEBook } from "./Icons";

export default function TicketDetail() {
  return (
    <>
      <Header>
        <div className="flex items-center gap-2">
          <span>Project</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span>UrapidLoan Project</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-sky-700 cursor-pointer">[Ticket name ]</span>
        </div>
        <></>
      </Header>
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 border-r border-solid border-[#D3D3D3] pr-4">
          {/* Description */}
          <section className="">
            <div className="flex items-center gap-2 pb-2 mb-3 py-4 border-solid border-b border-[#D3D3D3]">
              <IconEBook size={0} />
              <span className="font-medium text-gray-700 text-base">
                Description
              </span>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </li>
            </ul>
            <a
              href="#"
              className="text-sky-700 text-sm mt-2 inline-block font-medium"
            >
              + Add sub-tickets
            </a>
          </section>

          {/* Activity */}
          <section className="mt-10">
            <div className="flex items-center gap-2 pb-2 mb-3 py-4 border-solid border-b border-[#D3D3D3]">
              <IconEBook size={0} />
              <span className="font-medium text-gray-700 text-base">
                Activity
              </span>
            </div>
            <ul className="space-y-1 mb-4">
              <li className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                <span className="text-gray-700">
                  RFX Phu Nguyen Submitted to underwriting
                </span>
                <span className="ml-2 text-gray-400 text-xs">
                  2025-04-04 13:00:38
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full bg-blue-700 inline-block"></span>
                <span className="text-gray-700">ABC Trang Nguyen approval</span>
                <span className="ml-2 text-gray-400 text-xs">
                  2025-04-04 11:10:38
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                <span className="text-gray-700">
                  RFX Phu Nguyen Submitted to underwriting
                </span>
                <span className="ml-2 text-gray-400 text-xs">
                  2025-04-04 08:00:00
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="w-3 h-3 rounded-full bg-blue-700 inline-block"></span>
                <span className="text-gray-700">
                  ABC Trang Nguyen create an issue
                </span>
                <span className="ml-2 text-gray-400 text-xs">
                  2025-04-03 17:10:38
                </span>
              </li>
            </ul>
            <div className="bg-gray-100 rounded px-4 py-3 flex items-center">
              <input
                type="text"
                placeholder="Leave a comment ..."
                className="w-full bg-transparent outline-none text-sm h-[90px] resize-none"
              />
              <button className="ml-2 text-sky-700 hover:text-sky-900">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </section>
        </div>

        {/* Properties Sidebar */}
        <div className="w-80 bg-white border border-gray-200 rounded h-fit min-w-[260px]">
          <div className="flex items-center justify-between border-b border-solid border-[#D3D3D3] py-4 px-4">
            <span className="font-medium text-gray-700">Properties</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="space-y-3 text-sm py-2 px-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Status:</span>
              <span className="text-sky-700 font-medium cursor-pointer">
                In-Progress
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Priority:</span>
              <span className="text-red-600 font-medium cursor-pointer">
                Critical
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Assignee:</span>
              <span className="text-gray-700">Trangtt</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Type:</span>
              <span className="text-gray-700">Bug</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Stated date:</span>
              <span className="text-gray-700">2025-04-04</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Target date:</span>
              <span className="text-gray-700">2025-04-04</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
