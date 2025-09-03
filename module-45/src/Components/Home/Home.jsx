import { Link, Outlet } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <nav >
    
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    
      
      
    </nav>
    
  );
};

export default Home;
