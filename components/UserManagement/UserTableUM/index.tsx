import React from "react";
import Image from "next/image";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { IUser } from "@/types/users";
import PaginationUM from "../PaginationUM";
import { users } from "@/constant/task1-layout";
import IconArrowPath from "@/components/Icons/icon-arrow-path";
import { Checkbox } from "@/components/ui/checkbox";

const statusStyles: Record<string, string> = {
  ACTIVE: "bg-[#F6FFED] text-green-600",
  INACTIVE: "bg-[#FFF1F0] text-red-600",
  PENDING: "bg-[#E6F7FF] text-blue-600",
};

function renderStatus(status: string) {
  return (
    <span
      className={`font-bold px-2 py-1 rounded text-xs ${statusStyles[status] || "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </span>
  );
}

const cellTextClass = "font-normal text-sm text-[#111928]";

const UserRow = ({
  user,
}: {
  user: IUser;
}) => (
  <TableRow className="hover:bg-gray-50 !border-b border-solid border-gray">
    <TableCell>
      <Checkbox />
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
          <div className="font-medium text-sm text-[#111928]">{user.name}</div>
          <div className="font-normal text-sm text-[#637381]">{user.id}</div>
        </div>
      </div>
    </TableCell>
    <TableCell className={cellTextClass}>
      <div>{user.phone}</div>
      <div>{user.email}</div>
    </TableCell>
    <TableCell className={cellTextClass}>{user.type}</TableCell>
    <TableCell className={cellTextClass}>{user.experience}</TableCell>
    <TableCell>{renderStatus(user.status)}</TableCell>
  </TableRow>
);

const UserTableUM = () => {
  return (
    <div className="flex-1 bg-white border border-solid border-gray flex flex-col">
      <div className="flex items-center justify-between py-2">
        <h2 className="font-bold text-lg text-[#234075] flex items-center gap-2 px-5">
          43 USERS
          <IconArrowPath className="w-6 h-6 text-[#294172] cursor-pointer" />
        </h2>
      </div>
      <div className="flex-1 overflow-auto">
        <Table>
         <TableHeader>
            <TableRow className="bg-[#DAE6EF] ">
              <TableHead className="w-10">
                <Checkbox className="bg-white"/>
              </TableHead>
              <TableHead>
                <div className="font-semibold">User Name</div>
                <div className="text-sm font-semibold">User ID</div>
              </TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
              />
            ))}
          </TableBody>
        </Table>
      </div>
      <PaginationUM />
    </div>
  );
};

export default UserTableUM;
