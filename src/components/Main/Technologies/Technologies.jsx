import { Article } from "./Article";
import { Item } from "./Item";

const Technologies = () => {
  return (
    <section className="w-3/4 mx-auto">
      <div className="grid grid-cols-3 grid-rows-[repeat(2,_300px)] gap-8">
        <Article className={'col-span-2 p-10'}>
          <h2 className="text-8xl font-bold text-color-purple">Mi Stack Tecnologíco</h2>
        </Article>
        <Item
          title={'Herramientas'}
          icons={['Git', 'GitHub', 'npm', 'Vscode', 'Linux', 'Terminal']}
          gridCols={3}
        />
        <Item
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
