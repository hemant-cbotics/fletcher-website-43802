import React, { ReactNode } from "react";
import AppFooter from "./footer";
import AppHeader from "./header";

type AppPageLayoutProps = {
  children?: ReactNode;
};
const AppPageLayout: React.FC<AppPageLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <AppHeader />
      <div id="main">
      {children}
      </div>
      <AppFooter />
    </>
  );
};
export default AppPageLayout;
