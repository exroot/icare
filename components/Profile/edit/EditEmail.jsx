import { Formik, Form } from "formik";
import { ContainerOuter, ContainerInner } from "../../FormsProfile/Containers";
import FormHeader from "../../FormsProfile/FormHeader";
import FormGroup from "../../FormsProfile/FormGroup";
import FormLabel from "../../FormsProfile/FormLabel";
import FormField from "../../FormsProfile/FormField";
import PasswordChangeSchema from "../../../validations/passwordChange.schema";
import PrimaryButton from "../../Buttons/PrimaryButton";
import "twin.macro";

const EditEmail = () => {
  const handleSubmit = async (values, { setFieldError }) => {};
  return (
    <ContainerOuter>
      <FormHeader>Change email</FormHeader>
      <ContainerInner>
        {/* FORM START */}
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={PasswordChangeSchema}
          validateOnBlur={false}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form tw="w-full rounded-lg pt-6 pb-1">
              <FormGroup>
                <FormLabel htmlFor="email">New email</FormLabel>
                <FormField
                  type="email"
                  name="email"
                  errors={errors}
                  touched={touched}
                />
              </FormGroup>
              <FormGroup lastSibling={true}>
                <PrimaryButton type="submit" isSubmitting={isSubmitting}>
                  Change email
                </PrimaryButton>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </ContainerInner>
    </ContainerOuter>
  );
};

export default EditEmail;
