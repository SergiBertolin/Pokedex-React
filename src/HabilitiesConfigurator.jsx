import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import pokemonInfo from "./fetch/pokemonInfo";
import HabilitiesSelect from "./HabilitiesSelect"


const HabilitiesConfigurator = () => {
    const {id} = useParams();
    const { data: pokemon, isLoading, isError } = useQuery(["habilities", id], pokemonInfo);  

    
    if (isLoading) {
        return (
          <div className="loading-pane">
            <h2 className="loader">🌀</h2>
          </div>
        );
      }
    
    if (isError) {
      return <div>Error loading data</div>;
    }  

    return (
        <>
            <div className='div-move'>
                <div className='div-move-title'>
                    <h1 className='skills-title'>{`${pokemon.name.toUpperCase()}: Habilities Configurator`}</h1>
                </div>
                <HabilitiesSelect pokemon={pokemon}/>
                <HabilitiesSelect pokemon={pokemon}/>
                <HabilitiesSelect pokemon={pokemon}/>
                <HabilitiesSelect pokemon={pokemon}/>
            </div>    

        </>
    ) 
};

export default HabilitiesConfigurator;