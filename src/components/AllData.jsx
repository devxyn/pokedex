/* eslint-disable react/prop-types */
const AllData = ({ data, imageUrl }) => {
  console.log(data);
  return (
    <div className="flex flex-row flex-wrap items-center justify-center my-5 gap-10">
      {data.map((info, index) => (
        <div className="border-4 border-black w-56 rounded-lg overflow-hidden" key={index}>
          <img
            className="w-full h-60 p-4 object-contain"
            src={`${imageUrl}${info.name}.jpg`}
            alt={info.name}
          />

          <div className="flex flex-col justify-center items-center py-4 border-t-2 border-black bg-red-600 text-white ">
            <h2 className="text-xl">{info.name.toUpperCase()}</h2>

            <h2>ID: {index + 1}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllData;
