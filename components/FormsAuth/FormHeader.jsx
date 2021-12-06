import { motion, AnimatePresence } from "framer-motion";
import "twin.macro";

const headerAnimation = {
  initial: {
    x: "-16rem",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "-16rem",
    opacity: 0,
  },
};

const FormHeader = ({ title, subTitle }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div tw="text-center mt-16">
        <div tw="flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            tw="w-12 h-12 text-indigo-600"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <motion.h2
          variants={headerAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          tw="text-4xl tracking-tight"
        >
          {title}
        </motion.h2>
        <span tw="text-sm">{subTitle}</span>
      </div>
    </AnimatePresence>
  );
};

export default FormHeader;
