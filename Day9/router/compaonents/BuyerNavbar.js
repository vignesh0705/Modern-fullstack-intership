"use client"

import { useRouter} from 'next/navigation';

const BuyerNavbar = () => {
  const router = useRouter();

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Buyer</span>
        </div>
        

        <nav className="navbar-links">
          <button className="nav-link active" onClick={() => router.push('/')}>
            MainHome
          </button>
          <button className="nav-link active" onClick={() => router.push('/homeA')}>
            Home
          </button>
          <button className="nav-link" onClick={() => router.push('/aboutA')}>
            About
          </button>
          <button className="nav-link" onClick={() => router.push('/settingA')}>
            Setting
          </button>
          <button className="nav-link" onClick={() => router.push('/loginA')}>
            Login
          </button>
        </nav>
      </div>
    </header>
);
};

export default BuyerNavbar;
