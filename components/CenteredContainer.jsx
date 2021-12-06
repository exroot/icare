import tw, { css } from "twin.macro";

const Container = ({ children, loginForm }) => {
  const containerStyles = css`
    ${tw`
    flex
    w-full
    pb-4
    bg-gray-200
`}
    ${loginForm
      ? tw`h-screen sm:h-auto md:h-auto lg:h-screen`
      : tw` h-full sm:h-auto md:h-auto lg:h-screen`}
  `;
  return (
    <>
      <div css={containerStyles}>
        <div tw="w-full">{children}</div>
      </div>
    </>
  );
};

export default Container;
