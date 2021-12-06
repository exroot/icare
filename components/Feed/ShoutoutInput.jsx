/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import tw, { css } from 'twin.macro'
import ShoutoutForm from '../ShoutoutForm'

const ShoutoutInput = ({ loading, mutateShoutouts }) => {
  const [expanded, setExpanded] = useState(false)
  const style = css`
    ${tw`hidden mt-6 px-4 w-full lg:mt-0 sm:block mb-4 h-14 rounded-full text-accent bg-accent-hover-outline border border-accent relative sm:max-w-2xl sm:mx-auto hover:cursor-pointer `}
  `
  return (
    <>
      {!expanded ? (
        <div css={style} onClick={() => setExpanded(true)}>
          <div tw="flex flex-row h-14 w-full justify-center">
            <span tw="text-xl font-semibold self-center mr-2">
              <MegaPhoneTilted />
            </span>
            <p tw="text-xl font-extrabold tracking-wide self-center uppercase ">
              Shout it
            </p>
          </div>
        </div>
      ) : (
        <div tw="w-full sm:max-w-2xl mx-auto ">
          <ShoutoutForm
            mutateShoutouts={mutateShoutouts}
            setShow={setExpanded}
          />
        </div>
      )}
    </>
  )
}

const MegaPhoneTilted = () => (
  <>
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      tw="transform -rotate-28 "
    >
      <path
        d="M17.502 2.135A1 1 0 0 1 18 3v4a3.99 3.99 0 0 1 2.981 1.333A3.989 3.989 0 0 1 22 11c0 1.024-.386 1.96-1.019 2.667A3.993 3.993 0 0 1 18 15v4a1 1 0 0 1-1.496.868L10 16.152V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.734l6.77-3.868a1 1 0 0 1 .998.003zM10 14a1 1 0 0 1 .496.132L16 17.277V4.723l-5.504 3.145A1 1 0 0 1 10 8H4v6h6zm-4 2v4h2v-4H6zm12-3c.592 0 1.123-.256 1.491-.667.317-.354.509-.82.509-1.333s-.192-.979-.509-1.333A1.993 1.993 0 0 0 18 9v4z"
        fill="var(--color-accent)"
      />
    </svg>
  </>
)
export default ShoutoutInput
