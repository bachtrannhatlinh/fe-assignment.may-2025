import React from "react";
import HeaderUM from "@/components/HeaderUM";
import FilterSidebarUM from "@/components/FilterSidebarUM";
import UserTableUM from "@/components/UserTableUM";
import UserDetailPanelUM from "@/components/UserDetailPanelUM";

const UserManagement = () => {
  return (
    <div className="flex flex-col h-screen bg-[#FAFBFC]">
      <HeaderUM />
      <div className="flex flex-1 h-[calc(100vh-56px)]">
        <FilterSidebarUM />
        <UserTableUM />
        <UserDetailPanelUM />
      </div>
    </div>
  );
};

export default UserManagement;
