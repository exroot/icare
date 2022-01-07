import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiDashboardLine,
  RiTeamLine,
  RiLinksLine,
  RiUserSettingsLine,
  RiInformationLine,
  RiQuestionLine,
  RiMailSendLine,
  RiDashboardFill,
  RiLinksFill,
  RiUserSettingsFill,
  RiInformationFill,
  RiQuestionFill,
  RiMailSendFill,
  RiCloseLine,
  RiSearchLine,
  RiMoneyDollarCircleLine,
} from "react-icons/ri";
import { BiUserPin } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import SidebarItem from "./SidebarItem";
import PropTypes from "prop-types";
import useUser from "../../lib/useUser";
import "twin.macro";
const SidebarMobileAuthenticated = ({ router }) => {
  return (
    <nav tw="px-2">
      <div className="app-area">
        <span
          className="group"
          tw="text-text-light flex items-center pr-4 pl-2 pt-4 pb-2 text-base font-bold uppercase"
        >
          iCare
        </span>

        <SidebarItem href={"/feed"} pathname={router.pathname}>
          {router.pathname === "/feed" ? (
            <RiDashboardFill tw="mt-1 mr-2 w-4 text-lg" />
          ) : (
            <RiDashboardLine tw="mt-1 mr-2 w-4 text-lg" />
          )}
          Feed
        </SidebarItem>
        <SidebarItem href={"/links"} pathname={router.pathname}>
          {router.pathname === "/links" ? (
            <RiLinksFill tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiLinksLine tw="mt-1 mr-2 text-lg" />
          )}
          Update links
        </SidebarItem>
        <SidebarItem href={"/profile"} pathname={router.pathname}>
          {router.pathname === "/profile" ? (
            <RiUserSettingsFill tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiUserSettingsLine tw="mt-1 mr-2 text-lg" />
          )}
          Update profile
        </SidebarItem>
        <SidebarItem href={"/search"} pathname={router.pathname}>
          {router.pathname === "/search" ? (
            <RiSearchLine tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiSearchLine tw="mt-1 mr-2 text-lg" />
          )}
          Search
        </SidebarItem>
        <SidebarItem href={"/following"} pathname={router.pathname}>
          {router.pathname === "/following" ? (
            <BiUserPin tw="mt-1 mr-2 text-lg" />
          ) : (
            <BiUserPin tw="mt-1 mr-2 text-lg" />
          )}
          Following
        </SidebarItem>
      </div>

      <div className="help-area">
        <span
          className="group"
          tw="text-gray-600 flex items-center pr-4 pl-2 pt-4 pb-2 text-base font-bold uppercase"
        >
          Info
        </span>
        <SidebarItem href={"/info/help"} pathname={router.pathname}>
          {router.pathname === "/info/help" ? (
            <RiInformationFill tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiInformationLine tw="mt-1 mr-2 text-lg" />
          )}
          Help
        </SidebarItem>
        <SidebarItem href={"/info/faqs"} pathname={router.pathname}>
          {router.pathname === "/info/faqs" ? (
            <RiQuestionFill tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiQuestionLine tw="mt-1 mr-2 text-lg" />
          )}
          FAQs
        </SidebarItem>
        <SidebarItem href={"/info/contact"} pathname={router.pathname}>
          {router.pathname === "/info/contact" ? (
            <RiMailSendFill tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiMailSendLine tw="mt-1 mr-2 text-lg" />
          )}
          Contact
        </SidebarItem>
      </div>
    </nav>
  );
};

