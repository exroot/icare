/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Head from "next/head";
import { Formik, Form, ErrorMessage } from "formik";
import { useToasts } from "react-toast-notifications";
import FormGroup from "../../components/FormsProfile/FormGroup";
import FormLabel from "../../components/FormsProfile/FormLabel";
import { motion, AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import FormField from "../../components/FormsProfile/FormField";
import ValidationErrorMessage from "../../components/FormsProfile/FormErrorField";
import { ButtonCTA as SubmitButton } from "../../components/Buttons/ButtonCTA";
import PasswordChangeSchema from "../../validations/passwordChange.schema";
import PageLoader from "../../components/PageLoader";
import useUser from "../../lib/useUser";
import TabMenu from "../../components/Navigation/TabNavigator";
import Layout from "../../components/Layout";
import tw, { css } from "twin.macro";
import Description from "../../components/Description";
import Navbar from "../../components/Navbar/NavbarAlt";
import axios from "../../lib/client";
import linkz from "../../components/tablinkz";
import redirectTo from "../../utils/redirectTo";
import { trigger, cache } from "swr";

const Settings = () => {
  const { user, isLoading, mutateUser } = useUser({ redirectTo: "/login" });
  const { addToast } = useToasts();
  const handleDisable = async () => {
    try {
      const { data } = await axios({
        url: "/auth/disable-account",
        body: {
          email: user.email,
        },
        method: "POST",
      });
      addToast(data.data, {
        appearance: "success",
        autoDismiss: true,
      });
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      await mutateUser({ ...user, is_logged_in: false }, false);
      await trigger("/auth/me");
      cache.clear();
      redirectTo("/login");
    } catch (err) {
      console.log(err.response.data.message);
      addToast(err.response.data.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  const handleSubmit = async (values, { setFieldError }) => {
    try {
      const { data } = await axios({
        url: "/auth/change-password",
        body: {
          old_password: values.old_password,
          email: user.email,
          new_password: values.new_password,
        },
        method: "POST",
      });
      console.log;
      addToast(data.data, {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (err) {
      console.log(err.response.data.message);
      addToast(err.response.data.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
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
                      <FormLabel htmlFor="old_password">
                        Contraseña antigua
                      </FormLabel>
                      <FormField
                        name="old_password"
                        type="password"
                        errors={errors}
                        touched={touched}
                      />
                      <ErrorMessage
                        name="old_password"
                        render={(msg) => (
                          <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                        )}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormLabel htmlFor="new_password">
                        Nueva contraseña
                      </FormLabel>
                      <FormField
                        name="new_password"
                        type="password"
                        errors={errors}
                        touched={touched}
                      />
                      <ErrorMessage
                        name="new_password"
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
                        <SubmitButton
                          isSubmitting={isSubmitting}
                          type={!isSubmitting ? "submit" : "button"}
                        >
                          Guardar
                        </SubmitButton>
                      </div>
                    </FormGroup>
                  </Form>
                )}
              </Formik>
            </div>
            <CloseAccount handleDisable={handleDisable} />
          </div>
          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  );
};

const CloseAccount = ({ handleDisable }) => (
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
      {/* <button
        type="button"
        onClick={disableAccount}
        tw="my-4 bg-red-600 px-4 py-2 rounded-lg font-bold border border-red-700 hover:bg-red-600 duration-75 ease-in-out"
      >
        Cerrar cuenta
      </button> */}
      <ConfirmDisableButton handleDisable={handleDisable}>
        Cerrar cuenta
      </ConfirmDisableButton>
    </div>
  </div>
);

const ConfirmDisableButton = ({ children, active, handleDisable }) => {
  const [showModal, setShowModal] = useState(false);

  const style = css`
    ${tw`block text-button text-lg font-bold bg-transparent hover:bg-primary-800 px-2 py-4 rounded-lg cursor-pointer`}
    ${active && tw`text-accent font-bold w-48`}
  `;
  return (
    <>
      <button
        tw="flex ml-6 my-4 bg-red-600 px-4 py-2 rounded-lg font-bold border border-red-700 hover:bg-red-600 duration-75 ease-in-out"
        onClick={() => setShowModal(true)}
      >
        {children}
      </button>
      <ConfirmDisableModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleDisable={handleDisable}
      />
    </>
  );
};

const ConfirmDisableModal = ({ showModal, setShowModal, handleDisable }) => {
  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  const backup = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.5,
    },
    exit: {
      opacity: 0,
    },
  };
  const modal = {
    initial: {
      scale: 1.2,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          tw="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Background */}
          <div tw="fixed inset-0">
            <motion.div
              tw="absolute inset-0 bg-black"
              variants={backup}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </div>
          {/* Modal */}
          <motion.div
            tw="relative w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 my-6 mx-auto"
            variants={modal}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <OutsideClickHandler onOutsideClick={() => setShowModal(false)}>
              {/* content */}
              <div tw="w-full bg-primary-800 rounded-lg px-4 py-8">
                <h2 tw="uppercase text-xl font-bold text-center mb-4">
                  Atención
                </h2>
                <p tw="text-xl text-primary-400 text-center">
                  ¿Está seguro que desea cerrar su cuenta?
                </p>
                <div tw="flex justify-center mt-6 space-x-4">
                  <button
                    tw="px-4 py-2 bg-red-600 uppercase rounded-lg font-bold hover:bg-red-500"
                    onClick={handleDisable}
                  >
                    Sí, cerrar cuenta
                  </button>
                  <button
                    tw="px-4 py-2 bg-primary-700 uppercase rounded-lg font-bold hover:bg-primary-600"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </OutsideClickHandler>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Settings;
