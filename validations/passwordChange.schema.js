import * as Yup from "yup";

const PasswordChangeSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Contraseña muy corta.")
    .required("Por favor, ingrese tu contraseña."),
  password_confirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir.")
    .required("Por favor, confirma tu contraseña."),
  current_password: Yup.string()
    .min(6, "Contraseña muy corta.")
    .required("Por favor, ingre tu contraseña."),
});

export default PasswordChangeSchema;
