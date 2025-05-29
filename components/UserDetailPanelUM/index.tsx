import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  IconChartLineUp,
  IconDocument,
  IconGeneralInformation,
  IconLoadDocument,
  IconPercent,
} from "../Icons";
import IconChevronRight from "../Icons/icon-chevron-right";
import ArrowTopRightOnSquare from "../Icons/icon-arrow-top-right-on-square";
import { CollappsePanel, InforUser } from "./helper";
import PencilSquare from "../Icons/pencil-square";
import { Checkbox } from "@/components/ui/checkbox";
import IconDocumentText from "../Icons/icon-document-text";

const UserDetailPanelUM = () => (
  <aside className="bg-white border-l overflow-auto text-[#234075] px-3">
    {/* GENERAL INFORMATION */}
    <div className="pt-6 pb-4">
      <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold mb-3 py-2 border-solid border-b border-gray-200">
        <IconGeneralInformation size={24} />
        <span>GENERAL INFORMATION</span>
      </div>
      <div className="grid grid-cols-4 gap-y-3 gap-x-4 text-[13px]">
        <InforUser inforOne="First Name" inforTwo="David" />
        <InforUser inforOne="Last Name" inforTwo="Nguyen" />
        <InforUser inforOne="Experience" inforTwo="5 years" />
        <InforUser inforOne="Personal Website" inforTwo="david.com" />

        <InforUser inforOne="First Name" inforTwo="David" />
        <InforUser inforOne="Last Name" inforTwo="Nguyen" />
        <InforUser inforOne="Experience" inforTwo="5 years" />
        <InforUser inforOne="Personal Website" inforTwo="david.com" />
      </div>
    </div>
    {/* COLLAPSE PANELS */}
    <CollappsePanel
      icon1={<IconPercent size={24} />}
      icon2={<IconChevronRight className="w-4 h-4" />}
      title="COMMISSION STRUCTURES"
      icon3={
        <ArrowTopRightOnSquare className="ml-auto w-4 h-4 text-gray-400" />
      }
    />
    <CollappsePanel
      icon1={<IconDocument size={24} />}
      icon2={<IconChevronRight className="w-4 h-4" />}
      title="RECRUITMENT DOCUMENTS"
      icon3={
        <ArrowTopRightOnSquare className="ml-auto w-4 h-4 text-blue-600" />
      }
    />
    <CollappsePanel
      icon1={<IconLoadDocument size={24} />}
      icon2={<IconChevronRight className="w-4 h-4" />}
      title="RELATED CLIENTS & LOAN DOCUMENTS"
    />

    <div className="border-b">
      <div className="pb-2">
        <Table className="border">
          <TableHeader>
            <TableRow className="bg-[#e9f0f6] text-[#234075]">
              <TableHead className="font-semibold py-2 px-2">Index</TableHead>
              <TableHead className="font-semibold py-2 px-2">
                Borrower Name
                <br />
                <span className="font-normal">Loan ID</span>
              </TableHead>
              <TableHead className="font-semibold py-2 px-2">
                Lender
                <br />
                <span className="font-normal">Interest Rate</span>
              </TableHead>
              <TableHead className="font-semibold py-2 px-2">Process</TableHead>
              <TableHead className="font-semibold py-2 px-2">Status</TableHead>
              <TableHead className="font-semibold py-2 px-2">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2].map((idx) => (
              <TableRow key={idx} className="border-b last:border-b-0">
                <TableCell className="py-2 px-2 text-center align-middle">{`0${idx}`}</TableCell>
                <TableCell className="py-2 px-2 align-middle">
                  <span className="font-semibold text-[#234075]">Ms. Hang Nguyen</span>
                  <br />
                  <span className="text-gray-400 text-xs">#LA00001</span>
                </TableCell>
                <TableCell className="py-2 px-2 align-middle">
                  <span className="font-semibold text-[#234075]">AD Mortgage</span>
                  <br />
                  <span className="text-gray-400 text-xs">6% (6.168% APR)</span>
                </TableCell>
                <TableCell className="py-2 px-2 align-middle">
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#234075] h-2 rounded-full"
                        style={{ width: "68%" }}
                      ></div>
                    </div>
                    <span className="text-xs text-[#234075] font-semibold ml-1">68%</span>
                  </div>
                </TableCell>
                <TableCell className="py-2 px-2 align-middle">
                  <span className="bg-[#e6f1fd] text-[#2196f3] font-semibold px-3 py-1 rounded text-xs">
                    IN PROGRESS
                  </span>
                </TableCell>
                <TableCell className="py-2 px-2 text-center align-middle">
                  <button className="text-[#234075] hover:underline">
                    <IconDocumentText className="w-5 h-5 inline-block" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    {/* PERFORMANCE */}
    <CollappsePanel
      icon1={<IconChartLineUp size={24} />}
      icon2={<IconChevronRight className="w-4 h-4" />}
      title="PERFORMANCE REPORTS"
    />
    {/* TO-DO */}
    <div className="py-3">
      <CollappsePanel
        icon1={<PencilSquare className="w-5 h-5 text-[#767676]" />}
        icon2={<IconChevronRight className="w-4 h-4" />}
        title="TO-DO"
      />
      <ul className="text-sm mt-2">
        <li className="flex items-center gap-2 mb-2">
          <Checkbox
            id="todo-1"
            className="data-[state=checked]:bg-[#4D69FF] rounded"
          />
          <label
            htmlFor="todo-1"
            className="font-semibold cursor-pointer select-none text-[#111928]"
          >
            Review Loan Applications
          </label>
          <span>
            <ArrowTopRightOnSquare className="w-4 h-4 text-[#4D69FF]" />
          </span>
        </li>
        <li className="flex items-center gap-2 mb-1">
          <Checkbox
            id="todo-2"
            className="data-[state=checked]:bg-[#4D69FF] rounded"
          />
          <label
            htmlFor="todo-2"
            className="font-semibold cursor-pointer select-none text-[#111928]"
          >
            Contact to Borrower
          </label>
          <span>
            <ArrowTopRightOnSquare className="w-4 h-4 text-[#4D69FF]" />
          </span>
        </li>
        <li className="flex items-center gap-2 text-gray-400">
          <Checkbox id="todo-3" disabled />
          <label
            htmlFor="todo-3"
            className="cursor-not-allowed select-none"
          >
            Click to add new todo
          </label>
        </li>
      </ul>
    </div>
  </aside>
);

export default UserDetailPanelUM;
