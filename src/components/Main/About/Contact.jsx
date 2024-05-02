import { SVG } from "../../SVG/SVG";

const Contact = () => {
  const linkRedes = {
    'linkedin': 'https://linkedin.com/',
    'github': 'https://github.com/yovany-dev',
    'email': 'mailto:yovanymorales.contact@gmail.com',
    'x': 'https://twitter.com/yovany_dev',
    'facebook': 'https://www.facebook.com/yovani.morales.79656',
  };
  const redes = ['linkedin', 'github', 'email', 'x', 'facebook'];
  const li = redes.map((name, index) => {
    return (
      <li key={index}>
        <a href={linkRedes[name]} target="_blank">
          <SVG name={name} className={'w-[50px] h-[50px]'} />
        </a>
      </li>
    )
  });

  return (
    <div className="h-full p-10 flex flex-col justify-center gap-5">
      <h2 className="text-7xl font-bold text-color-purple">Contáctame</h2>
      <ul className="list-none flex items-center gap-5">
        {li}
      </ul>
    </div>
  )
}

export { Contact };