const SidebarMobileUnauthenticated = ({ router }) => {
  return (
    <nav tw="px-2">
      <div className="app-area">
        <span
          className="group"
          tw="text-text-light flex items-center pr-4 pl-2 pt-4 pb-2 text-base font-bold uppercase"
        >
          Shoutmo
        </span>

        <SidebarItem href={"/"} pathname={router.pathname}>
          {router.pathname === "/" ? (
            <RiDashboardFill tw="mt-1 mr-2 w-4 text-lg" />
          ) : (
            <RiDashboardLine tw="mt-1 mr-2 w-4 text-lg" />
          )}
          Home
        </SidebarItem>
      </div>

      <div className="help-area">
        <span
          className="group"
          tw="text-gray-600 flex items-center pr-4 pl-2 pt-4 pb-2 text-base font-bold uppercase"
        >
          Info
        </span>

        <SidebarItem href={"/info/help"} pathname={router.pathname}>
          {router.pathname === "/info/help" ? (
            <RiInformationFill tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiInformationLine tw="mt-1 mr-2 text-lg" />
          )}
          Help
        </SidebarItem>
        <SidebarItem href={"/info/faqs"} pathname={router.pathname}>
          {router.pathname === "/info/faqs" ? (
            <RiQuestionFill tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiQuestionLine tw="mt-1 mr-2 text-lg" />
          )}
          FAQs
        </SidebarItem>
        <SidebarItem href={"/info/contact"} pathname={router.pathname}>
          {router.pathname === "/info/contact" ? (
            <RiMailSendFill tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiMailSendLine tw="mt-1 mr-2 text-lg" />
          )}
          Contact
        </SidebarItem>
        {/* donate button */}
        <div tw="sm:hidden">
          <SidebarItem href="/donate" pathname={router.pathname}>
            <button
              tw="flex justify-center w-full text-center bg-gray-300 text-indigo-900 hover:text-black font-bold py-2 px-4 rounded  "
              style={{ background: "#9AFF87" }}
            >
              {/* <RiMoneyDollarCircleLine size={24} fill="#39FF14" /> */}
              <span tw="text-sm mr-1">Help support us</span>
              <RiMoneyDollarCircleLine size={21} tw="mt-1" />
            </button>
          </SidebarItem>
        </div>
      </div>
    </nav>
  );
};

const SidebarMobile = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const router = useRouter();
  const { user } = useUser();
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
  const sidebar = {
    initial: {
      x: "-16rem",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3 },
    },
    exit: {
      opacity: 0,
      x: "-16rem",
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {isSidebarOpen && (
        <div tw="md:hidden">
          <div tw="fixed inset-0 flex z-50">
            {/* Gray background on sidebar mobile active  */}

            <div tw="fixed inset-0">
              <motion.div
                tw="absolute inset-0 bg-black"
                variants={backup}
                initial="initial"
                animate="animate"
                exit="exit"
              ></motion.div>
            </div>

            <motion.div
              variants={sidebar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <OutsideClickHandler
                onOutsideClick={() => {
                  setIsSidebarOpen(false);
                }}
              >
                <div tw="relative flex-1 flex flex-col max-w-xs w-64 pt-5 pb-4 bg-background-primary h-screen">
                  <div tw="flex flex-wrap justify-start content-between">
                    <div tw="flex items-center h-16 pb-2 bg-background-primary w-full">
                      <h1
                        tw="text-secondary w-full font-bold text-5xl text-left pl-4"
                        style={{
                          fontFamily: "Pacifico",
                        }}
                      >
                        iCare
                      </h1>
                    </div>
                    {/* <div tw="flex-shrink-0 flex items-center px-4 -mt-6">
                                        <Logo size={"3rem"} centered={false} />
                                    </div> */}
                    <div tw="absolute top-0 right-0 -mr-2 p-1 pt-5">
                      {isSidebarOpen && (
                        <button
                          onClick={() => setIsSidebarOpen(false)}
                          tw="flex items-center justify-center pt-3 pr-4 h-10 w-10 rounded-full 
                                            focus:outline-none "
                          aria-label="Close sidebar"
                        >
                          <RiCloseLine tw="text-center text-text-dark text-2xl " />
                          {/* <svg
                                                tw="text-text-darker text-center"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg> */}
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    tw="mt-5 flex-1 h-0 overflow-y-auto"
                    style={{
                      scrollbarWidth: "thin",
                    }}
                  >
                    {/* Sidebar mobile component */}
                    {!!user && user.is_logged_in ? (
                      <SidebarMobileAuthenticated router={router} />
                    ) : (
                      <SidebarMobileUnauthenticated router={router} />
                    )}
                  </div>
                </div>
              </OutsideClickHandler>
            </motion.div>
            <div tw="flex-shrink-0 w-10">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

SidebarMobile.propTypes = {
  isSidebarOpen: PropTypes.bool,
  setIsSidebarOpen: PropTypes.func,
};
export default SidebarMobile;
