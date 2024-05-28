const urlMoves = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

const pokemonsInfo = async () => {
    const res = await fetch(urlMoves);
  
    if (!res.ok) {
        throw new Error('Moves fetch not ok');
    }
  
    const json = await res.json();
    const pokemonData = await Promise.all(json.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        if (!res.ok) {
        throw new Error('Move details fetch not ok');
        }
        return res.json();
    }));

    return pokemonData.map((data, index) => ({
        name: json.results[index].name,
        id: data.id,
        imgPng: data.sprites.other.home.front_default,
        stats: data.stats.map((stats) => ({
        base_stat: stats.base_stat,
        stat: stats.stat.name,
        })),
        types: data.types.map((type) => type.type.name),
        move: data.moves.map((move) => move.move.name),  
    }));
    
};

export default pokemonsInfo;
