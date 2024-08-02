
import Icons from "./components/Icons";
export default function Footer() {
  return (
    <footer className="text-gray-50 text-sm py-4 bg-zinc-800 flex 
      justify-between items-center align-end">
        <Icons/>
        <p className='flex justify-end pr-10'>
          Copyright © 2024 Thanh Trinh
        </p>
      </footer>
  )
}
