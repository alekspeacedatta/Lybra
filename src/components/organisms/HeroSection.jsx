import Img from "../atoms/Img"
import Button from "../atoms/Button"
import Input from "../atoms/Input"
import SectionText from "../molecules/SectionText"
import heroImage from "../../images/Group 18.png"
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content section-content">
        <SectionText 
        tag1="h3"
        tag2="h1"
        tag3="p"
        text1="MULTIPURPOSE"
        text2="Corporate XD Template"
        text3="Will It be used for your home, your office or perhaps even your home office combo?">
          <div className="input">
            <Input placeholder="+86 700" />
            <Button buttonClass="contact-button"  buttonText="contact me" />
          </div>
        </SectionText>
        <Img imgUrl={heroImage} alt="lol" />
      </div>
    </div>
  );
}
export default HeroSection