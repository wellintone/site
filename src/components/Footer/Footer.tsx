import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-96 bt-solid-1-on-background">
      <span className="">Rights</span>
      <Link href="/">Wellintone</Link>
      <Link href="/">Say Hello</Link>
    </footer>
  );
};

export default Footer;
