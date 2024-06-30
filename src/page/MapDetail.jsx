import Card from "../components/Card";
import Btnr from "../components/Btnr";
import maps from "/src/assets/image 5.png";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

const MapDetail = () => {
  return (
    <>
      <div
        className="border-[1rem] border-blue-700 sm:flex-grow sm:flex sm:flex-col
        sm:absolute  sm:left-0 sm:right-0  sm:w-full sm:h-screen sm:p-[1.5rem]
        lg:flex-grow-0 lg:flex-shrink-0  lg:px-[1.5rem] lg:py-[1.5rem]"
      >
        <div className="border border-red-600">
          <Btnr />
        </div>

        <div className=" flex flex-col  border border-red-600 ">
          <div className="lg:pl-[10rem] md:pl-[8rem] flex-grow flex flex-col">
            <div className="relative font-kanit lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem]">
              <span>รถบัสสาย</span>
              <span className="text-red-500"> สีแดง</span>
            </div>
            <span className="font-kanit sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] opacity-50">
              มีทั้งหมด 13 ป้าย
            </span>
          </div>
        </div>
        <div className="w-full h-fit border-2 border-red-600 flex overflow-auto">
          <Spline scene="https://prod.spline.design/Ics7lIANbvjtJ3Nj/scene.splinecode" />
        </div>
      </div>
      <div className="sm:w-full lg:hidden absolute bottom-0 border-4 border-orange-500 left-[50%] translate-x-[-50%]">
        <Card />
      </div>

      <div className="hidden lg:flex absolute bottom-[4%] justify-end w-fit right-[3%] border-4 border-orange-500">
        <Card />
      </div>
    </>
  );
};
export default MapDetail;
