const Navbar = () => {
    return (
      <div>
        <nav className="box">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button>Login</button>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  