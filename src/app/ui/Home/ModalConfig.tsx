import { cambiarTemaPage, getTheme } from "@/app/lib/theme";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const ModalConfig = () => {
  const [theme, setTheme] = useState<boolean>();

  useEffect(() => {
    setTheme(getTheme());
  }, []);
  return (
    <div className="absolute bottom-[12%] left-6 bg-slate-50 px-4 py-2 shadow-lg drop-shadow-2xl z-50 dark:bg-zinc-800 dark:shadow-zinc-900 rounded-xl">
      <h3 className="font-bold dark:text-white text-center text-xl my-3">
        Cambiar tema
      </h3>
      <hr />
      <div
        className="flex items-center gap-5 px-8 py-3 rounded-2xl hover:bg-[#f0f0f0] cursor-pointer dark:hover:bg-zinc-700 my-4"
        onClick={() => {
          cambiarTemaPage();
          setTheme(!theme);
        }}
      >
        <h4 className="dark:text-white font-bold">Modo Oscuro</h4>

        <FontAwesomeIcon
          icon={(theme ? faSun : faMoon)}
          className="text-xl dark:text-white cursor-pointer"
        />
      </div>
    </div>
  );
};
