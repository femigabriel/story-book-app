import React from "react";
import { DownOutlined } from "@ant-design/icons";

export const ReadBookHeader = () => {
  return (
    <div className=" h-[96px]">
      <header className="px-10 py-7 flex justify-between ">
        <div className="flex cursor-pointer">
          <img
            src="./assets/icons/back.svg"
            className="w-[24px] h-[24px] mr-3"
            alt="back-icon"
          />
          <span>Back</span>
        </div>

        <div className="flex">
          <div className="flex cursor-pointer">
            <img
              src="./assets/icons/exclaIcon.svg"
              className="w-[20px] h-[20px] cursor-pointer"
              alt="avatar"
            />
            <span className="mx-2 flex items-center  text-[0.750em] text-[#9B59B6]">
              Tap on the book pages to flip
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};
