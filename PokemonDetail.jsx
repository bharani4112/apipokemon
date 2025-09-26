import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PokemonDetail = () => {
  const { name } = useParams(); // get name from URL
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        console.error("Error fetching pokemon detail:", err);
      }
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Grid</Link>
      <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>

      {/* Grid of images */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {Object.values(pokemon.sprites)
          .filter((img) => typeof img === "string" && img.endsWith(".png"))
          .map((img, index) => (
            <img key={index} style={{width:"200px",height:"auto"}} src={img} alt={pokemon.name} />
          ))}
      </div>
    </div>
  );
};

export default PokemonDetail;
