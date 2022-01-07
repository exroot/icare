/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import TimeAgo from "timeago-react";
import Link from "next/link";
import Head from "next/head";
import { BeatLoader } from "react-spinners";
import Layout from "../../components/Layout";
import useUser from "../../lib/useUser";
import PageLoader from "../../components/PageLoader";
import usePaginatedNotifications from "../../lib/useNotificationsHistory";
import "twin.macro";
import Description from "../../components/Description";
import Navbar from "../../components/Navbar/NavbarAlt";

const NotificationsPage = () => {
  const { user, isLoading } = useUser({ redirectTo: "/login" });
  // const {
  //   notifications,
  //   isEmpty,
  //   errorNotifications,
  //   isLoadingMore,
  //   setSize,
  // } = usePaginatedNotifications();
  // const loadMore = useCallback(async () => setSize((i) => i + 1));

  const notifications = [
    {
      id: 1,
      notification_type: "FOLLOW",
      created_at: new Date(Date.now() - 1000000),
      body: " ahora forma parte de tu círculo.",
      title: "Nuevos estudios de Universidad de Harvard",
      username: "administrador",
    },
    {
      id: 1,
      notification_type: "POST",
      created_at: new Date(Date.now() - 1000000),
      title: "Cómo incrementar paciencia",
      body: "Hola comunidad, solo queria saber si alguno de ustedes sabe...",
      username: "exroot",
    },
    {
      id: 1,
      notification_type: "POST",
      created_at: new Date(Date.now() - 1000000),
      title: "Estudios recientes del Alzheimer",
      body: "Nuevos estudios de Universidad de Harvard arrojaron resulta...",
      username: "google",
    },
    {
      id: 1,
      notification_type: "POST",
      created_at: new Date(Date.now() - 1000000),
      title: "Dudas del Alzheimer",
      body: "Mi papá acaba de ser diagnosticado con Alzheimer y no se ca...",
      username: "machinegun",
    },
    {
      id: 1,
      notification_type: "POST",
      created_at: new Date(Date.now() - 1000000),
      title: "Hola comunidad",
      body: "Solo pasaba a saludar y quería conocer y ampliar mi círculo a...",
      username: "cascade",
    },
    {
      id: 1,
      notification_type: "FOLLOW",
      created_at: new Date(Date.now() - 1000000),
      body: " ahora forma parte de tu círculo.",
      title: "Nuevos estudios de Universidad de Harvard",
      username: "robert99",
    },
    {
      id: 1,
      notification_type: "POST",
      created_at: new Date(Date.now() - 1000000),
      body: "Hola carers, soy de Venezuela y quería saber si alguno de aquí...",
      title: "Buenos neurologos en Venezuela",
      username: "christian",
    },
  ];
  if (!user) {
    return (
      <>
        <Head>
          <title>Shoutmo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageLoader />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>iCare - Notificaciones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Notificaciones</h1>
          <Navbar />
        </div>
        <div tw="w-full border-b border-primary-700" />
        <div tw="md:flex md:justify-between">
          <div tw="">
            <Description tw="text-sm text-primary-400 mb-4 w-full">
              Aquí encontrarás el historial de tus notificaciones, empezando por
              las más recientes. Nuevos seguidores en tu círculo, nuevos posts
              de personas de tu círculo y más.
            </Description>
            <div tw="mt-4 w-full text-center">
              {notifications ? (
                notifications.map((notification) => (
                  <NotificationCard
                    notification={notification}
                    key={notification.id}
                  />
                ))
              ) : (
                <h3>Cargando notificaciones...</h3>
              )}
              {/* {!!notifications.length && !isEmpty && !errorNotifications ? (
                <button
                  type="button"
                  tw="flex justify-center px-4 py-2 bg-accent hover:bg-accent-hover text-button font-medium rounded-lg w-full text-center"
                  onClick={loadMore}
                  disabled={isLoadingMore}
                >
                  {isLoadingMore ? (
                    <BeatLoader color="#fff" tw="text-center" size={16} />
                  ) : (
                    "Load more"
                  )}
                </button>
              ) : (
                <span tw="text-xl font-bold text-primary-200">
                  ¡Estas al día!
                </span>
              )} */}
            </div>
          </div>
          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  );
};

const NotificationCard = ({ notification }) => {
  if (notification.notification_type === "FOLLOW") {
    // const index = notification.body.indexOf(" ");
    // const [username, body] = [
    //   notification.body.slice(0, index),
    //   notification.body.slice(index + 1),
    // ];

    return (
      <div tw="bg-primary-800 max-w-4xl rounded-lg px-6 py-4 mb-2 shadow-2xl">
        <div tw="flex place-content-between mb-2">
          <h3 tw="font-bold text-primary-200 truncate">
            ❤️ Tienes un nuevo seguidor
          </h3>
        </div>
        <div tw="text-primary-400 text-left">
          <Link href={`/${notification.username}`} passHref>
            <a tw="text-primary-200 font-bold">{notification.username}</a>
          </Link>
          {` ${notification.body}`}
        </div>
        <div tw="text-right text-xs text-primary-400">
          <TimeAgo datetime={notification.created_at} />
        </div>
      </div>
    );
  }
  if (notification.notification_type === "POST") {
    return (
      <div tw="bg-primary-800 max-w-4xl rounded-lg px-6 py-4 mb-2 max-h-44">
        <div tw="flex place-content-between mb-2">
          <h3 tw="text-primary-200 font-bold text-left">
            📣 Nuevo post:{" "}
            <Link href={`/${notification.title}`} passHref>
              <a tw="text-primary-200 font-bold">{notification.title}</a>
            </Link>
          </h3>
        </div>
        <div tw="  text-left text-primary-400">{notification.body}</div>
        <div tw="text-right text-xs text-primary-400">
          <TimeAgo datetime={notification.created_at} />
        </div>
      </div>
    );
  }
  return (
    <div tw="bg-primary-200 rounded-lg px-6 py-4 mb-2">Nueva notificacion</div>
  );
};

export default NotificationsPage;
