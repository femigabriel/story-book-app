import { MenuBarist } from "@/types/global";
import Image from "next/image";

export const regulatorMenu: MenuBarist[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: (
      <Image
        src="/icons/sidebar/ep_menu (2).svg"
        alt=""
        width={24}
        height={24}
      />

    ),
    link: "/regulator",
  },
    
];