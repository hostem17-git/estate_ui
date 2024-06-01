import "./navbar.scss";
function Navbar() {
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
        <a href="Agents">Sign in</a>
        <a className="register" href="Agents">Sign up</a>
      </div>
    </div>
  );
}

export default Navbar;
