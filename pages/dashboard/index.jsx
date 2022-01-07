/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import "twin.macro";
import Layout from "../../components/Layout";
import useUser from "../../lib/useUser";
import PageLoader from "../../components/PageLoader";
import Navbar from "../../components/Navbar/NavbarAlt";
import Overview from "./Overview";
import TrafficSources from "./TrafficSources";

const DashboardPage = () => {
  const { user, isLoading } = useUser({ redirectTo: "/login" });
  if (isLoading || user.is_logged_in === false) {
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
        <title>Shoutmo - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Dashboard</h1>
          <Navbar />
        </div>
        <div tw="w-full border-b border-primary-700 mb-4" />
        <div tw="md:flex md:justify-between">
          <div tw="w-full mb-4">
            <span tw="text-sm text-primary-400 mb-4 w-full">
              Last 28 days summary
            </span>
            <div tw="w-full space-y-9 pt-9">
              <Overview />
              <TrafficSources />
              {/* when we add payments */}
              {/* <SupportersCard /> */}
              {/* <DonationsTable /> */}
            </div>
          </div>
          <div tw="lg:w-56 lg:h-24" />
        </div>
      </Layout>
    </>
  );
};

function SupportersCard() {
  return (
    <>
      <div tw="bg-primary-800 rounded-xl divide-y">
        <p tw="p-6 font-semibold text-white">Supporters</p>
        <div tw="flex flex-col justify-center">
          <Supporter />
          <Supporter />
          <Supporter />
          <Supporter />
          <Supporter />
        </div>
      </div>
    </>
  );
}

