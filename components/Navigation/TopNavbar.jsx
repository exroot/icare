/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Link from "next/link";
import tw, { css } from "twin.macro";
import localforage from "localforage";
import { trigger, cache } from "swr";
import useUser from "../../lib/useUser";
import ProfileDropdown from "../Navbar/ProfileDropdownAlt";
import axios from "../../lib/client";
import redirectTo from "../../utils/redirectTo";

const TopNavbar = () => {
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
      await axios({
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
  const userIsLoggedIn = user && user.is_logged_in;
  return (
    <>
      <section
        id="top-nav"
        tw="block fixed inset-x-0 top-0 z-10 bg-black text-primary-200 px-4"
      >
        <div tw="flex justify-between h-full items-center">
          {/* Left */}
          <div>
            <Link href={userIsLoggedIn ? "/feed" : "/"} passHref>
              <a>
                <LogoHero size={45} />
              </a>
            </Link>
          </div>
          {/* Right */}
          <div>
            {userIsLoggedIn ? (
              <ProfileDropdown
                dropdownActive={dropdownActive}
                setDropdownActive={setDropdownActive}
                userData={user}
                handleLogout={handleLogout}
              />
            ) : (
              <div tw="flex space-x-2 sm:space-x-4 text-sm">
                <Link href="/login" passHref>
                  <a
                    tw="text-accent px-2 py-2 cursor-pointer font-medium hover:text-accent-hover"
                    style={{ textShadow: "0px 4px 5px var(--color-accent)" }}
                  >
                    Log In
                  </a>
                </Link>
                <Link href="/signup" passHref>
                  <a
                    tw="text-button bg-accent px-2 py-2 rounded border border-accent cursor-pointer font-medium hover:bg-accent-hover duration-300 ease-in-out"
                    style={{ textShadow: "0px 4px 10px var(--color-accent)" }}
                  >
                    Sign up
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

const LogoHero = ({ size }) => {
  const logoStylesforshoutmo = css`
      ${tw`
          
          text-white
          tracking-wide
          
      `}
      font-family: "Pacifico";
     
  
      ${size ? `font-size: ${size}px;` : tw`text-5xl lg:text-6xl leading-none`};
  
      position: relative;
  }
  `;
  return (
    <>
      <span css={logoStylesforshoutmo}>iCare</span>
    </>
  );
};

export default TopNavbar;
