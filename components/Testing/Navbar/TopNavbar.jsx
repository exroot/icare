import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import SettingsButtonModal from "./SettingsButtonModal";
import SiteLogo from "../SiteLogo";
import "twin.macro";

function TopNavbar({ setShowSettings, showSettings }) {
  const [dropdown, setDropdown] = useState({
    notifications: false,
    profile: false,
  });
  const [settings, setSettings] = useState(false);
  return (
    <>
      <nav
        tw="sticky top-0 bg-white px-4 py-2 flex items-center min-w-0 h-14 bg-gray-900 text-gray-400 space-x-2 border-b border-gray-800"
        style={{
          zIndex: "999999999",
        }}
      >
        <SiteLogo />
        <span tw="flex-1"></span>
        <span tw="mr-2 mr-24 hidden md:block md:w-1/2">
          {/* <SearchBar /> */}
          <input
            type="text"
            placeholder="Search people, shows, and more"
            tw="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100"
          />
        </span>
        <span tw="flex-1"></span>

        <ProfileDropdown dropdown={dropdown} setDropdown={setDropdown} />
        <NotificationsDropdown dropdown={dropdown} setDropdown={setDropdown} />
        <div tw="">
          <SettingsButtonModal
            setShowSettings={setShowSettings}
            showSettings={showSettings}
          />
        </div>
      </nav>
    </>
  );
}

const Navbar = () => {
  const headerStyle = css`
    ${tw`fixed flex flex-wrap flex-col`} &::before {
      background-color: rgba(219, 219, 219, 1);
      bottom: -1px;
      height: 1px;
      content: "";
      left: 0;
      right: 0;
      position: absolute;
    }
  `;
  return (
    <header css={headerStyle}>
      <div tw="flex flex-row h-14 px-4 justify-between items-center w-full ">
        {/* Left */}
        <div tw="flex flex-row">
          <button>Close</button>
        </div>
        {/* Center */}
        <h1 tw="block text-center">Options</h1>
        {/* Right */}
        <div tw="flex flex-row justify-end">{/* empty */}</div>
      </div>
    </header>
  );
};

export default TopNavbar;
