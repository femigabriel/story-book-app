import React from "react";
import { ReadBookHeader } from "./ReadBookHeader";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BookPageCoverEnd = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="coverBook">
      <ReadBookHeader />
      <div className="flex justify-between items-center coverBook w-full h-screen px-5">
        <img
          src="./assets/icons/forwardIcon.svg"
          className="w-[17px] h-[19px] cursor-pointer cover"
          alt="forward-icon"
          onClick={onBackClick}
        />
        <div className="flex w-full items-center">
          <img
            src="./assets/images/backCover.svg"
            className="w-[680px] px-10 h-[538.355px] cursor-pointer "
            alt="cover"
          />
          <button
            className="text-[0.85em] text-[#9B59B6] rounded-[90px] border-[#663972] border  h-[47px] w-[306px]"
            onClick={onNextClick}
          >
            Start All over
          </button>
        </div>

        <img
          src="./assets/icons/backIcon.svg"
          className="w-[17px] h-[19px] cursor-pointer cover"
          alt="forward-icon"
          onClick={onNextClick}
        />
      </div>
    </div>
  );
};
