import React from "react";
import iconsBtn from "/src/assets/left.png";
const Btnr = () => {
  return (
    
      <button
        type="button"
        className="
        font-kanit
        sm:px-3 sm:py-1 sm:rounded-[0.5rem]
        lg:px-5 lg:py-3 lg:rounded-[0.75rem]
        sm:text-[1rem] lg:text-[1.5rem]
        text-center 
        inline-flex items-center 
        text-white bg-orange-500  
        "
      >
        <img
          src={iconsBtn}
          className="mr-[0.5rem] lg:size-5"
        />
        กลับ
      </button>
    
  );
};

export default Btnr;
