import React from "react";
import arrowH from "/src/assets/arrowH.svg";
import percent from "/src/assets/percent.svg";

const Trackpoint = () => {
  const variable = 10;

  return (
    <>
      {/* Container */}
      <div className="relative h-[9rem] w-[430px] px-[40px] py-[40px] border-2 border-red-400">
        <div className="relative h-[7rem]">
          {/* Percent */}
          <img
            src={percent}
            style={{
              position: "absolute",
              top: "50%",
              left: `${variable}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <span
            className="text-white font-bold absolute 53%"
            style={{
              position: "absolute",
              top: "53%",
              left: `${variable}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {variable + "%"}
          </span>

          {/* Arrow */}
          <div className="relative bg-orange-500/20 h-3 rounded-full">
            <img
              src={arrowH}
              style={{
                position: "absolute",
                top: "50%",
                left: `${variable}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
            <div
              style={{ width: `${variable}%` }}
              className="rounded-full bg-orange-400 flex justify-center items-center w-[100%] h-full text-[9px] text-white font-bold"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trackpoint;
