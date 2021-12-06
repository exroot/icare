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
        <title>Shoutmo - Account settings</title>
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
            title="Notifcations"
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
    <div tw="w-full mx-auto pt-12 sm:px-6 lg:pb-16 lg:px-8 overflow-y-auto">
      <div tw="bg-white w-full min-h-screen  max-w-md mx-auto">
        <div tw="divide-y divide-gray-200">
          <div tw="py-6 px-4 sm:p-6 lg:pb-8">
            <div>
              <h2 tw="text-lg leading-6 font-medium text-gray-900">
                Notifications
              </h2>
              <p tw="mt-1 text-sm text-gray-500">
                This information is related with notifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
