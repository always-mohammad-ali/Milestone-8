import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <nav className="flex flex-col my-5">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <NavLink to="/users">Users</NavLink>

      <NavLink to="/posts">Posts</NavLink>
    </nav>
  );
};

export default Header;
