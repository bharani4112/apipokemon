import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Apiworkout = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
      const data = await res.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setPokemons(pokemonDetails);
    };

    fetchPokemons();
  }, []);
//  if (!pokemons) return <p>Loading...</p>;
  return (
    <div>
      <h2>Pokémon Grid</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "20px"
      }}>
        {pokemons.map((p) => (
          <div key={p.id} style={{
            border: "3px solid #000000ff",
            borderRadius: "30px",
            padding: "10px",
            textAlign: "center"
          }}>
            <h3 style={{ textTransform: "capitalize" }}>{p.name}</h3>
            <Link to={`/pokemon/${p.name}`}>
              <img src={p.sprites.front_default} alt={p.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apiworkout;
