import './App.css'
import Header from './components/organisms/Header'
import HeroSection from './components/organisms/HeroSection'
import LuxurySection from './components/organisms/LuxurySection'
import YouShouldSee from './components/organisms/YouShouldSee'
import UsfulInformation from './components/organisms/UsfulInformation'
import OurTeam from './components/organisms/OurTeam'
import Publications from './components/organisms/Publications'
import NewLetter from './components/organisms/NewLetter'
import Footer from './components/organisms/Footer'
function App() {
  const headerLinks = [
    {href: "#demos", label: "demos" },
    {href: "#pages", label: "pages" },
    {href: "#elements", label: "elements" },
    {href: "#blog", label: "blog" },
    {href: "#contact", label: "contact" },
    {href: "#newsletter", label: "newsletter" }
  ]
  return (
    <>
      <Header headerLinks={headerLinks}/>
      <HeroSection/>
      <LuxurySection/>
      <YouShouldSee/>
      <UsfulInformation/>
      <OurTeam/>
      <Publications/>
      <NewLetter/>
      <Footer/>
    </>
  )
}

export default App
