/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import tw, { css } from 'twin.macro'

const TabMenu = ({ links, centered = null, responsive = true }) => {
  const router = useRouter()
  const styledMenu = css`
    ${tw`
    flex bg-primary-800 mx-auto rounded-lg sm:rounded-none px-2 py-3 mt-4 space-y-3 text-center sm:mt-2 sm:px-0 sm:py-0 sm:space-y-0 sm:bg-transparent flex-col border-b border-primary-700 sm:flex-row
    `}
    ${centered && tw` justify-center `}
    ${!responsive &&
    tw` mt-2 px-0 py-0 space-y-0 rounded-none bg-transparent flex-row `}
  `
  const { username } = router.query
  const onProfilePage = !responsive

  if (onProfilePage) {
    router.pathname = router.pathname.replace('[username]', username)
  }
  return (
    <div css={styledMenu}>
      {links.map((link) => (
        <TabItem
          link={link.title}
          path={link.path}
          key={link.path}
          hoverStyle={!responsive}
          active={router.pathname === link.path}
          content={username}
        />
      ))}
    </div>
  )
}

const TabItem = ({ link, path, active, hoverStyle }) => {
  const style = css`
    ${tw`py-2 px-4 md:px-3 lg:px-5 block text-primary-400 hover:text-primary-200 hover:bg-primary-700 sm:hover:bg-transparent rounded-lg sm:rounded-none focus:outline-none duration-300 cursor-pointer `}
    ${active &&
    tw`bg-accent-hover-outline hover:text-accent sm:bg-transparent font-bold sm:font-normal rounded-lg sm:rounded-none text-accent border-0 sm:border-b-2 sm:border-accent`}
    ${hoverStyle && tw` hover:bg-transparent `}
  `

  return (
    <Link href={path} passHref>
      <a
        css={style}
        style={{ textShadow: active && '0px 4px 15px var(--color-accent)' }}
      >
        {link}
      </a>
    </Link>
  )
}

export default TabMenu
