import { APPCONFIG } from "../appConfig";

export const fetchHomeContent = async () => {
  try {
    const response = await fetch(
      `${APPCONFIG.API.BASEURL}${APPCONFIG.API.HOME_CONTENT}`
    );
    const resJson = await response.json();
    return resJson;
  } catch (error) {
    console.error("API ERROR:", error);
  }
};
