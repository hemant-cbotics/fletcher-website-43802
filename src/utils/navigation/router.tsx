import { createBrowserRouter, RouteObject } from "react-router-dom"
import { ROUTE_NAMES } from "./routeNames"

import ScreenHome from "../../pages/home/home"
import ScreenFourOFour from "../../pages/fourOFour"
import ScreenTerms from "../../pages/terms/terms"

const routes: RouteObject[] = [
  {
    path: ROUTE_NAMES.homePage,
    index: true,
    element: <ScreenHome />
  },
  {
    path: ROUTE_NAMES.termsPage,
    index: true,
    element: <ScreenTerms />
  },
  // {
  //   path: ROUTE_NAMES.privacyPage,
  //   index: true,
  //   element: <ScreenHome />
  // },
  // {
  //   path: ROUTE_NAMES.contactPage,
  //   index: true,
  //   element: <ScreenHome />
  // },
  {
    path: "*",
    element: <ScreenFourOFour />
  }
]

const router = createBrowserRouter(routes)

export default router
