import React from 'react'
import HeaderUM from './HeaderUM'
import FilterSidebarUM from './FilterSidebarUM'
import UserTableUM from './UserTableUM'
import UserDetailPanelUM from './UserDetailPanelUM'

function UserManagement() {
  return (
    <div className="flex flex-col h-screen bg-[#FAFBFC]">
      <HeaderUM />
      <div className="flex flex-1 h-[calc(100vh-56px)]">
        <FilterSidebarUM />
        <UserTableUM />
        <UserDetailPanelUM />
      </div>
    </div>
  )
}

export default UserManagement