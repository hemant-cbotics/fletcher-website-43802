import { APPCONFIG } from "../appConfig";
import { THomeContentResponse } from "../types/apis";

export const fetchHomeContent = async () => {
  try {
    const response = await fetch(
      `${APPCONFIG.API.BASEURL}${APPCONFIG.API.HOME_CONTENT}`
    );
    const resJson: THomeContentResponse = await response.json();
    return resJson;
  } catch (error) {
    console.error("API ERROR:", error);
  }
};
