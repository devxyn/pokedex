/* eslint-disable react/prop-types */
const AllData = ({ data, url }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {data.map((info, index) => (
        <div className="border border-black" key={index}>
          <img src={`${url}${index + 1}.png`} alt={info.name} />
          <div>
            <h2>{info.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllData;
