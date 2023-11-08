import React from "react";
import { Header } from "../Header";

export const LandingPage = () => {
  return (
    <div className="bg-[#EEE0FF] w-full h-screen landingPage">
      <Header />
      <div className="px-10 pt-5">
        <div className="text-[#9B59B6]">
          <h1 className="text-[1.792em] w-[12em] font-medium leading-[42px] mb-3">
            Three Paths Social Emotional Learning.
          </h1>
          <p className="text-[1em] w-[24em]">
            A platform with a unique blend of Reading and Activities, Inspired
            by Charlie’s Big Gift.
          </p>
        </div>
        <div className="flex gap-5 mt-10 lists">
          <img
            src="./assets/images/Frame3.svg"
            className="w-[225px] h-[168px] cursor-pointer"
            alt="card"
          />
          <img
            src="./assets/images/Frame1.svg"
            className="w-[225px] h-[168px] cursor-pointer"
            alt="card"
          />
          <img
            src="./assets/images/Frame2.svg"
            className="w-[225px] h-[168px] cursor-pointer"
            alt="card"
          />
        </div>
      </div>
    </div>
  );
};
