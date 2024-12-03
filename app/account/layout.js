import React from "react";
import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
  return (
    <div className="grid grid-cols-[minmax(0,4rem)_1fr] lg:grid-cols-[16rem_1fr] h-full sm:gap-6 lg:gap-12">
      <SideNavigation />
      {children}
    </div>
  );
}
