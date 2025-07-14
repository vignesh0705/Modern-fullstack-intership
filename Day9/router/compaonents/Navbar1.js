"use client";

import Link from "next/link";

const Navbar1 = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Link</span>
        </div>
        <div className="navbar-links">
          <Link href="/Home">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Bank">Bank</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
