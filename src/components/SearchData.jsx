/* eslint-disable react/prop-types */
const SearchData = ({ data, imageUrl }) => {
  return (
    <div>
      <img src={`${imageUrl}${data.name}.jpg`} alt={data.name} />
      <div>
        <h2>{data.name}</h2>
      </div>
    </div>
  );
};

export default SearchData;
