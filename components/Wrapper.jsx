import { useState } from "react";
import Transition from "./Transitions/Transition";
import Navbar from "./Navbar/Navbar";
import SidebarMobile from "./Sidebar/SidebarMobile";
import Sidebar from "./Sidebar/Sidebar";
import ShoutoutModal from "./ShoutoutModal";
import CookieConsent from "./CookieConsent";
import "twin.macro";

const Wrapper = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div tw="h-screen flex overflow-hidden bg-background-secondary">
        <ShoutoutModal showModal={showModal} setShowModal={setShowModal} />
        <SidebarMobile
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {/* Static sidebar for desktop */}
        <Sidebar setShowModal={setShowModal} />

        <div tw="flex flex-col w-0 flex-1 overflow-hidden">
          <Navbar setIsSidebarOpen={setIsSidebarOpen} />
          <main
            tw="flex-1 relative overflow-y-auto py-6 focus:outline-none"
            id="main"
          >
            <Transition show={true}>{children}</Transition>
          </main>
        </div>
      </div>
      {/* <CookieConsent /> */}
    </>
  );
};

export default Wrapper;
