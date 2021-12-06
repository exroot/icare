import React, { useState, useEffect } from 'react'

import 'twin.macro'

export default function AdminDashboardLogin() {
  return (
    <>
      <div tw="max-w-lg max-w-xs bg-black shadow-2xl rounded-lg mx-auto text-center py-12 mt-4 rounded-xl">
        <h1 tw="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
          Login
        </h1>
        {/* <h1 tw="text-gray-200 text-center font-extrabold -mt-3 text-3xl">
          Enter 2FA
        </h1> */}
        <div tw="container py-5 max-w-md mx-auto">
          <form method="" action="">
            <div tw="mb-6 space-y-4">
              <input
                placeholder="Username"
                tw="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none"
                id="username"
                type="text"
              />
              <input
                placeholder="Password"
                tw="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                id="password"
                type="password"
              />
              <input
                placeholder="2fa"
                tw="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                id="2fa"
                type="text"
              />
            </div>

            <div tw="flex items-center justify-between">
              {/* <button
                tw="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full"
                type="button"
              >
                Sign In
              </button> */}

              <button
                tw="border-2 border-indigo-500 hover:bg-indigo-500 hover:text-gray-100 mt-3 text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold w-full"
                type="button"
              >
                Sign In
              </button>

              {/* <a
                tw="inline-block align-baseline font-bold text-sm text-gray-400 "
                href="#"
              >
                Forgot Password?
              </a> */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
