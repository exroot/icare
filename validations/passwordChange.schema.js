import * as Yup from "yup";

const PasswordChangeSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Password too short.")
        .required("Please enter your password."),
    password_confirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match.")
        .required("Please confirm your password."),
    current_password: Yup.string()
        .min(6, "Password too short.")
        .required("Please enter your password."),
});

export default PasswordChangeSchema;
