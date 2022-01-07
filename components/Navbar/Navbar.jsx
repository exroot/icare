import { useState } from "react";
import PropTypes from "prop-types";
import { RiMenuLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import NotificationsDropdown from "./NotificationsDropdown";
import ProfileDropdown from "./ProfileDropdown";
import useUser from "../../lib/useUser";
import axios from "../../lib/client";
import redirectTo from "../../utils/redirectTo";
import { trigger, cache } from "swr";
import Link from "next/link";
import ToggleTheme from "../Buttons/ToggleTheme";
import localforage from "localforage";
import "twin.macro";

const Navbar = ({ setIsSidebarOpen }) => {
  const { user, isLoading, mutateUser, error } = useUser({
    oneCall: true,
  });
  const [dropdownActive, setDropdownActive] = useState({
    notifications: false,
    profile: false,
  });
  const handleLogout = async () => {
    try {
      const body = {
        refresh_token: localStorage.getItem("refresh"),
        device_token: await localforage.getItem("fcm_token"),
      };
      const { data } = await axios({
        url: "/auth/logout/",
        method: "POST",
        body,
      });
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      await mutateUser({ ...user, is_logged_in: false }, false);
      await trigger("/auth/me");
      cache.clear();
      redirectTo("/login");
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return (
    <nav tw="relative flex-shrink-0 flex h-16 bg-transparent shadow z-20">
      <button
        onClick={() => setIsSidebarOpen(true)}
        tw="px-4 text-gray-500 text-text-dark 
                transition duration-300 ease-in
                hover:bg-background-secondary focus:bg-background-secondary focus:text-text-dark md:hidden"
        aria-label="Open sidebar"
      >
        <RiMenuLine tw="text-2xl" />
      </button>
      <div tw="flex-1 px-4 flex justify-between">
        {/* Left side of Navbar */}
        <div tw="flex-1 flex">
          <div tw="w-full flex md:ml-0">
            {/* Here you cold add something like a search button or logo */}
            <div tw="text-indigo-600 font-bold ml-4 flex items-center md:ml-6 text-2xl">
              {/* <Link
                                href={!isLoading && !user ? "/" : "/feed"}
                                as={!isLoading && !user ? "/" : "/feed"}
                            >
                                Shoutmo
                            </Link> */}
              <div tw="w-12">
                <ToggleTheme />
              </div>
            </div>
          </div>
        </div>
        {/* Right side of Navbar */}
        {/* donate button */}
        <div tw="ml-4 hidden sm:flex items-center">
          {/* <Link href="/donate" as="/donate"> */}
          <a href="/donate">
            <button
              tw="bg-gray-300 text-indigo-900 hover:text-black font-bold py-2 px-4 rounded inline-flex items-center"
              style={{ background: "#9AFF87" }}
            >
              {/* <RiMoneyDollarCircleLine size={24} fill="#39FF14" /> */}
              <span tw="text-sm mr-1">Support Us</span>
              <RiMoneyDollarCircleLine size={21} />
            </button>
          </a>
          {/* </Link> */}
        </div>

        {/* Check if user its logged */}
        {!isLoading && user && user.is_logged_in ? (
          <div tw="ml-4 flex items-center md:ml-6">
            {/* <NotificationsDropdown
              dropdownActive={dropdownActive}
              setDropdownActive={setDropdownActive}
            /> */}
            {/* Profile dropdown */}
            <div tw="ml-3">
              <ProfileDropdown
                dropdownActive={dropdownActive}
                setDropdownActive={setDropdownActive}
                userData={user}
                handleLogout={handleLogout}
              />
            </div>
          </div>
        ) : (
          <div tw="ml-4 flex items-center md:ml-6 h-full">
            {/* User hasnt logged in yet */}
            <div tw="relative h-full">
              <div tw="flex justify-between h-full">
                <Link href="/login" as="/login">
                  <a
                    tw="h-full cursor-pointer pt-4 px-4 text-text-dark focus:outline-none 
                                        hover:bg-background-secondary
                                        focus:bg-background-secondary transition ease-in-out duration-150"
                    href="/login"
                  >
                    Login
                  </a>
                </Link>
                <Link href="/signup" as="/signup">
                  <a
                    tw="h-full cursor-pointer pt-4 px-4 text-text-dark focus:outline-none 
                                        hover:bg-background-secondary
                                        focus:bg-background-secondary transition ease-in-out duration-150"
                    href="/signup"
                  >
                    Sign up
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setIsSidebarOpen: PropTypes.func,
};
export default Navbar;
