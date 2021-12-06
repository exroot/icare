import { ContainerOuter, ContainerInner } from "../../FormsProfile/Containers";
import Content from "../../../pages/profile/settings/PreferencesContent";
import FormHeader from "../../FormsProfile/FormHeader";
import "twin.macro";

const EditPreferences = () => {
  const handleSubmit = async (values, { setFieldError }) => {
    try {
      const { data } = await axios.post("/auth/login", values, {
        withCredentials: true,
        timeout: 6000,
      });
      localStorage.setItem("access", data["accessToken"]);
      await mutateUser({ isLoggedIn: true }, false);
      await trigger("/auth/me");
    } catch (err) {
      if (err.response.data.errors.username) {
        setFieldError("username", err.response.data.errors.username);
      }
    }
  };
  return (
    <ContainerOuter>
      <FormHeader>Preferences</FormHeader>
      <ContainerInner>
        <Content />
      </ContainerInner>
    </ContainerOuter>
  );
};

export default EditPreferences;
