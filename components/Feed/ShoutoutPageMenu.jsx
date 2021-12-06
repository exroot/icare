// import { useState, useEffect } from "react";

import {
  RiTeamLine,
  RiUserSettingsLine,
  RiUserSettingsFill,
  RiUser2Fill,
} from "react-icons/ri";

import "twin.macro";

export function ShoutoutMenu({ setOwnShoutouts }) {
  return (
    <>
      <div tw="grid sm:flex text-sm sm:text-base ml-6 text-left">
        <button
          tw="inline-block border border-pink-400 text-pink-500 hover:bg-pink-400 text-pink-400 font-semibold hover:text-white hover:border-transparent focus:outline-none rounded-full px-6 py-2 mr-4 transition duration-300 ease-in"
          onClick={() => setOwnShoutouts(true)}
        >
          <RiUser2Fill tw="inline-block mr-1" />
          My Shoutouts
        </button>
        <button
          tw="inline-block border mt-2 sm:mt-0 border-pink-400 text-pink-500 hover:bg-pink-400 text-pink-400 font-semibold hover:text-white hover:border-transparent focus:outline-none rounded-full px-6 py-2 mr-4  transition duration-300 ease-in"
          onClick={() => setOwnShoutouts(false)}
        >
          <RiUserSettingsFill tw="inline-block mr-1" />
          Shoutouts From people I follow
        </button>
      </div>
    </>
  );
}
