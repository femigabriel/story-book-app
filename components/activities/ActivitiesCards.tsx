import React from "react";
import { ActivitiesHeader } from "./ActivitiesHeader";

export const ActivitiesCard = () => {
  return (
    <div className="coverBook h-screen">
      <ActivitiesHeader />
      <div className="flex justify-center py-10">

        <div className="grid grid-cols-4 gap-[20px] activity-card">
            
          <div className="w-[305px] h-[151px] rounded-[24px] bg-[#FD8C4D] cursor-pointer">
            <div className=" bg-[#242424] w-[305px] h-[355px] rounded-[30px] px-5 py-5 relative top-20 flex justify-center items-center">
              <div className="">
                <h1 className="text-[#F6F5F8] w-[8em] text-center text-[1.500em] ">
                  CHARLIE’S CHOICES
                </h1>
                <button className="bg-[#9B59B6] relative top-24 w-[202px]  h-[47px] text-[#F8F8F8] text-[0.85em] justify-center items-center rounded-[24px] flex my-5">
                  <img
                    className="mr-2 w-[18px] h-[20px]"
                    src="./assets/icons/playIcon.svg"
                    alt="playIcon"
                  />
                  Play
                </button>
              </div>
            </div>
          </div>

          <div className="w-[305px] h-[151px] rounded-[24px] bg-[#5A99EE] cursor-pointer">
            <div className=" bg-[#242424] w-[305px] h-[355px] rounded-[30px] px-5 py-5 relative top-20 flex justify-center items-center">
              <div className="">
                <h1 className="text-[#F6F5F8] w-[8em] text-center text-[1.500em]">
                  BUS STOPS
                </h1>
                <button className="bg-[#9B59B6] relative top-28 w-[202px]  h-[47px] text-[#F8F8F8] text-[0.85em] justify-center items-center rounded-[24px] flex my-5">
                  <img
                    className="mr-2 w-[18px] h-[20px]"
                    src="./assets/icons/playIcon.svg"
                    alt="playIcon"
                  />
                  Play
                </button>
              </div>
            </div>
          </div>

          <div className="w-[305px] h-[151px] rounded-[24px] bg-[#FDBC12] cursor-pointe">
            <div className=" bg-[#242424] w-[305px] h-[355px] rounded-[30px] px-5 py-5 relative top-20 flex justify-center items-center">
              <div className="">
                <h1 className="text-[#F6F5F8] w-[8em] text-center text-[1.500em]">
                  POWER OF WORDS
                </h1>
                <button className="bg-[#9B59B6] relative top-24 w-[202px]  h-[47px] text-[#F8F8F8] text-[0.85em] justify-center items-center rounded-[24px] flex my-5">
                  <img
                    className="mr-2 w-[18px] h-[20px]"
                    src="./assets/icons/playIcon.svg"
                    alt="playIcon"
                  />
                  Play
                </button>
              </div>
            </div>
          </div>

          <div className="w-[305px] h-[151px] rounded-[24px] bg-[#B20606] cursor-pointe">
            <div className=" bg-[#242424] w-[305px] h-[355px] rounded-[30px] px-5 py-5 relative top-20 flex justify-center items-center">
              <div className="">
                <h1 className="text-[#F6F5F8] w-[8em] text-center text-[1.500em]">
                  STOP LIGHT
                </h1>
                <button className="bg-[#9B59B6] relative top-28 w-[202px]  h-[47px] text-[#F8F8F8] text-[0.85em] justify-center items-center rounded-[24px] flex my-5">
                  <img
                    className="mr-2 w-[18px] h-[20px]"
                    src="./assets/icons/playIcon.svg"
                    alt="playIcon"
                  />
                  Play
                </button>
              </div>
            </div>
          </div>


        </div>
        
      </div>
    </div>
  );
};
