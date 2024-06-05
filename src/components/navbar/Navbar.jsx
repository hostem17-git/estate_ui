import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <div className="nav">
      <div className="left">
        <a className="logo" href="/">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="Home">Home</a>
        <a href="About">About</a>
        <a href="Contact">Contact</a>
        <a href="Agents">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="Agents">Sign in</a>
            <a className="register" href="Agents">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>

        <div className={`menu ${open ? "active" : ""}`}>
          <a href="Home">Home</a>
          <a href="About">About</a>
          <a href="Contact">Contact</a>
          <a href="Agents">Agents</a>
          <a href="Agents">Sign in</a>
          <a href="Agents">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
