import React from "react";
import maps from "/src/assets/image 5.png";

const Mapsdetail = () => {
  return (
    <div className="">
      <div className="lg:pl-[10rem] md:pl-[8rem] sm:pl-[1.5rem] ">
        <div className="  relative  font-kanit lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem]">
          <span>รถบัสสาย</span>
          <span className="text-red-500"> สีแดง</span>
        </div>
        <span className="font-kanit sm:text-[1rem] md:text-[1.5rem] lg:text-[2rem] opacity-50">
          มีทั้งหมด 13 ป้าย
        </span>
      </div>
      <div className="flex items-center justify-center  ">
        <img
          src={maps}
          className="h-full  w-[full]  "
          alt="Map"
        />
      </div>
    </div>
  );
};

export default Mapsdetail;
