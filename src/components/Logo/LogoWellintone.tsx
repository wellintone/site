"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return <div className="logo" onClick={() => router.push("/")}></div>;
};

export default Logo;
