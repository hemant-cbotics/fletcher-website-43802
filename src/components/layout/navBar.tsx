import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

type TAppNavBarLink = {
  title: string;
  route?: string;
  onClick?: any;
};

type TAppNavBarProps = {
  wrapperId: string;
  smoothLinks?: boolean;
  links?: TAppNavBarLink[] | string[];
};

const AppNavBar = ({
  wrapperId,
  smoothLinks = false,
  links,
}: TAppNavBarProps) => {
  const navigate = useNavigate();

  return (
    <nav id={wrapperId}>
      {links?.map((link, i) => (
        <React.Fragment key={i}>
          {!!smoothLinks ? (
            <Link
              to={`home-section__${`${link}`.toLowerCase()}`}
              activeClass="active"
              spy={true}
              key={i}
            >
              {`${link}`}
            </Link>
          ) : (
            <a
              href="javascript: void(0)"
              title={(link as TAppNavBarLink)?.title}
              onClick={() => {
                const { route, onClick } = link as TAppNavBarLink;
                if (!!route) navigate(route);
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
