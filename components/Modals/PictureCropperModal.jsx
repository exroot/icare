/* eslint-disable react/prop-types */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";
import ReactCrop from "react-image-crop";
import { RiCloseFill } from "react-icons/ri";
import { BeatLoader } from "react-spinners";
import "twin.macro";

const PictureCropperModal = ({
  showModal,
  setShowModal,
  src,
  crop,
  onImageLoaded,
  onComplete,
  onChange,
  croppedImageUrl,
  onSave,
  cover,
  loading,
}) => {
  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  const backup = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.5,
    },
    exit: {
      opacity: 0,
    },
  };
  const modal = {
    initial: {
      scale: 1.2,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          tw="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none"
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Gray background */}
          <div tw="fixed inset-0">
            <motion.div
              tw="absolute inset-0 bg-black"
              variants={backup}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </div>
          <OutsideClickHandler onOutsideClick={() => setShowModal(false)}>
            {/* Modal */}
            <motion.div
              tw="relative w-11/12 my-6 mx-auto"
              variants={modal}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                overflowY: "initial !important",
              }}
            >
              {/* content */}
              <div tw="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primary-900  outline-none focus:outline-none">
                {/* header */}
                <div tw="text-primary-200 border-b border-primary-700 py-6">
                  <button
                    type="button"
                    tw="text-white text-xl absolute top-4 right-2 -mt-2 px-2 py-2 rounded-full bg-primary-700 hover:cursor-pointer hover:bg-primary-600 z-10"
                    onClick={() => setShowModal(false)}
                  >
                    <RiCloseFill color="var(--text-primary-200)" />
                  </button>
                </div>

                {/* body */}
                <div
                  tw="block p-4"
                  style={{
                    maxHeight: "calc(100vh - 200px)",
                    overflowY: "auto",
                  }}
                >
                  <div tw="w-full mb-4 mr-4">
                    <ReactCrop
                      src={src}
                      crop={crop}
                      onImageLoaded={onImageLoaded}
                      onComplete={onComplete}
                      onChange={onChange}
                      locked={!cover}
                      circularCrop={!cover}
                      imageStyle={{
                        maxWidth: "22rem",
                        maxHeight: "25rem",
                      }}
                    />
                  </div>

                  {croppedImageUrl && (
                    <div tw="bg-primary-800 rounded-lg py-2">
                      <div tw="text-center font-extrabold uppercase text-lg mb-2 tracking-wider">
                        <h3 tw="text-primary-200">Preview</h3>
                      </div>
                      <img
                        tw="mx-auto border border-primary-200"
                        alt="Crop"
                        style={{
                          height: "10rem",
                          maxWidth: "100%",
                          borderRadius: cover ? "0%" : "50%",
                        }}
                        src={croppedImageUrl}
                      />
                    </div>
                  )}
                </div>
                {/* footer */}
                <div tw="p-4 border-t border-primary-700">
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                      onSave(cover ? "image_cover" : "image_avatar");
                      // setShowModal(false);
                    }}
                    tw="w-full bg-accent text-center text-gray-100 px-4 py-2 rounded-lg hover:bg-accent-hover duration-75 ease-in-out uppercase tracking-wide font-bold"
                  >
                    {loading ? (
                      <BeatLoader color="#fff" size={15} />
                    ) : (
                      <span>Guardar</span>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </OutsideClickHandler>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PictureCropperModal;
