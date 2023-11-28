/* eslint-disable react/prop-types */
const SearchData = ({ data, url }) => {
  return (
    <div>
      <div>
        <img src={`${url}${data.id}.png`} alt={data.name} />
        <div>
          <h2>{data.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default SearchData;
