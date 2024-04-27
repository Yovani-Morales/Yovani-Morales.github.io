import { CardButton } from "./CardButton";

const Tecno = ({ text }) => {
  const tencoLowerCase = text.toLowerCase();
  const tecnoColors = {
    html: '#e5532d',
    css: '#254bdd',
    javascript: '#efd81d',
    react: '#3ebff8',
    tailwind: '#3ebff8',
  }
  const styles = {
    border: `solid 1px ${tecnoColors[tencoLowerCase]}`,
    backgroundColor: `${tecnoColors[tencoLowerCase]}2a`,
  }

  return (
    <span style={styles} className="py-1 px-4 text-xs rounded-full">{text}</span>
  )
}

const Footer = ({ technologies, url }) => {
  const tecno = technologies.map((item, index) => <Tecno text={item} key={index} />);
  return (
    <section className="flex flex-col gap-3">
      <div className="flex gap-2">
        {tecno}
      </div>
      <div className="flex gap-3">
        <CardButton text={'Demo'} url={url.demo} color="#0000" />
        <CardButton text={'GitHub'} url={url.github} />
      </div>
    </section>
  )
}

export { Footer };
