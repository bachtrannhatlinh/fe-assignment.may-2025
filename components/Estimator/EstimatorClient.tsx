"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Categories from "@/components/Categories";
import WorkPackages from "@/components/WorkPackages";
import IconBars from "../Icons/icon-bars";
import ArrowRight from "../Icons/icon-arrow-right";


import HeaderEs from "./HeaderEs";
import { categories, workPackages } from "@/constant/task1-layout";
import IconMagnifyingGlass from "../Icons/icon-magnifying-glass";

export default function EstimatorClient() {
  return (
    <>
      <HeaderEs />

      <div className="mt-6 pl-8 pr-24 pb-5">
        <h1 className="text-xl font-semibold mb-4">Work Packages (WP)</h1>
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-56 mr-8 flex flex-col h-[calc(100vh)]">
            {/* Tabs */}
            <div className="flex gap-2 mb-4 border border-solid border-gray-200 rounded px-1 py-1 bg-white w-full">
              <button className="px-3 py-1 rounded font-semibold bg-[#e6f0f6] text-primary text-sm">
                RFX WPs
              </button>
              <button className="px-3 py-1 rounded text-gray-500 text-sm">
                Custom WPs
              </button>
            </div>

            {/* Categories */}
            <div className="mb-4">
              <div className="font-medium text-[#343434] mb-2 text-lg">
                Categories
              </div>
              <Categories categories={categories} />
            </div>
            <div className="mt-auto mb-2">
              <a
                href="#"
                className="flex items-center gap-1 text-xs text-primary"
              >
                <IconBars className="w-5 h-5 " />
                <span className="text-primary font-medium">
                  How to add custom WPs
                </span>
              </a>
            </div>
          </aside>
          {/* Main Content */}
          <main className="flex-1 ">
            <div className="relative mb-4">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <IconMagnifyingGlass className="w-4 h-4" />
              </span>
              <Input
                type="text"
                placeholder="Search"
                className="w-full pl-9"
              />
            </div>
            <WorkPackages workPackages={workPackages} />
            {/* Next button */}
            <div className="flex justify-end mt-8">
              <Button
                variant="outline"
                className="text-primary border-primary hover:text-primary rounded-md px-6 py-2 flex items-center gap-2"
              >
                Next <ArrowRight className="w-4 h-4 text-primary" />
              </Button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
