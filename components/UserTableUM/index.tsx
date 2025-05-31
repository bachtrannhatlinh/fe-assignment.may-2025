import React from "react";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table"; // Đổi lại path nếu cần
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { users } from "./helper";
import { IUser } from "@/types/users";
import PaginationUM from "./PaginationUM";

const UserTableUM = () => (
  <div className="flex-1 p-0 bg-white border rounded min-h-[700px] flex flex-col">
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <h2 className="font-bold text-lg text-[#234075] flex items-center gap-2">
        43 USERS
        <button className="text-blue-600 ml-2 text-base">&#8635;</button>
      </h2>
    </div>
    <div className="flex-1 overflow-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#f5f8fa]">
            <TableHead className="w-10">
              <input type="checkbox" />
            </TableHead>
            <TableHead>
              <div className="font-semibold">User Name</div>
              <div className="text-xs font-normal">User ID</div>
            </TableHead>
            <TableHead>Contact Info</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user: IUser) => (
            <TableRow key={user.id} className="hover:bg-gray-50">
              <TableCell>
                <input type="checkbox" />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover border"
                  />
                  <div>
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.id}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>{user.phone}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </TableCell>
              <TableCell>{user.type}</TableCell>
              <TableCell>{user.experience}</TableCell>
              <TableCell>
                <span className="bg-green-100 text-green-600 font-bold px-2 py-1 rounded text-xs">
                  {user.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    <PaginationUM />
  </div>
);

export default UserTableUM;
