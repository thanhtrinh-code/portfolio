import ProjectHover from "../components/ProjectHover";

export default function Projects() {
  
  return (
    <section id='Projects' className='w-full h-lvh bg-zinc-500'>
      <div className='text-center pt-20'>
        <h5 className="font-serif font-extrabold text-5xl text-white">
          My Projects
        </h5>
      </div>
      <div className="grid-rows-2">
          <ProjectHover 
          src='2048.png' 
          title='2 players 2048 game'
          description='Game Application'
          />
          <ProjectHover 
          src='personal.jpg' 
          title='Personal Portfolio'
          description='Web Application'
          />
      </div>
    </section>
  )
}
