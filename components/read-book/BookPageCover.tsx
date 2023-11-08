import React from "react";
import { ReadBookHeader } from "./ReadBookHeader";
import Image from "next/image";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}
export const BookPageCover = ({ onNextClick, onBackClick }: Props) => {
  return (
    <div className="coverBook">
      <ReadBookHeader />
      <div className="flex justify-between items-center  w-full h-screen px-5">
        <Image
          width={17}
          height={19}
          src="./assets/icons/forwardIcon.svg"
          className="w-[17px] h-[19px] cursor-pointer cover"
          alt="forward-icon"
          onClick={onBackClick}
        />
        <div>
          <Image
            width={18}
            height={20}
            src="./assets/images/book1.svg"
            className="w-[680px] h-[539px] cursor-pointer "
            alt="cover"
          />
        </div>
        <Image
          width={17}
          height={19}
          src="./assets/icons/backIcon.svg"
          className="w-[17px] h-[19px] cursor-pointer cover"
          alt="forward-icon"
          onClick={onNextClick}
        />
      </div>
    </div>
  );
};
