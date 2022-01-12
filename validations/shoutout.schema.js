import * as Yup from "yup";

const ShoutoutSchema = Yup.object().shape({
  title: Yup.string()
    .required("Ingrese un título.")
    .min(4, "El título debe tener al menos 4 caracteres.")
    .max(32, "El título debe tener máximo 32 caracteres."),
  text: Yup.string()
    .required("Ingrese el texto del post.")
    .max(150, "El post no puede tener más de 150 caracteres."),
});

export default ShoutoutSchema;
