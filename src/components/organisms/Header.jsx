import Text from "../atoms/Text"
import Link from "../atoms/Link"
const Header = ({headerLinks}) => {
  return (
    <header>
        <div className="header-content section-content">
            <Text text="Lybra" tag="h2"/>
            <nav>
              <ul>
                {headerLinks.map((link, index) => (
                    <Link key={index} link={link}/>
                ))}
              </ul>
            </nav>
        </div>
    </header>
  )
}
export default Header