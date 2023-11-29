function RedBack({children,bg}:{children:string|React.ReactNode,bg:"red"|'blue'|'green'|'yellow'|string}){
  return (
    <div className="group relative">
      <div className={`
      transition bg-[${bg}]   w-full h-full absolute z-0 opacity-0
      group-hover:translate-x-[150%] group-hover:-rotate-12 delay-1000 group-hover:opacity-100`}>{children}</div>
      <div >{children}</div>
      
    </div>
  )
}

const Skills = () => {
  return (
   <>
   <RedBack bg='blue'>
    <h1 className="text-white text-[50px] z-100 ">Привет Аня</h1>
   </RedBack>
   <RedBack bg='blue'>
    <>
    <p>Покопался немного в анимации, часть сам могу сделать, часть с помощью библиотек</p>
    <p>Здесь довольно примитивно получается, но поебаться можнодо ума довести </p>
    <p>В работы если зайти там сделал что когда на экране анимация начинаеться</p>
    <p>Это такой, очень базовый проект, попробовать некоторые вещи.</p>
    <p>Сдесь как ты видишь при нажатии херня в сторону выезжает, тут просто квадратики, но можно что угодно сделать.</p>
   </>
   </RedBack>
   </>
  )
}

export default Skills