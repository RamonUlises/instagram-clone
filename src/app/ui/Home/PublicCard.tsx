import Image from "next/image";
import { Figure } from "./Figure";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment, faFaceSmile, faHeart, faPaperPlane } from "@fortawesome/free-solid-svg-icons";


type Recurses = {
  hora: number;
  like: number;
  comment: number;
}

export const PublicCard = ({ nombre = "sin nombre" }: { nombre: string }) => {
  const [coment, setComent] = useState<string>("");
  const [recursos, getRecursos] = useState<Recurses>();
  nombre = nombre.toLocaleLowerCase();
  useEffect(() => {
    getRecursos({
      hora: Math.floor(Math.random() * 24) + 1,
      like: Math.floor(Math.random() * 10000) + 1,
      comment: Math.floor(Math.random() * 1000) + 1
    })
  }, [])
  
  return (
    <article className="bg-white w-full max-w-[482px] flex flex-col border-b pb-4 overflow-hidden dark:bg-black dark:text-white dark:border-zinc-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Figure wid={30} hei={30} />
          <div className="flex flex-col justify-center">
            <h5 className="font-semibold text-sm -ml-2">
              {nombre}
              <span className="mx-2 text-zinc-400">·</span>
              <span className="text-zinc-400">{recursos?.hora}h</span>
            </h5>
            <p className="text-[12px] -ml-2">Audio original</p>
          </div>
        </div>
        <i className="fa-solid fa-ellipsis text-2xl mr-4"></i>
      </div>
      <figure>
        <Image
          src="https://picsum.photos/500"
          alt="Next.js Logo"
          width={500}
          height={500}
          className="-mt-6 mx-3"
        />
      </figure>
      <section className="mx-4 mt-4">
        <div className="flex justify-between items-center ">
          <div className="flex gap-3 text-2xl items-center">
          <FontAwesomeIcon
              icon={faHeart}
              className="cursor-pointer hover:opacity-50 transition-opacity duration-300"
            />
            <FontAwesomeIcon
              icon={faComment}
              className="cursor-pointer hover:opacity-50 transition-opacity duration-300"
              flip="horizontal"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="cursor-pointer hover:opacity-50 transition-opacity duration-300"
            />
          </div>
          <FontAwesomeIcon
            icon={faBookmark}
            className="cursor-pointer hover:opacity-50 transition-opacity duration-300 text-2xl"
          />
        </div>
        <p className="font-semibold text-sm mt-3">{"like"} Me gusta</p>
        <h5 className="font-semibold text-sm mt-2">
          {nombre}
          <span className="ml-3 font-normal">
            El mejor auto de la historia, lamborgini veneno hecho con fibra de
            carbono
          </span>
        </h5>
        <p className="text-[12px] mt-1 text-zinc-500">
          Ver los {"comment"} comentarios
        </p>
        <div className="flex items-center">
          <input
            name="comentario"
            onChange={(e) => setComent(e.target.value)}
            type="text"
            placeholder="Añade un comentario..."
            className=" w-full py-1 focus:outline-none dark:bg-black"
          />
          {coment !== "" && (
            <p
              className={`text-sm font-bold text-sky-500 mr-2 hover:text-zinc-700 cursor-pointer transition-colors duration-300 dark:hover:text-white`}
            >
              Publicar
            </p>
          )}
          <FontAwesomeIcon
              icon={faFaceSmile}
              className="text-zinc-400 cursor-pointer"
            />
        </div>
      </section>
    </article>
  );
};
