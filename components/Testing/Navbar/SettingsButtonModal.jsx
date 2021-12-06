import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { CgClose } from "react-icons/cg";
import tw, { css } from "twin.macro";
import Navbar from "./NavbarMobile";

function SettingsButtonModal({ setShowSettings, showSettings }) {
  return (
    <>
      <button
        tw="active:bg-pink-600 font-bold uppercase text-sm outline-none focus:outline-none"
        type="button"
        onClick={() => setShowSettings(true)}
      >
        <FiSettings size={24} />
      </button>

      {showSettings ? (
        <>
          <BrowserView>
            <div
              tw="justify-center items-center flex overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none mx-auto"
              onClick={() => setShowSettings(false)}
              style={{
                zIndex: "999999999",
              }}
            >
              <div tw="w-full h-auto">
                <div tw="bg-white w-full h-full mx-auto max-w-md rounded-xl overflow-hidden">
                  <ul tw="divide-y divide-gray-200 text-gray-900 text-center justify-center items-center">
                    <Link href="/testing/NewLayout/settings">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Profile
                      </li>
                    </Link>
                    <Link href="/testing/NewLayout/settings/account">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Account
                      </li>
                    </Link>
                    <Link href="/testing/NewLayout/settings/password">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Password
                      </li>
                    </Link>
                    <Link href="/testing/NewLayout/settings/notifications">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Notifications
                      </li>
                    </Link>
                    <Link href="/testing/NewLayout/settings/billing">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Billing
                      </li>
                    </Link>
                    <Link href="/testing/NewLayout/settings/integrations">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Integrations
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div tw="opacity-75 fixed inset-0 z-40 bg-gray-900"></div>
          </BrowserView>
          <MobileView>
            <section tw="justify-center items-center flex fixed md:hidden inset-0 z-50 outline-none focus:outline-none bg-white">
              {/* Header */}
              <Navbar
                left={null}
                title={"Menu"}
                right={
                  <button onClick={() => setShowSettings(false)}>
                    <CgClose size={24} />
                  </button>
                }
              />
              {/* Content */}
              <div tw="w-full h-auto overflow-y-scroll">
                <div tw="w-full h-screen ">
                  <ul tw="text-gray-900 text-left w-full justify-center items-center">
                    <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                      <p tw="" onClick={() => setShowSettings(false)}>
                        Empty
                      </p>
                    </li>
                    <Link href="/testing/NewLayout/settings">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Profile
                      </li>
                    </Link>
                    <Link href="/testing/NewLayout/settings/account">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Account
                      </li>
                    </Link>
                    <Link href="/testing/NewLayout/settings/password">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Password
                      </li>
                    </Link>
                    <Link href="/testing/NewLayout/settings/notifications">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Notifications
                      </li>
                    </Link>
                    <Link href="/testing/NewLayout/settings/billing">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Billing
                      </li>
                    </Link>
                    <Link href="/testing/NewLayout/settings/integrations">
                      <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                        Integrations
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </section>
          </MobileView>
        </>
      ) : null}
    </>
  );
}

export default SettingsButtonModal;
