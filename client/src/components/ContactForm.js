import React from "react";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { toast, Slide } from "react-toastify";
import { BsCheck } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";



const schema = yup.object({
    firstName: yup.string()
        .required("Required"),
    lastName: yup.string()
        .required("Required"),
    email: yup.string()
        .email("Please enter a valid email address")
        .required("Required"),
    // subject: yup.string()
    //     .required("Required"),
    message: yup.string()
        .required("Required"),
});

toast.configure();

const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                // subject: "",
                message: "",
            }}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                // setSubmitting(true);

                // setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     resetForm();
                //     setSubmitting(false);
                // }, 500);

                axios({
                    method: "POST",
                    url: "/api/send",
                    data: values
                })
                    .then(response => {
                        // alert("Message sent");
                        toast.success("Form submitted.Thanks!", {
                            position: "bottom-center",
                            autoClose: 1800,
                            transition: Slide
                        });
                        setSubmitting(false);
                        resetForm();
                    })
                    .catch(error => {
                        // alert("Message failed to send")
                        // setStatus("Something went wrong. Please try again.")
                        setSubmitting(false);
                    })
            }}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (

                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="formGridFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.firstName && touched.firstName}
                                    placeholder="John"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.firstName}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.lastName && touched.lastName}
                                    placeholder="Doe"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.lastName}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.email && touched.email}
                                    placeholder="example@email.com"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        {/* <Form.Group controlId="formGridSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control
                                type="text"
                                name="subject"
                                value={values.subject}
                                onChange={handleChange}
                                isInvalid={!!errors.subject && touched.subject}
                                placeholder="Hello!" />
                            <Form.Control.Feedback type="invalid">
                                {errors.subject}
                            </Form.Control.Feedback>
                        </Form.Group> */}

                        <Form.Group controlId="formGridMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="6"
                                type="text"
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={!!errors.message && touched.message}
                                placeholder="Enter message here" />
                            <Form.Control.Feedback type="invalid">
                                {errors.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button
                            variant="secondary"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? <Spinner as="span" animation="border" variant="light" /> : "SUBMIT"}
                        </Button>
                    </Form>
                )}
        </Formik>
    )
}

export default ContactForm;