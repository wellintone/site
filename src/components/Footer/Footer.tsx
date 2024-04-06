import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bt-solid-1-on-background w-full px-2">
      <div className="py-5 align-center justify-space-between">
        <span className="">
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>
        <div className="align-center">
          Build With <span className="text-primary text-xl px-1"> &#9825;</span>{" "}
          by&nbsp;
          <Link href="/">Wellintone</Link>
        </div>
        <Link href="/">Say Hello</Link>
      </div>
    </footer>
  );
};

export default Footer;
