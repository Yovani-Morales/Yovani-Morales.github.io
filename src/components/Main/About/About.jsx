import { Article } from "./Article";
import { Profile } from "./Profile";
import { Summary } from "./Summary";
import { Contact } from "./Contact";

const About = () => {
  return (
    <section className="w-3/4 mx-auto flex items-center h-screen">
      <div className="grid grid-cols-2 grid-rows-[repeat(2,_300px)] gap-8">
        <Article className={'row-span-2 flex justify-center items-center'}>
          <Profile />
        </Article>
        <Article>
          <Summary />
        </Article>
        <Article>
          <Contact />
        </Article>
      </div>
    </section>
  )
}

export { About };
