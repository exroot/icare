/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react'
import Link from 'next/link'
import tw, { css } from 'twin.macro'
import { BeatLoader } from 'react-spinners'

export const ButtonCTA = ({
  children,
  anchor = null,
  href = null,
  isSubmitting = null,
  type = 'button',
  centered = false,
  fluid = false,
  fullWidth = false,
  uppercased = true,
  ...props
}) => {
  const style = css`
    ${tw`
    block h-12 w-full sm:w-56 cursor-pointer px-4 py-2 font-bold tracking-wide rounded-full text-button bg-accent border border-accent hover:bg-accent-hover duration-200 ease-in-out
    focus:outline-none outline-none`}
    ${isSubmitting &&
    tw` cursor-default bg-accent-hover border-accent-hover text-center text-button`}
    ${centered && tw` mx-auto`}
    ${fluid && tw` sm:w-auto`}
    ${fullWidth && tw` sm:w-full`}
    ${uppercased && tw` uppercase`}
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
    <button type={type} css={style} disabled={isSubmitting} {...props}>
      {isSubmitting ? <BeatLoader color="var(--text-button)" /> : children}
    </button>
  )
}
