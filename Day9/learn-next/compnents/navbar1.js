"use client"

import { useRouter} from 'next/navigation';

const SellerNavbar = () => {
  const router = useRouter();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">seller</span>
        </div>

        <nav className="navbar-links">
          <button className="nav-link active" onClick={() => router.push('/')}>
            MainHome
          </button>
          <button className="nav-link active" onClick={() => router.push('/homeB')}>
            Home
          </button>
          <button className="nav-link" onClick={() => router.push('/aboutB')}>
            About
          </button>
          <button className="nav-link" onClick={() => router.push('/settingB')}>
            Setting
          </button>
          <button className="nav-link" onClick={() => router.push('/loginB')}>
            Login
          </button>
        </nav>
      </div>
    </header>
);
};

export default SellerNavbar;
