import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Icons() {
  return (
    <ul className='flex space-x-4'>
          <li className='pl-16 text-4xl'>
            <a href='https://www.linkedin.com/in/thanhduytrinh/'>
              <FaLinkedin/>
            </a>
          </li>
          <li className='text-4xl'>
            <a href='https://github.com/thanhtrinh-code'>
              <FaGithub/>
            </a>
          </li>
          <li className='text-4xl'>
            <a href='mailto:thanht24@uw.edu'>
              <FaEnvelope/>
            </a>
          </li>
    </ul>
  )
}
