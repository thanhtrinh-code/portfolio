

export default function Intro() {
  return (
    <section id="Intro" style={{backgroundImage: 'url(background/background.jpg)'}}
    className="flex grid-cols-2 items-center
    gap-[32px] pr-[85.33px] pt-[70px] pb-[100px] justify-between h-screen w-full bg-cover bg-center"
    >
      <div className="flex flex-col justify-center pl-20">
        <p className="text-[25px]"> Hey, my name is Thanh Trinh</p>
        <h1 className="text-[56px] mt-9 font-bold">
          An Aspiring Software Engineer</h1>
      </div>
      <div className="flex justify-center items-center ">
        <img className="h-auto rounded-full"
        src="/profile.jpg" alt="Profile"/>
      </div>
    </section>
  )
}
