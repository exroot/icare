import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const SidebarTransition = ({ show, children, duration }) => {
    const variants = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            x: -100,
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
                    style={{ zIndex: 999999 }}
                    transition={{ duration }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

SidebarTransition.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node,
    duration: PropTypes.number,
};
export default SidebarTransition;
