import React, { useState } from "react";
import Head from "next/head";
import TopNavbar from "../../../components/Testing/Navbar/TopNavbar";
import BottomMenu from "../../../components/Testing/BottomMenu";
import "twin.macro";

const Messages = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <Head>
        <title>Shoutmo - Messages</title>
      </Head>

      <div tw="h-screen w-screen bg-gray-900 flex flex-col min-h-0 min-w-0 overflow-hidden">
        <TopNavbar
          showSettings={showSettings}
          setShowSettings={setShowSettings}
        />
        <main tw="flex-1 flex flex-col min-h-0 min-w-0 overflow-y-auto">
          <div tw="flex justify-center mx-auto">
            <div tw="max-w-lg bg-gray-900">
              <h1>Messages</h1>
            </div>
            <div tw="max-w-sm hidden md:block bg-gray-900">
              <h2>Page</h2>
            </div>
          </div>
        </main>
        <BottomMenu />
      </div>
    </>
  );
};

export default Messages;
