"use client";
import { Layout } from "@/components/layout/layout";
import { DashboardActivitiesMenu } from "@/components/regulator/dashboard/DashboardActivitiesMenu";
import React from "react";

export default function dashboard() {
  return (
    <Layout title="Welcome Micheal">
      <div className="">
        <DashboardActivitiesMenu items={undefined} />
      </div>
    </Layout>
  );
}
