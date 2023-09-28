import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";

import ScreenHome from "../../pages/home/home";
import ScreenFourOFour from "../../pages/fourOFour";
import ScreenTerms from "../../pages/terms/terms";
import ScreenPrivacy from "../../pages/privacy-policy/privacy-policy";
import ScreenContact from "../../pages/contact/contact";

const routes: RouteObject[] = [
  {
    path: ROUTE_NAMES.homePage,
    index: true,
    element: <ScreenHome />,
  },
  {
    path: ROUTE_NAMES.termsPage,
    element: <ScreenTerms />,
  },
  {
    path: ROUTE_NAMES.privacyPage,
    element: <ScreenPrivacy />,
  },
  {
    path: ROUTE_NAMES.contactPage,
    element: <ScreenContact />,
  },
  {
    path: "*",
    element: <ScreenFourOFour />,
  },
];

const router = createBrowserRouter(routes);

export default router;
