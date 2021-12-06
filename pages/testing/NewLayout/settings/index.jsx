import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import TopNavbar from "../../../../components/Testing/Navbar/TopNavbar";
import BottomMenu from "../../../../components/Testing/BottomMenu";
import Mockmenu from "../../../../components/Testing/MockMenu";
import NavbarMobile from "../../../../components/Testing/Navbar/NavbarMobile";
import { BrowserView, MobileView } from "react-device-detect";
import { IoIosArrowBack } from "react-icons/io";
import tw, { css } from "twin.macro";

const Settings = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <Head>
        <title>Shoutmo - Profile settings</title>
      </Head>
      <BrowserView>
        <div tw="h-screen w-screen bg-gray-900 flex flex-col min-h-0 min-w-0 overflow-hidden">
          <TopNavbar
            showSettings={showSettings}
            setShowSettings={setShowSettings}
          />
          <main tw="flex-1 flex flex-col min-h-0 min-w-0 overflow-y-auto">
            {/* // desktop menu  */}
            <section tw="block flex-1 pt-3 md:py-6 md:px-2 md:mx-2 lg:mb-0 lg:min-w-0">
              <div tw="flex lg:flex-row h-full w-full">
                {/* // columns */}
                <div tw="w-full sm:max-w-full xl:w-3/4 grid grid-cols-4 gap-4 bg-white mx-auto rounded xl:rounded-xl overflow-hidden ">
                  <div tw="border-r border-gray-700 hidden md:block ">
                    {/* <p>menu</p> */}
                    <Mockmenu />
                  </div>
                  <div tw="col-span-4 md:col-span-3 ">
                    <MockSettings />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <BottomMenu />
        </div>
      </BrowserView>
      <MobileView>
        <div>
          <NavbarMobile
            left={
              <Link href="/testing/NewLayout">
                <IoIosArrowBack size={24} />
              </Link>
            }
            title="Profile"
            right={null}
          />
          <MockSettings />
        </div>
      </MobileView>
    </>
  );
};

const MockSettings = () => {
  return (
    <div tw="w-full mx-auto pt-12 lg:pb-16 lg:px-8 overflow-y-auto">
      <div tw="bg-white w-full min-h-screen lg:max-w-md mx-auto">
        <form
          tw="divide-y divide-gray-200 "
          action="#"
          // method="POST"
        >
          <div tw="py-6 px-4 sm:p-6 lg:pb-8">
            <div>
              <h2 tw="text-lg leading-6 font-medium text-gray-900">Profile</h2>
              <p tw="mt-1 text-sm text-gray-500">
                This information will be displayed publicly.
              </p>
            </div>

            <div tw="mt-6 grid grid-cols-12 gap-6">
              <div tw="col-span-12 sm:col-span-6">
                <label
                  htmlFor="first_name"
                  tw="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  tw="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div tw="col-span-12 sm:col-span-6">
                <label
                  htmlFor="last_name"
                  tw="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  tw="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div tw="col-span-12">
                <label
                  htmlFor="url"
                  tw="block text-sm font-medium text-gray-700"
                >
                  URL
                </label>
                <input
                  type="text"
                  name="url"
                  id="url"
                  tw="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div tw="col-span-12 sm:col-span-6">
                <label
                  htmlFor="company"
                  tw="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  tw="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* <!-- Privacy section --> */}
          <div tw="pt-6 divide-y divide-gray-200">
            <div tw="px-4 sm:px-6">
              <div>
                <h2 tw="text-lg leading-6 font-medium text-gray-900">
                  Privacy
                </h2>
                <p tw="mt-1 text-sm text-gray-500">
                  Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
                </p>
              </div>
              <ul tw="mt-2 divide-y divide-gray-200">
                <li tw="py-4 flex items-center justify-between">
                  <div tw="flex flex-col">
                    <p
                      id="privacy-option-label-1"
                      tw="text-sm font-medium text-gray-900"
                    >
                      Available to hire
                    </p>
                    <p
                      id="privacy-option-description-1"
                      tw="text-sm text-gray-500"
                    >
                      Nulla amet tempus sit accumsan. Aliquet turpis sed sit
                      lacinia.
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-pressed="true"
                    aria-labelledby="privacy-option-label-1"
                    aria-describedby="privacy-option-description-1"
                    tw="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span tw="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      tw="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    ></span>
                  </button>
                </li>
                <li tw="py-4 flex items-center justify-between">
                  <div tw="flex flex-col">
                    <p
                      id="privacy-option-label-2"
                      tw="text-sm font-medium text-gray-900"
                    >
                      Make account private
                    </p>
                    <p
                      id="privacy-option-description-2"
                      tw="text-sm text-gray-500"
                    >
                      Pharetra morbi dui mi mattis tellus sollicitudin cursus
                      pharetra.
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-pressed="false"
                    aria-labelledby="privacy-option-label-2"
                    aria-describedby="privacy-option-description-2"
                    tw="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span tw="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      tw="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    ></span>
                  </button>
                </li>
                <li tw="py-4 flex items-center justify-between">
                  <div tw="flex flex-col">
                    <p
                      id="privacy-option-label-3"
                      tw="text-sm font-medium text-gray-900"
                    >
                      Allow commenting
                    </p>
                    <p
                      id="privacy-option-description-3"
                      tw="text-sm text-gray-500"
                    >
                      Integer amet, nunc hendrerit adipiscing nam. Elementum ame
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-pressed="true"
                    aria-labelledby="privacy-option-label-3"
                    aria-describedby="privacy-option-description-3"
                    tw="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span tw="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      tw="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    ></span>
                  </button>
                </li>
                <li tw="py-4 flex items-center justify-between">
                  <div tw="flex flex-col">
                    <p
                      id="privacy-option-label-4"
                      tw="text-sm font-medium text-gray-900"
                    >
                      Allow mentions
                    </p>
                    <p
                      id="privacy-option-description-4"
                      tw="text-sm text-gray-500"
                    >
                      Adipiscing est venenatis enim molestie commodo eu gravid
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-pressed="true"
                    aria-labelledby="privacy-option-label-4"
                    aria-describedby="privacy-option-description-4"
                    tw="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span tw="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      tw="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    ></span>
                  </button>
                </li>
              </ul>
            </div>
            <div tw="mt-4 py-4 px-4 flex justify-end sm:px-6">
              <button
                type="button"
                tw="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                tw="ml-5 bg-indigo-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
