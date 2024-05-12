import { Article } from "./Article";
import { SVG } from "../../SVG/SVG";

const Item = ({ className, title, icons, gridCols }) => {
  const style = {
    gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
  }
  const li = icons.map((item, index) => {
    return (
      <li key={index} className="flex flex-col items-center gap-2">
        <SVG name={item} className={'w-[50px] h-[50px]'} />
        <p>{item}</p>
      </li>
    )
  });
  return (
    <Article className={"p-5 "+className}>
      <h2 className="text-4xl cs-1050:text-3xl text-center font-bold text-color-purple">{title}</h2>
      <ul className="grid gap-y-5" style={style}>
        {li}
      </ul>
    </Article>
  )
}

export { Item };
