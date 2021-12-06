import * as Yup from 'yup'

const PasswordReset = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a correct email address.')
    .required('Please enter your email.'),
})

export default PasswordReset
