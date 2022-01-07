/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import localforage from "localforage";
import { Form, Formik, ErrorMessage } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { useToasts } from "react-toast-notifications";
import { RiCloseFill } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import LoginSchema from "../../validations/login.schema";
import SignUpModalSchema from "../../validations/signupModal.schema";
import useUser from "../../lib/useUser";
import axios from "../../lib/client";
import { ButtonCTA as SubmitButton } from "../Buttons/ButtonCTA";
import ValidationErrorMessage from "../FormsAuth/ErrorMessage";
import FormGroup from "../FormsAuth/FormGroup";
import FormField from "../FormsAuth/FormField";
import FormLabel from "../FormsAuth/FormLabel";
import initializeFCM from "../../utils/initializeFCM";
import "twin.macro";

const ShoutoutModal = ({ showModal, setShowModal }) => {
  const { addToast } = useToasts();
  const { mutateUser } = useUser();
  const [tab, setTab] = useState("login");
  const handleSubmit = async (values, { setFieldError }) => {
    try {
      if (tab === "login") {
        const { data: response } = await axios({
          url: "/auth/login/",
          method: "POST",
          body: values,
          headers: {},
        });
        /* TODO: REMOVE LOCALSTORAGE USAGE BEFORE OFFICIAL RELEASE */
        localStorage.setItem("access", response.data.tokens.access);
        // localStorage.setItem('refresh', response.data.tokens.refresh)

        const fcmToken = await localforage.getItem("fcm_token");
        // if (!fcmToken) {
        //   await initializeFCM()
        // }
        await mutateUser(
          {
            username: response.data.username,
            email: response.data.email,
            is_logged_in: true,
          },
          true
        );
        addToast("Log in successfully.", {
          appearance: "success",
          autoDismiss: true,
        });
        setShowModal(false);
        return;
      }
      await axios({
        url: "/auth/register/",
        body: values,
        method: "POST",
        headers: {},
      });
      addToast("You have registered sucessfully. Now you can log in.", {
        appearance: "success",
        autoDismiss: true,
      });
      setTab("login");
    } catch (err) {
      if (tab === "login" && err.response.data.errors.detail) {
        setFieldError("email", err.response.data.errors.detail);
      }
      if (err.response.data.errors.email) {
        setFieldError("email", err.response.data.errors.email);
      }
      if (err.response.data.errors.username) {
        setFieldError("username", err.response.data.errors.username);
      } else {
        console.log(err);
      }
    }
  };

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
  const settings = {
    handleSubmit,
    setShowModal,
    setTab,
  };
  const ActiveModal =
    tab === "login" ? (
      <LoginModal {...settings} />
    ) : (
      <SignUpModal {...settings} />
    );
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
            tw="relative w-full sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-1/2 my-6 mx-auto"
            variants={modal}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* content */}
            {ActiveModal}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LoginModal = ({ handleSubmit, setShowModal, setTab }) => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    validationSchema={LoginSchema}
    validateOnBlur={false}
    onSubmit={handleSubmit}
  >
    {({ errors, touched, isSubmitting }) => (
      <Form tw="border border-accent rounded-lg shadow-lg flex flex-col w-full bg-primary-900 outline-none focus:outline-none relative md:w-5/6 my-6 mx-auto">
        {/* header */}
        <div tw="py-2 text-center font-bold text-xl" />

        {/* body */}
        <div tw="px-2 sm:px-8 py-4 relative">
          <button
            type="button"
            tw="text-white text-xl absolute top-0 right-2 -mt-2 px-2 py-2 rounded-full bg-primary-700 cursor-pointer hover:bg-primary-600"
            onClick={() => setShowModal(false)}
          >
            <RiCloseFill color="var(--color-primary-200)" />
          </button>
          <InfoMessage login />
          <Header>Iniciar sesión</Header>
          <div tw="text-primary-200 text-sm pt-2 pb-4 px-2 w-full text-center">
            ¿No tienes una cuenta?{" "}
            <button
              type="button"
              tw="text-accent-hover font-bold cursor-pointer hover:underline"
              onClick={() => setTab("signup")}
            >
              Regístrate
            </button>
          </div>
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormField
              name="email"
              placeholder="email"
              type="email"
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
          <FormGroup>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormField
              name="password"
              placeholder="password"
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
          {/* footer */}
          <div tw="w-full px-3 flex justify-center pb-4">
            <SubmitButton type="submit" isSubmitting={isSubmitting}>
              Ingresar
            </SubmitButton>
          </div>
        </div>
      </Form>
    )}
  </Formik>
);

const SignUpModal = ({ handleSubmit, setShowModal, setTab }) => (
  <Formik
    initialValues={{
      username: "",
      email: "",
      password: "",
    }}
    validationSchema={SignUpModalSchema}
    validateOnBlur={false}
    onSubmit={handleSubmit}
  >
    {({ errors, touched, isSubmitting }) => (
      <Form tw="border border-accent rounded-lg shadow-lg flex flex-col w-full bg-primary-900 outline-none focus:outline-none relative md:w-5/6 my-6 mx-auto">
        {/* header */}
        <div tw="text-primary-200 py-2 text-center font-bold text-xl" />

        {/* body */}
        <div tw="px-2 sm:px-8 py-4 relative">
          <button
            type="button"
            tw="text-white text-xl absolute top-0 right-2 -mt-2 px-2 py-2 rounded-full bg-primary-700 hover:cursor-pointer hover:bg-primary-600"
            onClick={() => setShowModal(false)}
          >
            <RiCloseFill color="var(--text-primary-200)" />
          </button>
          <InfoMessage />
          <Header>Registro</Header>
          <div tw="text-primary-200 text-sm pb-4 px-2 w-full text-center">
            ¿Ya tienes una cuenta?{" "}
            <button
              type="button"
              tw="text-accent-hover font-bold cursor-pointer hover:underline"
              onClick={() => setTab("login")}
            >
              Inicia sesión
            </button>
          </div>
          <FormGroup>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormField
              name="username"
              placeholder="username"
              type="text"
              errors={errors}
              touched={touched}
            />
            <ErrorMessage
              name="username"
              render={(msg) => (
                <ValidationErrorMessage>{msg}</ValidationErrorMessage>
              )}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormField
              name="email"
              placeholder="email"
              type="email"
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
          <FormGroup>
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <FormField
              name="password"
              placeholder="password"
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
          {/* footer */}
          <FormGroup lastSibling>
            <div tw="w-full flex justify-center pb-1">
              <SubmitButton type="submit" isSubmitting={isSubmitting}>
                Crear cuenta
              </SubmitButton>
            </div>
          </FormGroup>
        </div>
      </Form>
    )}
  </Formik>
);

const Header = ({ children }) => (
  <div tw="text-primary-200 mt-2 text-center pt-4 px-2 font-bold text-2xl">
    {children}
  </div>
);
const InfoMessage = ({ login }) => (
  <div tw="w-full px-2 mt-6">
    <div tw="bg-primary-700 rounded-lg font-bold w-full text-white text-sm border-teal-200 border px-4 py-4 sm:py-2 mt-4 flex justify-center flex-col sm:flex-row">
      <span tw="mx-auto text-white text-2xl text-center pr-4">
        <IoMdInformationCircleOutline size={40} />
      </span>
      <p>
        Después de que te {`${login ? "logees" : "registres"}`}, la persona que
        estás intentando seguir será agregada a tu pantalla de inicio.
      </p>
    </div>
  </div>
);

export default ShoutoutModal;
