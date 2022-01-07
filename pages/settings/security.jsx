/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import { Formik, Form, ErrorMessage } from "formik";
import { useToasts } from "react-toast-notifications";
import FormGroup from "../../components/FormsProfile/FormGroup";
import FormLabel from "../../components/FormsProfile/FormLabel";
import FormField from "../../components/FormsProfile/FormField";
import ValidationErrorMessage from "../../components/FormsProfile/FormErrorField";
import { ButtonCTA as SubmitButton } from "../../components/Buttons/ButtonCTA";
import PasswordChangeSchema from "../../validations/passwordChange.schema";
import PageLoader from "../../components/PageLoader";
import useUser from "../../lib/useUser";
import TabMenu from "../../components/Navigation/TabNavigator";
import Layout from "../../components/Layout";
import "twin.macro";
import Description from "../../components/Description";
import Navbar from "../../components/Navbar/NavbarAlt";

import linkz from "../../components/tablinkz";

const Settings = () => {
  const { user, isLoading } = useUser({ redirectTo: "/login" });
  const handleSubmit = async () => {
    console.log(a);
  };

  if (isLoading || user.is_logged_in === false) {
    return (
      <>
        <Head>
          <title>iCare</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageLoader />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>iCare - Configuración - Seguridad</title>
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Configuración</h1>
          <Navbar />
        </div>
        <TabMenu links={linkz} />
        <div tw="md:flex md:justify-between">
          <div tw="">
            <Description>
              Ten cuidado al alterar estas configuraciones. Presta atención a lo
              que estás haciendo y recuerda que siempre puedes{" "}
              <span tw="text-primary-200 underline cursor-pointer">
                contactarnos.
              </span>
            </Description>
            <div tw="mt-4">
              <Formik
                initialValues={{}}
                validationSchema={PasswordChangeSchema}
                validateOnBlur={false}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form tw="w-full rounded-lg">
                    <FormGroup>
                      <FormLabel htmlFor="password_old">
                        Contraseña antigua
                      </FormLabel>
                      <FormField
                        name="password_old"
                        type="password"
                        errors={errors}
                        touched={touched}
                      />
                      <ErrorMessage
                        name="password_old"
                        render={(msg) => (
                          <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                        )}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel htmlFor="password">Nueva contraseña</FormLabel>
                      <FormField
                        name="password"
                        type="password"
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
                    <FormGroup>
                      <FormLabel htmlFor="password_confirm">
                        Confirma nueva contraseña
                      </FormLabel>
                      <FormField
                        name="password_confirm"
                        type="password"
                        errors={errors}
                        touched={touched}
                      />
                      <ErrorMessage
                        name="password_confirm"
                        render={(msg) => (
                          <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                        )}
                      />
                    </FormGroup>
                    <FormGroup lastSibling>
                      <div tw="flex">
                        <SubmitButton type="submit" isSubmitting={isSubmitting}>
                          Guardar
                        </SubmitButton>
                      </div>
                    </FormGroup>
                  </Form>
                )}
              </Formik>
            </div>
            <CloseAccount />
          </div>
          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  );
};

const CloseAccount = () => (
  <div tw="mt-8">
    <div tw="border border-red-600 shadow-2xl rounded-lg w-full p-4 pt-6 text-primary-200 ">
      <div tw="flex flex-row space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          tw="h-6 w-6 self-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <h3 tw="text-2xl font-bold">ZONA DE PELIGRO</h3>
      </div>

      <p tw="pt-2 font-mono text-xs">
        Si haces click aqui tu cuenta se eliminara permanentemente y la
        información que está asociada a ella.
      </p>
      <button
        type="button"
        tw="my-4 bg-red-600 px-4 py-2 rounded-lg font-bold border border-red-700 hover:bg-red-600 duration-75 ease-in-out"
      >
        Cerrar cuenta
      </button>
    </div>
  </div>
);
export default Settings;
