import React, { useState, useEffect } from 'react'

import Chart from 'chart.js' // javascipt plugin for creating charts
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2' // react plugin used to create charts

import 'twin.macro'

export default function AdminDashboard() {
  return (
    <>
      <NewLinksForm />
    </>
  )
}
function NewLinksForm() {
  return (
    <>
      <div tw="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div tw="relative py-3 sm:max-w-xl sm:mx-auto">
          <div tw="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div tw="max-w-md mx-auto">
              <h2 tw="text-gray-900 text-lg mb-1 font-medium ">Add New Link</h2>
              <p tw="text-xs text-gray-500 mt-3 mb-2">
                Instructions for how to add a new link to the DB.
              </p>

              <div tw="divide-y divide-gray-200">
                <div tw="py-8 leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div tw="relative mb-4">
                    <label for="platform" tw="leading-7 text-sm text-gray-600">
                      platform
                    </label>
                    <input
                      type="platform"
                      id="platform"
                      name="platform"
                      tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div tw="relative mb-4">
                    <label
                      for="platformurl"
                      tw="leading-7 text-sm text-gray-600"
                    >
                      platform url
                    </label>
                    <input
                      type="platformurl"
                      id="platformurl"
                      name="platformurl"
                      tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div tw="relative mb-4">
                    <label for="icon" tw="leading-7 text-sm text-gray-600">
                      icon
                    </label>
                    <input
                      type="icon"
                      id="icon"
                      name="icon"
                      tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button tw="float-right mb-12 text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
