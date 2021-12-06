/* eslint-disable react/prop-types */
import React from 'react'
import { Form, Field, Formik } from 'formik'
import { useToasts } from 'react-toast-notifications'
import { RiCloseFill } from 'react-icons/ri'
import tw, { css } from 'twin.macro'
import ShoutmoSchema from '../validations/shoutout.schema'
import { ButtonCTA as SubmitButton } from './Buttons/ButtonCTA'
import useUser from '../lib/useUser'
import axios from '../lib/client'
import resizeImage from '../utils/resizeImage'

const FormField = ({
  name,
  errors,
  touched,
  placeholder = '',
  rows = 1,
  as = 'input',
  type = 'text',
}) => {
  const fieldName = name.toLowerCase()
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
  )
}

const ShoutoutForm = ({ mutateShoutouts, setShow }) => {
  const { user } = useUser()
  const { addToast } = useToasts()
  const handleSubmit = async (values, actions) => {
    try {
      // const newShoutout = {
      //   ...values,
      //   creator: user,
      //   bumped_by_me: false,
      //   bump_coount: 0,
      // }

      const { data: shoutoutResult } = await axios({
        url: '/shoutouts/',
        body: values,
        method: 'POST',
      })
      // console.log(shoutoutResult.data)
      // await mutateShoutouts(
      //   (data) => [{ ...shoutoutResult.data }, ...data],
      //   false
      // )
      addToast('Shoutout created successfully.', {
        appearance: 'success',
        autoDismiss: true,
      })
      actions.setSubmitting(false)
    } catch (err) {
      console.error(err)
    } finally {
      actions.resetForm()
    }
  }
  return (
    <div tw="relative w-full mb-4 mx-auto">
      {/* content */}
      <Formik
        initialValues={{
          text: '',
        }}
        validationSchema={ShoutmoSchema}
        validateOnBlur={false}
        onSubmit={async (values, actions) => {
          await handleSubmit(values, actions)
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form tw="rounded-lg shadow-lg relative flex flex-col w-full bg-primary-900 text-button outline-none focus:outline-none border border-accent">
            {/* header */}
            <div tw="text-text-darker py-2" />

            {/* body */}
            <div tw="pt-4 pb-4 pl-20 pr-10 relative">
              <img
                tw="absolute h-10 w-10 top-0 left-0 mt-4 ml-4 rounded-full"
                src={
                  user.profile_picture
                    ? resizeImage(user.profile_picture, [40, 40])
                    : '/img/avatar_placeholder.png'
                }
                alt={`${user && user.username} avatar`}
              />
              <button
                type="button"
                tw="text-white text-xl absolute top-0 right-2 -mt-2 px-2 py-2 rounded-full hover:cursor-pointer hover:bg-primary-800"
                onClick={() => setShow(false)}
              >
                <RiCloseFill color="var(--text-button)" />
              </button>

              <FormField
                as="textarea"
                name="text"
                errors={errors}
                touched={touched}
                placeholder="What's up?"
                rows={5}
              />
            </div>
            {/* footer */}
            <div tw="p-4 pl-20 flex justify-between">
              <div tw="flex items-center text-3xl">{/* left side */}</div>
              <div tw="max-w-sm">
                <SubmitButton type="submit" isSubmitting={isSubmitting} fluid>
                  Shout
                </SubmitButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ShoutoutForm
