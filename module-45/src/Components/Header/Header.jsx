import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="flex flex-col my-5">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users">Users</Link>
      <Link to="/posts">Posts</Link>
    </nav>
  );
};

export default Header;
