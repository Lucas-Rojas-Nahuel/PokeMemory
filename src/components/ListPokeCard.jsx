import { useEffect, useState } from "react";
import { names } from "../data/namesOfThePokemon";
import PokeCard from "./PokeCard";
import { usePokemonBatch } from "../hooks/usePokemonBatch";

function getRandomN(array, n) {
  return [...array].sort(() => Math.random() - 0.5).slice(0, n);
}

export default function ListPokeCard({
  currentScore,
  setCurrentScore,
  setIsRepeated,
}) {
  const pokemons = usePokemonBatch(names);
  const [random8, setRandom8] = useState([]);
  const [selected, setSelected] = useState([]);

  // Inicialización: primera lista random de 8
  useEffect(() => {
    if (pokemons.length > 0) {
      setRandom8(getRandomN(pokemons, 8));
    }
  }, [pokemons]);

  function regenerateList() {
    if (pokemons.length === 0) return;
    //si no hay seleccionados, simplemente devuelve una lista random
    if (selected.length === 0) {
      setRandom8(getRandomN(pokemons, 8));
      return;
    }

    const oneSelectedName =
      selected[Math.floor(Math.random() * selected.length)];

    //elegimos 1 pokemon que ya fue seleccionado (obligatorio)
    const oneSelected = pokemons.find((p) => p.name === oneSelectedName);

    //sacamos al seleccionado de la lista total para evitar duplicar
    const remaining = pokemons.filter((p) => p.name !== oneSelectedName);

    //elegimo 7 más para completar los 8
    const other7 = getRandomN(remaining, 7);

    //Construimos la lista final garantizando que 1 seleccionado está incluido
    setRandom8([oneSelected, ...other7].sort(() => Math.random() - 0.5));
  }

  function handleSelect(name) {
    //agregar a seleccionados (solo si no está ya)
    setSelected((prev) => {
      if (prev.includes(name)) {
        setIsRepeated(true);
        return prev;
      } else {
        setIsRepeated(false);
        setCurrentScore((prev) => prev + 1);

        return [...prev, name];
      }
    });

    //regenerar lista cumpliendo la condicion
    regenerateList();
  }

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
      {random8.map((pokemon) => (
        <li
          key={pokemon.name}
          onClick={() => handleSelect(pokemon.name)}
          className="group flex cursor-pointer flex-col gap-3 rounded-xl border border-transparent p-3 transition-all hover:border-primary/50 hover:bg-primary/10"
        >
          <PokeCard pokeData={pokemon} />
        </li>
      ))}
    </ul>
  );
}
