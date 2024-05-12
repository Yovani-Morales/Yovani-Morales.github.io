import { Projects } from "./Projects/Projects";
import { Technologies } from "./Technologies/Technologies";
import { About } from "./About/About";

const Main = () => {
  return (
    <main className="flex flex-col cs-1050:gap-20 cs-1050:py-20">
      <Projects />
      <Technologies />
      <About />
    </main>
  )
}

export { Main };
