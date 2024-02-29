import { SeguirCard } from "./SeguirCard"

export const Seguir = () => {
  return (
    <section className="mt-4 w-full mr-8">
        <SeguirCard username="ramon.hernandez.t" nombre="Ramón Hernández" bool={true} />
        <div className="flex items-center justify-between">
            <h4 className="font-bold text-zinc-500 text-sm">Sugerencias para ti</h4>
            <h4 className="font-bold text-zinc-500 text-xs hover:opacity-80 transition-opacity duration-300 cursor-pointer">Ver todo</h4>
        </div>
        <SeguirCard username="lamborgini_oficial" nombre="Ferrucho Lamborgini" bool={false} />
        <SeguirCard username="ferrari_oficial" nombre="Enzo Ferrari" bool={false} />
        <SeguirCard username="chevrolet_oficial" nombre="Luist Chevrolet" bool={false} />
        <SeguirCard username="gtr_oficial" nombre="Smoki Nagata" bool={false} />
        <SeguirCard username="pagani_oficial" nombre="Horacio Pagani" bool={false} />
        <div className="flex flex-wrap gap-2 mt-12 text-zinc-400 text-[10px]">
            <h4 className="font-bold cursor-pointer hover:underline">Información</h4>
            <h4 className="font-bold cursor-pointer hover:underline">Ayuda</h4>
            <h4 className="font-bold cursor-pointer hover:underline">Prensa</h4>
            <h4 className="font-bold cursor-pointer hover:underline">API</h4>
            <h4 className="font-bold cursor-pointer hover:underline">Empleo</h4>
            <h4 className="font-bold cursor-pointer hover:underline">Privacidad</h4>
            <h4 className="font-bold cursor-pointer hover:underline">Condiciones</h4>
            <h4 className="font-bold cursor-pointer hover:underline">Ubicaciones</h4>
            <h4 className="font-bold cursor-pointer hover:underline">Cuentas más relevantes</h4>
            <h4 className="font-bold cursor-pointer hover:underline">Hashtags</h4>
            <h4 className="font-bold cursor-pointer hover:underline">Idioma</h4>
        </div>
        <div className="flex flex-wrap gap-2 mt-6 text-zinc-400 text-[10px]">
            <h4 className="font-bold">© 2021 INSTAGRAM FROM FACEBOOK</h4>
        </div>
    </section>
  )
}
