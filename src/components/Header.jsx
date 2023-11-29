import { Link } from "react-router-dom";
import logo from "../assets/pokedex.png";

const Header = () => {
  return (
    <nav className="flex justify-center bg-red-600 p-2 shadow-sm shadow-red-950">
      <Link to="/">
        <img className="w-52" src={logo} alt="logo" />
      </Link>
    </nav>
  );
};

export default Header;
