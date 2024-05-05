import astronaut from '/src/assets/imgs/astronauta.png';
import animation from '/src/assets/imgs/animation.gif';
import blackPhone from '/src/assets/imgs/demos/black-phone-demo.png';
import choHan from '/src/assets/imgs/demos/cho-han-demo.jpg';
import twitter from '/src/assets/imgs/demos/twitter-demo.jpg';
import myLogo from '/src/assets/imgs/my-logo.jpg';

const IMG = ({ name }) => {
  const path = {
    astronaut,
    animation,
    'black phone': blackPhone,
    'cho han': choHan,
    'twitter ui clone': twitter,
    'my logo': myLogo,
  }
  return (
    <img src={path[name]} alt={`${name} image`} className="w-full h-full object-cover" />
  )
}

export { IMG };
