import React, { useState } from "react";
import Selectbar from "../components/Selectbar";

const Card = () => {
  const [busStopDetail] = useState([
    {
      id: 1,
      color: "red",
      name: "ป้ายที่ 01 คณะวิศวกรรมศาสตร์",
      location: "ด้านหน้าคณะวิศวกรรมศาสตร์",
      detail: "คณะวิศวกรรมศาสตร์",
    },
    {
      id: 2,
      color: "red",
      name: "ป้ายที่ 02 คณะเกษตรศาสตร์",
      location: "ด้านหน้าคณะเกษตรศาสตร์",
      detail:
        "สระว่ายน้ำสุพรรณกัลยา / อาคารกีฬาในร่ม / ศิลป์ศาลา / คณะเกษตรศาสตร์",
    },
    {
      id: 3,
      color: "red",
      name: "ป้ายที่ 03 CITCOMS",
      location: "ด้านหน้าตึก CITCOMS",
      detail: "คณะนิติศาสตร์ / คณะสังคมศาสตร์ / BEC / CITCOMS",
    },
    {
      id: 4,
      color: "red",
      name: "ป้ายที่ 04 คณะมนุษยศาสตร์",
      location: "ด้านหน้าคณะมนุษยศาสตร์",
      detail: "คณะมนุษยศาสตร์ / ประตู 5",
    },
    {
      id: 5,
      color: "red",
      name: "ป้ายที่ 05 อาคารปราบไตรจักร",
      location: "ด้านหน้าอาคารปราบไตรจักร",
      detail: "อาคารปราบไตรจักร / คณะศึกษาศาสตร์ / คณะมนุษยศาสตร์",
    },
    {
      id: 6,
      color: "red",
      name: "ป้ายที่ 06 อาคารมิ่งขวัญ",
      location: "ใกล้ป้ายอาคารมิ่งขวัญ",
      detail: "อาคารมิ่งขวัญ / อาคารอเนกประสงค์ / ลานสมเด็จฯ",
    },
    {
      id: 7,
      color: "red",
      name: "ป้ายที่ 07 คณะเภสัชศาสตร์ / โรงพยาบาลฯ",
      location: "ด้านหน้าคณะเภสัชศาสตร์",
      detail: "คณะเภสัชศาสตร์ / โรงพยาบาลทันตกรรม / โรงพยาบาลมหาวิทยาลัยนเรศวร",
    },
    {
      id: 8,
      color: "red",
      name: "ป้ายที่ 08 อาคารเรียนรวม QS",
      location: "ด้านข้างคณะวิทยาศาสตร์การแพทย์",
      detail:
        "อาคารเรียนรวม QS / NU CANTEEN / คณะวิทยาศาสตร์การแพทย์ / วิทยาลัยนานาชาติ / หอสมุด",
    },
    {
      id: 9,
      color: "red",
      name: "ป้ายที่ 09 คณะวิทยาศาสตร์การแพทย์",
      location: "ใกล้ป้ายสำนักหอสมุด",
      detail: "คณะวิทยาศาสตร์การแพทย์",
    },
    {
      id: 10,
      color: "red",
      name: "ป้ายที่ 10 ภาควิชาคณิตศาสตร์",
      location: "ด้านข้างตึกภาควิชาคณิตศาสตร์",
      detail: "คณะวิทยาศาสตร์ (ภาควิชาคณิตศาสตร์) / อาคารเอกาทศรถ",
    },
    {
      id: 11,
      color: "red",
      name: "ป้ายที่ 11 ภาควิชาชีววิทยา",
      location: "ด้านหน้าตึกภาควิชาชีววิทยา",
      detail:
        "คณะวิศวกรรมศาสตร์ (อาคารปฏิบัติการ) / คณะวิทยาศาสตร์ (ภาควิชาชีววิทยา)",
    },
    {
      id: 12,
      color: "red",
      name: "ป้ายที่ 12 หอพักมน.นิเวศน์ 7-15",
      location: "ด้านหน้าหอพักมน.นิเวศน์",
      detail: "หอพักมน.นิเวศน์ 7-15",
    },
  ]);
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDivOpen, setIsDivOpen] = useState(false);

  const toggleDiv = () => {
    setIsDivOpen(!isDivOpen); // สลับสถานะเปิด/ปิด div
  };

  const toggleImage = () => {
    setIsImageExpanded(!isImageExpanded); // สลับสถานะการขยาย/ย่อ div
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const [selectedSign, setSelectedSign] = useState("hi");

  const handleSelectSign = (sign) => {
    setSelectedSign(sign);
  };

  return (
    <div className="lg:w-[430px] ">
      <div
        className="
        border-2 
        py-[1.5rem] px-[2.5rem]
        bg-white
        h-fit 
        rounded-3xl 
        drop-shadow-md
        justify-center
        p-[5rem]
        "
      >
        <div
          className="
        h-[3rem]  flex justify-center rounded-3xl"
          onClick={toggleDiv}
        >
          <div
            className="divider border-t-[0.3rem] 
            
                border-slate-600
                w-[3.3rem]
                h-[1px]
                opacity-75
                rounded-3xl
                flex
                justify-center
                mt-[1rem]
                "
          ></div>
        </div>

        <div
          className="first-letter:title 
              flex
              justify-center
              
              flex-grow
              title"
        >
          <h1 className="sm:text-[1.2rem] font-kanit lg:text-[1.5rem] text-orange-400 justify-center">
          {selectedSign} <span className="text-black ">คณะวิศวกรรมศาสตร์</span>
          </h1>
        </div>

        <div
          className="
          
        w-full h-fit first-letter:listImg   items-center justify-center"
        >
          {isDivOpen && (
            <div
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
              className=" mt-[1rem] w-full h-[15rem] rounded-3xl bg-center bg-cover duration-500"
            >
              {/* Right Arrow */}
              <button
                type="button"
                className="
                
                        absolute top-[45%] 
                        -translate-x-0 translate-y-[-50%] 
                        right-[3.5rem] text-2xl rounded-full p-2
                        bg-black/20 text-white cursor-pointer
                        "
                onClick={nextSlide}
              >
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L8.46667 6.6C8.73333 6.8 8.73333 7.2 8.46667 7.4L0.999999 13"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              {/* left Arrow */}
              <button
                type="button"
                className="
                        absolute top-[45%] 
                        -translate-x-0 translate-y-[-50%] 
                        left-[3.5rem] text-2xl rounded-full p-2
                        bg-black/20 text-white cursor-pointer
                        "
                onClick={prevSlide}
              >
                <svg
                  width="10"
                  height="14"
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 13L1.53333 7.4C1.26667 7.2 1.26667 6.8 1.53333 6.6L9 1"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
          <div className="  mt-[1rem] detail flex flex-col items-center">
            <h2 className="font-kanit">ด้านหน้าคณะวิศวกรรมศาสตร์</h2>
            <p className="font-kanit opacity-50">
              บริเวณเกียร์คณะวิศวกรรมศาสตร์
            </p>
          </div>
        </div>
        <div className="  btn flex justify-center m-[1rem] ">
          <button
            type="button"
            className="
                font-kanit
                px-5 py-3 text-base 
                font-medium text-center 
                inline-flex items-center 
                text-white bg-orange-500 rounded-lg 
                hover:bg-orange-600 first-line:focus:ring-4 
                focus:outline-none focus:ring-orange-300
                dark:bg-orange-500 dark:hover:bg-orange-500 
                dark:focus:ring-orange-600
                "
          >
            <svg
              className="mr-2"
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.3125 11.3125C3.3125 11.5886 3.53636 11.8125 3.8125 11.8125C4.08864 11.8125 4.3125 11.5886 4.3125 11.3125H3.3125ZM3.8125 1L4.16605 0.646447C3.97079 0.451184 3.65421 0.451184 3.45895 0.646447L3.8125 1ZM0.646447 3.45895C0.451184 3.65421 0.451184 3.97079 0.646447 4.16605C0.841709 4.36132 1.15829 4.36132 1.35355 4.16605L0.646447 3.45895ZM6.27145 4.16605C6.46671 4.36132 6.78329 4.36132 6.97855 4.16605C7.17382 3.97079 7.17382 3.65421 6.97855 3.45895L6.27145 4.16605ZM11.8125 5.6875C11.8125 5.41136 11.5886 5.1875 11.3125 5.1875C11.0364 5.1875 10.8125 5.41136 10.8125 5.6875H11.8125ZM11.3125 16L10.9589 16.3536C11.0527 16.4473 11.1799 16.5 11.3125 16.5C11.4451 16.5 11.5723 16.4473 11.6661 16.3536L11.3125 16ZM8.85355 12.8339C8.65829 12.6387 8.34171 12.6387 8.14645 12.8339C7.95119 13.0292 7.95119 13.3458 8.14645 13.5411L8.85355 12.8339ZM14.4786 13.5411C14.6738 13.3458 14.6738 13.0292 14.4786 12.8339C14.2833 12.6387 13.9667 12.6387 13.7714 12.8339L14.4786 13.5411ZM4.3125 11.3125V1H3.3125V11.3125H4.3125ZM3.45895 0.646447L0.646447 3.45895L1.35355 4.16605L4.16605 1.35355L3.45895 0.646447ZM3.45895 1.35355L6.27145 4.16605L6.97855 3.45895L4.16605 0.646447L3.45895 1.35355ZM10.8125 5.6875V16H11.8125V5.6875H10.8125ZM11.6661 15.6464L8.85355 12.8339L8.14645 13.5411L10.9589 16.3536L11.6661 15.6464ZM11.6661 16.3536L14.4786 13.5411L13.7714 12.8339L10.9589 15.6464L11.6661 16.3536Z"
                fill="white"
              />
            </svg>
            ไป
          </button>
        </div>
        <div className="w-full">
          <Selectbar data={busStopDetail} onSelectSign={handleSelectSign} />
        </div>
      </div>
    </div>
  );
};

export default Card;
