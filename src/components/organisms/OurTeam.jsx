import SectionText from "../molecules/SectionText"
import Text from "../atoms/Text"
import img1 from "../../images/personone.png"
import img2 from "../../images/persontwo.png"
import img3 from "../../images/personthree.png"
import img4 from "../../images/personfour.png"
import img5 from "../../images/personfive.png"
import img6 from "../../images/personsix.png"
const OurTeam = () => {
    const team = [
      { name: "leron walton", possition: "Chief Analytics Officer", img: img1 },
      { name: "leron walton", possition: "Chief Analytics Officer", img: img2 },
      { name: "leron walton", possition: "Chief Analytics Officer", img: img3 },
      { name: "leron walton", possition: "Chief Analytics Officer", img: img4 },
      { name: "leron walton", possition: "Chief Analytics Officer", img: img5 },
      { name: "leron walton", possition: "Chief Analytics Officer", img: img6 },
    ];
  return (
    <div className="our-team">
      <div className="our-team-content section-content">
        <SectionText
          tag1="h3"
          tag2="h2"
          tag3="p"
          text1="HUMAN BEINGS"
          text2="Our awesome team"
        />
        <div className="team">
            {team.map((member, index) => (
                <div className="member">
                    <img src={member.img} alt="img" />
                    <section>
                        <Text tag="h4" text={member.name}/>
                        <Text tag="p" text={member.possition}/>
                    </section>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default OurTeam