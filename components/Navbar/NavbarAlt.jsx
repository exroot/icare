import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { RiMenuLine } from 'react-icons/ri'
import { trigger, cache } from 'swr'
import localforage from 'localforage'
import NotificationsDropdownAlt from './NotificationDropdownAlt'
import ProfileDropdownAlt from './ProfileDropdownAlt'
import useUser from '../../lib/useUser'
import axios from '../../lib/client'
import redirectTo from '../../utils/redirectTo'
import 'twin.macro'

const Navbar = ({ setIsSidebarOpen }) => {
  const { user, isLoading, mutateUser, error } = useUser({
    oneCall: true,
  })
  const [dropdownActive, setDropdownActive] = useState({
    notifications: false,
    profile: false,
  })
  const handleLogout = async () => {
    try {
      const body = {
        refresh_token: localStorage.getItem('refresh'),
        device_token: await localforage.getItem('fcm_token'),
      }
      const { data } = await axios({
        url: '/auth/logout/',
        method: 'POST',
        body,
      })
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      await mutateUser({ ...user, is_logged_in: false }, false)
      await trigger('/auth/me')
      cache.clear()
      redirectTo('/login')
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  return (
    <nav tw="hidden lg:flex flex-shrink-0 h-16 bg-transparent z-10">
      <button
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        tw="px-4 
                 duration-300 ease-in-out
                hover:bg-background-secondary focus:bg-background-secondary md:hidden"
        aria-label="Open sidebar"
      >
        <RiMenuLine tw="text-2xl" />
      </button>
      <div tw="flex-1 px-4 flex justify-between">
        {/* Left side of Navbar */}
        <div tw="flex-1 flex" />

        <div tw="ml-4 flex items-center md:ml-6">
          <NotificationsDropdownAlt
            dropdownActive={dropdownActive}
            setDropdownActive={setDropdownActive}
          />
          {/* Profile dropdown */}
          <div tw="ml-3 mr-6">
            <ProfileDropdownAlt
              dropdownActive={dropdownActive}
              setDropdownActive={setDropdownActive}
              userData={user}
              handleLogout={handleLogout}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  setIsSidebarOpen: PropTypes.func,
}
export default Navbar
