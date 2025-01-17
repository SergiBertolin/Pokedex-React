const pokemonInfo = async ({ queryKey }) => {
    const id = queryKey[1];
    const apiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  
    if (!apiRes.ok) {
      throw new Error(`configurator/${id} fetch not ok`);
    }

    return apiRes.json();
  };
  
  export default pokemonInfo;