/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-children-prop */
import React, { useEffect, useCallback, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
// import localforage from 'localforage'
import useUser from "../../lib/useUser";
import usePaginatedShoutouts from "../../lib/usePaginatedShoutouts";
import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";
import FeedCard from "../../components/Feed/FeedCard";
import ShoutoutInput from "../../components/Feed/ShoutoutInput";
import Navbar from "../../components/Navbar/NavbarAlt";
// import { firebaseCloudMessaging } from '../../utils/webPush'
// import initializeFCM from '../../utils/initializeFCM'
import FeedSkeleton from "../../components/Feed/FeedSkeleton";
import "twin.macro";
import useSuggestedUsers from "../../lib/useSuggestedUsers";
import SuggestedUsers from "../../components/Feed/SuggestedUsers";
import useCategories from "../../lib/useCategories";
import TrendingTags from "../../components/Feed/TrendingTags";
import TabMenu from "../../components/Navigation/TabNavigator";
import axiosClient from "../../lib/client";

const linkz = [
  {
    title: "Reportes",
    path: "/administracion",
  },
  {
    title: "Bitácora",
    path: "/administracion/bitacora",
  },
  // {
  //   title: "Links",
  //   path: "/settings/links",
  // },
];

const Feed = () => {
  const { user, isLoading } = useUser({ redirectTo: "/login" });
  const [records, setRecords] = useState([]);
  const loadMore = useCallback(async () => setSize((i) => i + 1));
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [limitOptions, setLimitOptions] = useState([5, 10, 15, 20]);
  useEffect(() => {
    (async () => {
      const { data: res } = await axiosClient({
        method: "GET",
        url: `/bitacora?show_meta=1&page=${page}&limit=${limit}`,
      });
      setRecords(res);
    })();
  }, [page, limit]);

  const handleLimitChange = (e) => {
    const newLimit = parseInt(e.target.value);
    setLimit(newLimit);
  };

  useEffect(() => {}, [limit]);

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
        <title>iCare - Administración - Bitácora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Bitácora</h1>
          <Navbar />
        </div>
        <TabMenu links={linkz} />
        <div tw="mt-4">
          <div tw=" flex items-center justify-between pb-2">
            <div>
              <span tw="text-base text-primary-400">
                Registro de acciones/eventos por módulo.
              </span>
            </div>
            <div tw="flex items-center justify-between">
              {/* <div tw="flex bg-gray-50 items-center p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  tw="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  tw="bg-gray-50 outline-none ml-1 block "
                  type="text"
                  name=""
                  id=""
                  placeholder="search..."
                />
              </div> */}
              <div tw="inline-flex mt-2 sm:mt-0">
                <select
                  tw="appearance-none block w-full bg-primary-700 text-primary-200 truncate font-medium border border-black rounded-lg px-6 leading-tight 
hover:border-accent duration-75 ease-in-out focus:outline-none"
                  name="category"
                  value={limit}
                  onChange={handleLimitChange}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.5rem center",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  {limitOptions &&
                    limitOptions.map((opcion) => (
                      <option
                        key={opcion}
                        value={opcion}
                      >{`Mostrar ${opcion} resultados.`}</option>
                    ))}
                </select>
                {page > 1 && (
                  <button
                    tw="text-sm transition duration-150 hover:bg-accent-hover text-primary-200 bg-accent font-semibold px-4 rounded-lg ml-2"
                    onClick={() => setPage((page) => page - 1)}
                  >
                    Anterior
                  </button>
                )}
                &nbsp; &nbsp;
                <button
                  tw="text-sm transition duration-150 hover:bg-accent-hover text-primary-200 bg-accent font-semibold px-4 rounded-lg"
                  onClick={() => setPage((page) => page + 1)}
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
          <div>
            <div tw="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
              <div tw="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table tw="min-w-full leading-normal bg-primary-800 shadow-lg border border-primary-700">
                  <thead tw="bg-primary-900 text-primary-200">
                    <tr>
                      <th tw="px-5 py-3 border-b-2 border-primary-700 text-left text-sm font-semibold uppercase tracking-wider">
                        ID
                      </th>
                      <th tw="px-5 py-3 border-b-2 border-primary-700 text-left text-sm font-semibold uppercase tracking-wider">
                        Evento
                      </th>
                      <th tw="px-5 py-3 border-b-2 border-primary-700 text-left text-sm font-semibold uppercase tracking-wider">
                        Módulo
                      </th>
                      <th tw="px-5 py-3 border-b-2 border-primary-700 text-left text-sm font-semibold uppercase tracking-wider">
                        Usuario
                      </th>
                      <th tw="px-5 py-3 border-b-2 border-primary-700 text-left text-sm font-semibold uppercase tracking-wider">
                        Timestamp
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {records &&
                      records.map((record) => (
                        <Row key={record.id} record={record} />
                      ))}
                  </tbody>
                </table>
                <div tw="px-5 py-5  flex flex-col sm:flex-row items-center sm:justify-between bg-primary-800">
                  <span tw="text-sm sm:text-sm text-primary-200">
                    Mostrando 8 de 20 registros.
                  </span>
                  <div tw="inline-flex mt-2 sm:mt-0">
                    {page > 1 && (
                      <button
                        tw="text-sm transition duration-150 hover:bg-accent-hover text-primary-200 bg-accent font-semibold py-2 px-4 rounded-l"
                        onClick={() => setPage((page) => page - 1)}
                      >
                        Anterior
                      </button>
                    )}
                    &nbsp; &nbsp;
                    <button
                      tw="text-sm transition duration-150 hover:bg-accent-hover text-primary-200 bg-accent font-semibold py-2 px-4 rounded-lg"
                      onClick={() => setPage((page) => page + 1)}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

const Row = ({ record }) => {
  return (
    <>
      <tr>
        <td tw="px-5 py-5 border-b border-primary-700 text-sm">
          <p tw="text-primary-400 whitespace-nowrap">{record.id}</p>
        </td>
        <td tw="px-5 py-5 border-b border-primary-700 text-sm">
          <p tw="text-primary-400 whitespace-nowrap">{record.event.event}</p>
        </td>
        <td tw="px-5 py-5 border-b border-primary-700 text-sm">
          <p tw="text-primary-400 whitespace-nowrap">{record.module}</p>
        </td>

        <td tw="px-5 py-5 border-b border-primary-700 text-sm">
          <div tw="flex items-center">
            <div tw="flex-shrink-0 w-10 h-10">
              <img
                tw="w-full h-full rounded-full"
                src={record.user.profile.image_avatar}
                alt=""
              />
            </div>
            <div tw="ml-3">
              <p tw="text-primary-400 whitespace-nowrap">
                {record.user.profile.username}
              </p>
            </div>
          </div>
        </td>
        <td tw="px-5 py-5 border-b border-primary-700 text-sm">
          <p tw="text-primary-400 whitespace-nowrap">
            {new Date(record.created_at).toLocaleString()}
          </p>
        </td>
      </tr>
    </>
  );
};

export default Feed;
