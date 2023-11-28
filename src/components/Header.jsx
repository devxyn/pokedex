/* eslint-disable react/prop-types */
import logo from "../assets/pokedex.png";

const Header = ({ onChange, onClick, handleKeyDown }) => {
  return (
    <nav className="flex flex-col gap-2 md:flex-row items-center justify-between bg-red-600 p-2 ">
      <img className="w-40 ml-4" src={logo} alt="logo" />
      <div className="mr-4">
        <input
          className="border border-black rounded-lg p-1"
          type="text"
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="border border-black px-2 py-1 ml-2 rounded-md bg-yellow-400"
          onClick={onClick}>
          Search
        </button>
      </div>
    </nav>
  );
};

export default Header;
