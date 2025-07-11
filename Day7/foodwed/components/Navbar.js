import Link from 'next/link';


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">FoodWed</span>
        </div>

        <nav className="navbar-links">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/help" className="nav-link">Help</Link>
          <Link href="/search" className="nav-link">🔍Search</Link>
          <Link href="/cart" className="nav-link">🛒Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
