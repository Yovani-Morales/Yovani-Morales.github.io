import { SVG } from "../../SVG/SVG";

const Contact = () => {
  const linkRedes = {
    'linkedin': 'https://linkedin.com/',
    'github': 'https://github.com/yovany-dev',
    'email': 'mailto:yovanymorales.contact@gmail.com',
    'x': 'https://twitter.com/yovany_dev',
    'facebook': 'https://www.facebook.com/yovanymorales.dev',
  };
  const redes = ['linkedin', 'github', 'email', 'x', 'facebook'];
  const li = redes.map((name, index) => {
    return (
      <li key={index}>
        <a href={linkRedes[name]} target="_blank">
          <SVG name={name} className={'w-[50px] h-[50px] cs-460:w-[40px] cs-460:h-[40px]'} />
        </a>
      </li>
    )
  });

  return (
    <div className="h-full p-10 cs-950:p-5 flex flex-col justify-center gap-5">
      <h2 className="text-7xl cs-1185:text-6xl cs-1050:text-5xl cs-400:text-4xl font-bold text-color-purple">Contáctame</h2>
      <ul className="list-none flex items-center gap-5 cs-400:gap-3">
        {li}
      </ul>
    </div>
  )
}

export { Contact };
