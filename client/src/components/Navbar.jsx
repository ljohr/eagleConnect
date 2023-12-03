import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("uid");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-inner">
        <li>
          <Link to="/" className="nav-title">
            Home
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="nav-item">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-item">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/search" className="nav-item">
            Search
          </Link>
        </li>
      </ul>
      <ul className="navbar-inner login-register">
        {!isLoggedIn && (
          <li>
            <Link to="/register" className="nav-item">
              Register
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link to="/login" className="nav-item">
              Login
            </Link>
          </li>
        )}
        {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
      </ul>
    </nav>
  );
};

export default Navbar;