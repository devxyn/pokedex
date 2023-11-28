/* eslint-disable react/prop-types */
const Pokedex = ({ children, handleLimit }) => {
  return (
    <div>
      {children}
      <button onClick={handleLimit}>LOAD MORE</button>
    </div>
  );
};

export default Pokedex;
