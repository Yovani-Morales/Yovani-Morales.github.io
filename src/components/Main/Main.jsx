import { Projects } from "./Projects/Projects";
import { Technologies } from "./Technologies/Technologies";
import { About } from "./About/About";

const Main = () => {
  return (
    <main className="flex flex-col">
      <Projects />
      <Technologies />
      <About />
    </main>
  )
}

export { Main };
