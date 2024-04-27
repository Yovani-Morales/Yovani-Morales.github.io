import { Projects } from "./Projects/Projects";

const Main = () => {
  return (
    <main className="py-20 flex flex-col gap-20">
      <Projects />
      <section>Tecnologias</section>
      <section>Acerca de mi</section>
    </main>
  )
}

export { Main };
