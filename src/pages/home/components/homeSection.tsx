import React, { ReactNode } from "react";

type HomeSectionProps = {
  children?: ReactNode;
  name: string;
};
const HomeSection: React.FC<HomeSectionProps> = (props) => {
  const { children, name } = props;
  return <div className={`home-section section__${name}`}>{children}</div>;
};
export default HomeSection;
