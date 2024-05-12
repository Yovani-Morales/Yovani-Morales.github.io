import { Article } from "./Article";
import { Item } from "./Item";

const Technologies = () => {
  return (
    <section className="custom-width custom-max-width mx-auto flex items-center">
      <div className="cs-780:w-full grid grid-cols-3 cs-850:grid-cols-4 cs-780:grid-cols-1 grid-rows-[repeat(2,_300px)] cs-780:auto-rows-[minmax(0,_300px)] gap-8 cs-780:gap-x-0">
        <Article className={'col-span-2 p-10 cs-850:p-5'}>
          <h2 className="text-8xl cs-1185:text-7xl cs-1050:text-6xl cs-850:text-5xl font-bold text-color-purple">Mi Stack Tecnologíco</h2>
        </Article>
        <Item
          className={'cs-850:col-span-2'}
          title={'Herramientas'}
          icons={['Git', 'GitHub', 'npm', 'Vscode', 'Linux', 'Terminal']}
          gridCols={3}
        />
        <Item
          className={'cs-850:col-span-2'}
          title={'Aprendiendo'}
          icons={['Next.js', 'Node.js', 'Express.js', 'MySql']}
          gridCols={2}
        />
        <Item
          className={'col-span-2'}
          title={'Frontend'}
          icons={['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'TypeScript', 'Vite']}
          gridCols={4}
        />
      </div>
    </section>
  )
}

export { Technologies };
