import React from "react";
import { Header } from "../Header";


interface Props{
    onNextClick: ()=>any;
  }

export const ReadBookPages = ({onNextClick}:Props) => {
  return (
    <div className="readBook w-full">
      <Header />
      <div className="px-24 ml-5  pb-10 ">
        <h3 className="text-[1.500em] pb-5">Books</h3>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col">
            <img
              src="./assets/images/book1.svg"
              className="w-[323px] h-[485px] cursor-pointer"
              alt="book"
            />
            <div className="mx-14">
              <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5" onClick={onNextClick}>
                Read Book
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src="./assets/images/book2.svg"
              className="w-[323px] h-[485px] cursor-pointer"
              alt="menu"
            />
            <div className="mx-14">
              <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5">
                Read Book
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <img
              src="../assets/images/book2.svg"
              className="w-[323px] h-[485px] cursor-pointer"
              alt="menu"
            />
            <div className="mx-14">
              <button className="bg-[#9B59B6] w-[202px] h-[47px] text-[#F8F8F8] text-[0.85em] rounded-[24px]  my-5">
                Read Book
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
