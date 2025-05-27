'use client';

import React, { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setSort, setFilter } from "@/store/customerTableSlice";
import { customerData } from "@/jsons/customer-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUp, ArrowDown, ArrowUpDown, ChevronDown, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const columnsRaw =
  customerData && customerData.length > 0
    ? Object.keys(customerData[0]).map((key) => ({
        key,
        label: key.charAt(0).toUpperCase() + key.slice(1),
      }))
    : [];

const TableMain = () => {
  const dispatch = useDispatch();
  const { page, pageSize, sortBy, sortOrder, filters } = useSelector(
    (state: RootState) => state.customerTable
  );

  const [isMounted, setIsMounted] = useState(false);
  const [showColumns, setShowColumns] = useState<string[]>(columnsRaw.map(c => c.key));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const columns = columnsRaw.filter(col => showColumns.includes(col.key));

  const data = useMemo(
    () =>
      Array.isArray(customerData)
        ? customerData
        : JSON.parse(JSON.stringify(customerData)),
    []
  );

  const filtered = useMemo(() => {
    let d = [...data];
    if (filters.search) {
      const search = filters.search.toLowerCase();
      d = d.filter((row) =>
        columnsRaw.some((col) =>
          String(row[col.key]).toLowerCase().includes(search)
        )
      );
    }
    Object.entries(filters).forEach(([col, val]) => {
      if (col !== "search" && val)
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

  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="overflow-x-auto rounded-xl shadow-lg bg-white mt-8 border border-gray-100" suppressHydrationWarning={true}>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 px-4 pt-4 pb-2 relative">
        <Input
          type="text"
          value={filters.search || ""}
          onChange={(e) =>
            dispatch(setFilter({ key: "search", value: e.target.value }))
          }
          placeholder="Filter input"
          className="w-full sm:w-72"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="outline"
              className="flex items-center gap-1"
            >
              Columns <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {columnsRaw.map((col) => (
              <DropdownMenuItem
                key={col.key}
                className="flex items-center gap-2"
                onClick={() => {
                  setShowColumns((prev) =>
                    prev.includes(col.key)
                      ? prev.filter((k) => k !== col.key)
                      : [...prev, col.key]
                  );
                }}
              >
                {showColumns.includes(col.key) ? (
                  <Check className="w-4 h-4 text-blue-600" />
                ) : (
                  <span className="w-4 h-4" />
                )}
                {col.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 px-4 py-3 text-center">
              <input type="checkbox" disabled />
            </TableHead>
            {columns.map((col) => (
              <TableHead
                key={col.key}
                className="px-6 py-3 text-left font-semibold group cursor-pointer select-none"
                onClick={() =>
                  dispatch(
                    setSort({
                      sortBy: col.key,
                      sortOrder:
                        sortBy === col.key && sortOrder === "asc"
                          ? "desc"
                          : "asc",
                    })
                  )
                }
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {sortBy === col.key ? (
                    sortOrder === "asc" ? (
                      <ArrowUp className="w-3 h-3 text-blue-600" />
                    ) : (
                      <ArrowDown className="w-3 h-3 text-blue-600" />
                    )
                  ) : (
                    <ArrowUpDown className="w-3 h-3 text-gray-400 group-hover:text-blue-400" />
                  )}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paged.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length + 1}
                className="text-center py-10 text-gray-400 text-lg"
              >
                Không có dữ liệu
              </TableCell>
            </TableRow>
          ) : (
            paged.map((row, idx) => (
              <TableRow key={row.id || idx}>
                <TableCell className="w-10 px-4 py-3 text-center">
                  <input type="checkbox" />
                </TableCell>
                {columns.map((col) => (
                  <TableCell
                    key={col.key}
                    className="px-6 py-3 text-left"
                  >
                    {row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableMain;
