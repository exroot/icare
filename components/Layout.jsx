/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Sidebar from './Navigation/Sidebar'
import BottomMenu from './Navigation/BottomNavigation'
import TopNavbar from './Navigation/TopNavbar'
import 'twin.macro'

const Layout = ({ children }) => (
  <>
    <div tw="flex justify-between h-full min-h-screen">
      {/* Sidebar / Mobile Navbar  */}
      <header tw="items-end flex-col flex-grow md:flex-none sm:pr-0 md:pr-4 lg:pr-16 relative z-10 bg-primary-900 border-0 md:border-r md:border-primary-700">
        {/* Nav wrapper */}
        <div tw="-mt-5 hidden md:flex">
          {/* Sidebar */}
          <Sidebar />
        </div>
        <div tw="md:hidden">
          <TopNavbar />
        </div>
        <BottomMenu />
      </header>

      {/* Main content */}
      <main tw="relative flex-grow min-w-0 w-full bg-primary-900">
        <div
          tw="w-auto px-2 sm:px-8 pt-20 md:pt-6 pb-24"
          style={{ width: 'auto' }}
        >
          {children}
        </div>
      </main>
    </div>
  </>
)

export default Layout
