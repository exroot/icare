import * as Yup from "yup";

const PasswordReset = Yup.object().shape({
  email: Yup.string()
    .email("Por favor, ingrese un email válido.")
    .required("Por favor, ingrese su email."),
});

export default PasswordReset;
