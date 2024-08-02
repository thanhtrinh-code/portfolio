import Intro from './Pages/Intro'
import AboutMe from './Pages/AboutMe'
import ContactMe from './Pages/ContactMe'
import Projects from './Pages/Projects'
import PageDivider from './components/PageDivider'

export default function PageLayout() {
  return (
    <>
    <Intro/>
    <AboutMe/>
    <PageDivider/>
    <Projects/>
    <PageDivider/>
    <ContactMe/>
    </>
  )
}
