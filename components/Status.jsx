/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import Link from 'next/link'
import { BiError } from 'react-icons/bi'
import { BeatLoader } from 'react-spinners'
import 'twin.macro'

const Status = ({ loading, error, topic }) => {
  if (error) {
    return (
      <div tw="w-full flex py-12">
        <span tw="w-full text-red-400 text-sm sm:text-xl font-extrabold py-4 rounded-lg border border-red-400 text-center bg-primary-800">
          <div tw="flex justify-center text-4xl">
            <BiError />
          </div>
          An error has ocurred while fetching your {topic}.
          <span tw="block text-center text-base font-light text-primary-200">
            Please reload the page and try again. If the error persists,{' '}
            <span tw="underline font-normal">
              <Link href="/info/contact">contact us</Link>
            </span>
            .
          </span>
        </span>
      </div>
    )
  }
  if (loading) {
    return (
      <div tw="w-full py-12 text-primary-200">
        <div tw="flex justify-center">
          <BeatLoader color="var(--color-accent)" />
        </div>
        <div tw="w-full text-center">
          <span tw="text-primary-200 font-bold">Loading links...</span>
        </div>
      </div>
    )
  }
  return null
}

export default Status
