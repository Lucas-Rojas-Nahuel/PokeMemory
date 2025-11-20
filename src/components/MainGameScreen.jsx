import ListPokeCard from "./ListPokeCard";

export default function MainGameScreen({
  setIsRepeated,
  currentScore,
  setCurrentScore,
  bestScore,
}) {
  return (
    <div className="bg-stone-700  rounded-xl">
      <header className="w-full max-w-5xl gap-5 px-4 md:px-10 py-4 flex items-center justify-between whitespace-nowrap border-b border-gray-200/10 ">
        <div className="flex items-center gap-3 text-gray-800 dark:text-white">
          <div className="pokeball-logo size-6 text-primary"></div>
          <h1 className="text-xl font-bold tracking-tight">
            Juego de Memoria Pokémon
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-sm font-medium text-gray-300 ">
            Puntuación Actual: <span className="font-bold">{currentScore}</span>
          </div>
          <div className="text-sm font-medium text-gray-300 ">
            Mejor Puntuación: <span className="font-bold ">{bestScore}</span>
          </div>
        </div>
      </header>
      <section className="w-full max-w-5xl flex-1 px-4 py-8 md:px-10 md:py-12">
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          ¡No hagas clic en el mismo Pokémon dos veces!
        </p>

        <ListPokeCard
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
          setIsRepeated={setIsRepeated}
        />
      </section>
    </div>
  );
}
