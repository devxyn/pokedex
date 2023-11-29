const fetchPokemon = async ({ params }) => {
  try {
    const results = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const data = await results.json();
    return data;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default fetchPokemon;
