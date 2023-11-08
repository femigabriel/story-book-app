"use client"
import { Spin } from "antd";

export default function Button({ className, loading, size, variant, onClick, text, children}: ButtonProps) {
  if(children) {
    return (
        <div className={`${size === "large"? 'w-[282px]': size === "medium"? 'w-[143px]': 'w-[74px]'} ${className??""}`}>
            {children}
        </div>
    )
  } else {
    return (
        loading?
        <Spin>
        <button onClick={onClick} className={`
            rounded-[10px] border-[#2C97CF] h-[40px] text-center
            ${size === "large"? 'w-[282px] h-[44px] my-4': size === "medium"? 'w-[143px]': 'w-[74px]'}
            ${variant === "primary"? 'bg-[#2C97CF] border text-gray-100': variant === "secondary"? 'bg-gray-100 border text-[#2C97CF]': ''}
            ${className??""}
        `}>
            {text}
        </button>
        </Spin>
        :
        <button onClick={onClick} className={`
            rounded-[10px] border-[#2C97CF] h-[40px] text-center text-[0.85em]
            ${size === "large"? 'w-[282px] h-[44px] my-4': size === "medium"? 'w-[143px]': 'w-[74px]'}
            ${variant === "primary"? 'bg-[#2C97CF] border text-gray-100': variant === "secondary"? 'bg-gray-100 border text-[#2C97CF]': ''}
            ${className??""}
        `}>
            {text}
        </button>
    )
  }
}