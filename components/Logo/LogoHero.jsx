import tw, { css } from "twin.macro";
import PropTypes from "prop-types";

const LogoHero = ({ size }) => {
  const logoStyles = css`
    ${tw`
        uppercase
        text-gray-100
        font-medium
        tracking-wide
    `}
    font-family: "basiclazer";
    /* original */
    text-shadow: -0.04em 0 #ff08ff, 0.04em 0 cyan;
    /* blue glow - bright */
    text-shadow:  -0.04em 0 #ff08ff, 0.04em 0 cyan, 0 0 20px blue, 0 0 30px blue, 0 0 40px blue, 0 0 55px blue, 0 0 75px blue;
    /* blue glow - low intensity */
    text-shadow:  -0.04em 0 #ff08ff, 0.04em 0 cyan, 0 0 10px blue, 0 0 5px blue, 0 0 0px blue, 0 0 1px blue, 0 0 40px blue;

    ${size ? `font-size: ${size};` : tw`text-6xl md:text-12xl lg:text-16xl`};
    position: relative;
}
`;
  return (
    <>
      <h1 css={logoStyles}>Shoutmo</h1>
    </>
  );
};

LogoHero.propTypes = {
  size: PropTypes.string,
};

export default LogoHero;
