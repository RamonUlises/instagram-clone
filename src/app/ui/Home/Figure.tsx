import Image from "next/image";

export const Figure = ({nombre = "", wid = 55, hei = 55, clases = ""} : {nombre?: string, wid?: number, hei?: number, clases?: string}) => {
  if(nombre !== undefined){
    if(nombre.length > 7){
      nombre = nombre.slice(0, 7) + "...";
    }
  }
  return (
    <article className={`px-2 pb-2 flex flex-col items-center justify-center w-[75px] h-[110px] cursor-pointer ${clases} grow-0 shrink-0`}>
      <figure className={`fondCard p-[2px] rounded-full flex items-center w-[${wid + 7}px]`}>
        <Image 
          src="https://picsum.photos/55" 
          alt="Next.js Logo" 
          width={wid}
          height={hei}
          className="rounded-full m-[1px]"
        />
      </figure>
      {
        (nombre !== "") && ( <p className="text-[12px] mt-1 font-semibold dark:text-white">{nombre}</p>)
      }

    </article>
  )
}
