import SectionText from "../molecules/SectionText"
import img1 from "../../images/postOne.png"
import img2 from "../../images/postTwo.png"
import img3 from "../../images/postThree.png"
const Publications = () => {
  const posts = [
    {img: img1, date: "10 feb 2018", position: "CEO", heading: "Collection with gift on which until accounts"},
    {img: img2, date: "10 feb 2018", position: "CEO", heading: "Collection with gift on which until accounts"},
    {img: img3, date: "10 feb 2018", position: "CEO", heading: "Collection with gift on which until accounts"},
  ]
  return (
    <div className="publication" id="contact">
      <div className="publication-content section-content">
        <SectionText
          tag1="h3"
          tag2="h2"
          tag3="p"
          text1="publications"
          text2="Latest posts"
          text3="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkno"
        />
        <div className="posts-container">
            {posts.map(post => (
                <div className="post">
                    <img src={post.img} alt="post img" />
                    <div className="post-text">
                        <div className="date">
                            <span>{post.date}</span>
                            <p>{post.position}</p>
                        </div>
                        <h3>{post.heading}</h3>
                        <a href="">Read more</a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Publications