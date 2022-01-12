import * as Yup from "yup";

const PasswordChangeSchema = Yup.object().shape({
  new_password: Yup.string()
    .min(8, "Contraseña inválida.")
    .required("Por favor, ingrese su contraseña."),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("new_password"), null], "Las contraseñas deben coincidir.")
    .required("Por favor, confirma tu contraseña."),
  old_password: Yup.string()
    .min(6, "Contraseña inválida.")
    .required("Por favor, ingrese su contraseña."),
});

export default PasswordChangeSchema;
