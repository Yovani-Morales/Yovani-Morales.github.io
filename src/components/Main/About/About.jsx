import { Article } from "./Article";
import { Profile } from "./Profile";
import { Summary } from "./Summary";
import { Contact } from "./Contact";

const About = () => {
  return (
    <section className="custom-width custom-max-width mx-auto flex items-center">
      <div className="grid grid-cols-2 cs-780:grid-cols-1 grid-rows-[repeat(2,_300px)] cs-780:auto-rows-[minmax(0,_300px)] gap-8 cs-780:gap-x-0">
        <Article className={'row-span-2 cs-850:row-span-1 flex justify-center items-center'}>
          <Profile />
        </Article>
        <Article className={'cs-780:col-span-2'}>
          <Summary />
        </Article>
        <Article className={'cs-850:col-span-2'}>
          <Contact />
        </Article>
      </div>
    </section>
  )
}

export { About };
