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
