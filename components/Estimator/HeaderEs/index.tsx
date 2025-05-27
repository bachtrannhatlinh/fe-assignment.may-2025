"use client";

import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store";
import { toggleSidebar } from "@/store/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";
import IconBars from "@/components/Icons/icon-bars";
import { cn } from "@/lib/utils";
import { borderGray, borderLightBlue } from "@/constant/color";

const HeaderEs = () => {
  const isOpen = useSelector((state: RootState) => state.toggle.open);
  const dispatch = useDispatch();

  return (
    <Header
      right={
        <Button
          onClick={() => dispatch(toggleSidebar())}
          className={`flex items-center gap-2 ${isOpen ? cn(borderLightBlue) : cn(borderGray)}`}
        >
          <IconBars className="w-6 h-6" />
          View Summary
        </Button>
      }
    >
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Estimator</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="text-primary cursor-pointer">
              Work Packages
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Header>
  );
};

export default HeaderEs;
