/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react'
import Link from 'next/link'
import tw, { css } from 'twin.macro'
import { BeatLoader } from 'react-spinners'

export const FollowButtonForCard = ({
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
    h-10 w-10 flex-grow px-4 py-2 font-bold uppercase tracking-wide rounded-full text-accent bg-transparent border border-accent hover:bg-accent-hover-outline duration-200 ease-in-out
     focus:outline-none outline-none `}
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

// import React from 'react'
// import Link from 'next/link'
// import tw, { css } from 'twin.macro'

// export const FollowButtonForCard = ({
//   children,
//   anchor = null,
//   href = null,
//   type = 'button',
//   ...props
// }) => {
//   const style = css`
//     ${tw`
//     h-10 w-10 sm:w-56 px-4 py-2 font-bold uppercase tracking-wide rounded-full text-accent bg-transparent border border-accent hover:bg-accent-hover-outline duration-200 ease-in-out
//     focus:outline-none outline-none `}
//     ${anchor && tw` pt-2.5`}
//   `
//   if (anchor) {
//     return (
//       <Link href={href} passHref>
//         <a css={style} {...props}>
//           {children}
//         </a>
//       </Link>
//     )
//   }

//   return (
//     <button type={type} css={style} {...props}>
//       {children}
//     </button>
//   )
// }
