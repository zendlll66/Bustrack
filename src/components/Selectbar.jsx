// ใน Selectbar component
import React from "react";

const Selectbar = ({ data, onSelectSign }) => {
  const handleSignSelect = (sign) => {
    onSelectSign(sign);
  };

  return (
    <div className="border-2 border-red-400 w-full flex flex-row  overflow-auto space-x-[10px] ">
      {data.map((sign, index) => (
        <button
          key={index}
          className={`border border-rgba-0-0-0-10 w-[188px] h-[28px] rounded-[50px] flex place-content-center place-items-center p-[10px] space-x-[10px] duration-300 
          bg-[#E94B3E] text-white`}
          onClick={() => handleSignSelect(sign)}
        >
          <div className=" flex flex-row place-content-center place-items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.55791 13.7999C8.00932 14.5545 9.85735 14.5545 11.3088 13.7999M8.78356 12.4007L6.38489 8.92247C6.12874 8.55103 5.89179 8.16284 5.7454 7.73604C5.433 6.82525 5.39204 5.95023 5.72864 5.10251C6.10306 4.15953 7.00678 3.51405 7.9967 3.29166C8.45235 3.1893 8.89306 3.16106 9.35871 3.20235C10.6505 3.3169 11.9085 4.09314 12.3144 5.32482C12.6445 6.32617 12.4518 7.3214 11.9075 8.36432L9.03354 12.4007C8.97735 12.4831 8.83976 12.4831 8.78356 12.4007ZM9.00068 7.50006V7.50006C9.622 7.50006 10.1257 6.99638 10.1257 6.37506V6.37506C10.1257 5.75374 9.622 5.25006 9.00068 5.25006V5.25006C8.37936 5.25006 7.87568 5.75374 7.87568 6.37506V6.37506C7.87568 6.99638 8.37936 7.50006 9.00068 7.50006Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className=" font-kanit font-medium text-[12px] w-[70px]">
              ป้ายที่ {sign.id}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Selectbar;
