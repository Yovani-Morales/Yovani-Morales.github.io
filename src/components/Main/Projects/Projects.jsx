import { CardContainer } from "./CardContainer";
import { IMG } from "../../IMG/IMG";
import { Card } from "./Card/Card";
import { useState, useEffect } from "react";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}data/projects.json`;
    const headers = {
      method: "GET",
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    }
    fetch(url, headers)
    .then(res => res.json())
    .then(data => setData(data))
  },[]);

  return (
    <section className="custom-width custom-max-width mx-auto flex items-center">
      <div className="grid grid-cols-6 cs-780:grid-cols-1 grid-rows-[repeat(2,_300px)] cs-780:auto-rows-[minmax(0,_300px)] gap-8 cs-780:gap-x-0">
        <CardContainer style='col-span-3 p-10 cs-850:p-5 flex items-center'>
          <h2 className="text-[75px] cs-1185:text-7xl cs-1110:text-6xl cs-1000:text-5xl cs-400:text-4xl leading-none font-bold text-color-purple">Alguno De Mis Mejores Proyectos</h2>
        </CardContainer>
        <CardContainer style='col-span-3 cs-1185:hidden'>
          <IMG name={'animation'} />
        </CardContainer>
        {data.map((item, index) => {
          const {content, footer} = item;
          return (
            <Card key={index} content={content} footer={footer} />
          );
        })}
      </div>
    </section>
  )
}

export { Projects };
