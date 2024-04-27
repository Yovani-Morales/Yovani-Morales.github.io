import { CardContainer } from "../CardContainer";
import { Content } from "./Content";
import { Footer } from "./Footer";

const Card = ({ content, footer }) => {
  return (
    <CardContainer style='col-span-2 p-5 flex flex-col gap-2'>
      <Content title={content.title} description={content.description} urlIMG={content.urlIMG} />
      <Footer technologies={footer.technologies} url={footer.urls} />
    </CardContainer>
  )
}

export { Card };
