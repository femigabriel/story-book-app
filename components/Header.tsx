import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Link from "next/link";
import Image from "next/image"


export const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <header className="px-5 py- flex justify-between h-[96px] header">
        <Image
          src="./assets/icons/logo.svg"
          width={131}
          height={101}
          className="w-[131px] h-[101px] cursor-pointer logo"
          alt="logo"
        />
        <Image
          src="./assets/icons/menuIcon.svg"
          width={57}
          height={85}
          onClick={showDrawer}
          className="w-[57px] h-[85px] cursor-pointer menuIcon"
          alt="menu"
        />
      </header>
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <Drawer
        // title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <nav>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/read-book">Read Book</Link>
          </li>
          <li>
            <Link href="/activities">Activities</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </nav>
      </Drawer>
    </div>
  );
};
