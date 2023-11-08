"use client"
import { Sidebar } from "@/components/layout/Sidebar";
import { Layout } from "@/components/layout/layout";
import { DashboardActivitiesMenu } from "@/components/regulator/dashboard/DashboardActivitiesMenu";

import DashboardPage from "@/components/operator/dashboard/OverviewPage";
import { Badge, TabsProps } from "antd";
import NotificationsPage from "@/components/regulator/dashboard/NotificationsPage";
import { MenuBarist } from "@/types/global";
import FleetLive from "@/components/operator/fleet_live/FleetLive";
import Image from "next/image";
import { operatorMenu } from "./utilities";


const Operator = () => {
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
          {/* <Image
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

  let operator;
  if (typeof window !== 'undefined') {
    operator = JSON.parse(sessionStorage.getItem("operator") as string);
  }

  return (
      <Layout sidebarMenuList={operatorMenu} title={`Welcome ${operator? operator.first_name : "Operator"}`}>
      <div className="">
          <DashboardActivitiesMenu items={navTab} />
      </div>
      </Layout>
  )
}

export default Operator;