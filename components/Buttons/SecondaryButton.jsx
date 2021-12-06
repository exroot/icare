import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import tw, { css } from "twin.macro";

const SecondaryButton = ({
  type = "button",
  href = null,
  isSubmitting = null,
  children,
  ...props
}) => {
  const secondaryButtonStyle = css`
    ${tw`flex items-center border border-primary-light text-primary-light cursor-pointer py-2 px-2  sm:px-5 sm:py-3 rounded-l-full rounded-r-full focus:outline-none hover:font-bold transition duration-200 ease-in
`}
    ${isSubmitting && tw`cursor-default`}
  `;

  if (type === "link") {
    return (
      <AnimatePresence exitBeforeEnter>
        <Link href={href} {...props} passHref>
          <a css={secondaryButtonStyle}>{children}</a>
        </Link>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button type={type} css={secondaryButtonStyle} {...props}>
        {isSubmitting ? "Loading..." : children}
      </motion.button>
    </AnimatePresence>
  );
};
export default SecondaryButton;
