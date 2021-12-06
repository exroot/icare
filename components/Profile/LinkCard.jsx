/* eslint-disable react/prop-types */
import React from 'react'
import PlatformIcon from '../PlatformIcon'
import 'twin.macro'

const LinkCard = ({ link }) => (
  <div tw="px-3 flex items-stretch">
    <div tw="bg-primary-900 text-button border border-primary-900 duration-300 ease-in-out hover:border-accent rounded-lg p-8 flex flex-col text-center w-96">
      <div tw="">
        <PlatformIcon icon={link.platform_name} />
        <h3 tw="text-2xl font-bold">{link.platform_name}</h3>
      </div>
      <div tw="text-center text-accent">
        <div tw="text-lg">
          <span tw="bg-accent-hover-outline px-2 rounded-lg font-bold">
            {`/${link.user_username}`}
          </span>
        </div>
      </div>
      <div tw="mt-2">
        <a
          tw="block bg-primary-800 hover:bg-primary-700 px-4 py-2 font-bold text-button rounded-full uppercase transition duration-75 ease-in-out cursor-pointer"
          href={`${link.user_username}`}
        >
          Go to
        </a>
      </div>
    </div>
  </div>
)

export default LinkCard
