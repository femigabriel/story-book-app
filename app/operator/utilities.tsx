import { MenuBarist } from "@/types/global";
import Image from "next/image";


export let tempOp = {
  "op_id": 1964,
  "name": "FMZ Transports",
  "status": "active"
};

export const operatorMenu: MenuBarist[] = [
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

    link: "/operator",
  },
  {
    id: 2,
    title: "Fleet",
    icon: (
      <Image
        src="/icons/sidebar/mdi_fleet.svg"
        alt=""
        width={24}
        height={24}
      />
    ),

    link: "#",
  },
  {
    id: 3,
    title: "Personnel",
    icon: (
      <Image
        src="/icons/sidebar/arcticons_onlyoffice-documents.svg"
        alt=""
        width={24}
        height={24}
      />
    ),
    link: "#",
  },
  // {
  //   id: 4,
  //   title: "Routes",
  //   icon: (
  //     <Image
  //       src="/icons/sidebar/arcticons_caynaxsportstracker.svg"
  //       alt=""
  //       width={24}
  //       height={24}
  //     />
  //   ),
  //   link: "/regulator/fleet_live",
  // },
  {
    id: 5,
    title: "Schedules",
    icon: (
      <Image
         src="/icons/sidebar/ep_menu (1).svg"
        alt=""
        width={24}
        height={24}
      />
    ),
    link: "#",
  },
];