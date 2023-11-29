import { useLoaderData } from "react-router-dom";

const Pokemon = () => {
  const data = useLoaderData();
  const imageUrl = "https://img.pokemondb.net/artwork/";

  console.log(data);
  return (
    <div className="flex justify-center items-center h-[85vh]">
      <div className="w-[50%] flex justify-center items-center h-full">
        <img
          className="h-[25rem] object-contain p-4 shadow-black"
          src={`${imageUrl}${data.name}.jpg`}
          alt={data.name}
        />
      </div>
      <div className="w-[50%] flex justify-center items-center h-full px-20">
        <div className="flex flex-col items-center w-full bg-yellow-400  border-4 border-blue-600 rounded-xl shadow-xl shadow-black">
          <h1 className="text-4xl my-5">Pokemon #{data.id}</h1>
          <div className="text-2xl my-4">
            <h2>Name: {data.name.toUpperCase()}</h2>
            <p>Height: {data.height}</p>
            <p>Weight: {data.weight}</p>
            <div className="flex flex-row">
              <p className="mr-3">Types:</p>
              <ul>
                {data.types.map((data, index) => (
                  <li key={index}>{data.type.name.toUpperCase()}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
