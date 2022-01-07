/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form, ErrorMessage } from "formik";
import { RiHome2Line, RiQuestionLine } from "react-icons/ri";
import FormField from "../components/FormsAuth/FormField";
import FormGroup from "../components/FormsAuth/FormGroup";
import FormLabel from "../components/FormsAuth/FormLabel";
import PasswordResetSchema from "../validations/passwordReset.schema";
import ValidationErrorMessage from "../components/FormsAuth/ErrorMessage";
import { ButtonCTA as SubmitButton } from "../components/Buttons/ButtonCTA";
import "twin.macro";

const PasswordReset = () => {
  const router = useRouter();
  const handleSubmit = async (values) => {
    setTimeout(() => {
      alert(`${values.email}`);
    }, 4000);
  };
  return (
    <main tw="bg-primary-900 h-screen w-full flex items-center">
      <div tw="mx-auto p-4 max-w-2xl">
        <header tw="text-center px-3 mb-4">
          <h1 tw="text-primary-200 text-3xl font-medium">
            ¿Olvidaste tu contraseña?
          </h1>
          <p tw="text-primary-400 mt-4">
            Lo entendemos, a veces pasa. Solo ingresa tu dirección de email
            asociada a tu cuenta y enviaremos un link para resetear tu
            contraseña.
          </p>
        </header>
        <Formik
          initialValues={{ email: "" }}
          validateOnBlur={false}
          validationSchema={PasswordResetSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form tw="w-full">
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormField
                  type="email"
                  name="email"
                  touched={touched}
                  errors={errors}
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => (
                    <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                  )}
                />
              </FormGroup>
              <FormGroup lastSibling>
                <div tw="flex justify-center">
                  <SubmitButton
                    fullWidth
                    isSubmitting={isSubmitting}
                    type={!isSubmitting ? "submit" : "button"}
                  >
                    Enviar link
                  </SubmitButton>
                </div>
              </FormGroup>
            </Form>
          )}
        </Formik>
        {/* Separator */}
        <div tw="mt-8 border-t flex flex-col border-primary-700 pt-4">
          <div tw="mx-auto">
            <button
              type="button"
              tw="flex px-4 py-2 bg-primary-800 w-24 rounded text-button shadow hover:bg-primary-700"
              onClick={() => router.back()}
            >
              Regresar
            </button>
          </div>
          <div tw="flex justify-center mt-2 space-x-2">
            <Link href="/" passHref>
              <a tw="flex px-4 py-2 bg-primary-800 w-24 rounded text-button shadow hover:bg-primary-700">
                <RiHome2Line tw="mt-1 mr-1" />
                Inicio
              </a>
            </Link>
            <Link href="/help" passHref>
              <a
                href="/"
                tw="flex px-4 py-2 bg-primary-800 w-24 rounded text-button shadow hover:bg-primary-700"
              >
                <RiQuestionLine tw="mt-1 mr-1" />
                Ayuda
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PasswordReset;
