import React, { useState, useEffect } from 'react'

import NotLoggedInNavbar from '../../../../components/NavbarForNonLoggedInUsers'
import Chart from 'chart.js' // javascipt plugin for creating charts
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2' // react plugin used to create charts

import 'twin.macro'

export default function PiechartTest(props) {
  const data = {
    labels: ['Youtube', 'Twitter', 'Instagram', 'Twitch', 'Other'],
    datasets: [
      {
        data: [300, 200, 100, 160, 120],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#800080',
          '#a9a9a9',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#800080',
          '#a9a9a9',
        ],
      },
    ],
  }

  return (
    <>
      <div tw="w-1/3 bg-white p-4 transition-shadow border rounded-lg shadow-sm">
        <h2>Top Traffic Sources</h2>
        <Pie tw="mx-auto" data={data} width={400} height={400} />
      </div>
    </>
  )
}
