import React from "react";
import Activity from "../Activity";
import { textGray600 } from "@/constant/color";
import { cn } from "@/lib/utils";
import { IconEBook } from "@/components/Icons";

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
      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-2 pb-2 mb-3 py-4 border-solid border-b border-[#D3D3D3]">
          <IconEBook />
          <span className={`${cn(textGray600)} !text-base !text-[#7C7C7C]`}>Description</span>
        </div>
        <ul className="customUl">
          {descriptionList.map((desc, idx) => (
            <li key={idx} className="customLi">
              <span className="bullet" />
              <span>{desc}</span>
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="text-[#005B86] text-sm mt-2 inline-block font-normal"
        >
          + Add sub-tickets
        </a>
      </section>

      <Activity />
    </div>
  );
};

export default Description;
