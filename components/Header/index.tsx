import React from "react";
import { ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <div className="py-4 rounded-t-md border-b border-solid border-[#D3D3D3] flex items-center gap-2 text-sm text-gray-500 font-medium">
      <span>Project</span>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <span>UrapidLoan Project</span>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <span className="text-sky-700 cursor-pointer">[Ticket name ]</span>
    </div>
  );
};

export default Header;