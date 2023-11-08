import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import Link from "next/link";
import Image from "next/image"


const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/score">
        Scores
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/leaderboard">
        Leaderboard
      </a>
    ),
  },
  // {
  //   key: "3",
  //   label: (
  //     <a
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       href="https://www.luohanacademy.com"
  //     >
  //       3rd menu item
  //     </a>
  //   ),
  // },
];

export const ActivitiesHeader = () => {
  return (
    <div className="w-full h-[96px]">
      <header className="px-10 py-7 flex justify-between  w-full">
        <Link href="/" className="flex cursor-pointer w-full">
          
            <Image
                 width={24}
                 height={24}
              src="./assets/icons/back.svg"
              className="w-[24px] h-[24px] mr-3"
              alt="back-icon"
            />
            <span>Back</span>
         
            </Link>

        <div className="flex">
          <div className="flex cursor-pointer h-[] w-[198px]">
            <Image
                 width={58}
                 height={58}
              src="./assets/icons/avatarIcon.svg"
              className="w-[58px] h-[58px] cursor-pointer"
              alt="avatar"
            />
            <span className="mx-3 items-center flex justify-center">
              Queen1234
            </span>
          </div>
          {/* <img
            src="../src/assets/icons/downIcon.svg"
            className="w-[40px] h-[40px] items-center flex justify-center"
            alt="down-icon"
          /> */}
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Image
                 width={40}
                 height={40}
              src="./assets/icons/downIcon.svg"
              className="w-[40px] h-[40px] mt-3 cursor-pointer"
              alt="down-icon"
            />
          </Dropdown>
        </div>
      </header>
    </div>
  );
};
