import './App.css'
import Header from './components/organisms/Header'
import HeroSection from './components/organisms/HeroSection'
import LuxurySection from './components/organisms/LuxurySection'
function App() {
  const headerLinks = [
    {href: "#demos", label: "demos" },
    {href: "#pages", label: "pages" },
    {href: "#elements", label: "elements" },
    {href: "#blog", label: "blog" },
    {href: "#contac", label: "contact" }
  ]
  return (
    <>
      <Header headerLinks={headerLinks}/>
      <HeroSection/>
      <LuxurySection/>
    </>
  )
}

export default App
