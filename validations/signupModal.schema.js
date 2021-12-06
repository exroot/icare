import * as Yup from 'yup'

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a correct email address.')
    .required('Please enter an email.'),
  username: Yup.string()
    .min(4, 'Username needs 4 characters at least.')
    .required('Please enter an username.'),
  password: Yup.string()
    .min(6, 'Password too short.')
    .required('Please enter your password.'),
})

export default SignUpSchema
