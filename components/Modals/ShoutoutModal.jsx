/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/prop-types */
import React from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { useToasts } from "react-toast-notifications";
import { motion, AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import { RiCloseFill } from "react-icons/ri";
import tw, { css } from "twin.macro";
import ShoutmoSchema from "../../validations/shoutout.schema";
import useUser from "../../lib/useUser";
import axios from "../../lib/client";
import { ButtonCTA as SubmitButton } from "../Buttons/ButtonCTA";
import resizeImage from "../../utils/resizeImage";
import ValidationErrorMessage from "../FormsProfile/FormErrorField";

const ShoutoutModal = ({ showModal, setShowModal }) => {
  const { addToast } = useToasts();
  const { user } = useUser();
  const handleSubmit = async (values, setSubmitting) => {
    try {
      const body = {
        title: values.title,
        body: values.text,
        user_id: user.id,
      };
      await axios({
        url: "/posts",
        body: body,
        method: "POST",
      });
      addToast("Post creado satisfactoriamente.", {
        appearance: "success",
        autoDismiss: true,
      });
      setSubmitting(false);
      setShowModal(false);
    } catch (err) {
      addToast("Error en el servidor, intentalo mas tarde.", {
        appearance: "error",
        autoDismiss: true,
      });
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
              <Formik
                initialValues={{
                  title: "",
                  text: "",
                }}
                validationSchema={ShoutmoSchema}
                validateOnBlur={false}
                onSubmit={(values, { setSubmitting }) =>
                  handleSubmit(values, setSubmitting)
                }
              >
                {({ errors, touched, isSubmitting }) => (
                  <Form tw="rounded-lg shadow-lg relative flex flex-col w-full bg-primary-900 text-button outline-none focus:outline-none border border-accent">
                    {/* header */}
                    <div tw="text-primary-200 py-4">
                      <button
                        type="button"
                        tw="text-white text-xl absolute top-4 right-2 -mt-2 px-2 py-2 rounded-full bg-primary-700 hover:cursor-pointer hover:bg-primary-600 z-10"
                        onClick={() => setShowModal(false)}
                      >
                        <RiCloseFill color="var(--text-primary-200)" />
                      </button>
                    </div>

                    {/* body */}
                    <div tw="pt-4 pb-4 pl-20 pr-10 relative">
                      <div tw="bg-primary-700 rounded-lg px-2 py-2 text-primary-200 mb-4">
                        <FormField
                          as="input"
                          name="title"
                          errors={errors}
                          touched={touched}
                          placeholder="Titulo del post"
                          rows={5}
                        />
                        <ErrorMessage
                          name="title"
                          render={(msg) => (
                            <ValidationErrorMessage>
                              {msg}
                            </ValidationErrorMessage>
                          )}
                        />
                      </div>
                      <img
                        tw="absolute h-10 w-10 top-0 left-0 mt-4 ml-4 rounded-full"
                        src={
                          user.profile.image_avatar
                            ? user.profile.image_avatar
                            : "/img/avatar_placeholder.png"
                        }
                        alt={`${user && user.username} avatar`}
                      />

                      <div tw="px-2 bg-primary-700 py-2 rounded-lg">
                        <FormField
                          as="textarea"
                          name="text"
                          errors={errors}
                          touched={touched}
                          placeholder="Contenido del post"
                          rows={5}
                        />
                        <ErrorMessage
                          name="text"
                          render={(msg) => (
                            <ValidationErrorMessage>
                              {msg}
                            </ValidationErrorMessage>
                          )}
                        />
                      </div>
                    </div>
                    {/* footer */}
                    <div tw="p-4 pl-20 flex justify-between">
                      <div tw="flex items-center text-3xl">
                        {/* left side */}
                      </div>
                      <div tw="max-w-sm">
                        <SubmitButton
                          type="submit"
                          isSubmitting={isSubmitting}
                          fluid
                        >
                          Postear
                        </SubmitButton>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </OutsideClickHandler>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FormField = ({
  name,
  errors,
  touched,
  placeholder = "",
  rows = 1,
  as = "input",
  type = "text",
}) => {
  const fieldName = name.toLowerCase();
  return (
    <Field
      as={as}
      name={fieldName}
      validate
      placeholder={placeholder}
      type={type}
      css={css`
        ${tw`appearance-none block w-full bg-transparent text-button font-medium focus:outline-none `}
        ${touched[`${fieldName}`] &&
        errors[`${fieldName}`] &&
        errors[`${fieldName}`].length
          ? tw`border-red-400 hover:border-red-400`
          : tw`border-gray-400`}
      `}
      rows={rows}
    />
  );
};

export default ShoutoutModal;
