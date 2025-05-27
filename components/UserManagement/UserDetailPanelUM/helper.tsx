import ArrowTopRightOnSquare from "@/components/Icons/icon-arrow-top-right-on-square";
import { Checkbox } from "@/components/ui/checkbox";

const InforUser = ({
  inforOne,
  inforTwo,
}: {
  inforOne: string;
  inforTwo: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="text-sm text-[#0C0C0D] font-semibold">{inforOne}</div>
    <div className="text-sm text-[#4A4B57] font-normal">{inforTwo}</div>
  </div>
);

const CollappsePanel = ({
  icon1,
  icon2,
  icon3,
  title,
}: {
  icon1: React.ReactNode;
  icon2?: React.ReactNode;
  icon3?: React.ReactNode;
  title: string;
  active?: boolean;
}) => (
  <div className="border-b border-solid border-gray py-3 flex items-center gap-2 text-xs text-[#767676] font-medium cursor-pointer hover:bg-gray-50 transition">
    <div className="flex flex-row gap-2 items-center">
      {icon1}
      <span>{title}</span>
      {icon2}
    </div>
    {icon3}
  </div>
);

const userInfo = [
  { inforOne: "First Name", inforTwo: "David" },
  { inforOne: "Last Name", inforTwo: "Nguyen" },
  { inforOne: "Experience", inforTwo: "5 years" },
  { inforOne: "Personal Website", inforTwo: "david.com" },
];

const todos = [
  {
    id: "todo-1",
    label: "Review Loan Applications",
    checked: false,
    disabled: false,
    icon: <ArrowTopRightOnSquare className="w-4 h-4 text-[#4D69FF]" />,
  },
  {
    id: "todo-2",
    label: "Contact to Borrower",
    checked: false,
    disabled: false,
    icon: <ArrowTopRightOnSquare className="w-4 h-4 text-[#4D69FF]" />,
  },
  {
    id: "todo-3",
    label: "Click to add new todo",
    checked: false,
    disabled: true,
    icon: null,
  },
];

const TodoItem = ({ id, label, disabled, icon }: any) => (
  <li
    className={`flex items-center gap-2 mb-2 ${
      disabled ? "text-[#D9D9D9]" : ""
    }`}
  >
    <Checkbox
      id={id}
      disabled={disabled}
      className={`data-[state=checked]:bg-[#4D69FF] rounded ${
        disabled ? "bg-[#D9D9D9]" : "bg-white"
      }`}
    />
    <label
      htmlFor={id}
      className={`font-semibold cursor-pointer select-none text-[#111928] ${
        disabled ? "cursor-not-allowed text-[#D9D9D9]" : ""
      }`}
    >
      {label}
    </label>
    {icon && <span>{icon}</span>}
  </li>
);

const UserInfoGrid = ({ info }: { info: typeof userInfo }) => (
  <div className="grid grid-cols-4 gap-y-4 gap-x-4 text-[13px]">
    {info.map((item, idx) => (
      <div key={idx} className="flex flex-col gap-2 gap-y-4">
        <InforUser inforOne={item.inforOne} inforTwo={item.inforTwo} />
      </div>
    ))}
  </div>
);

export { InforUser, CollappsePanel, userInfo, todos, TodoItem, UserInfoGrid };
