import React, { useState, useEffect } from 'react'

import NotLoggedInNavbar from '../../../../components/NavbarForNonLoggedInUsers'
import Chart from 'chart.js' // javascipt plugin for creating charts
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2' // react plugin used to create charts

import 'twin.macro'

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

export default function Barchart(props) {
  return (
    <>
      <div tw="w-1/3 bg-white p-4 transition-shadow border rounded-lg shadow-sm">
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </>
  )
}
