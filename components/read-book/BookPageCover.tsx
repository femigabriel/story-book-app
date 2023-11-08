import React from "react";
import { ReadBookHeader } from "./ReadBookHeader";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BookPageCover = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="coverBook">
      <ReadBookHeader />
      <div className="flex justify-between items-center  w-full h-screen px-5">
        <img
          src="./assets/icons/forwardIcon.svg"
          className="w-[17px] h-[19px] cursor-pointer cover"
          alt="forward-icon"
          onClick={onBackClick}
        />
        <div>
          <img
            src="./assets/images/book1.svg"
            className="w-[680px] h-[539px] cursor-pointer "
            alt="cover"
          />
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
