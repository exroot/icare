import { Field } from "formik";
import tw, { css } from "twin.macro";

const FormField = ({
  name,
  errors,
  touched,
  inputAs = "input",
  type = "text",
  ...props
}) => {
  const fieldName = name.toLowerCase();
  return (
    <Field
      as={inputAs}
      name={fieldName}
      validate
      type={type}
      css={css`
        ${tw`appearance-none block w-full bg-primary-700 text-primary-200 font-medium rounded-lg py-3 px-3 leading-tight 
        focus:outline-none hover:border-accent duration-75 ease-in-out`}
        ${touched[`${fieldName}`] &&
        errors[`${fieldName}`] &&
        errors[`${fieldName}`].length
          ? tw`border-red-400 hover:border-red-400`
          : tw`border-field`}
      `}
      {...props}
    />
  );
};

export default FormField;
