/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { RiNotification2Line } from "react-icons/ri";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";
import TimeAgo from "timeago-react";
import Transition from "../Transitions/Transition";
import "twin.macro";

const NotificationsDropdown = ({ dropdownActive, setDropdownActive }) => {
  // const { data, error } = useSWR('/notifications/?page=1&show_meta=1')
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (dropdownActive.notifications) {
          setDropdownActive({ profile: false, notifications: false });
        }
      }}
    >
      <div tw="relative">
        <div>
          <button
            type="button"
            onClick={
              () =>
                setDropdownActive((prevState) => {
                  const newState = {
                    notifications: !prevState.notifications,
                    profile: false,
                  };
                  return newState;
                })
              // eslint-disable-next-line react/jsx-curly-newline
            }
            tw="p-2 text-text-light rounded-full hover:bg-primary-800 hover:text-text-light focus:outline-none focus:text-text-light"
            aria-label="Notifications"
          >
            <RiNotification2Line tw="text-3xl font-bold" />
          </button>
        </div>
        {/* Notifications dropdown card */}
        <Transition show={dropdownActive.notifications}>
          <div tw="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg border border-accent">
            <div
              tw="pt-1 rounded-md bg-primary-900 shadow-lg"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <div
                tw="max-h-48 overflow-y-scroll mx-auto w-full"
                style={{ scrollbarWidth: "thin" }}
              >
                {/* Notifications */}
                {/* <Notifications notifications={data} error={error} /> */}
              </div>
              <Link href="/notifications" passHref>
                <a tw="block bg-primary-800 hover:bg-primary-700 text-white text-center py-2 rounded-b-md">
                  Ver todas las notificaciones
                </a>
              </Link>
            </div>
          </div>
        </Transition>
      </div>
    </OutsideClickHandler>
  );
};

const Notifications = ({ notifications }) => {
  if (!notifications) {
    return (
      <div tw="w-full text-center">
        <BeatLoader tw="text-center" color="var(--text-button)" size={16} />
      </div>
    );
  }
  if (notifications && !notifications.length) {
    return (
      <div tw="text-button text-center text-sm">
        You dont have notifications yet.
      </div>
    );
  }
  const notificationsGroup = notifications.slice(0, 3).map((notification) => {
    if (notification.notification_type === "FOLLOW") {
      const index = notification.body.indexOf(" ");
      const [username] = [
        notification.body.slice(0, index),
        notification.body.slice(index + 1),
      ];

      return (
        <a
          href="/notifications"
          tw="flex items-center px-4 py-3 hover:bg-primary-800"
        >
          <div tw="h-8 w-8 rounded-full object-cover mx-1">❤️</div>
          <p tw="text-primary-400 text-sm mx-2">
            <span tw="font-bold text-button" href="#">
              {username}
            </span>{" "}
            start following you. <TimeAgo datetime={notification.created_at} />
          </p>
        </a>
      );
    }
    if (notification.notification_type === "SHOUTOUTPOST") {
      return (
        <a
          href="/notifications"
          tw="flex items-center px-4 py-3 hover:bg-primary-800 text-primary-400"
        >
          <div tw="h-8 w-8 rounded-full object-cover mx-1">📣</div>
          <p tw="text-primary-400 text-sm mx-2">
            <span tw="font-bold text-button" href="#">
              {notification.title}
            </span>{" "}
            posted a new Shoutout.{" "}
            <TimeAgo datetime={notification.created_at} />
          </p>
        </a>
      );
    }
    return (
      <a
        href="/notifications"
        tw="flex items-center px-4 py-3 hover:bg-primary-800"
      >
        <div tw="h-8 w-8 rounded-full object-cover mx-1">🔔</div>
        <p tw="text-primary-400 text-sm mx-2">
          <span tw="font-bold text-button" href="#">
            {notification.title}
          </span>{" "}
          New notification. <TimeAgo datetime={notification.created_at} />
        </p>
      </a>
    );
  });
  return <>{notificationsGroup}</>;
};
export default NotificationsDropdown;
