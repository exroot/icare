import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const Transition = ({ show, children, duration }) => {
    const variants = {
        initial: {
            opacity: 0,
            scale: 0.95,
            y: -5,
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: 5,
        },
    };
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

Transition.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node,
    duration: PropTypes.number,
};

export default Transition;
