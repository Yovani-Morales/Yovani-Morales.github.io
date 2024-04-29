import { Projects } from "./Projects/Projects";
import { Technologies } from "./Technologies/Technologies";

const Main = () => {
  return (
    <main className="py-20 flex flex-col gap-20">
      <Projects />
      <Technologies />
      <section>Acerca de mi</section>
    </main>
  )
}

export { Main };
