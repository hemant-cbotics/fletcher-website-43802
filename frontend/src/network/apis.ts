import { toast } from "react-toastify";
import { APPCONFIG } from "../appConfig";
import { THomeContentResponse } from "../types/apis";
import {
  TContactFormData,
  TContactFormFieldName,
  TContactFormPayload,
  TContactFormResponse,
} from "../types/contact";

type TFetchContent = {
  content: "home" | "terms" | "privacy";
};

export const fetchContent = async (params: TFetchContent) => {
  let fetchUri = ``;
  switch (params.content) {
    case "privacy":
      fetchUri = `${APPCONFIG.API.BASEURL}${APPCONFIG.API.PRIVACY}`;
      break;
    case "terms":
      fetchUri = `${APPCONFIG.API.BASEURL}${APPCONFIG.API.TERMS}`;
      break;
    case "home":
    default:
      fetchUri = `${APPCONFIG.API.BASEURL}${APPCONFIG.API.HOME_CONTENT}`;
      break;
  }
  if (!fetchUri) return;
  try {
    const response = await fetch(fetchUri);
    if (["terms", "privacy"].includes(params.content)) {
      const resHtml: any = await response.text();
      return resHtml;
    } else {
      const resJson: THomeContentResponse = await response.json();
      return resJson;
    }
  } catch (error) {
    console.error("API ERROR:", error);
    toast.error("An unexpected error has occurred.");
  }
};

export const submitContactDetails = async (params: TContactFormData) => {
  const preparedData: TContactFormPayload = {
    name: params.name.value,
    email: params.email.value,
    subject: params.subject.value,
    message: params.message.value,
  };
  const response = await fetch(
    `${APPCONFIG.API.BASEURL}${APPCONFIG.API.CONTACT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedData)
    }
  );
  const resJson: TContactFormResponse = await response.json();
  return resJson;
};
