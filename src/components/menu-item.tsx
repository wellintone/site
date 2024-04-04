import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { SidebarLink } from "../types";
import sidebar from "./sidebar";
import { sidebarLinks } from "../constants/sidebar";

interface IMenutItems {
  index: number;
  sidebarLinks: any;
  sidebar: SidebarLink;
  pushToBottom?: number;
}

const MenuItem = ({
  index,
  sidebarLinks,
  sidebar,
  pushToBottom = 0,
}: IMenutItems) => {
  return (
    <li
      className={`${
        sidebarLinks - pushToBottom === index ? "pushToBottom" : ""
      }`}
      key={sidebar.label}
    >
      <Link className={`text-white `} href={sidebar.route}>
        <FontAwesomeIcon icon={sidebar.imgURL} className="font-lg" />
        <span> {sidebar.label} </span>
      </Link>
    </li>
  );
};

export default MenuItem;
