import * as Yup from "yup";

const ShoutoutSchema = Yup.object().shape({
  title: Yup.string().required("Ingrese un título."),
  text: Yup.string().required("Ingrese el texto del post."),
});

export default ShoutoutSchema;
