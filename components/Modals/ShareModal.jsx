/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  VKShareButton,
} from "react-share";
import saveSvgAsPng from "save-svg-as-png";
import {
  RiDownload2Line,
  RiEmotionLaughLine,
  RiQrCodeFill,
  RiCloseFill,
} from "react-icons/ri";
import QRCode from "qrcode.react";
import tw, { css } from "twin.macro";
import PlatformIcon from "../PlatformIcon";

const ShareModal = ({ showModal, setShowModal, profile }) => {
  const [tab, setTab] = useState("social-media");
  const tabSelected = css`
    ${tw`px-4 py-6 block focus:outline-none text-accent border-b-2 font-medium border-accent duration-75 ease-in-out`}
  `;
  const tabNormal = css`
    ${tw`px-4 py-6 block hover:border-b-2 text-primary-200 border-accent font-medium hover:text-accent focus:outline-none duration-75 ease-in-out`}
  `;
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
          tw="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Background */}
          <div tw="fixed inset-0">
            <motion.div
              tw="absolute inset-0 bg-black"
              variants={backup}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </div>
          {/* Modal */}
          <motion.div
            tw="relative w-full sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-1/2 my-6 mx-auto"
            variants={modal}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* content */}
            <div tw="border border-accent rounded-lg shadow-lg pb-4 relative flex flex-col w-full bg-primary-900 outline-none focus:outline-none ">
              {/* header */}
              <div tw="text-primary-200 py-2">
                <button
                  type="button"
                  tw="text-white text-xl absolute top-4 right-2 -mt-2 px-2 py-2 rounded-full bg-primary-700 hover:cursor-pointer hover:bg-primary-600 z-10"
                  onClick={() => setShowModal(false)}
                >
                  <RiCloseFill color="var(--text-primary-200)" />
                </button>
              </div>

              {/* body */}
              <div tw="px-4">
                {tab === "social-media" ? (
                  <SocialMediaShare profile={profile} />
                ) : (
                  <QRCodeShare profile={profile} />
                )}
              </div>

              {/* footer */}
              <div tw="px-4 pb-4 flex justify-between w-full">
                <nav tw="grid grid-cols-2 gap-4 w-full">
                  <button
                    type="button"
                    onClick={() => setTab("social-media")}
                    css={tab === "social-media" ? tabSelected : tabNormal}
                  >
                    <span tw="flex justify-center text-sm">
                      <RiEmotionLaughLine tw="mt-1 mr-1" size={16} />
                      Social Media
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab("qrcode")}
                    css={tab === "qrcode" ? tabSelected : tabNormal}
                  >
                    <span tw="flex justify-center text-sm">
                      <RiQrCodeFill tw="mt-1 mr-1" size={16} />
                      QR Code
                    </span>
                  </button>
                </nav>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SocialMediaShare = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const buttonStyle = css`
    ${tw`mt-2 px-4 py-2 rounded-full bg-accent w-full flex justify-center text-primary-200 hover:bg-accent-hover duration-75 ease-in-out`}
  `;
  const animationProps = {
    initial: {
      x: "-20",
      opacity: 0,
    },
    animate: {
      x: "0",
      opacity: 1,
    },
    exit: {
      x: "-20",
      opacity: 0,
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={animationProps}
        initial="initial"
        animate="animate"
        exit="exit"
        tw="p-4 relative flex flex-wrap"
      >
        <div tw="w-full mb-4">
          <h1 tw="text-primary-200 font-bold text-center text-lg mb-1">
            Hola cuidador,{" "}
            {/* <span tw="text-primary-200 font-extrabold text-center">
              @{profile.username}
            </span> */}
          </h1>
          <p tw="text-primary-200 text-sm text-center">
            Aquí puedes compartir fácilmente tu perfil con todos tus amigos o
            allegados.
          </p>
        </div>
        {/* Social share buttons */}
        <div tw="w-full">
          <TwitterShareButton
            url={process.env.NEXT_PUBLIC_CLIENT_URL + "/" + profile.username}
            resetButtonStyle={false}
            title="Hola amigos, este es mi perfil de iCare #iCare #cuidadores"
            hashtags={["iCare"]}
            css={buttonStyle}
          >
            <PlatformIcon icon="Twitter" />
            <span tw="ml-2">Compartir en Twitter</span>
          </TwitterShareButton>
          <FacebookShareButton
            url={process.env.NEXT_PUBLIC_CLIENT_URL + "/" + profile.username}
            resetButtonStyle={false}
            quote="Hola amigos, este es mi perfil de iCare"
            hashtag="#iCare"
            css={buttonStyle}
          >
            <PlatformIcon icon="Facebook" />
            <span tw="ml-2">Compartir en Facebook</span>
          </FacebookShareButton>
          <VKShareButton
            url={process.env.NEXT_PUBLIC_CLIENT_URL + "/" + profile.username}
            resetButtonStyle={false}
            image={profile.image_avatar}
            title={`${profile.username}'s profile page`}
            css={buttonStyle}
          >
            <PlatformIcon icon="VK" />
            <span tw="ml-2">Compartir en VK</span>
          </VKShareButton>
          <RedditShareButton
            url={process.env.NEXT_PUBLIC_CLIENT_URL + "/" + profile.username}
            resetButtonStyle={false}
            title={`${profile.username}'s profile page`}
            css={buttonStyle}
          >
            <PlatformIcon icon="Reddit" />
            <span tw="ml-2">Compartir en Reddit</span>
          </RedditShareButton>
          <LinkedinShareButton
            url={process.env.NEXT_PUBLIC_CLIENT_URL + "/" + profile.username}
            resetButtonStyle={false}
            css={buttonStyle}
            summary={`${profile.username}'s profile page`}
            source={process.env.NEXT_PUBLIC_CLIENT_URL}
          >
            <PlatformIcon icon="LinkedIn" />
            <span tw="ml-2">Compartir en Linkedin</span>
          </LinkedinShareButton>
        </div>
        <p tw="pt-3 pb-2 w-full mx-auto text-primary-200 text-center">OR</p>
        <div tw="mt-2 mx-auto w-full px-4 ">
          <div tw="flex items-center border-b border-accent py-2 bg-primary-800 px-2 rounded-lg">
            <input
              tw="appearance-none text-center bg-transparent border-none w-full text-primary-200 mr-3 py-1 px-2 rounded-none leading-tight text-sm focus:outline-none"
              readOnly
              value={
                process.env.NEXT_PUBLIC_CLIENT_URL + "/" + profile.username
              }
              aria-label="Full name"
              id="foo"
            />
            <button
              tw="flex-shrink-0 bg-accent hover:bg-accent border-accent text-sm border-4 text-primary-200 py-1 px-2 rounded-full focus:outline-none"
              type="button"
              onClick={() => {
                setCopied(true);
                navigator.clipboard.writeText(
                  process.env.NEXT_PUBLIC_CLIENT_URL + "/" + profile.username
                );
              }}
            >
              {copied ? "copied!" : "copy"}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const QRCodeShare = ({ profile }) => {
  const downloadQR = () => {
    saveSvgAsPng.saveSvgAsPng(
      document.getElementById("qrcode"),
      `${profile.username}_QRCode.png`,
      {
        scale: 5,
        encoderOptions: 1,
      }
    );
  };
  const animationProps = {
    initial: {
      x: "20",
      opacity: 0,
    },
    animate: {
      x: "0",
      opacity: 1,
    },
    exit: {
      x: "20",
      opacity: 0,
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        tw="p-4 relative flex flex-wrap"
        variants={animationProps}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div tw="w-full mb-4">
          <h1 tw="text-primary-200 font-bold text-center text-lg mb-1">
            Hola cuidador,{" "}
            {/* <span tw="text-primary-200 font-extrabold text-center">
              @{profile.username}
            </span> */}
          </h1>
          <p tw="text-primary-200 text-sm text-center">
            Comparte este <span tw="font-extrabold">Código QR</span> con todos
            tus amigos o allegados. Siempre serán reedirigidos a tu pagina de
            perfil de inmediato.
          </p>
        </div>
        <div tw="w-full">
          <QRCode
            tw="mx-auto border-2 border-transparent rounded"
            id="qrcode"
            value={`${process.env.NEXT_PUBLIC_CLIENT_URL}/${profile.username}`}
            size={128}
            bgColor="var(--primary-900)"
            fgColor="var(--color-primary-100)"
            level="L"
            includeMargin={false}
            renderAs="svg"
          />
          <p tw="text-primary-200 text-sm text-center mt-2 italic">
            {`${process.env.NEXT_PUBLIC_CLIENT_URL}/${profile.username}`}
          </p>
        </div>
        <div tw="w-full flex justify-center">
          <button
            type="button"
            onClick={downloadQR}
            tw="mt-4 bg-accent flex text-button px-4 py-2 rounded-r-full focus:outline-none rounded-l-full hover:bg-accent-hover duration-75 ease-in-out text-center"
          >
            <RiDownload2Line tw="mt-1 mr-2" />
            Download
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default ShareModal;
