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
import FormField from "../../components/FormsAuth/FormField";
import moment from "moment";
import axios from "../../lib/client";
import jsPDF from "jspdf";
import { useToasts } from "react-toast-notifications";
import "jspdf-autotable";

const linkz = [
  {
    title: "Reportes",
    path: "/administracion",
  },
  {
    title: "Bitácora",
    path: "/administracion/bitacora",
  },
];

const Reportes = () => {
  const { addToast } = useToasts();
  const { user, isLoading } = useUser({ redirectTo: "/login" });
  const [loading, setLoading] = useState(false);
  const [dateStart, setDateStart] = useState(
    `${new Date(Date.now() - 86400000)}`
  );
  const [dateEnd, setDateEnd] = useState(`${new Date(Date.now())}`);
  const [modulesOptions, setModulesOptions] = useState([
    "USUARIOS",
    "POSTS",
    "COMENTARIOS",
  ]);
  const [mapReportOptions, setMapReportOptions] = useState({
    USUARIOS: ["Usuarios registrados", "Usuarios con mas seguidores"],
    POSTS: ["Posts por usuarios", "Posts publicados"],
    COMENTARIOS: ["Comentarios por usuarios", "Comentarios publicados"],
  });
  const [module, setModule] = useState([]);
  const [reportsOptions, setReportsOptions] = useState([]);
  const [reportType, setReportType] = useState([]);
  const [records, setRecords] = useState([]);
  const [labels, setLabels] = useState([]);
  const [reportKind, setReportKind] = useState(null);
  const [identifier, setIdentifier] = useState(null);
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

  useEffect(() => {
    setReportType([]);
  }, [reportsOptions]);

  useEffect(() => {
    setReportsOptions(mapReportOptions[module]);
    setRecords([]);
    setLabels([]);
  }, [module]);

  useEffect(() => {
    const dateTypeReport = [
      "Usuarios registrados",
      "Posts publicados",
      "Comentarios publicados",
    ];

    if (dateTypeReport.includes(reportType)) {
      setReportKind("date");
      setIdentifier("");
      return;
    }

    const identifierReport = ["Posts por usuarios", "Comentarios por usuarios"];
    if (identifierReport.includes(reportType)) {
      setReportKind("identifier");
      return;
    }

    setReportKind("empty");
  }, [reportType, module]);
  const handleDateChange = (e, type) => {
    if (type === "date_start") {
      setDateStart(e.target.value);
    } else {
      setDateEnd(e.target.value);
    }
  };

  const handleModuleChange = (e) => {
    setModule(e.target.value);
  };

  const handleReportTypeChange = (e) => {
    setReportType(e.target.value);
  };

  const getReport = async () => {
    let url;
    try {
      if (reportKind === "empty") {
        url = `/bitacora/reports?special=1`;
      } else {
        url = `/bitacora/reports?module=${module}&date_start=${moment(
          dateStart
        ).format("DD-MM-yyyy")}&date_end=${moment(dateEnd).format(
          "DD-MM-yyyy"
        )}&identifier=${identifier ? identifier : ""}`;
      }
      const { data } = await axios({
        url,
      });
      setRecords(data.data);
      const makeLabels = Object.keys(data.data[0]).map((record) =>
        record.toUpperCase()
      );
      setLabels(makeLabels);
      addToast("Reporte generado satisfactoriamente.", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const downloadPdf = () => {
    const doc = new jsPDF();
    try {
      console.log("head: ", labels);
      const body = records.map(function (e) {
        return Object.keys(e).map(function (k) {
          return e[k];
        });
      });
      doc.autoTable({
        head: [labels],
        body,
      });

      doc.save(
        `REPORTE_${module}_${
          identifier
            ? `usuario_${identifier}`
            : `desde_${dateStart}_hasta_${dateEnd}`
        }.pdf`
      );
      addToast("PDF generado con éxito.", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (err) {
      console.log(err);
      addToast("Error generando PDF.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
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
          <div tw="w-full">
            <div tw="flex space-x-4">
              <div tw="">
                <div tw="flex items-center space-x-2">
                  <label tw="text-primary-200 font-bold mb-1 block">
                    Módulo:
                  </label>
                  <select
                    tw="appearance-none block w-full bg-primary-700 text-primary-200 truncate font-medium  rounded-lg px-3 leading-tight 
hover:border-accent duration-75 ease-in-out focus:outline-none h-10 w-48"
                    name="category"
                    value={module}
                    onChange={handleModuleChange}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.5rem center",
                      backgroundSize: "1.5em 1.5em",
                    }}
                  >
                    <option selected tw="py-1">
                      Módulo
                    </option>
                    {modulesOptions &&
                      modulesOptions.map((opcion) => (
                        <option key={opcion} value={opcion}>
                          {opcion}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              {reportsOptions && reportsOptions.length >= 1 && (
                <div tw="">
                  <div tw="flex items-center space-x-2">
                    <label tw="text-primary-200 font-bold mb-1 block">
                      TIPO:
                    </label>
                    <select
                      tw="appearance-none block w-full bg-primary-700 text-primary-200 truncate font-medium  rounded-lg px-3 leading-tight 
hover:border-accent duration-75 ease-in-out focus:outline-none h-10 min-w-min"
                      name="category"
                      value={reportType}
                      onChange={handleReportTypeChange}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.5rem center",
                        backgroundSize: "1.5em 1.5em",
                      }}
                    >
                      <option selected tw="py-1">
                        Tipo de reporte
                      </option>
                      {reportsOptions &&
                        reportsOptions.map((opcion) => (
                          <option key={opcion} value={opcion}>
                            {opcion}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              )}

              {reportKind === "identifier" && reportType.length >= 1 && (
                <div tw="flex items-center space-x-2 font-bold">
                  <span tw="text-primary-200">ID:</span>{" "}
                  <input
                    tw="appearance-none block w-full bg-primary-700 text-primary-200 truncate font-medium  rounded-lg px-3 leading-tight 
hover:border-accent duration-75 ease-in-out focus:outline-none h-10 w-48"
                    name="identifier"
                    required="1"
                    type="text"
                    onChange={(e) => setIdentifier(e.target.value)}
                  />
                </div>
              )}

              {reportKind === "date" && reportType.length >= 1 && (
                <div tw="flex items-center space-x-2 font-bold">
                  <span tw="text-primary-200">Desde:</span>{" "}
                  <input
                    tw="appearance-none block w-full bg-primary-700 text-primary-200 truncate font-medium  rounded-lg px-3 leading-tight 
hover:border-accent duration-75 ease-in-out focus:outline-none h-10 w-48"
                    name="date_start"
                    value={`${moment(dateStart).format("yyyy-MM-DD")}`}
                    required="1"
                    type="date"
                    onChange={(e) => handleDateChange(e, "date_start")}
                  />
                </div>
              )}
              {reportKind === "date" && reportType.length >= 1 && (
                <div tw="flex items-center space-x-2 font-bold">
                  <span tw="text-primary-200">Hasta:</span>{" "}
                  <input
                    tw="appearance-none block w-full bg-primary-700 text-primary-200 truncate font-medium  rounded-lg px-3 leading-tight 
hover:border-accent duration-75 ease-in-out focus:outline-none h-10 w-48"
                    name="date_end"
                    value={moment(dateEnd).format("yyyy-MM-DD")}
                    required="1"
                    type="date"
                    onChange={(e) => handleDateChange(e, "date_end")}
                  />
                </div>
              )}
              {true && (
                <button
                  tw="bg-accent hover:bg-accent-hover px-4 py-2 text-primary-200 w-full font-bold uppercase rounded-lg w-48"
                  onClick={getReport}
                >
                  Generar reporte
                </button>
              )}
            </div>
          </div>
        </div>

        {records && records.length > 0 && (
          <div tw="flex justify-end">
            <button
              tw="bg-accent hover:bg-accent-hover px-4 py-2 text-primary-200 w-full font-bold uppercase rounded-lg mb-2 w-52"
              onClick={downloadPdf}
            >
              Descargar en PDF
            </button>
          </div>
        )}
        <table tw="min-w-full leading-normal bg-primary-800 shadow-lg border border-primary-700">
          <thead tw="bg-primary-900 text-primary-200">
            <tr>
              {labels &&
                labels.map((record, i) => <Label key={i}>{record}</Label>)}
            </tr>
          </thead>
          <tbody>
            {records &&
              records.map((record) => (
                <Row key={record.id} record={record} labels={labels} />
              ))}
          </tbody>
        </table>
        {/* <div tw="w-full">
          <div tw="bg-primary-900 w-full">
            {reportType === "Barras" && (
              <ChartBar
                chartData={data}
                meta={meta}
                location="Massachusetts"
                legendPosition="bottom"
                dateStart={moment(dateStart).format("DD-MM-yyyy")}
                dateEnd={moment(dateEnd).format("DD-MM-yyyy")}
              />
            )}
            {reportType === "Circular" && (
              <ChartPie
                chartData={data}
                meta={meta}
                location="Massachusetts"
                legendPosition="bottom"
                dateStart={moment(dateStart).format("DD-MM-yyyy")}
                dateEnd={moment(dateEnd).format("DD-MM-yyyy")}
              />
            )}
          </div>
          <div tw="lg:w-56 lg:h-24" />
        </div> */}
      </Layout>
    </>
  );
};

const ChartBar = ({ chartData, meta, dateStart, dateEnd }) => {
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
                  data: [
                    258,
                    149,
                    278,
                    333,
                    447,
                    612,
                    258,
                    149,
                    278,
                    333,
                    447,
                    612,
                  ],
                  backgroundColor: [
                    "#9dc6e0",
                    "#c1e7ff",
                    "#9dc6e0",
                    "#7aa6c2",
                    "#5886a5",
                    "#346888",
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
                  Desde:{" "}
                  <span tw="font-bold text-primary-200">{`${dateStart}`}</span>
                </span>
                <span tw="font-light">
                  Hasta:{" "}
                  <span tw="font-bold text-primary-200">{`${dateEnd}`}</span>
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
    </div>
  );
};

const ChartPie = ({ chartData, meta, dateStart, dateEnd }) => {
  return (
    <div>
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

const Label = ({ children }) => {
  return (
    <th tw="px-5 py-3 border-b-2 border-primary-700 text-left text-sm font-semibold uppercase tracking-wider">
      {children}
    </th>
  );
};

const Row = ({ record, labels }) => {
  return (
    <>
      <tr>
        {labels &&
          labels.map((label, i) => {
            if (i !== labels.length - 1)
              return (
                <td key={i} tw="px-5 py-5 border-b border-primary-700 text-sm">
                  <p tw="text-primary-400 whitespace-nowrap">
                    {record[label.toLowerCase()]}
                  </p>
                </td>
              );
          })}
        <td tw="px-5 py-5 border-b border-primary-700 text-sm">
          <p tw="text-primary-400 whitespace-nowrap">
            {moment(record[labels.length - 1]).format("DD-MM-yyyy")}
          </p>
        </td>
      </tr>
    </>
  );
};

export default Reportes;
