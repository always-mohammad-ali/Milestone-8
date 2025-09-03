import { Outlet } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";


const Home = () => {
  return (
    <div>
    
      <Contact></Contact>

      <a   href="">Home</a>
      <a href="">About us</a>
      <a href="">Contact</a>
    
      
      <Outlet></Outlet>
    </div>
    
  );
};

export default Home;
