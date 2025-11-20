import React, { useState } from "react";
import { MdOutlineGroup } from "react-icons/md";
import { IoGameControllerSharp } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";
import MainGameScreen from "./MainGameScreen";
import EndGameScreen from "./EndGameScreen";

export default function HomeScreen() {
  const [isMenu, setIsMenu] = useState(false);
  const [isRepeated, setIsRepeated] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="layout-container flex h-full grow flex-col">
      <main className="flex-1 main-fond bg-cover bg-center">
        <div className="relative  flex h-full min-h-[calc(100vh-160px)] w-full flex-col items-center justify-center bg-cover bg-center p-4">
          <div className="flex flex-col p-8  md:p-12 items-center gap-6 rounded-xl bg-background-light/80 dark:bg-background-dark/80  text-center shadow-2xl backdrop-blur-sm  ">
            {isRepeated ? (
              <EndGameScreen
                isRepeated={isRepeated}
                setIsRepeated={setIsRepeated}
                currentScore={currentScore}
                setCurrentScore={setCurrentScore}
                bestScore={bestScore}
                setBestScore={setBestScore}
                isMenu={isMenu}
                setIsMenu={setIsMenu}
              />
            ) : isMenu ? (
              <MainGameScreen
                setIsRepeated={setIsRepeated}
                currentScore={currentScore}
                setCurrentScore={setCurrentScore}
                bestScore={bestScore}
              />
            ) : (
              <>
                <header className="flex flex-col items-center gap-4">
                  <div className="pokeball-logo"></div>
                  <h1 className="text-4xl font-black leading-tight tracking-tighter   @[480px]:text-5xl">
                    Bienvenido a Poké-Memoria
                  </h1>
                </header>
                <p className="max-w-xl   text-[20px] font-medium leading-normal text-gray-100 @[480px]:text-lg">
                  Pon a prueba tu memoria y encuentra 20 Pokémon distintos. ¿Podrás atraparlos a todos?
                </p>
                <button
                  onClick={() => {
                    localStorage.removeItem("pokemonCache");
                    localStorage.removeItem("randomPokemonList");
                    setIsMenu(!isMenu);
                  }}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-sky-500 hover:bg-red-400 text-white text-base font-bold leading-normal tracking-wide transition-all  delay-100 duration-160   hover:scale-105"
                >
                  <span className="truncate">¡Comenzar a Jugar!</span>
                </button>
              </>
            )}
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-4 px-5 py-8 text-center ">
        <div className="flex  text-[30px] flex-wrap justify-center gap-4">
          <a className="text-slate-500  hover:text-blue-500" href="#">
            <MdOutlineGroup />
          </a>
          <a className="text-slate-500 hover:text-blue-500" href="#">
            <IoGameControllerSharp />
          </a>
          <a className="text-slate-500 hover:text-blue-500" href="#">
            <CiShare2 />
          </a>
        </div>
        <p className="text-sm font-normal leading-normal text-slate-500 ">
        Juego creado por ©2025 Lucas Rojas &#123;Dev&#125;. Pokémon es propiedad de Nintendo, Creatures Inc. y GAME FREAK Inc.
        </p>
      </footer>
    </div>
  );
}
