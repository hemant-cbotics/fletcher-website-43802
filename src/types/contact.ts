export type TContactFormFieldData = {
  touched: boolean;
  value: string;
};

export type TContactFormData = {
  name: TContactFormFieldData;
  email: TContactFormFieldData;
  subject: TContactFormFieldData;
  message: TContactFormFieldData;
};

export type TContactFormFieldName = "name" | "email" | "subject" | "message";

export type TContactFormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type TContactFormResponse = {
  success: boolean;
  message: string;
}