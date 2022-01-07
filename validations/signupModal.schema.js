import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingresa una dirección de email válida.")
    .required("Ingresa tu dirección de email."),
  password: Yup.string()
    .min(6, "Ingresa una contraseña válida (mínimo 6 caracteres).")
    .required("Ingresa tu contraseña."),
  username: Yup.string()
    .min(4, "Ingresa un username válido (mínimo 4 caracteres).")
    .required("Ingresa un username."),
});

export default SignUpSchema;
