import React, { useState, useEffect } from "react";

import { FaAngleRight, FaUser, FaCheck } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";

import "twin.macro";

const iconSize = 36;

export default function Basic() {
  return (
    <>
      <div tw="text-gray-900 bg-gray-200">
        <div tw="p-4 flex">
          <h1 tw="text-3xl">Email Dashboard</h1>
        </div>
      </div>

      <ExplainerCard />
      <EmailTable />

      {/* <ButtonsArea /> */}
    </>
  );
}

function ButtonsArea() {
  return (
    <>
      <div tw="container mx-auto">
        <div tw="bg-black flex text-white w-full">
          <div tw="flex w-full mb-4">
            <p>Here are your options</p>
            <DownloadButton />
          </div>
        </div>
      </div>
    </>
  );
}

function EmailTable() {
  return (
    <>
      <div tw="container mx-auto">
        <div tw="flex flex-row my-4 justify-between content-center items-center">
          <p tw="">Users that have signed up for your emails.</p>
          <DownloadButton />
        </div>

        <table tw="text-left w-full bg-white shadow-md mb-4 border border-gray-400">
          <TableHead />

          <tbody
            tw="flex flex-col items-center justify-between overflow-y-scroll w-full"
            style={{ height: 50 + "vh" }}
          >
            <TableRows />
          </tbody>
        </table>
      </div>
    </>
  );
}

function TableHead() {
  return (
    <>
      {/* <table class="w-full text-md bg-white shadow-md rounded mb-4"> */}

      <thead tw="flex w-full">
        <tr
          tw="flex w-full uppercase border-b border-gray-400
        
        py-3 px-6 bg-gray-200 font-bold text-sm text-gray-800
        
        "
        >
          <th tw="text-left flex-grow">Email</th>
          <th tw="text-left w-1/4">Fan</th>
          <th tw="text-left w-1/4">Sign up date</th>
          {/* <th tw="text-left w-1/4">Four</th> */}
        </tr>
      </thead>
    </>
  );
}

function TableRow() {
  return (
    <>
      <tr tw="flex w-full border-b text-sm py-2 px-6 ">
        <td tw="flex-grow">user@example.com</td>

        <td tw="w-1/4">
          <FaCheck />
        </td>

        <td tw="w-1/4">
          <RandomDateGenerator />
        </td>

        {/* <td tw="w-1/4">Fish</td> */}
      </tr>
    </>
  );
}

function TableRows() {
  return (
    <>
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </>
  );
}

function DownloadButton({ onClick }) {
  function onClick() {
    console.log("download csv file button clicked.");
  }
  return (
    <>
      <button
        tw="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mt-4 py-2 px-4 rounded inline-flex items-center shadow"
        onClick={onClick}
      >
        <svg
          tw="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download CSV</span>
      </button>

      {/* 
      <button
        tw="flex flex-row w-full text-white hover:text-white bg-purple-500 hover:bg-purple-400 border border-purple-500 hover:border-purple-400 font-semibold rounded-xl px-4 py-3 leading-normal justify-between mb-3"
        //   onClick={buttonAction}
      >
        <div tw="">
          <HiOutlineClipboardList size={iconSize} />
        </div>
        <div tw="items-center">{props.name}</div>
        <div tw="">
          <HiOutlineClipboardList size={iconSize} />
        </div>
      </button> */}
    </>
  );
}

function RandomDateGenerator() {
  let rando = Math.floor(Math.random() * 29);
  let text = `${"11/" + rando + "/2020"}`;
  return text;
}

// <div tw="flex flex-col h-screen">
// <Navbar />

// <div tw="bg-yellow-400 py-8">my navbar</div>
// <div tw="bg-green-400 flex justify-center items-center flex-grow">
//   this content is not centered on screen
// </div>
// <div tw="bg-blue-400 flex justify-center items-center flex-grow">
//   this content is not centered on screen
// </div>
// </div>

function ExplainerCard(props) {
  return (
    <>
      <div
        tw="flex flex-row w-full h-auto items-center rounded-lg text-white shadow-lg container mx-auto my-4 bg-purple-500 border border-purple-600"
        // tw="flex flex-row w-full text-white border border-purple-400 font-semibold rounded-xl px-4 py-3 leading-normal justify-between mb-3"
        // style={{
        //   background: "rgba(0, 0, 26, .9)",
        //   color: "white",
        // }}
      >
        <div tw="inline-block align-middle p-6">
          <HiOutlineClipboardList size={72} color="white" />
        </div>

        <div tw="sm:text-xl font-extrabold mx-6 py-8 text-left">
          {/* <p tw="mt-2 font-mono"> */}
          <p tw="mt-2">
            Here is a list of emails for people who have signed up for your
            newsletter.
            <br />
            Click the download button to save this list as a csv file for easy
            importing into your newsletter service.
          </p>
        </div>
      </div>
    </>
  );
}
