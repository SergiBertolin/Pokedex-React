const urlMoves = 'https://pokeapi.co/api/v2/move?offset=0&limit=165';

const moveInfo = async () => {
  const res = await fetch(urlMoves);
  
  if (!res.ok) {
    throw new Error('Moves fetch not ok');
  }
  
  const json = await res.json();
  const pokemonMoves = await Promise.all(json.results.map(async pokemon => {
    const res = await fetch(pokemon.url);
    if (!res.ok) {
      throw new Error('Move details fetch not ok');
    }
    return res.json();
  }));

  return pokemonMoves.map((data) => ({
    move: data.name,
    id: data.id,
    accuracy: data.accuracy,
    damage_class: data.damage_class.name,
    effect: data.effect_entries.map((effect) => effect.effect).join(' '),
    power: data.power,
    pp: data.pp,
    type: data.type.name,
  }));
};

export default moveInfo;
