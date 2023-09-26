import React, { ReactNode } from "react";
import AppFooter from "./footer";
import AppHeader from "./header";

type AppPageLayoutProps = {
  children?: ReactNode;
  pageName?: string;
};
const AppPageLayout: React.FC<AppPageLayoutProps> = (props) => {
  const { children, pageName } = props;
  return (
    <>
      <AppHeader />
      <div id="main" className={!!pageName ? `page-${pageName}` : ''}>
      {children}
      </div>
      <AppFooter />
    </>
  );
};
export default AppPageLayout;
