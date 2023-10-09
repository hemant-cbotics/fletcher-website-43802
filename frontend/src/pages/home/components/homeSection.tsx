import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";

type HomeSectionProps = {
  children?: ReactNode;
  name: string;
};
const HomeSection: React.FC<HomeSectionProps> = (props) => {
  const { children, name } = props;
  return (
    <div
      className={`home-section section__${name}`}
      id={`home-section__${name}`}
    >
      <span className="section-adj-space"></span>
      <Container className="flex-grow-1 d-flex flex-column">
        {children}
      </Container>
    </div>
  );
};
export default HomeSection;
