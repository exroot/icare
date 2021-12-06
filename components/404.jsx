/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { RiHome2Line, RiQuestionLine } from 'react-icons/ri'
import 'twin.macro'

const NotFoundPage = () => (
  <div tw="h-screen w-screen bg-primary-900 flex items-center text-primary-200">
    <div tw="mx-auto">
      <h1
        tw="text-8xl text-center text-accent font-bold"
        style={{ textShadow: '0px 4px 8px var(--color-accent)' }}
      >
        404
      </h1>
      <p tw="-mt-8 text-lg text-center leading-tight">Sorry, page not found.</p>
      <div tw="mt-8 flex justify-evenly">
        <Link href="/" passHref>
          <a tw="flex px-4 py-2 bg-primary-800 w-24 rounded text-button shadow hover:bg-primary-700">
            <RiHome2Line tw="mt-1 mr-1" />
            Home
          </a>
        </Link>
        <Link href="/help" passHref>
          <a
            href="/"
            tw="flex px-4 py-2 bg-primary-800 w-24 rounded text-button shadow hover:bg-primary-700"
          >
            <RiQuestionLine tw="mt-1 mr-1" />
            Help
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default NotFoundPage
