import { useState } from "react";
import RouteLink from "../route/RouteLink";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";


const Navbar = () => {
  
    const [open, setOpen] = useState(false)

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "Not Found" },
  ];

  return (
    <nav>
      <div  className="md:hidden bg-orange-300 p-3" onClick={() => setOpen(!open)}>
        {
            open === true ? 
            <RiCloseLargeFill className="text-2xl" />

            : 
            <HiMenuAlt1 className="text-2xl " />
        }

        
      </div>

      <ul className={`p-5 md:flex absolute  ${open ? '' : 'hidden'}`}>
        {routes.map((route) => (
          <RouteLink id={route.id} route={route}></RouteLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
