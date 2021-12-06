import { motion } from "framer-motion";
import Link from "next/link";
import tw, { css } from "twin.macro";

const PrimaryButton = ({
  type = "button",
  href = null,
  isSubmitting = null,
  children,
  ...props
}) => {
  const primaryButtonStyle = css`
    ${tw`appearance-none block bg-gradient-to-r border-2 from-primary-light to-secondary-light text-gray-100 text-center font-bold border-primary-light rounded-full py-2 px-3  sm:px-3 sm:py-3 leading-tight focus:outline-none`}
    ${isSubmitting && tw`cursor-default`}
  `;

  const animations = {
    whileHover: {
      scale: 1.1,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
      // backgroundColor: "var(--primary)",
    },
    whileTap: {
      scale: 0.9,
      // backgroundColor: "var(--primary)",
    },
  };

  if (type === "link") {
    return (
      <Link href={href} passHref>
        <motion.a
          css={primaryButtonStyle}
          whileHover={animations.whileHover}
          whileTap={animations.whileTap}
          style={{
            backfaceVisibility: "hidden",
            transform: "perspective(1px) translateZ(0)",
          }}
          {...props}
        >
          {children}
        </motion.a>
      </Link>
    );
  }
  return (
    <motion.button
      type={type}
      css={primaryButtonStyle}
      disabled={isSubmitting}
      whileHover={isSubmitting ? null : animations.whileHover}
      whileTap={isSubmitting ? null : animations.whileTap}
      style={{
        backfaceVisibility: "hidden",
        transform: "perspective(1px) translateZ(0)",
      }}
      {...props}
    >
      {isSubmitting ? "Loading..." : children}
    </motion.button>
  );
};
export default PrimaryButton;
