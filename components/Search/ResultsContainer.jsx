import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";
import SearchResult from "./SearchResult";
import Status from "../Status";
import "twin.macro";

const ResultsContainer = ({ results, isLoading, error }) => {
  const [isFollower, setFollower] = useState(false);
  const resultsAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: 50,
      transition: {
        delay: i * 0.3,
      },
    }),
  };
  const loaderAnimation = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 50,
    },
  };
  if (error) {
    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          tw="mx-auto text-center"
          variants={loaderAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Status loading={isLoading} error={error} topic={"results"} />
        </motion.div>
      </AnimatePresence>
    );
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <div tw="bg-background-primary px-4 py-8 shadow-lg rounded">
        {/* Results */}
        {isLoading && (
          <motion.div
            tw="mx-auto text-center"
            variants={loaderAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <BeatLoader color={"#5a67d8"} size={15} />
            <div tw="text-text-dark text-center">Cargando resultados...</div>
          </motion.div>
        )}
        {!isLoading && results.length === 0 && (
          <div tw="text-center text-text-dark">
            No se encontraron resultados.
          </div>
        )}
        {!isLoading && results.length > 0 && (
          <ul>
            {results.map((result, i) => {
              return (
                <motion.li
                  key={i}
                  variants={resultsAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={i}
                  tw="bg-background-primary rounded mb-2"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, .17)",
                  }}
                >
                  <SearchResult
                    result={result}
                    isFollower={isFollower}
                    setFollower={setFollower}
                  />
                </motion.li>
              );
            })}
          </ul>
        )}
        {!isLoading && (
          <motion.div
            tw="mt-4"
            variants={loaderAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div tw="text-center text-text-dark text-center">
              <span tw="font-bold">{`${results.length}`}</span> results
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default ResultsContainer;
