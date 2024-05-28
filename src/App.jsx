import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query";
import Pokemons from './Pokemons.jsx'
import HabilitiesConfigurator from './HabilitiesConfigurator.jsx'
import './index.css'
import logoPokemon from './img/logoPokemon.png';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <header>
                    <Link to="/"><img className='title' src={logoPokemon} alt="Pokemon Title" /></Link>
                </header>
                <Routes>
                        <Route path="/" element={<Pokemons/>} />
                        <Route path="/configurator/:id" element={<HabilitiesConfigurator/>} />
                </Routes>
           </QueryClientProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
