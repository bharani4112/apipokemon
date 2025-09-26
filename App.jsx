import { Routes, Route } from "react-router-dom";


import Apiworkout from "./pages/Apiworkout";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Apiworkout/>} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
    </Routes>
  );
}

export default App;
