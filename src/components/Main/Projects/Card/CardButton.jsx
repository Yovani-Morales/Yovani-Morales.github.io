import { Button } from "../../../Button/Button";

const CardButton = ({ text, url, color="#6127d1" }) => {
  return (
    <Button url={url} color={color} style={'w-[50%] flex items-center gap-2'}>
      <span>{text}</span>
      <i className="fa-solid fa-arrow-right"></i>
    </Button>
  )
}

export { CardButton };
