import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Ingresa una dirección de email válida.")
    .required("Ingresa tu dirección de email."),
  password: Yup.string()
    .min(6, "Ingresa una contraseña válida (mínimo 6 caracteres).")
    .required("Ingresa tu contraseña."),
});

export default LoginSchema;
