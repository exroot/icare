/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

export const ShareButtonForCard = ({
  children,
  anchor = null,
  href = null,
  type = 'button',
  ...props
}) => {
  const style = css`
    ${tw`

    
    h-10 w-10 font-bold uppercase 
    tracking-wide rounded-full text-accent bg-transparent 
    border border-accent hover:bg-accent-hover-outline 
    duration-200 ease-in-out
    focus:outline-none outline-none 
    flex items-center justify-center 
    `}
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
    <button type={type} css={style} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        tw="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </button>
  )
}
