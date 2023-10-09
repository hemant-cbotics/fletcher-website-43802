import React, { ReactNode } from "react";
import AppFooter from "./footer";
import AppHeader from "./header";

type AppPageLayoutProps = {
  children?: ReactNode;
  mainContentClassName?: string;
  pageName?: string;
};
const AppPageLayout: React.FC<AppPageLayoutProps> = (props) => {
  const { children, mainContentClassName = "", pageName } = props;
  return (
    <>
      <AppHeader />
      <div
        id="main"
        className={`${mainContentClassName}${
          !!pageName ? ` page-${pageName}` : ""
        }`}
      >
        {children}
      </div>
      <AppFooter />
    </>
  );
};
export default AppPageLayout;
