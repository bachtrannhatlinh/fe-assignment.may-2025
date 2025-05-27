"use client";

import React, { useMemo, useState, useEffect } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setPage } from "@/store/customerTableSlice";
import { customerData } from "@/jsons/customer-data";

const PaginationMain = () => {
  const dispatch = useDispatch();
  const { page, pageSize, sortBy, sortOrder, filters } = useSelector(
    (state: RootState) => state.customerTable
  );

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const data = useMemo(
    () =>
      Array.isArray(customerData)
        ? customerData
        : JSON.parse(JSON.stringify(customerData)),
    []
  );

  const filtered = useMemo(() => {
    let d = [...data];
    Object.entries(filters).forEach(([col, val]) => {
      if (val)
        d = d.filter((row) =>
          String(row[col]).toLowerCase().includes(val.toLowerCase())
        );
    });
    d.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    return d;
  }, [data, filters, sortBy, sortOrder]);
  const total = filtered.length;

  const totalPages = Math.ceil(total / pageSize);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex justify-center items-center mt-8" suppressHydrationWarning={true}>
      <Pagination className="flex gap-2 items-center bg-white rounded-lg shadow px-6 py-3">
        <PaginationItem>
          <PaginationPrevious
            onClick={
              page === 1
                ? undefined
                : () => dispatch(setPage(Math.max(1, page - 1)))
            }
            aria-disabled={page === 1}
            className={
              "transition-all px-3 py-1 rounded " +
              (page === 1
                ? "pointer-events-none opacity-50 bg-gray-100"
                : "hover:bg-blue-100 text-blue-600")
            }
          />
        </PaginationItem>
        <PaginationItem>
          <span className="mx-4 font-semibold text-lg text-gray-700">
            <span className="text-blue-600">{page}</span>
            <span className="mx-1 text-gray-400">/</span>
            <span>{totalPages}</span>
          </span>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={
              page === totalPages
                ? undefined
                : () => dispatch(setPage(Math.min(totalPages, page + 1)))
            }
            aria-disabled={page === totalPages}
            className={
              "transition-all px-3 py-1 rounded " +
              (page === totalPages
                ? "pointer-events-none opacity-50 bg-gray-100"
                : "hover:bg-blue-100 text-blue-600")
            }
          />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default PaginationMain;
