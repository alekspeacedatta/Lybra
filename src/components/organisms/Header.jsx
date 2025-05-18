import { useEffect, useState } from "react";
import Text from "../atoms/Text";
import Link from "../atoms/Link";

const Header = ({ headerLinks }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      setShowHeader(true); // scrolling up
    } else {
      setShowHeader(false); // scrolling down
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={showHeader ? "show-header" : "hide-header"}>
      <div className="header-content section-content">
        <Text text="Lybra" tag="h2" />
        <nav>
          <ul>
            {headerLinks.map((link, index) => (
              <Link key={index} link={link} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
