import tw, { css } from "twin.macro";
import PropTypes from "prop-types";
import Link from "next/link";

const GlowButton = ({ children, href, hero }) => {
  const glowStyle = css`
    ${tw`
        inline-block
        relative
        py-3 px-5
        uppercase
        no-underline
        border-2
        border-red-500
        rounded-l-full
        rounded-r-full
        font-bold
        text-white
        tracking-wide
        bg-gradient-to-br from-glow-primary to-glow-secondary
        transition duration-300 ease-in-out
        hover:cursor-pointer
    `}
    ${hero ? "box-shadow: 0 .3rem 1rem rgba(236, 0, 142, 0.5);" : tw`shadow`}
    &:hover {
      ${hero
        ? "box-shadow: 0 .8rem 3rem rgba(236, 0, 142, 0.5);"
        : tw`shadow-lg`}
      transform: translateY(-.3rem);
      &::after {
        transform: scaleX(2) scaleY(1.6);
        opacity: 0;
      }
    }
    &::after {
      content: "";
      z-index: -1;
      ${tw`
            h-full
            w-full
            top-0
            left-0
            inline-block
            rounded-l-full
            rounded-r-full
            font-bold
            text-white
            absolute
            bg-gradient-to-b from-glow-primary to-glow-secondary
            transition duration-300 ease-in-out
        `}
    }
  `;
  return (
    <Link href={href}>
      <a css={glowStyle} href={href}>
        {children}
      </a>
    </Link>
  );
};

GlowButton.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  hero: PropTypes.bool,
};

export default GlowButton;
