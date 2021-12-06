import * as Yup from 'yup'

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a correct email address.')
    .required('Please enter an email.'),
  username: Yup.string()
    .required('Please enter a username.')
    .min(4, 'Username needs to be a minimum of 4 characters.'),
  password: Yup.string()
    .min(6, 'Password too short.')
    .required('Please enter your password.'),
  password_confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required('Please confirm your password.'),
})

export default SignUpSchema
