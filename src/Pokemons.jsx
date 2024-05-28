import { useQuery } from "react-query";
import pokemonsInfo from './fetch/pokemonsInfo';
import './Pokemons.css';
import { Link } from "react-router-dom"

const Pokemons = () => {
  const { data: pokemonsData, isLoading: isPokemonsLoading, isError: isPokemonsError } = useQuery('pokemonsInfo', pokemonsInfo);

  if (isPokemonsLoading) {
      return <div>Loading Pokemons</div>;
  }

  if (isPokemonsError) {
      return <div>Error loading Pokemons information</div>;
  }

  function selectedType(type) {
    return (type.join(""));
  }

  return (
    <>
      <div>
          <div className='div-main'>
              {pokemonsData.map((pokemon) => (
                <div key={pokemon.id}>
                  <Link to={`/configurator/${pokemon.id}`}>
                    <div className={`div-card-${selectedType(pokemon.types)}`}>
                      <div className='div-name'>
                        <h1 className='pokemon-name'>{pokemon.name}</h1>
                      </div>
                      <div  className='div-img'>
                        <img className='pokemon-img' src={pokemon.imgPng} alt={`An image of ${pokemon.name}`}/>
                      </div>
                      <div className='div-type'>
                        <h2 className='pokemon-type'>{pokemon.types.join("&")}</h2>   
                      </div>                   
                      <div className='div-stats'>
                          <div className='div-stats2-1'>
                            <h2 className='pokemon-num'>{pokemon.stats[0].base_stat}</h2>
                            <h3 className='pokemon-string'>{pokemon.stats[0].stat}</h3>
                          </div>
                          <div className='div-stats2-2'>
                            <h2 className='pokemon-num'>{pokemon.stats[1].base_stat}</h2>
                            <h3 className='pokemon-string'>{pokemon.stats[1].stat}</h3>
                          </div>
                          <div className='div-stats2-3'>
                            <h2 className='pokemon-num'>{pokemon.stats[2].base_stat}</h2>
                            <h3 className='pokemon-string'>{pokemon.stats[2].stat}</h3>
                          </div>
                          <div className='div-stats2-4'>
                            <h2 className='pokemon-num'>{pokemon.stats[3].base_stat}</h2>
                            <h3 className='pokemon-string'>{pokemon.stats[3].stat}</h3>
                          </div>
                          <div className='div-stats2-5'>
                            <h2 className='pokemon-num'>{pokemon.stats[4].base_stat}</h2>
                            <h3 className='pokemon-string'>{pokemon.stats[4].stat}</h3>
                          </div>
                          <div className='div-stats2-6'>
                            <h2 className='pokemon-num'>{pokemon.stats[5].base_stat}</h2>
                            <h3 className='pokemon-string'>{pokemon.stats[5].stat}</h3>
                          </div>
                      </div>
                      <div className='div-id'>
                        <h1 className='pokemon-id'>{pokemon.id}</h1>
                      </div>
                    </div>
                  </Link>         
                </div>
              ))}
          </div>
      </div>
    </>
  );
};

export default Pokemons;