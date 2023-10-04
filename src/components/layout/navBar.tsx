import React from "react";
import { useNavigate } from "react-router-dom";
import { animateScroll, Link } from "react-scroll";

type TAppNavBarLink = {
  title: string;
  route?: string;
  onClick?: any;
};

type TAppNavBarProps = {
  className?: string;
  wrapperId: string;
  smoothLinks?: boolean;
  smoothLinksOnClick?: any;
  links?: TAppNavBarLink[] | string[];
};

const AppNavBar = ({
  className = '',
  wrapperId,
  smoothLinks = false,
  smoothLinksOnClick = () => {},
  links,
}: TAppNavBarProps) => {
  const navigate = useNavigate();

  return (
    <nav id={wrapperId} className={className}>
      {links?.map((link, i) => (
        <React.Fragment key={i}>
          {!!smoothLinks ? (
            <Link
              className="clickable"
              to={`home-section__${`${link}`.toLowerCase()}`}
              activeClass="active"
              spy={true}
              key={i}
              title={`${link}`}
              onClick={smoothLinksOnClick}
            >
              {`${link}`}
            </Link>
          ) : (
            <a
              className="clickable"
              // href="javascript: void(0)"
              title={(link as TAppNavBarLink)?.title}
              onClick={() => {
                const { route, onClick } = link as TAppNavBarLink;
                if (!!route) {
                  animateScroll.scrollToTop()
                  navigate(route);
                }
                else onClick?.();
              }}
            >
              {(link as TAppNavBarLink)?.title}
            </a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
export default AppNavBar;
