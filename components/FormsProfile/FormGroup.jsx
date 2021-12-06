import tw, { css } from "twin.macro";

const FormGroup = ({ children, lastSibling }) => {
  const formGroupStyles = css`
    ${tw`w-full`}
    ${lastSibling ? "" : tw`mb-6`}
  `;
  return <div css={formGroupStyles}>{children}</div>;
};

export default FormGroup;
