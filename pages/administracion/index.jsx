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
import { Bar, Line, Pie } from "react-chartjs-2";
import data from "@iconify/icons-bx/bxs-up-arrow-square";

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

const Reportes = () => {
  const { user, isLoading } = useUser({ redirectTo: "/login" });
  const [rangetime, setRangetime] = useState([
    "1 dia",
    "1 semana",
    "1 mes",
    "3 meses",
    "6 meses",
    "1 año",
    "Siempre",
  ]);
  const [range, setRange] = useState(rangetime[4]);
  const [data, setData] = useState({
    labels: [
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Registros",
        data: [258, 149, 278, 333, 447, 612],
        backgroundColor: [
          "#9dc6e0",
          "#c1e7ff",
          "#9dc6e0",
          "#7aa6c2",
          "#5886a5",
          "#346888",
          "#004c6d",
        ],
      },
    ],
  });

  const loadMore = useCallback(async () => setSize((i) => i + 1));
  const handleRangetimeChange = (e) => {
    setRange(e.target.value);
  };

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
  const meta = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
  };
  return (
    <>
      <Head>
        <title>iCare - Administración - Reportes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Reportes</h1>
          <Navbar />
        </div>
        <TabMenu links={linkz} />
        <div tw="w-auto my-8">
          <div tw="w-48">
            <label tw="text-primary-200 font-bold mb-1 block">Rango:</label>
            <select
              tw="appearance-none block w-full bg-primary-700 text-primary-200 truncate font-medium border border-black rounded-lg px-6 leading-tight 
hover:border-accent duration-75 ease-in-out focus:outline-none h-10"
              name="category"
              value={range}
              onChange={handleRangetimeChange}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.5rem center",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              {rangetime &&
                rangetime.map((opcion) => (
                  <option key={opcion} value={opcion}>
                    {opcion}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div tw="md:flex md:justify-between w-full">
          <div tw="bg-primary-900 w-full">
            <Chart
              chartData={data}
              meta={meta}
              location="Massachusetts"
              legendPosition="bottom"
            />
          </div>
          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  );
};

const Chart = ({ chartData, meta }) => {
  return (
    <div className="chart" tw="w-full">
      <div tw="w-full flex justify-between mb-16">
        <div tw="w-full">
          <Bar
            data={{
              labels: [
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
              ],
              datasets: [
                {
                  label: "Registros",
                  data: [258, 149, 278, 333, 447, 612],
                  backgroundColor: [
                    "#9dc6e0",
                    "#c1e7ff",
                    "#9dc6e0",
                    "#7aa6c2",
                    "#5886a5",
                    "#346888",
                    "#004c6d",
                  ],
                },
              ],
            }}
            options={{
              title: {
                display: meta.displayTitle,
                text: "Usuarios registrados (6 meses)",
                fontSize: 25,
                fontColor: "#fff",
              },
              legend: {
                display: meta.displayLegend,
                position: meta.legendPosition,
                labels: {
                  fontColor: "#fff",
                  fontSize: 16,
                },
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: "white",
                      fontSize: 10,
                      beginAtZero: true,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: "white",
                      fontSize: 10,
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
        </div>

        <div tw="max-w-sm bg-primary-800 shadow-lg rounded-lg px-6 pt-10 justify-end text-justify">
          <div tw="mb-4">
            <h3 tw="text-xl text-primary-200 font-bold">
              Reporte de registros
            </h3>
            <p tw="text-primary-400 mt-1 text-base ">
              Este reporte es generado automáticamente con información del
              servidor.
            </p>
          </div>
          <div tw="space-y-4">
            <div tw="text-primary-400 space-y-1">
              <span tw="font-bold text-primary-200">Rango del reporte:</span>
              <div tw="space-x-2">
                <span tw="font-light">
                  Desde: <span tw="font-bold text-primary-200">13-06-2021</span>
                </span>
                <span tw="font-light">
                  Hasta: <span tw="font-bold text-primary-200">12-12-2021</span>
                </span>
              </div>
            </div>
            <div>
              <span tw="text-primary-200">
                <span tw="text-primary-200 font-bold">
                  {`${chartData.datasets[0].data.reduce(
                    (cont, el) => cont + el
                  )} `}
                </span>
                usuarios registrados los últimos 6 meses.
              </span>
            </div>
          </div>
          <div tw="mt-8 w-full">
            <button tw="bg-accent hover:bg-accent-hover px-4 py-2 text-primary-200 w-full font-bold uppercase rounded-lg">
              Descargar reporte
            </button>
          </div>
        </div>
      </div>

      <span tw="border-t w-full border-primary-800 block mb-16"></span>

      <Pie
        data={{
          labels: [
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
          datasets: [
            {
              label: "Posts",
              data: [190, 242, 450, 550, 790, 985],
              backgroundColor: [
                "#9dc6e0",
                "#c1e7ff",
                "#9dc6e0",
                "#7aa6c2",
                "#5886a5",
                "#346888",
                "#004c6d",
              ],
            },
          ],
        }}
        options={{
          title: {
            display: meta.displayTitle,
            text: "Distribucion de actividad (Posts creados por mes - 6 meses)",
            fontSize: 25,
            fontColor: "#fff",
          },
          legend: {
            display: meta.displayLegend,
            position: meta.legendPosition,
            labels: {
              fontColor: "#fff",
              fontSize: 16,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontColor: "white",
                  fontSize: 10,
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "white",
                  fontSize: 10,
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
      <div tw="mt-8 w-full">
        <button tw="bg-accent hover:bg-accent-hover px-4 py-2 text-primary-200 w-full font-bold uppercase rounded-lg">
          Descargar reporte
        </button>
      </div>
    </div>
  );
};

export default Reportes;
