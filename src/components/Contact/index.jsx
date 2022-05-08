import { Formik, Form } from "formik";
import { object, string } from "yup";

import Card from "./Card";
import Wrapper from "../Wrapper";
import Button from "../Button";
import Input from "./Input";
import { svgImages } from "../../constants";

const { phoneIcon, emailIcon, paperPlaneIcon } = svgImages;

function Contact() {
    const initialValues = {
        senderName: "",
        senderEmail: "",
        senderMessage: "",
    };

    const validationSchema = object({
        senderName: string().required("Name is required."),
        senderEmail: string()
            .email("Invalid email address format entered.")
            .required("Email is required."),
        senderMessage: string().required("Message is required."),
    });

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };

    return (
        <Wrapper id="contact">
            <div className="section">
                <h2>
                    something <span>on your mind?</span>
                </h2>

                <div className="inner-content space-y-12 pb-12">
                    <div className="flex gap-8">
                        <Card href="phone" detail="012 345 6789" icon={phoneIcon} title="phone" />

                        <Card
                            href="email"
                            detail="mordecai@gmail.com"
                            icon={emailIcon}
                            title="email"
                        />
                    </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({ isValid, dirty, errors, touched }) => {
                            return (
                                <Form className="flex flex-col items-center gap-8">
                                    <Input
                                        errors={errors}
                                        touched={touched}
                                        inputType="text"
                                        name="senderName"
                                        title="name"
                                    />

                                    <Input
                                        errors={errors}
                                        touched={touched}
                                        inputType="email"
                                        name="senderEmail"
                                        title="email"
                                    />

                                    <Input
                                        errors={errors}
                                        touched={touched}
                                        inputType="textarea"
                                        name="senderMessage"
                                        title="message"
                                    />

                                    <Button
                                        icon={paperPlaneIcon}
                                        label="send message"
                                        primary
                                        type="submit"
                                        disabled={!dirty || (dirty && !isValid)}
                                    />
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </Wrapper>
    );
}

export default Contact;
