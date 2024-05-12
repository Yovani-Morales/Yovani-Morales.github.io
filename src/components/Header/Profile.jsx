import { Button } from "../Button/Button";
import { IMG } from "../IMG/IMG";

const Profile = () => {
  return (
    <section className='custom-width h-screen mx-auto flex justify-between'>
      <div className='max-w-max cs-950:max-w-[400px] cs-780:max-w-[600px] flex flex-col justify-center gap-3'>
        <div>
          <h1 className='text-4xl cs-659:text-3xl cs-460:text-2xl font-bold'>Yovany Morales</h1>
          <h2 className='text-7xl cs-1050:text-6xl cs-460:text-5xl font-bold text-color-purple'>Frontend Developer</h2>
        </div>
        <p className='max-w-[600px] cs-1000:max-w-[500px] cs-780:max-w-[600px] cs-659:max-w-[400px] cs-400:max-w-[290px] text-[18px] cs-950:text-[16px]'>Me gusta crear productos frontend sólidos y escalables con excelentes experiencias de usuario. <span className='font-bold'>Especializado en React.</span></p>
        <div className='flex gap-3'>
          <Button url={`${import.meta.env.BASE_URL}docs/cv-yovany-morales.pdf`}>Descargar CV</Button>
          <Button url={'https://github.com/yovany-dev'}>GitHub</Button>
        </div>
      </div>
      <div className='flex items-center shrink-0 cs-780:hidden'>
        <div className="w-full h-[400px] cs-1185:h-[300px] animate-[bounce_3s_infinite]">
         <IMG name={'astronaut'} />
        </div>
      </div>
    </section>
  )
}

export { Profile };
