"use client";
import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import Categories from "@/components/Categories";
import WorkPackages from "@/components/WorkPackages";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import IconBars from "../Icons/icon-bars";
import ArrowRight from "../Icons/icon-arrow-right";
import { toggleSidebar } from "@/store/toggleSlice";
import { categories, workPackages } from "@/app/(task1 - layout)/estimator/helper";

export default function EstimatorClient() {
  const isOpen = useSelector((state: RootState) => state.toggle.open);
  const dispatch = useDispatch();

  return (
    <>
      <Header
        right={
          <Button
            variant={isOpen ? "lightBlue50_005B86" : "gray_F3F4F6"}
            onClick={() => dispatch(toggleSidebar())}
          >
            View Summary
          </Button>
        }
      >
        <div className="flex items-center gap-2">
          <span>Estimator</span>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span>Work Packages</span>
        </div>
      </Header>

      <div className="mt-6 pl-8 pr-24">
        <h1 className="text-xl font-semibold mb-4">Work Packages (WP)</h1>
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-56 mr-8 flex flex-col h-[calc(100vh)]">
            {/* Tabs */}
            <div className="flex gap-2 mb-4 border border-solid border-gray-200 rounded px-1 py-1 bg-white w-full">
              <button className="px-3 py-1 rounded font-semibold bg-[#e6f0f6] text-[#005B86] text-sm">
                RFX WPs
              </button>
              <button className="px-3 py-1 rounded text-gray-500 text-sm">
                Custom WPs
              </button>
            </div>

            {/* Categories */}
            <div className="mb-4">
              <div className="font-semibold text-gray-700 mb-2 text-sm">
                Categories
              </div>
              <Categories categories={categories} />
            </div>
            <div className="mt-auto mb-2">
              <a
                href="#"
                className="flex items-center gap-1 text-xs text-[#005B86]"
              >
                <IconBars className="w-5 h-5 text-[#005B86]" />
                How to add custom WPs
              </a>
            </div>
          </aside>
          {/* Main Content */}
          <main className="flex-1">
            <Input type="text" placeholder="Search" className="w-full mb-4" />
            <WorkPackages workPackages={workPackages} />
            {/* Next button */}
            <div className="flex justify-end mt-8">
              <Button
                variant="outline"
                className="text-[#005B86] border-[#005B86] hover:text-[#005B86] rounded-md px-6 py-2 flex items-center gap-2"
              >
                Next <ArrowRight className="w-4 h-4 text-[#005B86]" />
              </Button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
