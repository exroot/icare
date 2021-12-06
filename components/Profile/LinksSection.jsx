/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import PlatformIcon from '../PlatformIcon'
import 'twin.macro'

const LinksSection = ({
  // links = [
  //   {
  //     user_username: 'johndoe',
  //     platform_name: 'Twitch',
  //     platform_url: 'twitch.tv',
  //   },
  //   {
  //     user_username: 'johndoe',
  //     platform_name: 'Facebook',
  //     platform_url: 'facebook.com',
  //   },
  //   {
  //     user_username: 'johndoe',
  //     platform_name: 'YouTube',
  //     platform_url: 'youtube.com',
  //   },
  //   {
  //     user_username: 'johndoe',
  //     platform_name: 'Twitter',
  //     platform_url: 'twitter.com',
  //   },
  //   {
  //     user_username: 'johndoe',
  //     platform_name: 'Udemy',
  //     platform_url: 'udemy.com',
  //   },
  //   {
  //     user_username: 'johndoe',
  //     platform_name: 'Vimeo',
  //     platform_url: 'vimeo.com',
  //   },
  //   {
  //     user_username: 'johndoe',
  //     platform_name: 'LinkedIn',
  //     platform_url: 'linkedin.com',
  //   },
  //   {
  //     user_username: 'johndoe',
  //     platform_name: 'Medium',
  //     platform_url: 'medium.com',
  //   },
  // ],
  links,
}) => {
  if (!links || !links.length) {
    return <p tw="text-center">Looks like there is no links here yet.</p>
  }
  return (
    <section>
      <div tw="w-full flex flex-col py-4 space-y-2">
        {links.map((link) => (
          <LinkButton
            platformName={link.platform_name}
            url={link.user_url}
            key={link.id}
          />
        ))}
      </div>
    </section>
  )
}

function LinkButton({ platformName, url }) {
  const iconSize = 24
  return (
    <>
      <a
        target="_blank"
        href={url}
        rel="noopener noreferrer"
        tw="py-3 my-1 px-4 cursor-pointer text-primary-200 bg-primary-900 border border-primary-900 hover:border-accent font-semibold 
          rounded flex flex-row w-full justify-between
          transition duration-200 ease-in-out transform shadow-2xl"
      >
        <div tw="">
          <PlatformIcon icon={platformName} />
        </div>
        <div tw="items-center">{platformName}</div>
        <div tw="">
          <FaAngleRight size={iconSize} />
        </div>
      </a>
    </>
  )
}

export default LinksSection
