"use client";

import { useRouter} from "next/navigation";

const Navbar2 = () => {
  const router = useRouter();

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Router</span>
        </div>
        <div className="navbar-links">
          <button
            className="nav-link"
            onClick={() => router.push("/Home")}>
            Home
          </button>
          <button
            className="nav-link"
            onClick={() => router.push("/About")}>
            About
          </button>
          <button
            className="nav-link"
            onClick={() => router.push("/Bank")}>
            Bank
          </button>
        </div>
      </div>
    </div>
);
};

export default Navbar2;
