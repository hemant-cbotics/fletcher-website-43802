import { Link } from "react-scroll";

const AppNavBar = () => {
  const sections = ["Home", "Services", "About", "FAQ"];
  return (
    <nav id="topnav">
      {sections.map((section, i) => (
        <Link
          to={`home-section__${section.toLowerCase()}`}
          activeClass="active"
          spy={true}
          key={i}
        >
          {section}
        </Link>
      ))}
    </nav>
  );
};
export default AppNavBar;
