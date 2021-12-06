import * as Yup from "yup";

const ShoutoutSchema = Yup.object().shape({
    text: Yup.string().required("This field is required."),
});

export default ShoutoutSchema;
