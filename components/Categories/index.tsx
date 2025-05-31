import { ICategories } from "@/types/work-packages";
import React from "react";

const Categories = ({ categories }: { categories: ICategories[] }) => {
  return (
    <ul className="text-sm flex flex-col gap-2">
      {categories.map((cat: ICategories) => (
        <li
          key={cat.label}
          className="border-b border-solid border-gray-200"
        >
          <a
            href="#"
            className={
              cat.active
                ? "text-[#005B86] font-semibold block py-1"
                : "text-gray-500 hover:text-[#005B86] block py-1"
            }
          >
            {cat.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
