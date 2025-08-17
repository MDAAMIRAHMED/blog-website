import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Aamir Blog</h1>
      <div className="links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/create" end>
          New Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
