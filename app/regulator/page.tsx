"use client";
import React from "react";
import { Layout } from "@/components/layout/layout";
import { DashboardActivitiesMenu } from "@/components/regulator/dashboard/DashboardActivitiesMenu";
import { MenuBarist } from "@/types/global";
import Image from "next/image";
import DashboardPage from "@/components/regulator/dashboard/OverviewPage";
import { Badge, TabsProps } from "antd";
import NotificationsPage from "@/components/regulator/dashboard/NotificationsPage";
import { regulatorMenu } from "./utilities";
import FleetLive from "@/components/regulator/fleet_live/FleetLive";
// import { DashboardActivitiesMenu } from "@/app/regulator/dashboard/DashboardActivitiesMenu";

export default function Dashboard() {

  const navTab: TabsProps["items"] = [
    {
      key: "1",
      label: "Overview",
      children: <DashboardPage />,
    },
    {
      key: "2",
      label: "Fleet Live",
      children: <FleetLive />,
    },
    {
      key: "3",
      label: (
        <Badge count={1}>
        <div className="flex text-[16px] text-[#2C97CF] m-1">
          <span>Alert</span>
          {/*<Image
            src="/icons/gridicons_dropdown.svg"
            width={24}
            height={24}
            className=" mx-1 cursor-pointer"
            alt="profile-image"
          /> */}
        </div>
        </Badge>
      ),
      children: <NotificationsPage />,
    },
  ];

  let regulator;
  if (typeof window !== 'undefined') {
    regulator = JSON.parse(sessionStorage.getItem("regulator") as string);
  }

  return (
    <Layout sidebarMenuList={regulatorMenu} title={`Welcome ${regulator? regulator.first_name : "Regulator"}`}>
      <div className="">
        <DashboardActivitiesMenu items={navTab} />
      </div> 
    </Layout>
  );
}
