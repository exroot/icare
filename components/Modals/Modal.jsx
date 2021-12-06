/* eslint-disable react/prop-types */
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiCloseFill } from 'react-icons/ri'
import OutsideClickHandler from 'react-outside-click-handler'
import 'twin.macro'

const Modal = ({ showModal, setShowModal, children }) => {
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
  }
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
  }
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
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          tw="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
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
              tw="relative w-11/12 sm:w-9/12 md:w-3/5  my-6 mx-auto"
              variants={modal}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* content */}
              <div tw="border border-accent rounded-lg shadow-lg relative flex flex-col w-full bg-primary-900 outline-none focus:outline-none">
                {/* header */}
                <ModalHeader setShowModal={setShowModal} />
                {/* body */}
                <ModalContent>{children}</ModalContent>
              </div>
            </motion.div>
          </OutsideClickHandler>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const ModalHeader = ({ setShowModal }) => (
  <div tw="text-primary-200 py-2">
    <button
      type="button"
      tw="text-white text-xl absolute top-4 right-2 -mt-2 px-2 py-2 rounded-full bg-primary-700 hover:cursor-pointer hover:bg-primary-600 z-10"
      onClick={() => setShowModal(false)}
    >
      <RiCloseFill color="var(--text-primary-200)" />
    </button>
  </div>
)

const ModalContent = ({ children }) => (
  <div
    tw="block p-4"
    style={{
      maxHeight: 'calc(100vh - 200px)',
      overflowY: 'auto',
    }}
  >
    {children}
  </div>
)

export default Modal
