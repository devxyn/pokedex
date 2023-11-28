/* eslint-disable react/prop-types */
const SearchData = ({ data, imageUrl }) => {
  console.log(data);
  return (
    <div className="h-screen flex justify-center items-center gap-20 py-20">
      <img
        className="h-[400px] p-4 rounded-2x"
        src={`${imageUrl}${data.name}.jpg`}
        alt={data.name}
      />
      <div className=" text-5xl h-max leading-relaxed">
        <h2>Name: {data.name}</h2>
        <h2>Pokemon ID: {data.id}</h2>
        <h2>Height: {data.height}</h2>
        <h2>Weight: {data.weight}</h2>
      </div>
    </div>
  );
};

export default SearchData;
