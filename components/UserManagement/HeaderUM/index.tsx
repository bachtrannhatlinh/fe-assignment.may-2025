import React from "react";
import {
  IconBell,
  IconHome,
  IconSetting,
  IconUserCircle,
} from "@/components/Icons";
import IconChevronDown from "@/components/Icons/icon-chevron-down";

const Logo = () => (
  <span className="text-green-400 font-bold text-xs tracking-wide">
    COMPANY LOGO XXX
  </span>
);

const ModuleInfo = () => (
  <div className="ml-2 flex flex-col items-start bg-[#e6f1fd] rounded px-5 py-2">
    <span className="text-[#234075] text-[10px] mr-2">Module</span>
    <span className="text-[#234075] text-xs font-bold tracking-wide">
      USER MANAGEMENT
    </span>
  </div>
);

const UserInfo = () => (
  <div className="flex flex-col items-start leading-tight">
    <span className="text-white text-xs font-semibold">Mr. David Nguyen</span>
    <span className="text-[10px] text-gray-200">Home Company</span>
  </div>
);

const HeaderUM = () => (
  <header className="w-full bg-[#294172] flex items-center justify-between border border-white/10 px-10 py-2">
    <div className="flex items-center gap-24">
      <Logo />
      <div className="flex items-center gap-">
        <IconHome size={25} />
        <ModuleInfo />
      </div>
    </div>
    <div className="flex items-center gap-3">
      <IconBell size={22} />
      <IconSetting size={30} />
      <IconUserCircle size={30} />
      <UserInfo />
      <IconChevronDown className="text-white h-5 w-5" />
    </div>
  </header>
);

export default HeaderUM;
