import React from "react";

type HeaderProps = {
  children: React.ReactNode;
  right?: React.ReactNode;
};

const Header = ({ children, right }: HeaderProps) => (
  <div className="flex justify-between py-4 rounded-t-md border-b border-solid border-[#D3D3D3] items-center gap-2 text-sm text-gray-500 font-medium">
    {children}
    {right && <div>{right}</div>}
  </div>
);

export default Header;
