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
} from "../../Icons";
import IconChevronRight from "../../Icons/icon-chevron-right";
import ArrowTopRightOnSquare from "../../Icons/icon-arrow-top-right-on-square";
import {
  CollappsePanel,
  TodoItem,
  todos,
  userInfo,
  UserInfoGrid,
} from "./helper";
import IconPencilSquare from "../../Icons/icon-pencil-square";
import IconDocumentText from "../../Icons/icon-document-text";
import IconChevronDown from "@/components/Icons/icon-chevron-down";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const UserDetailPanelUM = () => (
  <aside className="bg-white border-l overflow-auto text-[#234075] px-3">
    <div>
      <div className="flex items-center gap-2 text-xs text-[#767676] font-medium mb-3 py-2 border-solid border-b border-gray-200">
        <IconGeneralInformation size={24} />
        <span>GENERAL INFORMATION</span>
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <UserInfoGrid info={userInfo} />
        <UserInfoGrid info={userInfo} />
      </div>
    </div>

    <CollappsePanel
      icon1={<IconPercent size={24} />}
      icon2={<IconChevronRight className="w-4 h-4" />}
      title="COMMISSION STRUCTURES"
      icon3={
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="ml-auto">
                <ArrowTopRightOnSquare className="w-4 h-4 text-gray-400" />
              </span>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-[#111928] text-white text-xs rounded px-3 py-1 shadow-lg"
            >
              You don't have permission to open this link
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
      icon2={<IconChevronDown className="w-4 h-4" />}
      title="RELATED CLIENTS & LOAN DOCUMENTS"
    />

    <div className="border border-solid border-gray mt-4 border-l">
      <div className="pb-2">
        <Table className="border">
          <TableHeader>
            <TableRow className="bg-[#e9f0f6] text-[#234075]">
              <TableHead className="font-semibold py-2 px-2">Index</TableHead>
              <TableHead className="font-semibold py-2 px-2">
                Borrower Name
                <br />
                <span className="font-medium text-[#111928]">Loan ID</span>
              </TableHead>
              <TableHead className="font-semibold py-2 px-2">
                Lender
                <br />
                <span className="font-medium text-[#111928]">
                  Interest Rate
                </span>
              </TableHead>
              <TableHead className="font-semibold py-2 px-2">Process</TableHead>
              <TableHead className="font-semibold py-2 px-2">Status</TableHead>
              <TableHead className="font-semibold py-2 px-2">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2].map((idx) => (
              <TableRow
                key={idx}
                className="border-b border-solid border-gray"
              >
                <TableCell className="py-2 px-2 text-center align-middle">{`0${idx}`}</TableCell>
                <TableCell className="py-2 px-2 align-middle">
                  <span className="font-medium text-[#111928]">
                    Ms. Hang Nguyen
                  </span>
                  <br />
                  <span className="text-gray-400 text-xs">#LA00001</span>
                </TableCell>
                <TableCell className="py-2 px-2 align-middle">
                  <span className="font-medium text-[#111928]">
                    AD Mortgage
                  </span>
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
                    <span className="text-xs text-[#234075] font-normal ml-1">
                      68%
                    </span>
                  </div>
                </TableCell>
                <TableCell className="py-2 px-2 align-middle">
                  <span className="bg-[#e6f1fd] text-[#2196f3] font-medium px-3 py-1 rounded text-xs">
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

    <CollappsePanel
      icon1={<IconChartLineUp size={24} />}
      icon2={<IconChevronRight className="w-4 h-4" />}
      title="PERFORMANCE"
    />

    <div className="py-2">
      <CollappsePanel
        icon1={<IconPencilSquare className="w-5 h-5 text-[#767676]" />}
        title="TO-DO"
      />
      <ul className="text-sm mt-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  </aside>
);

export default UserDetailPanelUM;
