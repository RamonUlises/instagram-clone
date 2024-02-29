import Image from "next/image";

export const SeguirCard = ({username, nombre, bool} : { username : string, nombre : string, bool : boolean}) => {
    
  return (
    <article className="flex items-center justify-between my-6">
      <div className="flex items-center">
        <Image
          src="https://picsum.photos/100"
          alt="Seguir"
          width={40}
          height={40}
          className="rounded-full cursor-pointer"
        />
        <div className="ml-3">
            <h4 className="font-semibold -mb-1 cursor-pointer text-[14px] dark:text-slate-100">{username}</h4>
            <p className="text-zinc-500 text-[13px]">{nombre}</p>
        </div>
      </div>
      <p className="text-sky-500 font-bold text-[12px] hover:text-zinc-800 transition-colors duration-300 cursor-pointer dark:hover:text-white">{bool === true ? "Cambiar" : "Seguir"}</p>
    </article>
  );
};
