import { ROUTE_NAMES } from "./utils/navigation/routeNames";

export const PAGES = {
  TERMS: {
    title: "Terms and conditions",
    route: ROUTE_NAMES.termsPage,
  },
  PRIVACY: {
    title: "Privacy policy",
    route: ROUTE_NAMES.privacyPage,
  },
  CONTACT: {
    title: "Contact us",
    route: ROUTE_NAMES.contactPage,
  },
};

export const APPCONFIG = {
  COLORS: {
    colorAccent: "#FABD00",

    colorDarkBg: "#111827",
    colorDarkerBg: "#1B1E22",

    colorBg: "#F2F6FA",
    colorEEE: "#EEE",
    colorWhite: "#FFF",

    colorRed: "#B91C1C",

    colorText: "#111827",
    colorTextDarkGrey: "#2E363E",
    colorTextGrey: "#9CA3AF",
  },

  NAVS: {
    TOPNAV: ["Home", "Services", "About", "FAQ"],
    BOTTOMNAV: [...[PAGES.TERMS], ...[PAGES.PRIVACY], ...[PAGES.CONTACT]],
  },

  API: {
    BASEURL: "",
    // window.location.href.indexOf("staging") > -1 ||
    // window.location.href.indexOf("localhost") > -1
    //   ? "https://fletcher-40835-staging.botics.co"
    //   : "https://cold-morning-40835.botics.co",
    HOME_CONTENT: "/api/v1/website/home-page-content/",
    TERMS: "/api/v1/content/terms-and-conditions/",
    PRIVACY: "/api/v1/content/privacy-policy/",
  },
};
