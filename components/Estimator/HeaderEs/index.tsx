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

const HeaderEs = () => {
  const isOpen = useSelector((state: RootState) => state.toggle.open);
  const dispatch = useDispatch();

  return (
    <Header
      right={
        <Button
          variant={isOpen ? "lightBlue50_005B86" : "gray_F3F4F6"}
          onClick={() => dispatch(toggleSidebar())}
          className="flex items-center gap-2"
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
