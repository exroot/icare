import React, { useState, useEffect } from 'react'

import Chart from 'chart.js' // javascipt plugin for creating charts
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2' // react plugin used to create charts

import { FaFolderOpen } from 'react-icons/fa'
import 'twin.macro'

export default function AdminDashboard() {
  return (
    <>
      <NewUserForm />
    </>
  )
}

function NewUserForm() {
  return (
    <>
      <div tw="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div tw="relative py-3 sm:max-w-xl sm:mx-auto">
          <div tw="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div tw="max-w-md mx-auto">
              <h2 tw="text-gray-900 text-lg mb-1 font-medium ">Add User</h2>
              <p tw="text-xs text-gray-500 mt-3 mb-12">
                Add a new user here that you are onboarding.
              </p>

              <div tw="relative mb-4">
                <label for="firstname" tw="leading-7 text-sm text-gray-600">
                  First Name
                </label>

                <input
                  type="firstname"
                  id="firstname"
                  name="firstname"
                  tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div tw="relative mb-4">
                <label for="lastname" tw="leading-7 text-sm text-gray-600">
                  Last Name
                </label>
                <input
                  type="lastname"
                  id="lastname"
                  name="lastname"
                  tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div tw="relative mb-4">
                <label for="email" tw="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div tw="relative mb-4">
                <label for="username" tw="leading-7 text-sm text-gray-600">
                  Username
                </label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div tw="relative mb-4">
                <label for="password" tw="leading-7 text-sm text-gray-600">
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password1337"
                  tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <p tw="text-xs text-gray-500 mt-3 mb-12">
                  Password will be auto-generated and sent to user in email.
                  After the user logs in they can change their password.
                </p>
              </div>

              <div tw="relative mb-4">
                <label for="notes" tw="leading-7 text-sm text-gray-600">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="add whatever note you want here about the client."
                  tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>

              <h2 tw="text-gray-900 text-lg mb-1 font-medium ">Location</h2>

              <div tw="relative mb-4">
                <label for="city" tw="leading-7 text-sm text-gray-600">
                  City
                </label>
                <input
                  type="city"
                  id="city"
                  name="city"
                  tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div tw="relative mb-4">
                <label for="country" tw="leading-7 text-sm text-gray-600">
                  Country
                </label>
                <input
                  type="country"
                  id="country"
                  name="country"
                  tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div tw="divide-y divide-gray-200">
                <div tw="py-8 leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h2 tw="text-gray-900 text-lg mb-1 font-medium ">Links</h2>

                  <div tw="relative mb-4">
                    <label for="twitter" tw="leading-7 text-sm text-gray-600">
                      Twitter
                    </label>
                    <input
                      type="twitter"
                      id="twitter"
                      name="twitter"
                      tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div tw="relative mb-4">
                    <label for="youtube" tw="leading-7 text-sm text-gray-600">
                      Youtube
                    </label>
                    <input
                      type="youtube"
                      id="youtube"
                      name="youtube"
                      tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div tw="relative mb-4">
                    <label for="twitch" tw="leading-7 text-sm text-gray-600">
                      Twitch
                    </label>
                    <input
                      type="twitch"
                      id="twitch"
                      name="twitch"
                      tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <div tw="relative mb-4">
                    <label for="github" tw="leading-7 text-sm text-gray-600">
                      Github
                    </label>
                    <input
                      type="github"
                      id="github"
                      name="github"
                      tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                  <h2 tw="text-gray-900 text-lg mb-1 font-medium ">Meta</h2>

                  <div tw="relative mb-4">
                    <label for="about" tw="leading-7 text-sm text-gray-600">
                      About
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      placeholder="tell the people about yourself"
                      tw="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>

                  {/* upload photos start  */}

                  <div>
                    <h2 tw="text-gray-900 text-lg mb-1 font-medium ">
                      Upload Avatar Photo
                    </h2>

                    <div tw="relative mb-4">
                      <div tw=" h-full bg-white px-2">
                        <div tw="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                          <div tw="md:flex">
                            <div tw="w-full p-3">
                              <div tw="relative border-dotted h-48 rounded-lg border-dashed border-2 border-gray-500 bg-gray-100 flex justify-center items-center">
                                <div tw="absolute">
                                  <div tw="flex flex-col items-center">
                                    <FaFolderOpen
                                      tw="mx-auto h-12 text-gray-500"
                                      size={48}
                                    />
                                    <span tw="block text-gray-500 font-normal">
                                      Attach you files here
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="file"
                                  tw="h-full w-full opacity-0"
                                  name=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 tw="text-gray-900 text-lg mb-1 font-medium ">
                      Upload Banner Photo
                    </h2>

                    <div tw="relative mb-4">
                      <div tw=" h-full bg-white px-2">
                        <div tw="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                          <div tw="md:flex">
                            <div tw="w-full p-3">
                              <div tw="relative border-dotted h-48 rounded-lg border-dashed border-2 border-gray-500 bg-gray-100 flex justify-center items-center">
                                <div tw="absolute">
                                  <div tw="flex flex-col items-center">
                                    <FaFolderOpen
                                      tw="mx-auto h-12 text-gray-500"
                                      size={48}
                                    />
                                    <span tw="block text-gray-500 font-normal">
                                      Attach you files here
                                    </span>
                                  </div>
                                </div>
                                <input
                                  type="file"
                                  tw="h-full w-full opacity-0"
                                  name=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* upload photos end  */}
                </div>
              </div>
              <button tw="float-right mb-12 text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
