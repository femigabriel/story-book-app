"use client";
import React from "react";
import { Layout } from "@/components/layout/layout";
import { CreateOperatorForm } from "@/components/regulator/create_operator/CreateOperatorForm";
import { regulatorMenu } from "../utilities";


export default function Dashboard() {
  return (
    <Layout sidebarMenuList={regulatorMenu} title="Welcome Oluwole">
      <div className=" ">
        <CreateOperatorForm />
      </div>
    </Layout>
  );
}
