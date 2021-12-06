/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

export const ThreeDotsButtonForCard = ({
  children,
  anchor = null,
  href = null,
  type = 'button',
  ...props
}) => {
  const style = css`
    ${tw`
        block h-12 w-full sm:w-56 px-4 py-2 bg-primary-800 font-bold uppercase text-button border border-primary-800 tracking-wide rounded-full hover:bg-primary-700 duration-200 ease-in-out
        focus:outline-none outline-none`}
    ${anchor && tw` pt-2.5`}
  `
  if (anchor) {
    return (
      <Link href={href} passHref>
        <a css={style} {...props}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    // <button type={type} css={style} {...props}>
    //   {children}
    // </button>

    <button
      type={type}
      tw="rounded-full h-10 w-10 flex items-center justify-center text-pink-500 border border-pink-500 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        tw="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    </button>
  )
}
