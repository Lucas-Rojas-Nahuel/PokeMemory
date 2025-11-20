export default function EndGameScreen({
  isRepeated,
  setIsRepeated,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
  isMenu,
  setIsMenu,
}) {
  function handleBtnMenu() {
    setIsRepeated(!isRepeated);
    setIsMenu(!isMenu);
  }

  function handleBtnPlayAgain() {
    setCurrentScore(0);
    setIsRepeated(!isRepeated);
    localStorage.clear();
  }

  if (isRepeated) {
    setBestScore((prev) => {
      if (prev < currentScore) {
        return currentScore;
      } else {
        return prev;
      }
    });
  }

  return (
    <div className="flex flex-col max-w-[480px] flex-1 w-full">
      <div className="mt-16  bg-stone-800/80 rounded-xl p-6 sm:p-8 shadow-2xl border border-white/10 text-center pokeball-shadow">
        {currentScore === 20 ? (
          <>
            <div className="flex w-full grow justify-center items-center relative -mt-20 mb-4">
              <img
                className="h-40 w-40 object-contain rounded-xl drop-shadow-lg"
                data-alt="Pikachu celebrating"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Ae--k6koIvqriTZj3D6cXMrJEIB_gXlUFLMuMvUvzh5FtrHSzsbcaThVfFQKYItpXJhWD8aF2n7OhnPWwtxGDAuyji3lyO_3rzQkQmATPhvY7x79uIApqpYvjS3dQx3H6IRtY9sZVXvN26fT2810llzz_E3q4Qw-wTwQhOiXzHn3mLYbgkDh0SLWepgQueYgV7mKutfZpMVBkc1lPRiZw1U0WuKWh1CoVDc_UEwwKzP-bBAgu73ALCERUqMwRi-t2K_upu1odA"
              />
              <img
                alt="Charmander celebrating"
                className="absolute -left-8 rounded-xl -bottom-8 h-20 w-20 object-contain rotate-[-15deg] drop-shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOduQnSc0E9LZ5dLnJ9L3ghXDlQAeeUcS6rLYvK5MyPCC7GBpnpKY8LUhlF7EX_obYusrvwT37dgNBxZxlSQsxwy6BAbXz_W4gKF0MxV7jQVYdcRicddS7Jbuvp__3jQb9h8hY4BPndZtUgUaHmX5NVbmtJj9TGlfv7QL4XNkHwr7TXDcGmuSih0XBF4whYJ3t-o2WLcfr8kFvlDmV-27SJpCk6z7gLukjq8SDWmthAcDCSffsccFWzJXMi8IsKCsBpbs4fLEmwA"
              />
              <img
                alt="Bulbasaur celebrating"
                className="absolute -right-8 rounded-xl -bottom-8 h-20 w-20 object-contain rotate-[15deg] drop-shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDygEVf3pmRmjufhkmMh3BcW4i0O_USk-U4LPP194ZSsXUJk7D6kN-pJnLStmMYU9YSZHq2F-lRB85EKMJBio_uStBl_UG347OjQ94REC89ig6CdAp5eC0ACvgyUzsSDvZaY9Bj3ZKKcOchVS7Za48B8S23RomMbQOXZpVhy-_9XPUA8Yj1HtMRDg2rOhynZbD2kS3hOcSZJneMHu1HUw2Eth8Vhvt5HvQZ-h_jubIjKEICj3N9F0h7zDzWNA3sZWAmWOwFZ861VQ"
              />
            </div>
            <div className="text-center my-8">
              <h1 className="text-sky-200 tracking-tight text-3xl sm:text-4xl font-bold leading-tight">
                ¡Felicidades, los atrapaste a todos!
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
              <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-xl p-4 bg-background-light dark:bg-background-dark border border-black/10 dark:border-white/10">
                <p className="text-stone-200 text-sm font-medium leading-normal">
                  Tu Puntuación
                </p>
                <p className="text-stone-400 tracking-light text-3xl font-bold leading-tight">
                  {currentScore}
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-xl p-4 border-2 border-sky-400">
                <p className="text-stone-200 text-sm font-medium leading-normal">
                  Mejor Puntuación
                </p>
                <p className="text-sky-300 tracking-light text-3xl font-bold leading-tight">
                  {bestScore}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex w-full grow  justify-center items-center relative -mt-20 mb-4">
              <img
                className="h-40 rounded-xl w-40 object-contain drop-shadow-lg"
                data-alt="Psyduck confused"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5wC-b0eudCGymjCLpr7txxyZYOhjHM0VXrzT7S4vTLyGs5y-FnA5Yv2vilWIvYTRdaHXBhTTX7U5M1qbOVQar1MouvA0EHSXPAIhpc0puYGxhzkW5qeVQ6641ds8rvp7EwoFyr2T6KAj8gGtsTcsnvfmOyzUWmPjx0CSm8ZHgRjFxjaSAI3Y81STZRmNMpYgbSLamaWKo2BmUbGgi8jhbuWkYyFYeQHrNQUZclyPUSwDtJe5Zaep5Bld-Ozw0DRTuzDQQRIR73A"
              />
            </div>
            <div className="text-center mb-6">
              <h1 className="text-stone-200 tracking-tight text-3xl sm:text-4xl font-bold leading-tight">
                ¡Casi lo logras!
              </h1>
              <p className=" text-stone-400 text-base font-normal leading-normal pt-2">
                Sigue intentándolo.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
              <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-xl p-4  border border-white/10">
                <p className="text-stone-200 text-sm font-medium leading-normal">
                  Tu Puntuación
                </p>
                <p className="text-stone-400 tracking-light text-3xl font-bold leading-tight">
                  {currentScore}
                </p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-xl p-4  border-2 border-sky-400">
                <p className="text-stone-200 text-sm font-medium leading-normal">
                  Mejor Puntuación
                </p>
                <p className="text-sky-200 tracking-light text-3xl font-bold leading-tight">
                  {bestScore}
                </p>
              </div>
            </div>
          </>
        )}

        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleBtnPlayAgain()}
            className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-sky-400/50 text-white text-lg font-bold leading-normal  tracking-wide shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Jugar de Nuevo
          </button>
          <button
            onClick={() => handleBtnMenu()}
            className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-red-400 border-2 border-accent-light text-white border-white text-lg font-bold leading-normal tracking-wide transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Menú Principal
          </button>
        </div>
      </div>
    </div>
  );
}
