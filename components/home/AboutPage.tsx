import React from "react";

export const AboutPage = () => {
  return (
    <div className="bg-[#F8F8F8] px-10 py-10 pt-20">
      <div className="flex justify-between">
        <span className="text-[0.850em]">About</span>
        <img
          src="./assets/icons/scrollUp.svg"
          className=" cursor-pointer w-[64px] h-[59px]"
          alt="scroll-up"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col ">
          <h2 className="mb-[32px] text-[#9B59B6] text-[1.000em]">
            Three Paths Social Emotional Learning is inspired by Charlie’s Big
            Gift
          </h2>
          <p className="text-[#303030] text-[0.85em] w-[47em]">
            The idea of Charlie’s Big Gift was conceived from the round-up that
            occurred in Morton, Mississippi in which a place of business was
            raided by ICE (Immigration and Customs Enforcement), placing
            hundreds of people in custody, leaving hundreds of students stranded
            on the first day of school. So, Charlie’s Big Gift is about an
            African-American fifth grade girl on her first day of school that
            helps her Latin- American best friend, Mya, find her dad that was
            arrested by ICE. Charlie and Mya brave the streets of Atlanta to
            find the ICE headquarters to find Mya’s dad before he’s deported
          </p>
          <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px] float-right my-5">
            Buy Now
          </button>
        </div>
        <img
          src="./assets/images/charlieImg.svg"
          className=" cursor-pointer w-[365px] h-[351.46px]"
          alt="scroll-up"
        />
      </div>
    </div>
  );
};
