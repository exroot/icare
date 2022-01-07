import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form, ErrorMessage } from "formik";
import { useToasts } from "react-toast-notifications";
import redirectTo from "../utils/redirectTo";
import useUser from "../lib/useUser";
import axios from "../lib/client";
import FormField from "../components/FormsAuth/FormField";
import FormGroup from "../components/FormsAuth/FormGroup";
import FormLabel from "../components/FormsAuth/FormLabel";
import Separator from "../components/FormsAuth/Separator";
import ValidationErrorMessage from "../components/FormsAuth/ErrorMessage";
import { ContainerInner } from "../components/FormsAuth/Containers";
import SEO from "../components/SEO";
import CookieConsent from "../components/CookieConsent";
import SiteLogo from "../components/SiteLogo";
import SocialAuth from "../components/FormsAuth/SocialAuth";
import "twin.macro";
import { ButtonCTA as SubmitButton } from "../components/Buttons/ButtonCTA";
import SignUpSchema from "../validations/signup.schema";

const SignUp = () => {
  const router = useRouter();
  const [passwordVis, setPasswordVis] = useState(false);
  const { addToast } = useToasts();

  const { mutateUser } = useUser({
    redirectTo: router.query.next || "/feed",
    redirectIfFound: true,
    oneCall: true,
  });

  const handleSubmit = async (values, { setFieldError }) => {
    try {
      await axios({
        url: "/auth/register/",
        body: values,
        method: "POST",
        headers: {},
      });
      addToast("You have signed up sucessfully. Now you can log in.", {
        appearance: "success",
        autoDismiss: true,
      });
      return redirectTo("/login");
    } catch (err) {
      if (err.response.data.errors.email) {
        setFieldError("email", err.response.data.errors.email);
      }
      if (err.response.data.errors.username) {
        setFieldError("username", err.response.data.errors.username);
      }
    }
  };

  return (
    <>
      <SEO
        title="Sign up"
        description="Sign up with Facebook, Twitter, Google, or email and start sharing your connections now."
        openGraph={{
          url: process.env.NEXT_PUBLIC_CLIENT_URL,
          type: "website",
          description:
            "Sign up with Facebook, Twitter, Google, or email and start sharing your connections now.",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_CLIENT_URL}img/shoutmo.png`,
              width: 1000,
              height: 300,
              alt: "Shoutmo image",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div tw="flex flex-row h-full lg:h-screen lg:overflow-hidden">
        <div tw="bg-primary-900 w-full h-full pt-40">
          <SiteLogo />
          <div tw="mx-auto w-full flex flex-col justify-center mt-4">
            <Title>Registro</Title>
            <SubTitle>
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" passHref>
                <a tw="text-accent font-bold hover:underline cursor-pointer">
                  Inicia sesión
                </a>
              </Link>
            </SubTitle>
            <Formik
              initialValues={{
                email: "",
                password: "",
                username: "",
                password_confirm: "",
              }}
              validationSchema={SignUpSchema}
              validateOnBlur={false}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form tw="w-full max-w-xl bg-primary-900 mx-auto rounded-lg px-6 pt-8 pb-1">
                  {/* Social media auth */}
                  {/* <div tw="mb-4">
                    <SocialAuth />
                  </div> */}
                  {/* Separator */}
                  {/* <Separator>or sign up with email</Separator> */}
                  {/* Form content wrapper */}
                  <ContainerInner>
                    <div tw="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                      {/* Email form group */}
                      <FormGroup>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormField
                          name="email"
                          errors={errors}
                          touched={touched}
                        />
                        <ErrorMessage
                          name="email"
                          render={(msg) => (
                            <ValidationErrorMessage>
                              {msg}
                            </ValidationErrorMessage>
                          )}
                        />
                      </FormGroup>
                      {/* Username form group */}
                      <FormGroup>
                        <FormLabel htmlFor="username">Username</FormLabel>
                        <FormField
                          name="username"
                          errors={errors}
                          touched={touched}
                        />
                        <ErrorMessage
                          name="username"
                          render={(msg) => (
                            <ValidationErrorMessage>
                              {msg}
                            </ValidationErrorMessage>
                          )}
                        />
                      </FormGroup>
                    </div>
                    <div tw="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                      {/* Password form group */}
                      <FormGroup>
                        <FormLabel htmlFor="password">Contraseña</FormLabel>
                        <FormField
                          name="password"
                          type={passwordVis ? "text" : "password"}
                          errors={errors}
                          touched={touched}
                        />
                        <ErrorMessage
                          name="password"
                          render={(msg) => (
                            <ValidationErrorMessage>
                              {msg}
                            </ValidationErrorMessage>
                          )}
                        />
                      </FormGroup>
                      {/* Password confirmation form group */}
                      <FormGroup>
                        <FormLabel htmlFor="password_confirm">
                          Confirma contraseña
                        </FormLabel>
                        <FormField
                          name="password_confirm"
                          type={passwordVis ? "text" : "password"}
                          errors={errors}
                          touched={touched}
                        />
                        <ErrorMessage
                          name="password_confirm"
                          render={(msg) => (
                            <ValidationErrorMessage>
                              {msg}
                            </ValidationErrorMessage>
                          )}
                        />
                      </FormGroup>
                    </div>
                    {/* <LoginSubactions /> */}
                    {/* Submit button */}
                    <FormGroup lastSibling>
                      <div tw="flex justify-center">
                        <SubmitButton
                          isSubmitting={isSubmitting}
                          type={!isSubmitting ? "submit" : "button"}
                        >
                          Crear cuenta
                        </SubmitButton>
                      </div>
                    </FormGroup>
                  </ContainerInner>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <CookieConsent />
    </>
  );
};

const Title = ({ children }) => (
  <h1 tw="font-bold text-primary-200  text-3xl text-center">{children}</h1>
);

const SubTitle = ({ children }) => (
  <div tw="block text-primary-200 text-center my-2">{children}</div>
);

export default SignUp;
