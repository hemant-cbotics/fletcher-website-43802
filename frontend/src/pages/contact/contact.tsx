import AppPageLayout from "../../components/layout/page";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { PAGES } from "../../appConfig";
import React, { useMemo, useState } from "react";
import {
  TContactFormData,
  TContactFormFieldData,
  TContactFormFieldName,
} from "../../types/contact";
import { useAppContext } from "../../contexts/app-context";

import "./contact.scss";
import { submitContactDetails } from "../../network/apis";
import { toast } from "react-toastify";

const ScreenContact = () => {
  const { homeData } = useAppContext();
  const pageData = homeData?.data?.sections?.contact;

  const defaultFormFieldData: TContactFormFieldData = {
    touched: false,
    value: "",
  };
  const defaultFormData: TContactFormData = {
    name: defaultFormFieldData,
    email: defaultFormFieldData,
    subject: defaultFormFieldData,
    message: defaultFormFieldData,
  };
  const [formData, setFormData] = useState<TContactFormData>(defaultFormData);
  const [formIsBeingSubmitted, setFormIsBeingSubmitted] =
    useState<boolean>(false);

  type FormControlElement =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement;
  const handleFormDataChange = (
    event: React.ChangeEvent<FormControlElement>,
    fieldName: TContactFormFieldName
  ) => {
    const newValue = (event?.target as HTMLInputElement)?.value;
    const newFormData: TContactFormData = { ...formData };
    newFormData[fieldName] = { value: newValue, touched: true };
    setFormData({ ...newFormData });
  };

  const fieldIsValid = (
    fieldValue: string,
    fieldName: TContactFormFieldName
  ) => {
    const validEmailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return fieldName === "email"
      ? !!fieldValue && !!fieldValue.match(validEmailRegex)
      : !!fieldValue;
  };
  const formIsValid = useMemo(
    () =>
      fieldIsValid(formData?.name.value, "name") &&
      fieldIsValid(formData?.email.value, "email") &&
      fieldIsValid(formData?.subject.value, "subject") &&
      fieldIsValid(formData?.message.value, "message"),
    [formData]
  );

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formIsBeingSubmitted && !!formIsValid) {
      setFormIsBeingSubmitted(true);
      const response = await submitContactDetails(formData);
      setFormIsBeingSubmitted(false);
      if (response?.success === true) {
        toast.success(
          "Thank you for sharing your details! We will get back to you in the next 24 hours.",
          { autoClose: false }
        );
      } else {
        toast.error(
          "An error has occurred while attempting to submit your information",
          { autoClose: 10 * 1000 }
        );
      }
    }
  };

  return (
    <>
      <AppPageLayout pageName="contact">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="d-flex justify-content-start">
                <h1 data-with-accent="left">{PAGES.CONTACT.title}</h1>
              </div>
              <Form
                className="form-contact d-flex flex-column"
                onSubmit={handleFormSubmit}
              >
                <Form.Control
                  type={"text"}
                  placeholder={`Your Name`}
                  value={formData?.name.value}
                  onChange={(event) => {
                    handleFormDataChange(event, "name");
                  }}
                  isInvalid={
                    formData?.name.touched &&
                    !fieldIsValid(formData?.name.value, "name")
                  }
                />
                <Form.Control
                  type={"email"}
                  placeholder={`Your Email`}
                  value={formData?.email.value}
                  onChange={(event) => {
                    handleFormDataChange(event, "email");
                  }}
                  isInvalid={
                    formData?.email.touched &&
                    !fieldIsValid(formData?.email.value, "email")
                  }
                />
                <Form.Control
                  type={"text"}
                  placeholder={`Subject`}
                  value={formData?.subject.value}
                  onChange={(event) => {
                    handleFormDataChange(event, "subject");
                  }}
                  isInvalid={
                    formData?.subject.touched &&
                    !fieldIsValid(formData?.subject.value, "subject")
                  }
                />
                <Form.Control
                  as={"textarea"}
                  type={"text"}
                  placeholder={`Message`}
                  value={formData?.message.value}
                  onChange={(event) => {
                    handleFormDataChange(event, "message");
                  }}
                  isInvalid={
                    formData?.message.touched &&
                    !fieldIsValid(formData?.message.value, "message")
                  }
                />
                <Button
                  type="submit"
                  disabled={!formIsValid || formIsBeingSubmitted}
                >
                  Send
                </Button>
              </Form>
            </Col>
            <Col lg={6} className="d-flex flex-column">
              <div className="responsive-spacer d-lg-none mt-5 pt-5"></div>
              <aside className="contact-aside flex-grow-1">
                <div className="logo"></div>
                <h3>Contact Information</h3>
                {pageData?.emails?.map((email, i) => (
                  <a
                    className="link-email"
                    href={`mailto:${email}`}
                    target="_blank"
                    key={i}
                  >
                    {email}
                  </a>
                ))}
                {!!pageData?.website && (
                  <a
                    className="link-website"
                    href={pageData?.website}
                    target="_blank"
                  >
                    {pageData?.website
                      .replace("https://", "")
                      .replace(/\//g, "")}
                  </a>
                )}
              </aside>
            </Col>
          </Row>
        </Container>
      </AppPageLayout>
    </>
  );
};
export default ScreenContact;
