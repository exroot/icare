import React, { useState, useEffect } from 'react'

import Chart from 'chart.js' // javascipt plugin for creating charts
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2' // react plugin used to create charts

import 'twin.macro'

export default function LargeMetricCardWithChartTest(props) {
  // look something like this? - https://codepen.io/ScottWindon/pen/wvMVMNG

  const data = {
    labels: month,
    datasets: [
      {
        label: 'First dataset',
        data: [0, 1, 20, 13, 23, 45, 51, 33, 93, 20, 12, 0, 2, 20],
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

  const biggraphoptions = {
    title: {
      display: false,
      text: 'Chart Title',
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: { display: true },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: { display: true },
          gridLines: {
            display: true,
            drawBorder: false,
          },
        },
      ],
    },
  }

  return (
    <>
      {/* <div tw="bg-white my-12 p-4 border hover:border-blue-400 rounded-lg shadow-lg hover:bg-blue-100"> */}
      <div tw="bg-white my-12 p-4 border rounded-lg shadow-lg">
        {/* title  */}

        <div tw="flex items-start">
          <div tw="flex flex-col flex-shrink-0 space-y-2">
            <span tw="text-gray-400">Revenue</span>
            <span tw="text-lg font-semibold">$1,221</span>
          </div>
        </div>
        {/* graph  */}
        <div tw="min-w-0 h-24">
          <Line data={data} legend={legend} options={biggraphoptions} />
        </div>
      </div>
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
