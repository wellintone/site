import Link from "next/link";
import React from "react";
import Container from "../molecolar/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div>
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
