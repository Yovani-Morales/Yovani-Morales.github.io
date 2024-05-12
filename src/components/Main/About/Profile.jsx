import { IMG } from "../../IMG/IMG";
import { SVG } from "../../SVG/SVG";
import { Button } from "../../Button/Button";

const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-5 cs-850:gap-3">
      <div className="w-[300px] h-[300px] cs-1185:w-[250px] cs-1185:h-[250px] cs-850:w-[150px] cs-850:h-[150px] cs-400:w-[130px] cs-400:h-[130px] rounded-full overflow-hidden">
        <IMG name={'my logo'} />
      </div>
      <div className="">
        <div className="flex cs-400:flex-col items-center gap-4 cs-400:gap-0">
          <div className="flex items-center gap-1">
            <SVG name={'user'} className={'w-[20px] h-[20px]'} />
            <h2 className="text-xl cs-850:text-[18px] font-bold">Yovany Morales</h2>
          </div>
          <div className="flex items-center">
            <SVG name={'location'} className={'w-[25px] h-[25px]'} />
            <span className="mr-2">Guatemala</span>
            <SVG name={'guatemala'} className={'w-[25px] h-[25px]'} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SVG name={'emailtwo'} className={'w-[20px] h-[20px]'} />
          <a href="mailto:yovanymorales.contact@gmail.com">yovanymorales.contact@gmail.com</a>
        </div>
      </div>
      <div>
        <Button url={`${import.meta.env.BASE_URL}docs/cv-yovany-morales.pdf`}>Descargar CV</Button>
      </div>
    </div>
  )
}

export { Profile };
