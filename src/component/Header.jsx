// import { faMoon} from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  function handleClick() {
   
    const html = document.getElementById("html");
    if (isDarkMode) {
      html.classList.add("dark");
    }else{
      html.classList.remove("dark");
    }

    setIsDarkMode((prevMode) => !prevMode);

   
  }

  return (
    <header className="bg-white flex items-center justify-between px-12 py-6 shadow-md max-[550px]:px-4 dark:bg-dark-mode-elements">
      <Link to="/">
        <h1 className="text-xl">Where in the world?</h1>
      </Link>
      <div className="flex items-center gap-3">
        <FontAwesomeIcon fontSize={22} icon={faMoon} className="dark:text-white" />
        <p className="cursor-pointer" onClick={handleClick}>
          Dark mode
        </p>
      </div>
    </header>
  );
};

export default Header;
