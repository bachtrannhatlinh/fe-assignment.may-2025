import React from "react";
import PropertiesSidebar from "../PropertiesSidebar";
import Description from "../Description";

const MainContent = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Description />
      <PropertiesSidebar />
    </div>
  );
};

export default MainContent;
