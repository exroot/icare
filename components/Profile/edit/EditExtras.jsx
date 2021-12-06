import { ContainerOuter, ContainerInner } from "../../FormsProfile/Containers";
import Content from "../../../pages/profile/settings/ExtrasContent";
import FormHeader from "../../FormsProfile/FormHeader";
import "twin.macro";

const EditExtras = (props) => {
  const user = props.user;
  // console.log("EditExtras", user);
  return (
    <ContainerOuter>
      <ContainerInner>
        <Content user={user} />
      </ContainerInner>
    </ContainerOuter>
  );
};

export default EditExtras;
