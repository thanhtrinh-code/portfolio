import { Link } from "react-scroll";
import Icons from "./components/Icons";
export default function NavBar() {
  return (
    <header className="fixed top-0 w-full bg-yellow-300">
    <nav className="flex justify-between pb-3 pl-60">
      <div className="font-serif text-2xl cursor-pointer">
        <ul className="flex gap-x-28 pt-3">
          <li>
            <Link to="Intro" smooth={true} duration={500} >
              Home 
            </Link>
          </li>
          <li>
            <Link to="AboutMe" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="Projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="ContactMe" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center pt-2.5 pr-32">
        <Icons/>
      </div>
      </nav>
    </header>
  )
}
