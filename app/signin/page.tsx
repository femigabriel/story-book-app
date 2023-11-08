"use client";
import Image from "next/image";
import BaseTemplate from "@/components/BaseTemplate";
import Button from "@/components/Button";
import Header from "@/components/hero/Header";
import TextInput from "@/components/TextInput";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AuthService from "@/api-services/auth";
import { Spin } from "antd";
import toast from "react-hot-toast";

export default function Signin() {
  let router = useRouter();
  let [signinType, setSigninType] = useState(1);
  let [operatorType, setOperatorType] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean|string>(false);

  let [regulatorData, setRegulatorData] = useState<Regulator>({});
  let [operatorData, setOperatorData] = useState<Operator>({});

  async function authenticateRegulator() {
    setLoading(true);
    let response = await AuthService.signRegulator(regulatorData);
    if (response?.staff_id) {
      setLoading(false);
      router.push("/regulator");
    } else {
      setLoading(false);
      setError("Wrong email and password, please try again.");
      console.log("Not logged in");
    }
  }

  async function authenticateOperator() {
    setLoading(true);
    let response = await AuthService.signOperator(operatorData);
    console.log({response})
    if (response?.id) {
      setLoading(false);
      router.push("/operator");
    } else {
      setError("Invalid operator");
      setLoading(false);
      console.log("Not logged in");
    }
  }

  // async function personnelLogin(){
  //   let response = await AuthService.signRegulator(regulatorData);
  //   if (response.staff_id) {
  //     router.push("/dashboard");
  //   } else {
  //     console.log("Not logged in");
  //   }
  // }

  let RegulatorSignIn = (
    <div className="mx-auto flex flex-col justify-start items-center mt-5  rounded-b-[10px] shadow-md shadow-[#2C97CF] w-[700px] h-[515px] pb-5">
      <div className="py-10 flex flex-col justify-center items-center">
        <h4 className="font-bold text-[28px]">
          {/* LAMATA */}
          REGULATOR
        </h4>
        <p className="text-[20px]">Service and support tool</p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <TextInput
          placeholder={"Username or Email Address"}
          onChangeText={(value) => {
            setError(false);
            setRegulatorData((prev) => ({ ...prev, username: value }));
          }}
          type="text"
          icon="/icons/user-id.svg"
        />
        <TextInput
          placeholder={"Password"}
          onChangeText={(value) => {
            setError(false);
            setRegulatorData((prev) => ({ ...prev, password: value }));
          }}
          type="password"
          icon="/icons/password.svg"
          value={regulatorData.password ?? ""}
        />
        {error? <p className="text-red-600 font-bold text-[13px]">{error}</p> : null}
        <Button
          text="SIGN IN"
          variant="primary"
          size="large"
          onClick={() => {
            authenticateRegulator();
          }}
          loading={loading}
        />
      </div>
    </div>
  );

  let OperatorSignIn = (
    <div className="mx-auto flex flex-col justify-start items-center rounded-b-xl  shadow-md shadow-[#2C97CF] w-[700px] h-max pb-5">
      {/* <div className="flex items-center justify-center space-x-8 text-xs cursor-pointer">
        <p
          onClick={() => setOperatorType(1)}
          className={`${operatorType === 1 && "font-bold"}`}
        >
          Existing Operators
        </p>
        <p
          onClick={() => setOperatorType(2)}
          className={`${operatorType === 2 && "font-bold"}`}
        >
          Create Operator
        </p>
        <p
          onClick={() => setOperatorType(3)}
          className={`${
            operatorType === 3 && "font-bold"
          } flex items-center justify-start`}
        >
          Restricted Operators
          <Image src="/icons/dropdown.svg" alt="" width={24} height={24} />
        </p>
      </div> */}
      <div className="py-10 flex flex-col justify-center items-center">
        <h4 className="font-bold text-[28px]">
          {/* LAMATA */}
          OPERATOR
        </h4>
        <p className="text-[20px]">Service and support tool</p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <TextInput
          placeholder={"Operator ID"}
          value={"Operator ID"}
          onChangeText={(value) => {
            setError(false);
            setOperatorData((prev) => ({ ...prev, op_id: parseInt(value) }));
          }}
          type="text"
          icon="/icons/user-id.svg"
        />
        <TextInput
          placeholder={"Email"}
          value={""}
          onChangeText={(value) => {
            setError(false);
            setOperatorData((prev) => ({ ...prev, email: value }));
          }}
          type="email"
          icon="/icons/email.svg"
        />
        <TextInput
          placeholder={"Password"}
          value={"Password"}
          onChangeText={(value) => {
            setError(false);
            setOperatorData((prev) => ({ ...prev, password: value }));
          }}
          type="password"
          icon="/icons/password.svg"
        />
        {error? <p className="text-red-600 font-bold text-[13px]">{error}</p> : null}
        <Button
          text="SIGN IN"
          variant="primary"
          size="large"
          onClick={() => {
            authenticateOperator();
          }}
          loading={loading}
        />
      </div>
    </div>
  );

  let SpinButton = (
    <Button
      text="SIGN IN"
      variant="primary"
      size="large"
      onClick={() => {
        authenticateRegulator();
      }}
    />
  );

  return (
    <BaseTemplate>
      <div className="w-full py-5">
        <Header signin setSigninType={setSigninType} signinType={signinType} />
        {signinType === 1 ? RegulatorSignIn : OperatorSignIn}
      </div>
    </BaseTemplate>
  );
}
