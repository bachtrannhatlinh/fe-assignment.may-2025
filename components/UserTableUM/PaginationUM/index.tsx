import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

const PaginationUM = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-t bg-white">
      <div className="flex-1 flex items-center">
        <Pagination className="justify-start w-auto mx-0">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="min-w-8 pointer-events-none opacity-50"
                aria-label="Previous"
                aria-disabled="true"
              >
                &lt;
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" aria-label="Next">
                &gt;
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex-1 flex justify-end">
        <Select>
          <SelectTrigger className="w-[110px] h-9 border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#234075]">
            <SelectValue placeholder="05 items" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">05 items</SelectItem>
            <SelectItem value="10">10 items</SelectItem>
            <SelectItem value="20">20 items</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PaginationUM;
