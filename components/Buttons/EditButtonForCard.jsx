/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

export const EditButtonForCard = ({
  children,
  anchor = null,
  href = null,
  type = 'button',
  ...props
}) => {
  const style = css`
    ${tw`
    h-10 w-auto sm:w-56 px-4 py-2 bg-primary-800 font-bold uppercase text-button border border-primary-800 tracking-wide rounded-full hover:bg-primary-700 duration-200 ease-in-out
        focus:outline-none outline-none
        `}
    ${'' /* ${anchor && tw` pt-2`} */}
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
      {children}
    </button>
  )
}
