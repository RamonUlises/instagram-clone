import { Features } from "./Features";
import { Publications } from "./Publications";
import { Seguir } from "./Seguir";

export const Main = () => {
  return (
    <section className="dark:bg-black w-full lg:flex">
      <div className="flex lg:w-[69%] flex-col">
        <Features />
        <Publications />
      </div>
      <div className="lg:w-[31%] lg:h-full hidden lg:flex px-3">
        <Seguir />
      </div>
    </section>
  );
};
