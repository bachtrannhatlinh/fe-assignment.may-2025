"use client";

import React, { useCallback } from "react";
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
import { cn } from "@/lib/utils";
import {  borderLightBlue } from "@/constant/color";
import { IconViewSummary } from "@/components/Icons";

const HeaderEs = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch(toggleSidebar());
    },
    [dispatch]
  );

  return (
    <Header
      right={
        <Button
          onClick={handleClick}
          className={`flex items-center gap-2 ${cn(borderLightBlue)}`}
        >
          <IconViewSummary />
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
