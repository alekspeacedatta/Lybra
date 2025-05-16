import SectionText from "../molecules/SectionText"
import Button from "../atoms/Button";
import Img from "../atoms/Img";
const YouShouldSee = () => {
  return (
    <div className="you-should-see">
      <div className="you-should-see-content section-content">
        <div className="fake-video"></div>
        <SectionText
          tag1="h3"
          tag2="h2"
          tag3="p"
          text1="YOU SHOULD TO SEE"
          text2="Carefully crafted with love to small things"
          text3="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno"
        >
        <Button buttonClass="contact-button" buttonText="contact us"/>
        </SectionText>
      </div>
    </div>
  );
}
export default YouShouldSee