import { Formik, Form } from "formik";
import { ContainerOuter, ContainerInner } from "../../FormsProfile/Containers";
import FormHeader from "../../FormsProfile/FormHeader";
import FormGroup from "../../FormsProfile/FormGroup";
import FormLabel from "../../FormsProfile/FormLabel";
import FormField from "../../FormsProfile/FormField";
import PasswordChangeSchema from "../../../validations/passwordChange.schema";
import PrimaryButton from "../../Buttons/PrimaryButton";
import "twin.macro";

const EditPassword = () => {
  const handleSubmit = async (values, { setFieldError }) => {};
  return (
    <ContainerOuter>
      <FormHeader>Change password</FormHeader>
      <ContainerInner>
        {/* FORM START */}
        <Formik
          initialValues={{
            password: "",
            password_confirm: "",
            current_password: "",
          }}
          validationSchema={PasswordChangeSchema}
          validateOnBlur={false}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form tw="w-full rounded-lg pt-6 pb-1">
              <FormGroup>
                <FormLabel htmlFor="password">New password</FormLabel>
                <FormField
                  type="password"
                  name="password"
                  errors={errors}
                  touched={touched}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="password_confirm">
                  Confirm new password
                </FormLabel>
                <FormField
                  type="password"
                  name="password_confirm"
                  errors={errors}
                  touched={touched}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="current_password">
                  Current password (needed to confirm your password change)
                </FormLabel>
                <FormField
                  type="password"
                  name="current_password"
                  errors={errors}
                  touched={touched}
                />
              </FormGroup>
              <FormGroup lastSibling={true}>
                <PrimaryButton type="submit" isSubmitting={isSubmitting}>
                  Change password
                </PrimaryButton>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </ContainerInner>
    </ContainerOuter>
  );
};

export default EditPassword;
