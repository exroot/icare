import tw, { css } from "twin.macro";
import PropTypes from "prop-types";

const LogoHero = ({ size }) => {
  const logoStyles = css`
    ${tw`
        text-primary-100
        font-medium
        tracking-wide
    `}
    font-family: "Pacifico";
  

    ${size ? `font-size: ${size};` : tw`text-6xl md:text-12xl lg:text-16xl`};
    position: relative;
}
`;
  return (
    <>
      <h1 css={logoStyles}>iCare</h1>
    </>
  );
};

LogoHero.propTypes = {
  size: PropTypes.string,
};

export default LogoHero;
