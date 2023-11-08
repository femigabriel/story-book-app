import { Spin } from "antd";

export default function Dropdown({ placeholder, title, onSelect, options, size, variant, children}: DropdownProps) {
  if(children) {
    return (
        <div className={`${size === "large"? 'w-[282px]': size === "medium"? 'w-[143px]': 'w-[74px]'}`}>
            {children}
        </div>
    )
  } else {
    return (
        <div className="">
            {title  && <p className="font-bold">{title}</p>}
            <select
              onChange={onSelect? ({target})=> { onSelect(target.value); } : undefined}
              className={`
                rounded-[10px] border-[#2C97CF] h-[40px] w-full text-center
                ${size === "large"? 'w-[282px] h-[44px] my-4': size === "medium"? 'w-[143px]': 'w-[74px]'}
                ${variant === "primary"? 'bg-[#2C97CF] border text-gray-100': variant === "secondary"? 'bg-gray-100 border text-[#2C97CF]': ''}
            `}>
              <option value="">{placeholder || "Select Option"}</option>
            {
                options?.map((item:any)=> item)
            }
            </select>
        </div>
    )
  }
}