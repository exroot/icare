/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { VscBell } from 'react-icons/vsc'
import { CgFeed } from 'react-icons/cg'
import tw, { css } from 'twin.macro'
import useUser from '../../lib/useUser'

const BottomNavigation = () => {
  const { pathname } = useRouter()
  const { user } = useUser({
    oneCall: true,
  })
  const userIsLoggedIn = user && user.is_logged_in
  return (
    <>
      {userIsLoggedIn ? (
        <section
          id="bottom-nav"
          tw="block md:hidden fixed inset-x-0 bottom-0 z-10 bg-black text-primary-200"
        >
          <div id="tabs" tw="flex justify-between">
            <NavigationItem href="/feed" active={pathname === '/feed'}>
              <CgFeed size={20} tw="inline-block" />
              <span tw="block text-xs">Feed</span>
            </NavigationItem>

            <NavigationItem href="/explore" active={pathname === '/explore'}>
              <FaSearch size={20} tw="inline-block" />
              <span tw="block text-xs">Explore</span>
            </NavigationItem>

            <NavigationItem
              href="/notifications"
              active={pathname === '/notifications'}
            >
              <VscBell size={20} tw="inline-block" />
              <span tw="block text-xs">Notifications</span>
            </NavigationItem>

            <NavigationItem
              href="/settings"
              active={pathname.includes('/settings')}
            >
              <FiSettings size={20} tw="inline-block" />
              <span tw="block text-xs">Settings</span>
            </NavigationItem>
          </div>
        </section>
      ) : null}
    </>
  )
}

const NavigationItem = ({ children, href, active }) => {
  const style = css`
    ${tw`w-full justify-center inline-block text-center pt-2 pb-1 hover:bg-primary-800 duration-300 ease-in-out`}
    ${active && tw` text-accent font-bold`}
  `

  return (
    <Link href={href} passHref>
      <a
        css={style}
        style={{ textShadow: active && '0px 4px 20px var(--color-accent)' }}
      >
        {children}
      </a>
    </Link>
  )
}

export default BottomNavigation
