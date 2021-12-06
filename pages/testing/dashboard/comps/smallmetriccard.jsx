import React, { useState, useEffect } from 'react'

import Chart from 'chart.js' // javascipt plugin for creating charts
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2' // react plugin used to create charts

import 'twin.macro'

export default function TotalUsersTopCardd(props) {
  return (
    <>
      <div tw="w-1/4 bg-white p-4 transition-shadow border rounded-lg shadow-sm">
        <MetricCardWithChart title="Total Users" />
      </div>
    </>
  )
}

function MetricCardWithChart(props) {
  const data = {
    labels: month,
    datasets: [
      {
        label: 'First dataset',
        data: [0, 10, 20, 33, 53, 85, 41, 44, 65, 12],
        fill: false,
        borderColor: '#377dff',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  }

  const legend = {
    display: false,
    position: 'bottom',
    labels: {
      fontColor: '#323130',
      fontSize: 14,
    },
  }

  const options = {
    title: {
      display: false,
      text: 'Chart Title',
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
  }

  return (
    <>
      <a
        href="#"
        tw="bg-white p-4 transition-shadow border rounded-lg shadow-sm"
      >
        <div tw="flex items-start">
          <div tw="flex flex-col flex-shrink-0 space-y-2">
            <span tw="text-gray-400">{props.title || 'title_'}</span>
            <span tw="text-lg font-semibold">100,221</span>
          </div>
          <div tw="relative min-w-0 ml-auto h-14">
            <Line data={data} legend={legend} options={options} />
          </div>
        </div>
        <div>
          <span tw="inline-block px-2 mr-2 text-sm text-white bg-green-300 rounded">
            {/* <span tw="inline-block px-2 mr-1 text-sm text-white bg-green-300 rounded">
                 ▲
              </span> */}
            {/* <span tw="inline-block px-2 mr-1 text-sm text-white bg-green-300 rounded">
                ▼
              </span> */}
            14%
          </span>

          <span>from 2019</span>
        </div>
      </a>
    </>
  )
}

// ------------------------------------------------- fake data --------------------------------------------------------

const week = [1, 2, 3, 4, 5, 6, 7]
const month = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
]

const year = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const monthdata = [
  0,
  10,
  20,
  33,
  53,
  85,
  0,
  10,
  20,
  33,
  53,
  85,
  41,
  44,
  65,
  12,
  41,
  44,
  65,
  12,
]
