import ProgressBar from "./ProgressBar";


export default function SkillList({src, proficiency}) {
  return (
    <li>
      <img src={src} alt={src} 
      className="w-48 h-40 object-contain"/>
      <ProgressBar proficiency={proficiency}/>
    </li>
  )
}
