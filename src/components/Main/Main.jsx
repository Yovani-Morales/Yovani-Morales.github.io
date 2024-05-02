import { Projects } from "./Projects/Projects";
import { Technologies } from "./Technologies/Technologies";
import { About } from "./About/About";

const Main = () => {
  return (
    <main className="py-20 flex flex-col gap-20">
      <Projects />
      <Technologies />
      <About />
    </main>
  )
}

export { Main };
