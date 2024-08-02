import React from 'react'
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import {FaLinkedin} from "react-icons/fa";


const sizeOfIcon = '90px'
export default function ContactMe() {
  return (
    <section id='ContactMe' className='w-full h-lvh bg-zinc-500' >
      <div className='flex justify-center'>
        <h3 className='pt-32 text-4xl font-serif font-extrabold text-white'>
          Contact Me
        </h3>
      </div>
      <div className='flex justify-around pt-20 items-start'>
  <div className='flex flex-col items-center w-[33.33%]'>
    <CiLocationOn size={sizeOfIcon} color='black'/>
      <h5 className='text-center mt-2 text-xl font-sans font-medium text-red-100'>Location based</h5>
        <p className='text-center pt-5 text-lg font-mono'>
        University of Washington, <br/>
        Seattle, WA, USA
      </p>
    </div>
    <div className='flex flex-col items-center w-[33.33%]'>
      <FaRegEnvelope size={sizeOfIcon} color='#b23121'/>
      <h5 className='text-center mt-2 font-sans text-xl font-medium text-red-100'>Email Me</h5>
      <p className='text-center pt-5 text-lg font-mono'>thanht24@uw.edu</p>
    </div>
    <div className='flex flex-col items-center w-[33.33%] '>
      <FaLinkedin size={sizeOfIcon} color='#0a66c2'/>
        <h5 className='text-center mt-2 font-sans font-medium text-xl  text-red-100'>Connect</h5>
      <a href='https://www.linkedin.com/in/thanhduytrinh/' className='hover:underline pt-5 font-mono text-lg'>
      Profile
      </a>
    </div>
    </div>
    </section>
  )
}
