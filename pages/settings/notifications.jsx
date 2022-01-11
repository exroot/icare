/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import Head from "next/head";
import PageLoader from "../../components/PageLoader";
import useUser from "../../lib/useUser";
import TabMenu from "../../components/Navigation/TabNavigator";
import Layout from "../../components/Layout";
import "twin.macro";
import Description from "../../components/Description";
import Navbar from "../../components/Navbar/NavbarAlt";

import linkz from "../../components/tablinkz";

const SettingsNotifications = () => {
  const { user, isLoading } = useUser({ redirectTo: "/login" });

  if (isLoading || user.is_logged_in === false) {
    return (
      <>
        <Head>
          <title>iCare</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageLoader />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Configuración - Notificationes</title>
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Settings</h1>
          <Navbar />
        </div>
        <TabMenu links={linkz} />
        <div tw="md:flex md:justify-between">
          <div tw="">
            <Description>
              Aquí puedes personalizar la configuración de tus notificaciones
              como desees. No olvides que puedes cambiar esta configuración
              posteriormente, en cualquier momento.
            </Description>
            <TogglesContainer>
              <Group tw="flex justify-between bg-primary-800 px-4 py-2 rounded-full">
                <ToggleLabel tw="text-lg mr-1 text-primary-200 font-bold">
                  Boletines informativos
                </ToggleLabel>
                <ToggleButton name="toggle1" />
              </Group>
              <Group tw="flex justify-between bg-primary-800 px-4 py-2 rounded-full">
                <ToggleLabel tw="text-lg mr-1 text-primary-200 font-bold">
                  Notificaciones push
                </ToggleLabel>
                <ToggleButton name="toggle2" />
              </Group>
              <Group tw="flex justify-between bg-primary-800 px-4 py-2 rounded-full">
                <ToggleLabel tw="text-lg mr-1 text-primary-200 font-bold">
                  Notificaciones vía email
                </ToggleLabel>
                <ToggleButton name="toggle3" />
              </Group>
              <Group tw="flex justify-between bg-primary-800 px-4 py-2 rounded-full">
                <ToggleLabel tw="text-lg mr-1 text-primary-200 font-bold">
                  Notificaciones del equipo de iCare
                </ToggleLabel>
                <ToggleButton name="toggle4" />
              </Group>
            </TogglesContainer>
          </div>

          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  );
};

const TogglesContainer = ({ children }) => (
  <div tw="flex flex-col bg-primary-800 rounded-lg overflow-hidden w-full shadow-2xl border-l-2 border-accent">
    {children}
  </div>
);

const Group = ({ children }) => (
  <div tw="flex justify-between bg-primary-800 px-4 py-4 border-b border-primary-700 hover:bg-primary-700 text-primary-200 font-medium hover:text-primary-200 last:border-b-0">
    {children}
  </div>
);
const ToggleLabel = ({ children }) => (
  <h3 tw="text-sm sm:text-sm mr-1">{children}</h3>
);
const ToggleButton = ({ nameField }) => {
  const ref = useRef(null);
  const toggle = () => {
    const checkbox = ref.current;
    checkbox.click();
  };

  const onChange = (e) => {
    const checkbox = e.target;
    if (checkbox.checked) console.log(`turn on notifications.`);
    else console.log(`turn off notifications.`);
  };
  return (
    <div tw="relative inline-block w-12 align-middle select-none transition-all duration-200 ease-in">
      <input
        type="checkbox"
        name={nameField}
        id={nameField}
        ref={ref}
        onChange={onChange}
        tw="absolute block w-7 h-7 -mt-0.5 rounded-full bg-primary-200 border appearance-none cursor-pointer"
        className="toggle-checkbox"
      />
      <label
        htmlFor={nameField}
        className="toggle-label"
        tw="block overflow-hidden bg-primary-700 h-6 rounded-full cursor-pointer border-2 border-primary-200"
        onClick={() => toggle(nameField)}
      />
    </div>
  );
};

export default SettingsNotifications;
