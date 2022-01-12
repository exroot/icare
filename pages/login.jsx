/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Formik, Form, ErrorMessage } from "formik";
import useUser from "../lib/useUser";
import axios from "../lib/client";
import FormField from "../components/FormsAuth/FormField";
import FormGroup from "../components/FormsAuth/FormGroup";
import FormLabel from "../components/FormsAuth/FormLabel";
import LoginSubactions from "../components/FormsAuth/LoginSubactions";
import Separator from "../components/FormsAuth/Separator";
import ValidationErrorMessage from "../components/FormsAuth/ErrorMessage";
import { ContainerInner } from "../components/FormsAuth/Containers";
import LoginSchema from "../validations/login.schema";
import SEO from "../components/SEO";
import CookieConsent from "../components/CookieConsent";
import SiteLogo from "../components/SiteLogo";
import SocialAuth from "../components/FormsAuth/SocialAuth";
import { ButtonCTA as SubmitButton } from "../components/Buttons/ButtonCTA";
import "twin.macro";

const Login = () => {
  const router = useRouter();
  const [passwordVis] = useState(false);
  const { mutateUser } = useUser({
    redirectTo: router.query.next || "/feed",
    redirectIfFound: true,
    oneCall: true,
  });

  const handleSubmit = async (values, { setFieldError }) => {
    try {
      const { data: response } = await axios({
        url: "/auth/login/",
        method: "POST",
        body: values,
        headers: {},
      });
      /* TODO: REMOVE LOCALSTORAGE USAGE BEFORE OFFICIAL RELEASE */
      localStorage.setItem("access", response.data.tokens.access);
      localStorage.setItem("refresh", response.data.tokens.refresh);
      console.log("response: ", response);

      await mutateUser(
        {
          username: response.data.username,
          email: response.data.email,
          is_logged_in: true,
        },
        true
      );
    } catch (err) {
      if (err.response.data.message) {
        setFieldError("email", err.response.data.message);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <>
      <SEO
        title="Sign in"
        description="Log in with Facebook, Twitter, Google, or email and start sharing your connections now."
        openGraph={{
          url: process.env.NEXT_PUBLIC_CLIENT_URL,
          type: "website",
          description:
            "Log in with Facebook, Twitter, Google, or email and start sharing your connections now.",
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
            <Title>Iniciar sesión</Title>
            <SubTitle tw="block lg:hidden text-primary-200 text-center my-2">
              ¿No tienes una cuenta?{" "}
              <Link href="/signup" passHref>
                <a tw="text-accent font-bold hover:underline cursor-pointer">
                  Regístrate
                </a>
              </Link>
            </SubTitle>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
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
                  {/* <Separator>or log in with email</Separator> */}
                  {/* Form content wrapper */}
                  <ContainerInner>
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
                          <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                        )}
                      />
                    </FormGroup>

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
                          <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                        )}
                      />
                    </FormGroup>

                    <LoginSubactions />
                    {/* Submit button */}
                    <FormGroup lastSibling>
                      <div tw="flex justify-center">
                        <SubmitButton
                          isSubmitting={isSubmitting}
                          type={!isSubmitting ? "submit" : "button"}
                        >
                          Ingresar
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
      {/* <CookieConsent /> */}
    </>
  );
};

const AsideContainer = () => (
  <div tw="hidden lg:block bg-gradient-to-b from-pink-700 via-pink-600 to-accent w-1/3 h-full">
    <div tw="h-full mx-auto w-4/5 flex flex-wrap justify-center text-primary-200 text-center content-center space-y-6">
      <h2 tw="text-3xl font-bold">Hello, Friend</h2>
      <span tw="text-lg font-extralight ">
        Begin the journey with us and start{" "}
        <span tw="font-bold">shouting out</span> loud!{" "}
      </span>
      <br />
      <div tw="w-full flex justify-center">
        <Link href="/signup" passHref>
          <a tw="block text-lg h-12 w-full sm:w-56 px-4 py-2 hover:bg-primary-200 hover:text-accent duration-75 ease-in-out font-bold uppercase tracking-wide rounded-full text-primary-200 bg-transparent border border-white cursor-pointer">
            Sign up
          </a>
        </Link>
      </div>
    </div>
  </div>
);
const Title = ({ children }) => (
  <h1 tw="font-bold text-primary-200 text-3xl text-center">{children}</h1>
);
const SubTitle = ({ children }) => (
  <div tw="block text-primary-200 text-center my-2">{children}</div>
);

export default Login;
