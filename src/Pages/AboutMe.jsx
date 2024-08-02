import React from 'react'
import SkillList from '../components/SkillList'

export default function AboutMe() {
  return (
    <section id="AboutMe" className='w-full h-lvh bg-zinc-500'>
      <div className='pt-16'>
        <h3 className='text-center bg-clip-text text-white
        text-transparent bg-gradient-to-r from-orange-500 to-yellow-500 text-2xl'>
          #About Me
          </h3>
        <p className='text-center text-3xl mt-3 font-serif text-red-100'>
          I am a computer science student at University of Washington
          with <br/>
          an interest in machine learning and
          artificial intelligence.
        </p>
        <p className='text-center mt-5 max-w-4xl mx-auto text-lg text-purple-200'>
          I enjoy learning new technologies and solving problems.
          Although I have never worked in a professional setting, I am always eager to learn and grow.
          I do enjoy working on various projects and contributing to open-source projects. I am currently working 
          on mobile and web-application using ReactJs and NextJs. 
          These are the tools and skills I am proficient in:
        </p>
      </div>
      <div className="flex justify-center items-center mt-14 mb-16">
        <ul className="flex gap-x-16">
          <SkillList src='/java.png' proficiency='70%'/>
          <SkillList src='/Node.js.svg' proficiency='60%'/>
          <SkillList src='/reactjs.png' proficiency='70%'/>
          <SkillList src='/python.png' proficiency='40%'/>
          <SkillList src='/LogoC++.png' proficiency='30%'/>
        </ul>
      </div>
      <div className='flex justify-center'>
        <a href="./thanh_trinh_2027.pdf" target="_blank" rel="noopener noreferrer">
        <button type="button" className=" text-lg
        text-white bg-[#24292F] hover:bg-[#6e6756]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
          My Resume
        </button>
        </a>
      </div>
    </section>
  )
}
