import s from "./Header.module.css";
import {Link} from "react-router-dom";
import { useState } from "react";

const Header = ({ activeElement, handleClick }) => {

    const [navElements, setNavElements] = useState([
        {
            id: 1,
            name: "Home",
            to: "/"
        },
        {
            id: 2,
            name: "Tasks",
            to: "/tasks"
        }
    ]);

return (
    <header className={s.topnav}>
      {navElements.map((navElement) => {
          return(
            <Link key={navElement.id} 
                  to={navElement.to} 
                  className={navElement.id === activeElement ? s.active : ""}
                  onClick={() => handleClick(navElement.id)}>
                {navElement.name}
            </Link>    
          )
        }
      )}
    </header>
  );
};

export default Header;
