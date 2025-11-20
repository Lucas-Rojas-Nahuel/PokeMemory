function PokeCard({ pokeData }) {
   
  if (!pokeData) return <p className="text-stone-200">Cargando...</p>;
  return (
    <>
      <div className="w-full overflow-hidden rounded-lg bg-none transition-transform duration-300 group-hover:scale-110">
        <img
          className="w-full bg-cover bg-center bg-no-repeat aspect-square  "
          src={pokeData.gif}
          alt={pokeData.name}
        />
      </div>
      <h2 className="text-center text-base font-medium text-gray-800 dark:text-white">
        {pokeData.name}
      </h2>
    </>
  );
}

export default PokeCard;
