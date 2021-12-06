import { motion, AnimatePresence } from "framer-motion";
import "twin.macro";

const containerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 0.1 },
  },
  exit: {
    opacity: 0,
  },
};

export const ContainerOuter = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        tw="flex justify-center my-2 mx-4 md:mx-0"
        variants={containerAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const ContainerInner = ({ children }) => {
  return <div tw="flex flex-wrap -mx-3 mb-6">{children}</div>;
};
