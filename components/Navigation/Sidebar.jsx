/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { VscBell } from "react-icons/vsc";
import { CgProfile, CgFeed } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { RiDashboard3Line } from "react-icons/ri";
import { FaRegCompass } from "react-icons/fa";
import { BiMessageAdd } from "react-icons/bi";
import tw, { css } from "twin.macro";
import ShoutoutModal from "../Modals/ShoutoutModal";
import SiteLogo from "../SiteLogo";
import useUser from "../../lib/useUser";

const Sidebar = () => {
  const { user } = useUser({ oneCall: true });
  const { pathname } = useRouter();
  return (
    <div tw="w-72 relative">
      {/* Sidebar content */}
      <div tw="px-10 fixed min-h-screen flex flex-col">
        {/* Logo Wrapper  */}
        <div tw="mt-5">
          <SiteLogo />
        </div>
        {/* Items container */}
        <div tw="space-y-2 mt-8 text-sm">
          <SidebarItem href="/feed" active={pathname === "/feed"}>
            <CgFeed
              tw="h-6 w-6 self-center text-primary-500"
              color={
                pathname === "/feed"
                  ? "var(--color-accent)"
                  : "var(--color-primary-500)"
              }
            />
            <span tw="mx-4 text-lg font-bold">Inicio</span>
          </SidebarItem>
          <ShoutoutModalButton active={false}>
            <BiMessageAdd tw="h-6 w-6 self-center text-primary-500" />
            <span tw="mx-4 text-lg font-bold">Postear</span>
          </ShoutoutModalButton>
          <SidebarItem href="/explore" active={pathname === "/explore"}>
            <FaRegCompass
              tw="h-6 w-6 self-center text-primary-500"
              color={
                pathname === "/explore"
                  ? "var(--color-accent)"
                  : "var(--color-primary-500)"
              }
            />
            <span tw="mx-4 text-lg font-bold">Explorar</span>
          </SidebarItem>
          {/* <SidebarItem
            href="/notifications"
            active={pathname === "/notifications"}
          >
            <VscBell
              tw="h-6 w-6 self-center text-primary-500"
              color={
                pathname === "/notifications"
                  ? "var(--color-accent)"
                  : "var(--color-primary-500)"
              }
            />
            <span tw="mx-4 text-lg font-bold">Notificaciones</span>
          </SidebarItem> */}
          <SidebarItem href="/profile" active={pathname === "/profile"}>
            <CgProfile
              tw="h-6 w-6 self-center text-primary-500"
              color={
                pathname === "/profile"
                  ? "var(--color-accent)"
                  : "var(--color-primary-500)"
              }
            />
            <span tw="mx-4 text-lg font-bold">Perfil</span>
          </SidebarItem>
          <SidebarItem href="/settings" active={pathname.includes("/settings")}>
            <FiSettings
              tw="h-6 w-6 self-center text-primary-500"
              color={
                pathname.includes("/settings")
                  ? "var(--color-accent)"
                  : "var(--color-primary-500)"
              }
            />
            <span tw="mx-4 text-lg font-bold">Configuración</span>
          </SidebarItem>
          {/* {alert(JSON.stringify(user))} */}
          {user.rol_id <= 2 && (
            <SidebarItem
              href="/administracion"
              active={pathname.includes("/administracion")}
            >
              <RiDashboard3Line
                tw="h-6 w-6 self-center text-primary-500"
                color={
                  pathname.includes("/administracion")
                    ? "var(--color-accent)"
                    : "var(--color-primary-500)"
                }
              />
              <span tw="mx-4 text-lg font-bold">Administración</span>
            </SidebarItem>
          )}
        </div>
      </div>
    </div>
  );
};

const ShoutoutModalButton = ({ children, active }) => {
  const [showModal, setShowModal] = useState(false);

  const style = css`
    ${tw`block text-button text-lg font-bold bg-transparent hover:bg-primary-800 px-2 py-4 rounded-lg cursor-pointer`}
    ${active && tw`text-accent font-bold`}
  `;
  return (
    <>
      <a css={style} onClick={() => setShowModal(true)}>
        <span tw="flex ml-6">{children}</span>
      </a>
      <ShoutoutModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

const SidebarItem = ({ children, href, active }) => {
  const style = css`
    ${tw`block text-button text-lg font-bold bg-transparent hover:bg-primary-800 px-2 py-4 rounded-lg cursor-pointer`}
    ${active && tw`text-accent font-bold`}
  `;
  return (
    <Link href={href} passHref>
      <a css={style}>
        <span tw="flex ml-6">{children}</span>
      </a>
    </Link>
  );
};

export default Sidebar;
