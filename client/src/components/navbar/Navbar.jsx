import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    navigate("/login")
  }

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
    navigate("/")
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Photo Session</span>
        </Link>
        {user ? (
          < div className="navItems">
            {user.username}
            <button onClick={handleLogout} className="navButton">Logout</button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={handleClick} className="navButton">Login</button>
          </div>
        )
        }
        {/* <span className="logo">Photo Session</span> */}
      </div>
    </div >
  );
};

export default Navbar;