import { Button } from "../Button/Button";
import { IMG } from "../IMG/IMG";

const Profile = () => {
  return (
    <section className='w-3/4 h-screen mx-auto flex justify-between'>
      <div className='max-w-max flex flex-col justify-center gap-3'>
        <div>
          <h1 className='text-4xl font-bold'>Yovany Morales</h1>
          <h2 className='text-7xl font-bold text-color-purple'>Frontend Developer</h2>
        </div>
        <p className='max-w-[600px] text-[18px]'>Me gusta crear productos frontend sólidos y escalables con excelentes experiencias de usuario. <span className='font-bold'>Especializado en React.</span></p>
        <div className='flex gap-3'>
          <Button content={'CV'} url={'#cv'} />
          <Button content={'LinkedIn'} url={'#linkedin'} />
        </div>
      </div>
      <div className='flex items-center'>
        <div className="w-full h-[400px] animate-[bounce_3s_infinite]">
         <IMG src={'src/assets/imgs/astronauta.png'} alt='astronaut image' />
        </div>
      </div>
    </section>
  )
}

export { Profile };
