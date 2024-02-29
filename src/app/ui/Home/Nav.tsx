import { pacifico } from "@/app/fonts";
import { useState } from "react";
import { ModalConfig } from "./ModalConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faComment,
  faCompass,
  faHeart,
  faHouse,
  faPause,
  faSearch,
  faSquarePlus,
  faDiceThree,
  faHashtag
} from "@fortawesome/free-solid-svg-icons";
export const Nav = () => {
  const [modalConfig, setModalConfig] = useState<boolean>(false);
  return (
    <>
      {modalConfig && (
        <section
          className="fixed w-screen h-screen"
          onClick={() => setModalConfig(!modalConfig)}
        >
          <ModalConfig />
        </section>
      )}
      <section className="flex items-center py-3 border-t-2 dark:bg-black dark:text-white text-2xl dark:border-[#272727] md:flex-col md:justify-around md:h-full md:px-4 md:border-r xl:items-start">
        <div className="hidden md:flex xl:hidden">
          <FontAwesomeIcon
            icon={faHashtag}
            className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-500 md:dark:hover:bg-zinc-800"
          />
        </div>
        <h3
          className={`${pacifico.className} antialiased text-2xl hidden xl:block ml-3`}
        >
          Instagram
        </h3>
        <div className="flex items-center justify-evenly w-full md:flex-col md:gap-4 xl:items-start xl:gap-0">
          <div className="md:order-1 xl:flex xl:items-center xl:dark:hover:bg-zinc-900 xl:cursor-pointer xl:rounded-md xl:w-full transition-all duration-300 xl:hover:bg-zinc-200 xl:py-2 xl:hover:scale-105">
            <FontAwesomeIcon
              icon={faHouse}
              className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-300 md:dark:hover:bg-zinc-800 xl:hover:scale-100 xl:p-0 xl:mx-2 xl:my-2"
            />
            <h3 className="text-sm hidden xl:block font-bold ml-3">Inicio</h3>
          </div>
          <div className="md:order-3 xl:flex xl:items-center xl:dark:hover:bg-zinc-900 xl:cursor-pointer xl:rounded-md xl:w-full transition-all duration-300 xl:hover:bg-zinc-200 xl:py-2 xl:hover:scale-105">
            <FontAwesomeIcon
              icon={faCompass}
              className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-300 md:dark:hover:bg-zinc-800 xl:hover:scale-100 xl:p-0 xl:mx-2 xl:my-2"
            />
            <h3 className="text-sm hidden xl:block font-semibold ml-3">
              Explorar
            </h3>
          </div>
          <div className="md:order-4 xl:flex xl:items-center xl:dark:hover:bg-zinc-900 xl:cursor-pointer xl:rounded-md xl:w-full transition-all duration-300 xl:hover:bg-zinc-200 xl:py-2 xl:hover:scale-105">
            <FontAwesomeIcon
              icon={faSearch}
              className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-300 md:dark:hover:bg-zinc-800 xl:hover:scale-100 xl:p-0 xl:mx-2 xl:my-2"
            />
            <h3 className="text-sm hidden xl:block font-semibold ml-3">
              Reels
            </h3>
          </div>
          <div className="md:order-7 xl:flex xl:items-center xl:dark:hover:bg-zinc-900 xl:cursor-pointer xl:rounded-md xl:w-full transition-all duration-300 xl:hover:bg-zinc-200 xl:py-2 xl:hover:scale-105">
            <FontAwesomeIcon
              icon={faSquarePlus}
              className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-300 md:dark:hover:bg-zinc-800 xl:hover:scale-100 xl:p-0 xl:mx-2 xl:my-2"
            />
            <h3 className="text-sm hidden xl:block font-semibold ml-3">
              Crear
            </h3>
          </div>
          <div className="md:order-5 xl:flex xl:items-center xl:dark:hover:bg-zinc-900 xl:cursor-pointer xl:rounded-md xl:w-full transition-all duration-300 xl:hover:bg-zinc-200 xl:py-2 xl:hover:scale-105">
            <FontAwesomeIcon
              icon={faComment}
              className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-300 md:dark:hover:bg-zinc-800 xl:hover:scale-100 xl:p-0 xl:mx-2 xl:my-2"
            />
            <h3 className="text-sm hidden xl:block font-semibold ml-3">
              Mensajes
            </h3>
          </div>
          <div className="md:order-8 xl:flex xl:items-center xl:dark:hover:bg-zinc-900 xl:cursor-pointer xl:rounded-md xl:w-full transition-all duration-300 xl:hover:bg-zinc-200 xl:py-2 xl:hover:scale-105">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-300 md:dark:hover:bg-zinc-800 xl:hover:scale-100 xl:p-0 xl:mx-2 xl:my-2"
            />
            <h3 className="text-sm hidden xl:block font-semibold ml-3">
              Perfil
            </h3>
          </div>
          <div className="order-6 hidden md:block xl:flex xl:items-center xl:dark:hover:bg-zinc-900 xl:cursor-pointer xl:rounded-md xl:w-full transition-all duration-300 xl:hover:bg-zinc-200 xl:py-2 xl:hover:scale-105">
            <FontAwesomeIcon
              icon={faHeart}
              className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-300 md:dark:hover:bg-zinc-800 xl:hover:scale-100 xl:p-0 xl:mx-2 xl:my-2"
            />
            <h3 className="text-sm hidden xl:block font-semibold ml-3">
              Notificaciones
            </h3>
          </div>
          <div className="md:order-2 hidden md:block xl:flex xl:items-center xl:dark:hover:bg-zinc-900 xl:cursor-pointer xl:rounded-md xl:w-full transition-all duration-300 xl:hover:bg-zinc-200 xl:py-2 xl:hover:scale-105">
            <FontAwesomeIcon
              icon={faSearch}
              className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-300 md:dark:hover:bg-zinc-800 xl:hover:scale-100 xl:p-0 xl:mx-2 xl:my-2"
            />
            <h3 className="text-sm hidden xl:block ml-3">Búsqueda</h3>
          </div>
        </div>
        <div className="hidden md:flex xl:flex xl:flex-col xl:w-full">
          <div className="xl:flex items-center hidden xl:dark:hover:bg-zinc-900 transition-all duration-300 xl:hover:scale-105 cursor-pointer xl:w-full rounded-xl xl:hover:bg-zinc-200">
            <FontAwesomeIcon
              icon={faDiceThree}
              className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-300 md:dark:hover:bg-zinc-800 text-2xl xl:hover:scale-100 xl:p-0 xl:mx-2 xl:my-2"
            />
            <h3 className="text-sm hidden xl:block font-semibold ml-3">
              Threads
            </h3>
          </div>
          <div
            className="flex items-center xl:dark:hover:bg-zinc-900 transition-all duration-300 xl:hover:scale-105 cursor-pointer xl:w-full rounded-xl xl:hover:bg-zinc-200 z-50"
            onClick={() => setModalConfig(!modalConfig)}
          >
            <FontAwesomeIcon
              icon={faPause}
              rotation={90}
              className="cursor-pointer md:p-2 md:hover:bg-[#f0f0f0] rounded-md hover:scale-110 transition-all duration-300 md:dark:hover:bg-zinc-800 text-3xl xl:hover:scale-100 xl:p-0 xl:ml-3 xl:my-2 xl:dark:hover:bg-zinc-900 xl:hover:bg-slate-200"
            />
            <h3 className="text-sm hidden xl:block font-semibold ml-6">Más</h3>
          </div>
        </div>
      </section>
    </>
  );
};
