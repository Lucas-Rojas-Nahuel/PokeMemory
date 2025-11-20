import { useEffect, useRef, useState } from "react";

function getRandom20(list) {
  const shuffled = [...list].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 20);
}

function normalizePokemonName(name) {
  return name
    .toLowerCase()
    .replace("♀", "-f")
    .replace("♂", "-m")
    .replace(/\s+/g, "-");
}

export function usePokemonBatch(allPokemonNames) {
  const [pokemonList, setPokemonList] = useState([]);
  const cacheRef = useRef(null);

  useEffect(() => {
    async function laodData() {
      // 1️⃣ Leer cache una sola vez y guardarlo en ref (persiste entre renders)
      if (!cacheRef.current) {
        cacheRef.current = JSON.parse(
          localStorage.getItem("pokemonCache") || "{}"
        );
      }
      // 2️⃣ Leer / crear la lista aleatoria
      let randomList = JSON.parse(
        localStorage.getItem("randomPokemonList") || "[]"
      );

      if (randomList.length === 0) {
        randomList = getRandom20(allPokemonNames);
        localStorage.setItem("randomPokemonList", JSON.stringify(randomList));
      }

      // 3️⃣ Fetch solo si falta en cache
      const requests = randomList.map(async (name) => {
        if (cacheRef.current[name]) {
            return cacheRef.current[name];
        }
        console.log("estoy aca");

        const apiName = normalizePokemonName(name);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${apiName}`);
        const data = await res.json();

        const gif =
          data.sprites.versions?.["generation-v"]?.["black-white"]?.animated
            ?.front_default || data.sprites.front_default;

        const pokemonData = {
          name: data.name,
          gif: gif,
        };

        cacheRef.current[name] = pokemonData;
        return pokemonData;
      });

      const results = await Promise.all(requests);

      // 4️⃣ Guardar cache actualizado
      localStorage.setItem("pokemonCache", JSON.stringify(cacheRef.current));

      setPokemonList(results);
    }
    laodData();
  }, []);
  return pokemonList;
}
