import AppPageLayout from "../../components/layout/page";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { PAGES } from "../../appConfig";
import React, { useState } from "react";
import { TContactFormData } from "../../types/contact";
import { useAppContext } from "../../contexts/app-context";

import "./contact.scss";

const ScreenContact = () => {
  const { homeData } = useAppContext();
  const pageData = homeData?.data?.sections?.contact;

  const defaultFormData: TContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState<TContactFormData>(defaultFormData);

  type FormControlElement =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement;
  const handleFormDataChange = (
    event: React.ChangeEvent<FormControlElement>,
    fieldName: "name" | "email" | "subject" | "message"
  ) => {
    const newValue = (event?.target as HTMLInputElement)?.value;
    const newFormData: TContactFormData = { ...formData };
    newFormData[fieldName] = newValue;
    setFormData({ ...newFormData });
  };

  return (
    <>
      <AppPageLayout pageName="contact">
        <Container>
          <Row>
            <Col>
              <div className="d-flex justify-content-start">
                <h1 data-with-accent="left">{PAGES.CONTACT.title}</h1>
              </div>
              <Form className="form-contact d-flex flex-column">
                <Form.Control
                  type={"text"}
                  placeholder={`Your Name`}
                  value={formData?.name}
                  onChange={(event) => {
                    handleFormDataChange(event, "name");
                  }}
                />
                <Form.Control
                  type={"email"}
                  placeholder={`Your Email`}
                  value={formData?.email}
                  onChange={(event) => {
                    handleFormDataChange(event, "email");
                  }}
                />
                <Form.Control
                  type={"text"}
                  placeholder={`Subject`}
                  value={formData?.subject}
                  onChange={(event) => {
                    handleFormDataChange(event, "subject");
                  }}
                />
                <Form.Control
                  as={"textarea"}
                  type={"text"}
                  placeholder={`Message`}
                  value={formData?.message}
                  onChange={(event) => {
                    handleFormDataChange(event, "message");
                  }}
                />
                <Button type="submit">Send</Button>
              </Form>
            </Col>
            <Col className="d-flex flex-column">
              <aside className="contact-aside flex-grow-1">
                <div className="logo"></div>
                <h3>Contact Information</h3>
                {pageData?.emails?.map((email, i) => (<a
                  className="link-email"
                  href={`mailto:${email}`}
                  target="_blank"
                  key={i}
                >
                  {email}
                </a>))}
                <a
                  className="link-website"
                  href={pageData?.website}
                  target="_blank"
                >
                  {pageData?.website.replace('https://', '').replace(/\//g, '')}
                </a>
              </aside>
            </Col>
          </Row>
        </Container>
      </AppPageLayout>
    </>
  );
};
export default ScreenContact;
