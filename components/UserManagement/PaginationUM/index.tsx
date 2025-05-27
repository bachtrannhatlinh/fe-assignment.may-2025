import IconChevronLeft from "@/components/Icons/icon-chevron-left";
import IconChevronRight from "@/components/Icons/icon-chevron-right";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const pageNumbers = [1, 2, 3, "ellipsis", 10];
const itemOptions = [
  { value: "5", label: "05 items" },
  { value: "10", label: "10 items" },
  { value: "20", label: "20 items" },
];

const PaginationUM = () => {
  const currentPage = 1;

  return (
    <div className="flex justify-between items-center px-6 py-4 border-t border-solid border-gray bg-white">
      <div className="flex-1 flex items-center">
        <Pagination className="justify-start w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="min-w-8 h-8 flex items-center justify-center rounded-md bg-white border border-solid border-[#EDEFF1] text-[#767676] hover:bg-[#F5F6FA] transition"
                aria-label="Previous"
                aria-disabled={currentPage === 1}
              >
                <IconChevronLeft />
              </PaginationLink>
            </PaginationItem>
            {pageNumbers.map((num, idx) =>
              num === "ellipsis" ? (
                <PaginationItem key={`ellipsis-${idx}`}>
                  <PaginationEllipsis className="min-w-8 h-8 flex items-center justify-center rounded-md bg-white border border-solid border-[#EDEFF1] text-[#B0B0B0]" />
                </PaginationItem>
              ) : (
                <PaginationItem key={`page-${num}`}>
                  <PaginationLink
                    href="#"
                    isActive={num === currentPage}
                    className={
                      num === currentPage
                        ? "min-w-8 h-8 flex items-center justify-center rounded-md bg-[#E6EFF3] text-[#234075] border-solid border-[#294172] font-semibold"
                        : "min-w-8 h-8 flex items-center justify-center rounded-md bg-white text-[#767676] border border-solid border-[#EDEFF1] hover:bg-[#F5F6FA] transition"
                    }
                  >
                    {num}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationLink
                href="#"
                aria-label="Next"
                className="min-w-8 h-8 flex items-center justify-center rounded-md bg-white border border-solid border-[#EDEFF1] text-[#767676] hover:bg-[#F5F6FA] transition"
              >
                <IconChevronRight />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex-1 flex justify-end">
        <Select>
          <SelectTrigger className="w-[110px] h-9 border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#234075]">
            <SelectValue placeholder={itemOptions[0].label} />
          </SelectTrigger>
          <SelectContent>
            {itemOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PaginationUM;
