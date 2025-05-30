import { IconEBook } from "@/components/Icons";
import React from "react";
import Activity from "../Activity";

const descriptionList = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`,
];

const Description = () => {
  return (
    <div className="flex-1 border-r border-solid border-[#D3D3D3] pr-4">
      {/* Description */}
      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-2 pb-2 mb-3 py-4 border-solid border-b border-[#D3D3D3]">
          <IconEBook size={0} />
          <span className="font-medium text-gray-700 text-base">
            Description
          </span>
        </div>
        <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
          {descriptionList.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
        <a
          href="#"
          className="text-sky-700 text-sm mt-2 inline-block font-medium"
        >
          + Add sub-tickets
        </a>
      </section>

      {/* Activity */}
      <Activity />
    </div>
  );
};

export default Description;
