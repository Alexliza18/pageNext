"use client";

import React from "react";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathname = usePathname();
  //   console.log(pathname);

  return (
    <div>
      <Link
        href={path}
        className={`${style.link} ${pathname === path && style["active-link"]}`}
      >
        {text}
      </Link>
    </div>
  );
};
