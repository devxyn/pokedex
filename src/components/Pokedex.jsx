/* eslint-disable react/prop-types */
const Pokedex = ({ children, handleLimit }) => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      {children}
      <button
        className="border-4 border-black bg-yellow-400 text-3xl w-60 px-4 py-2 rounded-lg"
        onClick={handleLimit}>
        LOAD MORE
      </button>
    </div>
  );
};

export default Pokedex;
