import { IMG } from "../../../IMG/IMG";

const Content = ({ title, description, urlIMG }) => {
  return (
    <section className="flex items-center gap-3">
      <div className="w-[150px] cs-430:w-[130px] cs-400:w-[100px] h-[150px] cs-400:h-[100px] shrink-0 rounded-3xl overflow-hidden">
        <IMG name={title.toLowerCase()} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold text-color-purple">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </section>
  )
}

export { Content };