function DonationsTable() {
  return (
    <>
      <div tw="mt-4 mx-4">
        <div tw="w-full overflow-hidden rounded-lg">
          <div tw="w-full overflow-x-auto">
            <table tw="w-full">
              <thead>
                <tr tw="text-xs font-semibold tracking-wide text-left text-gray-400 uppercase border-b bg-primary-800">
                  <th tw="px-4 py-3">Supporter</th>
                  <th tw="px-4 py-3">Amount</th>
                  <th tw="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody tw="bg-white divide-y">
                <Tablerow />
              </tbody>
            </table>
          </div>
          <div tw="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-primary-800  sm:grid-cols-9    ">
            <span tw="flex items-center col-span-3">
              {" "}
              Showing 21-30 of 100{" "}
            </span>
            <span tw="col-span-2" />
            {/* <!-- Pagination --> */}
            <span tw="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul tw="inline-flex items-center">
                  <li>
                    <button
                      type="button"
                      tw="px-3 py-1 rounded-md rounded-l-lg focus:outline-none"
                      ariaLabel="Previous"
                    >
                      <svg
                        ariaHidden="true"
                        tw="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      tw="px-3 py-1 rounded-md focus:outline-none  "
                    >
                      1
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      tw="px-3 py-1 rounded-md focus:outline-none  "
                    >
                      2
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      tw="px-3 py-1 text-white   transition-colors duration-150 bg-blue-600   border border-r-0 border-blue-600  rounded-md focus:outline-none  "
                    >
                      3
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      tw="px-3 py-1 rounded-md focus:outline-none  "
                    >
                      4
                    </button>
                  </li>
                  <li>
                    <span tw="px-3 py-1">...</span>
                  </li>
                  <li>
                    <button
                      type="button"
                      tw="px-3 py-1 rounded-md focus:outline-none  "
                    >
                      8
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      tw="px-3 py-1 rounded-md focus:outline-none  "
                    >
                      9
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      tw="px-3 py-1 rounded-md rounded-r-lg focus:outline-none  "
                      aria-label="Next"
                    >
                      <svg
                        tw="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function Supporter() {
  return (
    <>
      <div tw="flex flex-row w-full items-center px-6 py-3">
        <div tw="flex flex-grow justify-start space-x-2 items-center">
          <img
            tw="block h-10 rounded-full sm:mx-0 sm:flex-shrink-0"
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="supporterimg"
          />

          <p tw="text-lg text-white font-semibold">Erin Lindford</p>
          <p tw="text-gray-100 font-medium">@username</p>
        </div>
        <div tw="flex flex-grow justify-between space-x-2 items-center">
          <p tw="text-gray-100 font-medium">7/11/2021</p>
          <p tw="text-gray-100 font-medium">$50</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            tw="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

function Tablerow() {
  return (
    <>
      <tr tw="bg-primary-800 text-gray-400 ">
        <td tw="px-4 py-3">
          <div tw="flex items-center text-sm">
            <div tw="relative hidden w-8 h-8 mr-3 rounded-full md:block">
              <img
                tw="object-cover w-full h-full rounded-full"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt=""
                loading="lazy"
              />
              <div
                tw="absolute inset-0 rounded-full shadow-inner"
                ariaHidden="true"
              />
            </div>
            <div>
              <p tw="font-semibold">Hans Burger</p>
              <p tw="text-xs text-gray-400 ">@username</p>
            </div>
          </div>
        </td>
        <td tw="px-4 py-3 text-sm">$855.85</td>

        <td tw="px-4 py-3 text-sm">15-01-2021</td>
      </tr>
    </>
  );
}

function RowTitles() {
  return (
    <>
      <div tw="flex flex-row w-full items-center px-6 py-3 justify-around">
        <div tw="flex flex-row justify-start space-x-2 items-start">
          <p tw="text-gray-100 font-medium">title1</p>
        </div>
        <div tw="flex flex-row space-x-2 items-center">
          <p tw="text-gray-100 font-medium">title2</p>
        </div>
        <div tw="flex flex-row space-x-2 items-center">
          <p tw="text-gray-100 font-medium">title3</p>
        </div>
      </div>
      <NewDataRowLayout />
    </>
  );
}

function NewDataRow() {
  return (
    <>
      <div tw="flex flex-row w-full items-center px-6 py-3 justify-between">
        <p tw="text-gray-100 font-medium">facebook</p>
        <div tw="flex flex-row space-x-2 items-center">
          {/* <PercentageBar title="facebook" percentage={10} /> */}
          <p tw="text-sm text-gray-100 font-bold">{10}%</p>
        </div>
        <p tw="text-gray-100 font-medium">99</p>
      </div>
    </>
  );
}

function NewDataRowLayout() {
  return (
    <>
      <div tw="flex flex-row w-full items-center px-6 py-3 justify-between">
        <p tw="text-gray-100 font-medium">Location</p>
        <p tw="text-gray-100 font-medium">Percentage</p>
        <p tw="text-gray-100 font-medium">Count</p>
      </div>
      <NewDataRow />
    </>
  );
}

function TopCardsSection() {
  return (
    <>
      {/* <div tw="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div tw="container max-w-6xl px-5 mx-auto my-28">
          <div tw="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            <TopCard />
          </div>
        </div>
      </div> */}
      <TopCard />
    </>
  );
}

function TopCard() {
  return (
    <>
      <div tw="p-5 bg-primary-800 rounded-xl shadow-sm text-white">
        <div tw="font-semibold text-white">Total Views</div>
        <div tw="flex items-center pt-1">
          <div tw="text-2xl font-bold text-gray-200">204</div>
          {/* add in later if we want to get fancy */}
          {/* <ShowDiffPill /> */}
        </div>
      </div>
    </>
  );
}

function ShowDiffPill() {
  return (
    <>
      <span tw="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
        <svg
          tw="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>1.8%</span>
      </span>
    </>
  );
}

function OverviewCardWithPayments() {
  return (
    <>
      <div tw="w-full bg-primary-800 text-white | py-4 rounded-xl | divide-x divide-white | flex justify-start">
        <div tw="w-1/4 flex flex-col leading-6 font-bold items-center">
          <p>Views</p>
          <p tw="font-bold text-2xl">205</p>
        </div>

        {/* when we add payments make this conditional based on if user has connected_acct (has the user setup their stripe accot ) */}
        <div tw="w-1/4 flex flex-col leading-6 font-bold items-center">
          <p>Tips</p>
          <p tw="font-bold text-2xl">$25</p>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
