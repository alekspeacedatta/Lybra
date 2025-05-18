import Text from "../atoms/Text"
import Button from "../atoms/Button"
const Footer = () => {
  const footerLinks = [
    {href: "#freevideos", label: "free videos" },
    {href: "#toolsappplugin", label: "Tools, apps and plugins" },
    {href: "#blog", label: "Blog" },
    {href: "#photo license", label: "photo license" },
    {href: "#faq", label: "FAQ" },
    {href: "#api", label: "API" }
  ]
  return (
    <footer>
      <div className="footer-content section-content">
        <div className="contact">
          <section className="contact-header">
            <Text tag="h4" text="contacts" />
            <Text
              tag="p"
              text="50 Raritan Center Pkwy, Edison, NJ 08837, USA"
            />
          </section>
          <section className="number-section">
            <Text tag="p" text="8080000000" />
            <Text tag="p" text="8080000000" />
          </section>
          <section className="btn-section">
            <Button buttonText="Contact Us" buttonClass="btn" />
            <Button buttonText="Visit Us" buttonClass="btn2" />
          </section>
        </div>
        <div className="lists-container">
          <ul>
            <Text tag="h4" text="popular" />
            {footerLinks.map((link) => (
              <li>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <ul>
            <Text tag="h4" text="Services" />
            {footerLinks.map((link) => (
              <li>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer